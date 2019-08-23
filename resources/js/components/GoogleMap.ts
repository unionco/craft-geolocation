// import { googlePlacesFieldMap as fieldMap } from './FieldMaps';
import AbstractMap from './AbstractMap';
import { } from 'googlemaps';

declare global {
    interface Window {
        google: any;
        simpleMapsLoadingGoogle: boolean;
        Craft: any;
    }
}

interface IFields {
    api: CallableFunction,
    input: string
};

class GoogleMap extends AbstractMap {
    public map: google.maps.Map;
    private autocomplete: google.maps.places.Autocomplete;
    private geocoder: any;
    private card: any;
    // private input: HTMLInputElement;
    private mapCenter: google.maps.LatLng;
    private marker: any;
    private places: any;
    private center: string;
    private placeId: string;
    private fillEntry: boolean;
    // private autocomplete: google.
    constructor(container: HTMLDivElement) {
        super(container);

        this.getPlaceById = this.getPlaceById.bind(this);
        this.loadGoogleApi = this.loadGoogleApi.bind(this);
        this.initGeocoder = this.initGeocoder.bind(this);
        this.autoCompleteListener = this.autoCompleteListener.bind(this);
        this.placeChangedHandler = this.placeChangedHandler.bind(this);
        this.fieldMap = this.fieldMap.bind(this);

        this.map = null;
        this.autocomplete = null;
        this.geocoder = null;
        this.card = null;
        // this.input = null;
        this.mapCenter = null;
        this.marker = null;
        this.places = null;
        this.fillEntry = true;

        this.center = this.geocoderStringInput.value || '2000 W Morehead St, Charlotte, NC';

        setTimeout(() => {
            this.loadGoogleApi()
                .then(this.initGeocoder);
        }, 200);


        if (document.getElementById('tabs')) {
            [].slice.call(
                document.getElementById('tabs').getElementsByTagName('a')
            ).map((el: Element) => {
                el.addEventListener('click', () => {
                    const x = this.map.getZoom(),
                        c = this.map.getCenter();

                    setTimeout(function () {
                        google.maps.event.trigger(this.map, 'resize');
                        this.map.setZoom(x);
                        this.map.setCenter(c);
                    }, 1);
                });
            });
        }

        console.log('GoogleMap', this);
    }

    fieldMap(): IFields[] {
        return [
            {
                api: function (place: google.maps.places.PlaceResult) {
                    return place.geometry.location.lat();
                },
                input: `[name="${this.latInput.name}"]`
            },
            {
                api: function (place: google.maps.places.PlaceResult) {
                    return place.geometry.location.lng();
                },
                input: `[name="${this.lngInput.name}"]`
            }
        ];
    }

    initGeocoder() {
        console.log('initGeocoder');
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            address: this.center
        },
            (results: any, status: any) => {
                console.log(results, status);
                if (status == 'OK') {
                    this.mapCenter = results[0].geometry.location;
                    this.initMap();
                    this.autoCompleteListener();

                    if (this.placeId) {
                        this.places = new google.maps.places.PlacesService(this.map);
                        this.getPlaceById(this.placeId);
                    }
                } else {
                    GoogleMap.fail(`Couldn't geocode ${this.center}`);
                    return;
                }
            }
        );
    }

    getPlaceById(placeId: any) {
        this.places.getDetails({
            placeId: placeId
        }, (place: any, status: any) => {
            if (status == 'OK') {
                this.setMarker(place);
                this.geocoderStringInput.value = place.name;
            }
        });
    }

    completeEntry(place: any) {
        for (let i in this.fieldMap()) {
            const field = this.fieldMap()[i];
            console.log(field);
            if (typeof field.api === 'function') {
                const result = field.api(place);
                if (field.input) {
                    const input: HTMLInputElement = document.querySelector(field.input);
                    if (input) {
                        input.value = result;
                    }
                }
            } else {
                const input: HTMLInputElement = document.querySelector(field.input);
                if (input) {
                    input.value = place[field.api];
                }
            }
        }
    }

    setMarker(place: any) {
        this.marker.setVisible(false);

        if (!place.geometry) {
            GoogleMap.fail(`No details available for input: '${place.name}'`);
            return;
        }

        if (place.geometry.viewport) {
            this.map.fitBounds(place.geometry.viewport);
        } else {
            this.map.setCenter(place.geometry.location);
            this.map.setZoom(17); // Why 17? Because it looks good.
        }

        this.marker.setPosition(place.geometry.location);
        this.marker.setVisible(true);
    }

    autoCompleteListener() {
        this.autocomplete.addListener('place_changed', this.placeChangedHandler);
    }

    placeChangedHandler() {
        let place = this.autocomplete.getPlace();
        console.log(place);
        debugger;
        this.setMarker(place);

        if (this.fillEntry) {
            this.completeEntry(place);
        } else {
            var f = this.container.id.split('-')[1];
            const input: HTMLInputElement = document.querySelector(`input[id="${this.container.id}"]`);
            if (input) {
                input.value = place.place_id;
            }
        }
    }

    initMap() {
        let mapOptions = {
            zoom: 16,
            center: this.mapCenter
        };

        const map = document.querySelector('[data-map-provider="google"]');
        console.log(map);
        this.map = new google.maps.Map(map, mapOptions);

        // set marker
        this.marker = new google.maps.Marker({
            map: this.map,
            position: this.mapCenter
        });

        // controls
        this.card = document.querySelector('.googlemapfield-card');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.card);

        // autocomplete
        // this.input = document.querySelector('.autocomplete');
        const autocompleteOptions: google.maps.places.AutocompleteOptions = {};

        this.autocomplete = new google.maps.places.Autocomplete(this.geocoderStringInput, autocompleteOptions);
        this.autocomplete.bindTo('bounds', this.map);
    }

    loadGoogleApi() {
        return new Promise((resolve, reject) => {
            if (typeof window.google !== 'undefined' || window.simpleMapsLoadingGoogle == true) {
                console.log('Deferring');
                resolve('Loaded');
                return;
            }

            const gmjs = document.createElement('script');
            gmjs.type = 'text/javascript';
            gmjs.setAttribute('async', 'true');
            gmjs.setAttribute('defer', 'true');
            gmjs.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=' + this.apiKey;
            gmjs.onload = function () {
                resolve('loaded');
            };
            document.body.appendChild(gmjs);
        })
    }

    static fail(message: string) {
        if (!window.Craft) {
            return;
        }

        window.Craft.cp.displayError('<strong>GoogleMapField:</strong> ' + message);
        if (window.console) {
            console.error.apply(console, [
                '%GoogleMapField: %c' + message,
                'font-weight:bold;',
                'font-weight:normal;'
            ]);
        }
    }
}

export default GoogleMap;