<?php

namespace unionco\geolocation\models;

class LatLng
{
    /** @var float */
    public $lat = 0;

    /** @var float */
    public $lng = 0;

    /**
     * @param mixed $lat
     * @param mixed $lng
     */
    public function __construct($lat, $lng)
    {
        $this->setLat($lat);
        $this->setLng($lng);
    }

    /**
     * Create and return a LatLng object based on the
     * JSON response from IPStack
     * @param string $json
     * @return LatLng
     */
    public static function make(string $json): ?LatLng
    {
        $data = json_decode($json);
        $lat = (float)$data->latitude;
        $lng = (float)$data->longitude;

        $latLng = new LatLng($lat, $lng);
        
        return $latLng;
    }

    /**
     * @param mixed $lat
     * @return null
     */
    public function setLat($lat)
    {
        if (is_numeric($lat)) {
            $this->lat = (float)$lat;
        }
    }

    /**
     * @param mixed $lng
     * @return null
     */
    public function setLng($lng)
    {
        if (is_numeric($lng)) {
            $this->lng = (float)$lng;
        }
    }
}
