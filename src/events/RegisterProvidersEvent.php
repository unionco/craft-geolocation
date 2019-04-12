<?php

namespace unionco\geolocation\events;

use yii\base\Event;

class RegisterProvidersEvent extends Event
{
    /**
     * @var array<string> $providers
     */
    public $providers;
}
