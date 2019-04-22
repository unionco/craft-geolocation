(function (window, $) {

    function removeEmoji(value) {
        return value.replace(/[^\s\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\`\{\}\|\[\]\\\:\"\;\'\<\>\?\,\.\/\w]/g, '');
    }

    function getPhotos(placeId) {
        return fetch('/actions/unionco/places/place-photos?placeId='+placeId)
            .then(function(res){
                return res.json();
            })
            .then(function(json) {
                return json.photos;
            })
    }
    var fieldMap = [
        { api: 'place_id', input: '[name="fields[placeId]"]' },
        { api: 'formatted_address', input: '[name="fields[fullAddress]"]' },
        { api: 'formatted_phone_number', input: '[name="fields[phoneNumber]"]' },
        { api: 'rating', input: '[name="fields[rating]"]' },
        { api: 'url', input: '[name="fields[placeUrl]"]' },
        { api: 'website', input: '[name="fields[website]"]' },
        { api: function(place) {
            document.getElementById('fields-placePhotos').querySelectorAll('.delete.icon').forEach(node => node.dispatchEvent(new Event('click')));
            var table = $('#fields-placePhotos').data('editable-table');
            table.initialize();
            getPhotos(place.place_id).then(function(photos) {
                (photos || []).forEach(function (photo) {
                    table.addRow();
                    table.$table.find('tr:last :input').val(photo);
                });
            });
        }},
        { api: function(place) {
            document.getElementById('fields-reviewListing').querySelectorAll('.delete.icon').forEach(node => node.dispatchEvent(new Event('click')));
            var table = $('#fields-reviewListing').data('editable-table');
            table.initialize();
            (place.reviews || []).forEach(function(review) {
                table.addRow();
                table.$table.find('tr:last [name$="[col1]"]').val(review.author_name); // author name
                table.$table.find('tr:last [name$="[col2]"]').val(review.profile_photo_url); // author image
                table.$table.find('tr:last [name$="[col3]"]').val(removeEmoji(review.text)); // text
                table.$table.find('tr:last [name$="[col4]"]').val(review.rating); // written date
                table.$table.find('tr:last [name$="[col5]"]').val(review.relative_time_description); // rating
            })
        }},
        { api: function(place) {
            if (place.opening_hours) {
                return JSON.stringify(place.opening_hours.periods);    
            }
            return '';
        }, input: '[name="fields[hours]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes('locality');
            })[0].long_name;
        }, input: '[name="fields[city]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes("administrative_area_level_1");
            })[0].short_name;
        }, input: '[name="fields[state]"]' },
        { api: function(place) {
            return place.address_components.filter(function(component){
                return component.types.includes("postal_code");
            })[0].short_name;
        }, input: '[name="fields[postalCode]"]' },
        { api: function(place) {
            return place.geometry.location.lat();
        }, input: '[name="fields[latitude]"]'},
        { api: function(place) {
            return place.geometry.location.lng();
        }, input: '[name="fields[longitude]"]'},
    ];

    /**
     * GoogleMapField Class
     *
     * @param {string} key - Google Maps API key
     * @param {string} mapId - Map field ID
     * @param {object} settings - The map settings object
     * @constructor
     */
    var GoogleMapField = function(key, el, settings) {
        if (!key) {
            GoogleMapField.Fail('Missing API Key!');
            return;
        }

        this.key = key.replace(/\s/g, '');
        this.el = el;
        this.settings = settings;
        this.map = null;
        this.autocomplete = null;
        this.geocoder = null;
        this.card = null;
        this.input = null;
        this.mapCenter = null;
        this.marker = null;
        this.places = null;

        var _this = this;

        setTimeout(function() {
            _this.LoadGoogleAPI(_this.key).then(() => {
                _this.geocoder = new google.maps.Geocoder();
                _this.geocoder.geocode({ 'address': _this.settings.center }, (results, status) => {
                    if (status == 'OK') {
                        _this.mapCenter = results[0].geometry.location;
                        _this.LoadGoogleMap();
                        _this.AutoCompleteListener();

                        if (_this.settings.placeId) {
                            _this.places = new google.maps.places.PlacesService(_this.map);
                            _this.GetPlaceById(_this.settings.placeId);
                        }
                    } else {
                        GoogleMapField.Fail('Couldnt geocode ' + _this.settings.center);
                        return;
                    }
                });
            });
        }, 1000);
    

        if (document.getElementById('tabs')) {
            [].slice.call(
                document.getElementById('tabs').getElementsByTagName('a')
            ).map(function (el) {
                el.addEventListener('click', function () {
                    const x = _this.map.getZoom()
                        , c = _this.map.getCenter();
                    
                    setTimeout(function () {
                        google.maps.event.trigger(_this.map, 'resize');
                        _this.map.setZoom(x);
                        _this.map.setCenter(c);
                    }, 1);
                });
            });
        }
        return;
    }

    GoogleMapField.prototype.GetPlaceById = function(placeId) {
        var _self = this;
        this.places.getDetails({ placeId: placeId }, function(place, status) {
            if (status == 'OK') {
                _self.SetMarker(place);
                $(_self.input).val(place.name);
            }
        });
    }

    GoogleMapField.prototype.CompleteEntry = function(place) {
        var _self = this;

        for(var i in fieldMap) {
            var field = fieldMap[i];
            if (typeof field.api === 'function') {
                var result = field.api(place);
                if (field.input) {
                    $(field.input).val(result);
                }
            } else {
                $(field.input).val(place[field.api]);
            }
        }
    }

    /**
     * Setup only the auto-complete
     *
     * @param {string} key - Google Maps API key
     */
    GoogleMapField.prototype.SetMarker = function(place) {
        var _self = this;
        this.marker.setVisible(false);

        if (!place.geometry) {
            GoogleMapField.Fail("No details available for input: '" + place.name + "'");
            return;
        }

        if (place.geometry.viewport) {
            this.map.fitBounds(place.geometry.viewport);
        } else {
            this.map.setCenter(place.geometry.location);
            this.map.setZoom(17);  // Why 17? Because it looks good.
        }

        this.marker.setPosition(place.geometry.location);
        this.marker.setVisible(true);
    };

    /**
     * Setup only the auto-complete
     *
     * @param {string} key - Google Maps API key
     */
    GoogleMapField.prototype.AutoCompleteListener = function() {
        var _self = this;
        this.autocomplete.addListener('place_changed', function() {
            let place = _self.autocomplete.getPlace();
            _self.SetMarker(place);

            if (_self.settings.fillEntry) {
                _self.CompleteEntry(place);    
            } else {
                var f = _self.el.split('-')[1];
                $('input[id="'+_self.el+'"]').val(place.place_id);
            }
        });
    };

    /**
     * Setup only the auto-complete
     *
     * @param {string} key - Google Maps API key
     */
    GoogleMapField.prototype.LoadGoogleMap = function() {
        let mapOptions = {
            zoom: 16,
            center: this.mapCenter
        };

        var map = document.querySelector('[google-map]');
        this.map = new google.maps.Map(map, mapOptions);

        // set marker
        this.marker = new google.maps.Marker({
            map: this.map,
            position: this.mapCenter
        });

        // controls
        this.card = $('.googlemapfield-card').get(0);
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.card);

        // autocomplete
        this.input = $('.autocomplete').get(0);
        this.autocomplete = new google.maps.places.Autocomplete(this.input, this.settings.autocomplete);
        this.autocomplete.bindTo('bounds', this.map);
    };

    /**
     * Load the google API into the dom
     *
     * @param {string} key - Google Maps API key
     * @param {string} locale - The locale
     * @static
     */
    GoogleMapField.prototype.LoadGoogleAPI = function(key) {
        var _self = this;
        return new Promise(function(resolve, reject) {
            if (typeof window.google !== "undefined") {
                resolve('loaded');
            } else {
                const gmjs = document.createElement('script');
                gmjs.type = 'text/javascript';
                gmjs.setAttribute('async', true);
                gmjs.setAttribute('defer', true);
                gmjs.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key='+key;
                gmjs.onload = function () {
                    resolve('loaded');
                };
                document.body.appendChild(gmjs);
            }
        });
    };

    /**
     * Log an error message to the console and screen
     *
     * @param {string} message - The error message
     * @static
     */
    GoogleMapField.Fail = function (message) {
        Craft.cp.displayError('<strong>GoogleMapField:</strong> ' + message);
        if (window.console) {
            console.error.apply(console, [
                '%GoogleMapField: %c' + message,
                'font-weight:bold;',
                'font-weight:normal;'
            ]);
        }
    };

    /**
     * The GoogleMapField.
     */
    window.GoogleMapField = GoogleMapField;

})(window, jQuery);