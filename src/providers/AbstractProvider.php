<?php

namespace unionco\geolocation\providers;

use Craft;
use GuzzleHttp\Client;
use craft\helpers\Json;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\events\RegisterProvidersEvent;
use unionco\geolocation\interfaces\GeolocationProvider;

abstract class AbstractProvider implements GeolocationProvider
{
    /**
     * @var Client $client Guzzle client for making API requests
     **/
    public $client;

    /**
     * @var string $baseUrl Base URL for the API
     */
    public $baseUrl;

    public function __construct($opts = [])
    {
        $this->client = new Client([
            'base_uri' => $this->baseUrl,
        ]);
    }

    /**
     * Return a santized IP address string.
     * If the IP address is invalid or localhost, return the default
     * IP address.
     * 
     * @param string|null $ipAddress
     * @return string
     */
    protected function getIpAddress($ipAddress): string
    {
        $matches = [];
        $re = '/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/';
        \preg_match($re, $ipAddress, $matches);
        if (count($matches)) {
            return $ipAddress;
        }
        $ip = Craft::$app->request->getRemoteIp();

        return $ip;
    }

    /**
     * Check if the input looks like an env var. If it does, return its value
     */
    public static function parseEnvVar(string $envVar): string
    {
        if (strpos($envVar, '$') === 0) {
            $name = substr($envVar, 1);
            $value = getenv($name, null);
            
            if ($value !== null) {
                return $value;
            }
        }

        return $envVar;
    }

    /**
     * @inheritdoc
     */
    public function getCoords($ipAddress = null, $overrides = []): LatLng
    {
        $ip = $this->getIpAddress($ipAddress);
        $matchingOverrides = array_filter(
            $overrides,
            function ($override) use ($ip) {
                return $override[0] === $ip;
            }
        );

        if ($matchingOverrides) {
            $override = array_pop($matchingOverrides);
            return new LatLng($override[1], $override[2]);
        }

        if (key_exists($ip, $overrides)) {
            return $overrides[$ip];
        }
        $apiResponse = $this->getRequest($ip);
        $responseBody = $apiResponse
            ->getBody()
            ->getContents();

        $body = Json::decode($responseBody, false);
        
        return $this->parseResponse($body);
    }
}
