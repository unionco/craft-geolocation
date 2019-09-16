<?php

namespace unionco\geolocation\services;

use Craft;
use craft\db\Query;
use craft\base\Component;
use craft\elements\Entry;
use GuzzleHttp\Client as HttpClient;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\fields\CoordinatesField;
use unionco\geolocation\providers\IPStackProvider;
use unionco\geolocation\records\CoordinatesRecord;
use unionco\geolocation\providers\AbstractProvider;
use unionco\geolocation\events\AfterGeolocationEvent;
use unionco\geolocation\providers\GoogleMapsProvider;
use unionco\geolocation\events\BeforeGeolocationEvent;
use unionco\geolocation\events\RegisterProvidersEvent;
use unionco\geolocation\interfaces\GeolocationProvider;
use ether\simplemap\SimpleMap;

class Geolocation extends Component
{
    /** See https://unionco.github.io/craft-plugin-docs/geolocation/#events **/
    const EVENT_REGISTER_PROVIDERS = 'registerProviders';

    /** See https://unionco.github.io/craft-plugin-docs/geolocation/#events **/
    const EVENT_BEFORE_GEOLOCATION = 'beforeGeolocation';

    /** See https://unionco.github.io/craft-plugin-docs/geolocation/#events **/
    const EVENT_AFTER_GEOLOCATION = 'afterGeolocation';

    /**
     * @var \GuzzleHttp\Client $client
     */
    public $client;

    /**
     * @var GeolocationProvider[] $providers
     */
    private $providers;

    /**
     * @var GeolocationProvider
     */
    private $provider;

    /** @var array{string:LatLng} */
    private $overrides = [];

    /**
     * @return void
     */
    public function init()
    {
        $providers = [
            IPStackProvider::class,
            GoogleMapsProvider::class,
        ];

        // Raise the registerProviders event
        $event = new RegisterProvidersEvent([
            'providers' => $providers,
        ]);

        $this->trigger(
            self::EVENT_REGISTER_PROVIDERS,
            $event
        );

        foreach ($event->providers as $provider) {
            if (\class_exists($provider)) {
                $this->providers[$provider::handle()] = [
                    'handle' => $provider::handle(),
                    'name' => $provider::name(),
                    // 'description' => $provider::description(),
                    'instance' => new $provider,
                ];
            }
        }
    }

    /**
     * @return LatLng
     */
    public function getCoords($ipAddress = null): LatLng
    {
        $settings = GeolocationPlugin::$plugin->getSettings();
        $ipOverrides = $settings->ipOverride;

        /** Trigger an event so the IP Overrides can be programmatically set */
        $beforeGeolocationEvent = new BeforeGeolocationEvent([
            'ipOverrides' => $ipOverrides,
        ]);

        $this->setOverrideRules($ipOverrides);

        $this->trigger(
            self::EVENT_BEFORE_GEOLOCATION,
            $beforeGeolocationEvent
        );

        $this->overrides = $beforeGeolocationEvent->ipOverrides;

        /** @var GeolocaitonProvider */
        $provider = $this->getProvider();

        /** @var LatLng */
        $coords = $provider->getCoords($ipAddress, $this->overrides);

        /** Trigger an event so certain responses can be overridden programatically */
        $afterGeolocationEvent = new AfterGeolocationEvent([
            'coords' => $coords,
            'ipAddress' => $ipAddress,
        ]);
        
        $this->trigger(
            self::EVENT_AFTER_GEOLOCATION,
            $afterGeolocationEvent
        );

        return $coords;
    }

    public function getProvider(): GeolocationProvider
    {
        if (!$this->provider) {
            $providerHandle = GeolocationPlugin::$plugin->getSettings()->provider;
            if (\key_exists($providerHandle, $this->providers)) {
                $this->provider = $this->providers[$providerHandle]['instance'];
                return $this->provider;
            }
            throw new \Exception('No provider selected');
        }
        return $this->provider;
    }

    public function getProviders(): array
    {
        return $this->providers;
    }

    public function getProviderOptions(): array
    {
        return array_map(
            /**
             * @param array $provider
             * @return array
             */
            function ($provider) {
                return [
                    'value' => $provider['handle'],
                    'label' => $provider['name'],
                ];
            },
            $this->getProviders()
        );
    }

    protected function setOverrideRules($ipOverrides)
    {
        foreach ($ipOverrides as $key => $overrideRow) {
            if (count($overrideRow) > 2) {
                try {
                    $ip = $overrideRow[0];
                    // IP address must be a string
                    if (!is_string($ip)) {
                        continue;
                    }
                    $lat = $overrideRow[1];
                    $lng = $overrideRow[2];
                    $this->overrides[$ip] = new LatLng($lat, $lng);
                } catch (\Throwable $e) {
                    Craft::error('Error creating IP Override:', 'craft-geolocation');
                    Craft::error($e, 'craft-geolocation');
                }
            } elseif (is_string($key) && $overrideRow instanceof LatLng) {
                $this->overrides[$key] = $overrideRow;
            }
        }
    }


    public function dependencyCheck()
    {
        $checks = [];
        $pluginService = Craft::$app->getPlugins();
        if ($simplemap = $pluginService->getPlugin('simplemap')) {
            $checks['simplemap'] = [
                'craft' => true,
            ];
        } else {
            if (class_exists(SimpleMap::class)) {
                $checks['simplemap'] = [
                    'craft' => false,
                    'composer' => true,
                ];
            } else {
                $checks['simplemap'] = [
                    'craft' => false,
                    'composer' => false,
                ];
            }
        }

        return $checks;
    }
}
