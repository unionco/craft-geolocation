<?php

namespace unionco\geolocation\twigextensions;

use Craft;
use unionco\geolocation\models\SimpleMap;
use unionco\geolocation\Geolocation as Plugin;
use unionco\geolocation\models\UnioncoGooglePlace;

class GeolocationTwigExtension extends \Twig_Extension
{
    public function __construct()
    {
        $env = Craft::$app->getView()->getTwig();
        $env->addGlobal('geolocation', Plugin::$plugin);
        
        if (Craft::$app->getPlugins()->isPluginInstalled('google-services')) {
            $env->addGlobal('unioncoGooglePlaces', UnioncoGooglePlace::locationQuery());
        }
        
        if (Craft::$app->getPlugins()->isPluginInstalled('simplemap')) {
            $env->addGlobal('simpleMap', SimpleMap::locationQuery());
        }
    }
}
