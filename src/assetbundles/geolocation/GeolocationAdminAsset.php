<?php

namespace unionco\geolocation\assetbundles\Geolocation;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class GeolocationAdminAsset extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = "@unionco/geolocation/assetbundles/geolocation/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/vendor.main.js',
            'js/main.js',
        ];

        $this->css = [
            'css/main.css',
        ];

        parent::init();
    }
}
