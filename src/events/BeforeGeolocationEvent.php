<?php

namespace unionco\geolocation\events;

use yii\base\Event;

class BeforeGeolocationEvent extends Event
{
    /**
     * @var array{string,string,string}
     */
    public $ipOverrides;
}
