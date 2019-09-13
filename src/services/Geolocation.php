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
     * Before 
     */
    const EVENT_BEFORE_GEOLOCATION = 'beforeGeolocation';
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
        $this->trigger(
            self::EVENT_BEFORE_GEOLOCATION,
            $beforeGeolocationEvent
        );

        $this->setOverrideRules($ipOverrides);

        /** @var GeolocaitonProvider */
        $provider = $this->getProvider();

        /** @var LatLng */
        $coords = $provider->getCoords($ipAddress, $this->overrides);

        /** Trigger an event so certain responses can be overridden programatically */
        $afterGeolocationEvent = new AfterGeolocationEvent([
            'coords' => $coords,
        ]);
        $this->trigger(
            self::EVENT_AFTER_GEOLOCATION,
            $afterGeolocationEvent
        );

        return $coords;
    }

    public function getNearestByCoords($opts)
    {
        if (!key_exists('fieldHandle', $opts)) {
            throw new \Exception('fieldHandle must be specified');
        }
        $fieldHandle = $opts['fieldHandle'];

        /** @var null|LatLng */
        $coords = null;
        if (key_exists('coords', $opts)) {
            $coords = $opts['coords'];
        } else {
            $coords = $this->getCoords();
        }


        $limit = null;
        if (key_exists('limit', $opts)) {
            $limit = $opts['limit'];
        }

        $fieldsService = Craft::$app->getFields();
        $field = $fieldsService->getFieldByHandle($fieldHandle);

        $coordinatesField = false;
        if ($field instanceof CoordinatesField) {
            $coordinatesField = true;
        }
        // } elseif ($field instanceof '') P


        $query = null;
        if (key_exists('element', $opts)) {
            switch (strtolower($opts['element'])) {
                case 'user':
                    $query = User::find();
                    break;

                    /** @todo Add more elements */
                default:
                    $query = Entry::find();
                    if (key_exists('section', $opts)) {
                        $query = $query->section($opts['section']);
                    }
                    if (key_exists('type', $opts)) {
                        $query = $query->type($opts['type']);
                    }
                    break;
            }
        }

        // Order by
        if ($coordinatesField) {
            $elementIds = CoordinatesRecord::getElementIdsInOrder($coords);
            return $elementIds->all();

            $closest = CoordinatesRecord::find()->withDistanceFrom($coords, 50000)->limit($limit);
            $closestResult = $closest->all();
            $ids = array_map(function ($record) {
                return $record->ownerId;
            }, $closestResult);
            $query = $query->andWhere(['in', 'elements.id', $ids]);

            return $query->all();
        }
    }

    /**
     * Get the first Simplemap field for the given element, fallback on Coordinates field
     * @param \crft\base\Element $element
     * @return null|string
     */
    public function getCoordinatesFieldHandle(\craft\base\Element $element)
    {
        $field = null;

        $fieldLayout = $element->getFieldLayout();
        $fields = $fieldLayout->getFields();
        $coordinatesField = null;

        foreach ($fields as $fieldCandidate) {
            if ($fieldCandidate instanceof \ether\simplemap\fields\MapField) {
                $field = $fieldCandidate;
                break;
            } elseif ($fieldCandidate instanceof \unionco\geolocation\fields\CoordinatesField) {
                $coordinatesField = $fieldCandidate;
            }
        }
        if (!$field && $coordinatesField) {
            $field = $coordinatesField;
        }
        if ($field) {
            return $field->handle;
        } else {
            throw new \Exception('Could not find coordinates property for element');
        }
    }

    /**
     * Return the distance between two elements
     * @param \craft\base\Element $a first element
     * @param null|\craft\base\Element $b second element. if left blank, the current geolocation is used
     * @param null|string $fieldHandle the name of the field used for coordinates (simplemap MapField or geolocation CoordinatesField)
     * @param null|string $units units for distance
     */
    public function distance($a, $b = null, $fieldHandle = null, $units = LatLng::DISTANCE_MILES)
    {
        $latLngB = null;
        if (!$b) {
            $latLngB = $this->getCoords();
        } else {
            if (!$fieldHandle) {
                $propB = $this->getCoordinatesFieldHandle($b);
            }
            $fieldB = $b->{$fieldHandle ?? $propB};
            $latLngB = new LatLng($fieldB->lat, $fieldB->lng);
        }
        if (!$fieldHandle) {
            $propA = $this->getCoordinatesFieldHandle($a);
        }
        $fieldA = $a->{$fieldHandle ?? $propA};

        $latLngA = new LatLng($fieldA->lat, $fieldA->lng);

        return $latLngA->distance($latLngB, $units);
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
