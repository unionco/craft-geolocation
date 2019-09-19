<?php

namespace unionco\geolocation\models;

use unionco\geolocation\models\LatLng;
use unionco\geolocation\services\Location;

class SearchResult
{
    /** @var null|craft\base\Element */
    public $element;

    /** @var float */
    public $distance = 0;

    public $units = Location::DISTANCE_MILES;

    /** @var null|LatLng */
    public $latLng;

    public function __construct($opts = null)
    {
        if (!$opts) {
            return;
        }

        $this->distance = $opts['mapsDistance'];
        $this->units = $opts['units'];
        $this->latLng = new LatLng($opts['mapsLat'], $opts['mapsLng']);

        $element = $opts['prefetch'] ? $opts['type']::find()->id($opts['id'])->one() : $opts['id'];

        $this->element = $element;
    }
}
