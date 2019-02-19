<?php

namespace unionco\geolocation\models\db;

use unionco\geolocation\models\LatLng;
use craft\elements\db\ElementQueryInterface;
use unionco\geolocation\models\LocationSearchResult;
use unionco\geolocation\models\db\LocationQueryInterface;

interface LocationQueryInterface
//extends ElementQueryInterface
{
    //public function locationQuery();
    public function closestTo(LatLng $latLng): LocationQueryInterface;


    public function withinRange(float $range): LocationQueryInterface;
    /**
     * Run the query and return an array of search results, e.g. include the distance
     *
     * @return array<LocationSearchResult>
     */
    public function allWithDistance(): array;

    //public function distanceQuery();
}
