<?php

namespace unionco\geolocation\models;

use unionco\geolocation\models\LatLng;

class SearchResult
{
    /** @var null|craft\base\Element */
    public $element;

    /** @var float */
    public $distance = 0;

    /** @var null|LatLng */
    public $latLng;

    
    public $siteId;

    public $maps;
}
