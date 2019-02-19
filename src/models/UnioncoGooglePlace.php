<?php

namespace unionco\geolocation\models;

use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\LocationInterface;
use unionco\googleservices\records\GoogleServicesRecord;
use unionco\geolocation\models\db\LocationQueryInterface;
use unionco\geolocation\models\db\UnioncoGooglePlaceQuery;
use craft\db\ActiveRecord;

class UnioncoGooglePlace extends GoogleServicesRecord implements LocationInterface
{
    public function getLatLng(): LatLng
    {
        return new LatLng($this->latitude, $this->longitude);
    }

    public static function locationQuery(): LocationQueryInterface
    {
        return new UnioncoGooglePlaceQuery(GoogleServicesRecord::class);
    }

    public static function make(ActiveRecord $record): LocationInterface
    {
        return new UnioncoGooglePlace($record->toArray());
    }
}
