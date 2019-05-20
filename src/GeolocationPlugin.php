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
use yii\base\Event;
use craft\base\Plugin;
use craft\services\Fields;
use craft\services\Plugins;
use craft\events\PluginEvent;
use unionco\geolocation\models\Settings;
use unionco\geolocation\services\Location;
use craft\events\RegisterComponentTypesEvent;
use unionco\geolocation\services\Coordinates;
use unionco\geolocation\services\Geolocation;
use unionco\geolocation\fields\CoordinatesField;
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

        Craft::$app->view->registerTwigExtension(new GeolocationTwigExtension());

        $this->setComponents([
            'geolocation' => Geolocation::class,
            'location' => Location::class,
            'coordinates' => Coordinates::class,
        ]);

        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            /**
             * @return void
             */
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = CoordinatesField::class;
            }
        );

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
        return Craft::$app->view->renderTemplate(
            'geolocation/settings',
            [
                'settings' => $this->getSettings(),
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
