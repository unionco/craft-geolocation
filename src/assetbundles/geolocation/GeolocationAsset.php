<?php
/**
 * Geolocation plugin for Craft CMS 3.x
 *
 * Geolocation helper for Craft
 *
 * @link      https://github.com/abryrath
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\geolocation\assetbundles\Geolocation;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   Geolocation
 * @since     0.0.1
 */
class GeolocationAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@unionco/geolocation/assetbundles/geolocation/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/Geolocation.js',
        ];

        $this->css = [
            'css/Geolocation.css',
        ];

        parent::init();
    }
}
