<?php

namespace unionco\app;

use Craft;
use yii\base\Event;
use yii\base\Module;
use yii\console\Application as ConsoleApplication;
use unionco\app\services\MyProvider;
use unionco\geolocation\services\Geolocation;
use unionco\geolocation\events\RegisterProvidersEvent;

class AppModule extends Module
{
    /** @var AppModule $instance */
    public static $instance;

    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('app', $this->getBasePath());
        $this->controllerNamespace = 'unionco\app\controllers';

        static::setInstance($this);
        parent::__construct($id, $parent, $config);
    }

    /**
     * @return void
     */
    public function init() {
    parent::init();
        self::$instance = $this;

        if (Craft::$app instanceof ConsoleApplication) {
            $this->controllerNamespace = 'unionco\app\console\controllers';
        }

        Event::on(
            Geolocation::class,
            Geolocation::EVENT_REGISTER_PROVIDERS,
            /**
             * @return void
             */
            function (RegisterProvidersEvent $event) {
                $event->providers[] = MyProvider::class;
            }
        );
    }
}
