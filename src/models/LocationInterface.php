<?php

namespace unionco\geolocation\models;

use unionco\geolocation\models\db\LocationQueryInterface;
use unionco\geolocation\models\LatLng;

interface LocationInterface
{
    /**
     * Return a LatLng model representing the locations latitude/longitude
     *
     * @return LatLng
     */
    public function getLatLng(): LatLng;

    public static function locationQuery(): LocationQueryInterface;
}
