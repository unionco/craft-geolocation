<?php

namespace unionco\geolocation\models;

use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\db\LocationQueryInterface;

interface LocationInterface
{
    /**
     * Return a LatLng model representing the locations latitude/longitude
     * 
     * @return LatLng
     */
    public function getLatLng(): LatLng;

    public static function locationQuery(): LocationQueryInterface;

    //public function closestLocations(LatLng $latLng): LocationQueryInterface;
}
