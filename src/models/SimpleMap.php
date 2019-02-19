<?php

namespace unionco\geolocation\models;

use ether\simplemap\records\MapRecord;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\db\SimpleMapQuery;
use unionco\geolocation\models\LocationInterface;
use unionco\geolocation\models\db\LocationQueryInterface;

class SimpleMap extends MapRecord implements LocationInterface
{
    public function getLatLng(): LatLng
    {
        return new LatLng($this->lat, $this->lng);
    }

    public static function locationQuery(): LocationQueryInterface
    {
        return new SimpleMapQuery(MapRecord::class);
    }
}