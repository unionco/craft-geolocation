<?php

namespace unionco\geolocation\console\controllers;

use yii\console\Controller;
use unionco\geolocation\Geolocation;
use unionco\geolocation\models\ZipLatLng;

class GeolocationController extends Controller
{
    public function actionSeed()
    {
        Geolocation::$plugin->install->seed();
    }

    public function actionGetLatLng($zipcode)
    {
        $latLng = ZipLatLng::find()
        ->zipcode($zipcode)
        ->asLatLng();

        var_dump($latLng);
    }
}
