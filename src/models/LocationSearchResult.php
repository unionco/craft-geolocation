<?php

namespace unionco\geolocation\models;

use craft\elements\Entry;

class LocationSearchResult
{
    /** @var Entry */
    public $location;

    /** @var float */
    public $distance;

    /**
     * @param \craft\elements\Entry $location
     * @param float $distance
     */
    public function __construct(Entry $location, float $distance)
    {
        $this->location = $location;
        $this->distance = $distance; //UnionModule::$instance->geolocation->getDistance($location);
    }

    /**
     * @param int $locationId
     * @param float $distance
     * @return null|\union\app\models\LocationSearchResult
     */
    public static function make(int $locationId, float $distance): ?LocationSearchResult
    {
        /**@var \craft\elements\Entry */
        $location = Entry::find()->id($locationId)->one();
        if ($location) {
            /** @psalm-suppress PossiblyInvalidArgument */
            return new LocationSearchResult($location, $distance);
        }

        return null;
    }
}
