/**
 * Related Entry Types plugin for Craft CMS
 *
 * EntryType Field JS
 *
 * @author    Abry Rath <abry.rath@union.co>
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 * @link      https://github.com/unionco
 * @package   RelatedEntryTypes
 * @since     0.0.1RelatedEntryTypesEntryType
 */

 ;(function ( $, window, document, undefined ) {

    var pluginName = "RelatedEntryTypes",
        defaults = {
        };

    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function(id) {
            var _this = this;

            $(function () {

/* -- _this.options gives us access to the $jsonVars that our FieldType passed down to us */

            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
