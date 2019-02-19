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
use craft\services\Plugins;
use craft\events\PluginEvent;

use unionco\geolocation\models\Settings;
use unionco\geolocation\elements\ZipLatLng;
use unionco\geolocation\twigextensions\GeolocationTwigExtension;

/**
 * Class Geolocation
 *
 * @author    Abry Rath <abry.rath@union.co>
 * @package   Geolocation
 * @since     0.0.1
 *
 */
class Geolocation extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var Geolocation
     * @psalm-suppress 
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
            'install' => \unionco\geolocation\services\Install::class,
            'geolocation' => \unionco\geolocation\services\Geolocation::class,
            'location' => \unionco\geolocation\services\Location::class,
        ]);

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                    self::$plugin->install->seed();
                }
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
                'settings' => $this->getSettings()
            ]
        );
    }
}
