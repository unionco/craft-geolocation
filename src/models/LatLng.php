<?php

namespace unionco\geolocation\models;

use craft\helpers\Json;

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
