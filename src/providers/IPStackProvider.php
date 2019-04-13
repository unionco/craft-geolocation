<?php

namespace unionco\geolocation\providers;

use Craft;
use Psr\Http\Message\ResponseInterface;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\interfaces\GeolocationProvider;
use unionco\geolocation\models\LatLng;

class IPStackProvider extends AbstractProvider implements GeolocationProvider
{
    public $baseUrl = 'http://api.ipstack.com';

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

        /** Get the API Key from the settings model */
        $accessKey = GeolocationPlugin::$plugin->getSettings()->providerSettings['ipstack']['accessKey'];
        $accessKey = AbstractProvider::parseEnvVar($accessKey);

        /**
         * GuzzleHttp client API request options
         * @var array $opts
         */
        $opts = [
            'query' => [
                'access_key' => $accessKey,
                'fields' => 'latitude,longitude',
            ],
        ];

        return $this->client->request('GET', $ip, $opts);
    }

    /**
     * @inheritdoc
     */
    public function parseResponse(\stdClass $response): LatLng
    {
        $latLng = new LatLng($response->latitude, $response->longitude);

        return $latLng;
    }

    public static function handle(): string
    {
        return 'ipstack';
    }

    public static function name(): string
    {
        return 'IPStack';
    }

    public static function settingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate(
            'geolocation/settings/providers/ipstack',
            [
                'settings' => GeolocationPlugin::$plugin->getSettings(),
            ]
        );
    }
}
