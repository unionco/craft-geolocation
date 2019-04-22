<?php

namespace unionco\googleservices\assetbundles\googleservices;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class GoogleServicesAsset extends AssetBundle
{
    /**
     * @inheritdoc
     * @return void
     */
    public function init()
    {
        $this->sourcePath = '@googleservices/assetbundles/googleservices/';
        $this->depends = [
            CpAsset::class,
        ];
        $this->js = [
            'dist/js/vendor.js',
            'dist/js/main.js',
        ];

        $this->css = [
            'dist/css/app.css',
        ];
        
        parent::init();
    }
}
