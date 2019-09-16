<?php

namespace unionco\geolocation\events;

use yii\base\Event;
use unionco\geolocation\models\LatLng;

class AfterGeolocationEvent extends Event
{
    /**
     * @var LatLng
     */
    public $coords;

    /**
     * @var string
     */
    public $ipAddress;
}
