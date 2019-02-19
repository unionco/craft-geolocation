<?php

namespace unionco\geolocation\services;

use Craft;
use craft\base\Component;
use GuzzleHttp\Client as HttpClient;
use unionco\geolocation\models\LatLng;

class Geolocation extends Component
{
    /** @var \GuzzleHttp\Client */
    public static $client;
 
    /** @var float */
    const DEFAULT_LAT = 35.3183;

    /** @var float */
    const DEFAULT_LNG = -80.7476;

    /** @var string */
    const DEFAULT_LOCATION_JSON = '{"latitude": 35.3183, "longitude": -80.7476}';
    
    // Logging messages
    /** @var string */
    const WARN_IPSTACK_RESP = ' Error processing IPStack response. Using default location.';

    /** @var string */
    const INFO_LOCALHOST = ' Remote IP == 127.0.0.1 -> Using default location.';

    public function __construct()
    {
        if (!self::$client) {
            self::$client = new HttpClient([
                'base_uri' => 'http://api.ipstack.com',
            ]);
        }
    }

    /**
     * Get LatLng coordinates from the IPStack API. Returns the default
     * location coordinates if the API call fails
     * @psalm-suppress InvalidNullableReturnType
     * @return LatLng
     */
    public function getCoords(): LatLng
    {
        $ip = Craft::$app->request->getRemoteIp();
        if ($ip == '127.0.0.1') {
            //$ip = '173.95.57.226';
            Craft::info(__METHOD__ . self::INFO_LOCALHOST);

            /** @var LatLng */
            $latLng = LatLng::make(self::DEFAULT_LOCATION_JSON);
            
            return $latLng;
        }

        $opts = [
            'query' => [
                'access_key' => getenv('IPSTACK_API_KEY'),
                'fields' => 'latitude,longitude',
            ],
        ];

        try {
            $response = self::$client->request('GET', $ip, $opts);

            $responseBody = $response
                ->getBody()
                ->getContents();

            /** @var \unionco\geolocation\models\LatLng */
            $latLng = LatLng::make($responseBody); // ?? new LatLng(self::DEFAULT_LAT, self::DEFAULT_LNG);
            
            return $latLng;
        } catch (\Exception $e) {
            Craft::warning(__METHOD__ . self::WARN_IPSTACK_RESP);
            Craft::warning(__METHOD__ . $e->getMessage());
            
            /** @var \unionco\geolocation\models\LatLng */
            $latLng = LatLng::make(self::DEFAULT_LOCATION_JSON);
            
            return $latLng;
        }
    }
}
