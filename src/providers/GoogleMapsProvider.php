<?php

namespace unionco\geolocation\providers;

use Craft;
use craft\helpers\Json;
use unionco\geolocation\models\LatLng;
use Psr\Http\Message\ResponseInterface;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\interfaces\GeolocationProvider;

class GoogleMapsProvider extends AbstractProvider implements GeolocationProvider
{
    public $baseUrl = 'https://www.googleapis.com/geolocation/v1/geolocate';

    public function __construct($opts = [])
    {
        parent::__construct($opts);
    }

    /**
     * @inheritdoc
     */
    public function getRequest($ipAddress = null): ResponseInterface
    {
        // Sanitize ipAddress or get the default IP address if none is provided/it is invalid
        $ip = $this->getIpAddress($ipAddress);

        /** Get the API key from the settings model */
        $apiKey = GeolocationPlugin::$plugin->getSettings()->providerSettings['googlemaps']['apiKey'];
        $apiKey = AbstractProvider::parseEnvVar($apiKey);
        
        /**
         * GuzzleHttp client API request options
         * @var array $opts
         */
        $opts = [
            'query' => [
                'key' => $apiKey,
            ],
            'json' => [],
        ];

        return $this->client->request('POST', '', $opts);
    }

    /**
     * @inheritdoc
     */
    public function parseResponse(\stdClass $response): LatLng
    {
        $location = $response->location;
        $latLng = new LatLng($location->lat, $location->lng);
        
        return $latLng;
    }

    public static function handle(): string
    {
        return 'googlemaps';
    }

    public static function name(): string
    {
        return 'Google Maps';
    }

    public static function description(): string
    {
        return 'Use the Google Maps API for geolocation';
    }

    public static function settingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate(
            'geolocation/settings/providers/googlemaps',
            [
                'settings' => GeolocationPlugin::$plugin->getSettings(),
            ]
        );
    }
}
