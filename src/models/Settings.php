<?php
/**
 * Geolocation plugin for Craft CMS 3.x
 *
 * Geolocation helper for Craft
 *
 * @link      https://github.com/abryrath
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\geolocation\models;

use unionco\geolocation\Geolocation;

use Craft;
use craft\base\Model;
use unionco\geolocation\GeolocationPlugin;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   Geolocation
 * @since     0.0.1
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================
    /**
     * @var array
     */
    public $providers;

    /**
     * @var string
     */
    public $provider;

    public $providerSettings = [];

    public $ipOverride = [];

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = [
            // ['providers', 'array'],
            // ['providers', 'default', 'value' => 'ipstack'],
            ['provider', 'string'],
            ['provider', 'default', 'value' => 'ipstack'],
        ];

        // $providerSettings = [];
        // foreach (GeolocationPlugin::$plugin->geolocation->getProviders() as $provider) {
        //     $rules = $provider['instance']::rules();
        //     $providerSettings[$provider['handle']] = $rules;
        // }
        // $rules[] = ['providerSettings'] = $providerSettings;

        return $rules;
    }
}
