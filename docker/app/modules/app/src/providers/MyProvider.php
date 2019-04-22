<?php

namespace unionco\app\providers;

use unionco\geolocation\models\LatLng;
use Psr\Http\Message\ResponseInterface;
use unionco\geolocation\providers\AbstractProvider;

class MyProvider extends AbstractProvider
{
    public $baseUrl = 'https://api.myprovider.com';

    public static function handle(): string
    {
        return 'myprovider';
    }

    public static function name(): string
    {
        return 'My Provider';
    }

    public static function settingsHtml(): string
    {
        return "My settings go here";
    }

    public function getRequest($ipAddress = null): ResponseInterface
    {
        /**
         * GuzzleHttp client API request options
         * @var array $opts
         */
        $opts = [];

        return $this->client->request('GET', 'endpoint', $opts);
    }

    public function parseResponse(\stdClass $response): LatLng
    {
        // Parse the response
        return new LatLng(0, 0);
    }
}
