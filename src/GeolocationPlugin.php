<?php
/**
 * Geolocation plugin for Craft CMS 3.x
 *
 * Geolocation helper for Craft
 *
 * @link      https://github.com/abryrath
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\geolocation;

use Craft;
use craft\base\Plugin;
use unionco\geolocation\models\Settings;
use unionco\geolocation\services\Location;
use unionco\geolocation\services\Coordinates;
use unionco\geolocation\services\Geolocation;
use unionco\geolocation\twigextensions\GeolocationTwigExtension;

/**
 * Class Geolocation
 *
 * @author    Abry Rath <abry.rath@union.co>
 * @package   Geolocation
 * @since     0.0.1
 *
 */
class GeolocationPlugin extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
 * @var GeolocationPlugin
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '0.0.1';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     * @return void
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        $this->setComponents([
            'geolocation' => Geolocation::class,
            'location' => Location::class,
            'coordinates' => Coordinates::class,
        ]);


        Craft::$app->view->registerTwigExtension(new GeolocationTwigExtension());


        Craft::info(
            Craft::t(
                'geolocation',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    protected function createSettingsModel()
    {
        // $providers = self::$plugin->geolocation->getProviders();
        return new Settings();
    }

    /**
     * @inheritdoc
     */
    protected function settingsHtml(): string
    {
        $settings = $this->getSettings();
        if (!$settings->ipOverride) {
            $settings->ipOverride = [
                'row1' => [],
            ];
        }
        return Craft::$app->view->renderTemplate(
            'geolocation/settings',
            [
                'settings' => $settings,
            ]
        );
    }

    public static function getInstance(): GeolocationPlugin
    {
        return static::$plugin;
    }

    public function getCoordinates(): Coordinates
    {
        return $this->coordinates;
    }
}
