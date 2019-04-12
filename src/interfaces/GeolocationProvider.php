<?php

namespace unionco\geolocation\interfaces;

use unionco\geolocation\models\LatLng;
use Psr\Http\Message\ResponseInterface;

interface GeolocationProvider
{
    /**
     * @param string|null $ipAddress Optional IP address. If blank, the IP is determined by the request headers
     * @return LatLng
     */
    public function getCoords($ipAddress = null): LatLng;

    /**
     * @param null|string $ipAddress optional IP Address
     * Make the request via GuzzleHttp and return the response
     */
    public function getRequest($ipAddress = null): ResponseInterface;

    /**
     * Transform the API response into a LatLng object
     */
    public function parseResponse(\stdClass $response): LatLng;

    /**
     * Return a handle for this provider
     * @return string
     */
    public static function handle(): string;

    /**
     * Return a display name for the provider
     * @return string
     */
    public static function name(): string;

    /**
     * Render the settings for this provider as a string
     * @return string
     */
    public static function settingsHtml(): string;
}
