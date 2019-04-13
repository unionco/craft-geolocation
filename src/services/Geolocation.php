<?php

namespace unionco\geolocation\services;

use Craft;
use craft\base\Component;
use GuzzleHttp\Client as HttpClient;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\providers\IPStackProvider;
use unionco\geolocation\providers\GoogleMapsProvider;
use unionco\geolocation\events\RegisterProvidersEvent;
use unionco\geolocation\interfaces\GeolocationProvider;

class Geolocation extends Component
{
    // Constants
    // =========================================================================

    /**
     * @event RegisterProvidersEvent The event that is raised when registering geolocation providers
     *
     * ```php
     * use unionco\geolocation\events\RegisterProvidersEvent;
     * use unioncp\geolocation\services\Geolocation;
     * use yii\base\Event;
     *
     * Event::on(
     *      Geolocation::class, Addresses::EVENT_BEFORE_SAVE_ADDRESS, function(AddressEvent $e) {
     *     // Do something - perhaps let an external CRM system know about a client's new address
     * });
     * ```
     */
    const EVENT_REGISTER_PROVIDERS = 'registerProviders';

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
        $provider = $this->getProvider();
        
        return $provider->getCoords($ipAddress);
    }

    public function getProvider(): GeolocationProvider
    {
        if (!$this->provider) {
            $providerHandle = GeolocationPlugin::$plugin->getSettings()->provider;
            if (\key_exists($providerHandle, $this->providers)) {
                $this->provider = $this->providers[$providerHandle]['instance'];
                return $this->provider;
            }
            /** @todo **/
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
}
