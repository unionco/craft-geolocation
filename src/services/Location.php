<?php

namespace unionco\geolocation\services;

use Craft;
use craft\db\Query;
use ReflectionClass;
use ReflectionMethod;
use yii\db\Expression;
use craft\base\Component;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\ZipLatLng;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\models\SearchResult;

class Location extends Component
{
    public function __construct()
    { }
    const DISTANCE_METERS = 'm';
    const DISTANCE_KILOMETERS = 'km';
    const DISTANCE_MILES = 'mi';
    // /**
    //  * Return the distance between two LatLng points, in miles
    //  *
    //  * @return float
    //  **/
    // public function distance(LatLng $start, LatLng $end): float
    // {
    //     $theta = $start->lng - $end->lng;

    //     $dist = sin(deg2rad($start->lat))
    //      * sin(deg2rad($end->lat))
    //      + cos(deg2rad($start->lat))
    //      * cos(deg2rad($end->lat))
    //      * cos(deg2rad($theta));

    //     $dist = acos($dist);
    //     $dist = rad2deg($dist);

    //     $miles = $dist * 60 * 1.1515;

    //     return $miles;
    // }


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
    public function distance($a, $b = null, $fieldHandle = null, $units = self::DISTANCE_MILES)
    {
        $latLngB = null;
        if (!$b) {
            $latLngB = GeolocationPlugin::getInstance()->geolocation->getCoords();
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

    public function searchQuery($center = null, $opts = [])
    {
        $siteId = $opts['siteId'] ?? [Craft::$app->getSites()->getCurrentSite()->id];
        $radius = $opts['radius'] ?? null;
        $query = (new Query)
            ->select([
                'elements.id as id',
                'elements.type',
                'maps.ownerSiteId', // as mapsOwnerSiteId',
                'maps.lat as mapsLat',
                'maps.lng as mapsLng',
                'maps.ownerId as mapsOwnerId',
                'coords.ownerSiteId', // as coordsOwnerSiteId',
                // 'CAST(coords.ownerSiteId as VARCHAR(2)) as coordsOwnerSiteId',
                'coords.lat as coordsLat',
                'coords.lng as coordsLng',
                'coords.ownerId as coordsOwnerId',
            ])
            ->addSelect('(
                3959
                    * acos(
                        cos(radians(:latitudeOne))
                        * cos(radians(maps.lat))
                        * cos(radians(maps.lng) - radians(:longitude))
                        + sin(radians(:latitudeTwo))
                        * sin(radians(maps.lat))
                    )
               ) AS mapsDistance
            ')
            ->addSelect('(
                        3959
                            * acos(
                                cos(radians(:latitudeOne))
                                * cos(radians(coords.lat))
                                * cos(radians(coords.lng) - radians(:longitude))
                                + sin(radians(:latitudeTwo))
                                * sin(radians(coords.lat))
                            )
                            ) AS coordsDistance
                    ')

            ->from('{{%elements}} elements')
            ->where('elements.revisionId is null and elements.draftId is null')
            ->andWhere('`coords`.`ownerSiteId` in(:siteId)')
            ->andWhere('`maps`.`ownerSiteId` in(:siteId)')
            ->innerJoin('{{%maps}} maps', 'maps.ownerId = elements.id')
            ->innerJoin('{{%geolocation_coordinates}} coords', 'coords.ownerId = elements.id')
            // ->params()
            ->orderBy(['LEAST(coalesce(mapsDistance, 9999), coalesce(coordsDistance, 9999))' => SORT_ASC]);

        $params = [
            ':latitudeOne' => $center->lat,
            ':longitude' => $center->lng,
            ':latitudeTwo' => $center->lat,
            ':siteId' => new Expression(implode(",", $siteId)),
        ];
        if ($radius) {
            $query = $query->andWhere('`mapsDistance` < :radius')
                ->andWhere('coordsDistance < :radius');
            $params[':radius'] = $radius;
        }

        $query = $query->params($params);
        return $query;
    }

    /**
     * @param LatLng|null $center
     */
    public function search($center = null, $opts = [])
    {
        $prefetchElements = $opts['prefetchElements'] ?? false;
        $radius = $opts['radius'] ?? null;
        $units = $opts['units'] ?? self::DISTANCE_MILES;

        if (!$center) {
            $center = GeolocationPlugin::getInstance()->geolocation->getCoords();
        }

        $query = $this->searchQuery($center, $opts);
        if ($opts['rawQuery'] ?? false) {
            return $query->getRawSql();
        }

        $results = $query->all();

        $elementIds = [];
        $searchResults = array_map(
            /**
             * @param array $result
             * @return SearchResult|null
             */
            function ($result) use ($prefetchElements, &$elementIds) {
                $searchResult = new SearchResult;
                $mapsLat = $result['mapsLat'];
                $mapsLng = $result['mapsLng'];
                $coordsLat = $result['coordsLat'];
                $coordsLng = $result['coordsLng'];

                if ($mapsLat !== null && $mapsLng !== null) {
                    $searchResult->maps = true;
                    $searchResult->siteId = $result['ownerSiteId'];
                    $searchResult->distance = $result['mapsDistance'];
                    $searchResult->latLng = new LatLng($mapsLat, $mapsLng);
                    $searchResult->element = $result['mapsOwnerId'];
                    $elementIds[] = $searchResult->element;
                } elseif ($coordsLat !== "0" && $coordsLng !== "0") {
                    $searchResult->maps = false;
                    $searchResult->siteId = $result['ownerSiteId'];
                    $searchResult->distance = $result['coordsDistance'];
                    $searchResult->latLng = new LatLng($coordsLat, $coordsLng);
                    $searchResult->element = $result['coordsOwnerId'];
                    $elementIds[] = $searchResult->element;
                } else {
                    return null;
                }

                if ($prefetchElements) {
                    $elementType = $result['type'];
                    $elementTypeQueryMethod = new ReflectionMethod($elementType, 'find');

                    $query = $elementTypeQueryMethod->invoke(null);
                    $result = $query->id($searchResult->element)->one();
                    $searchResult->element = $result ?? $searchResult->element;
                }
                return $searchResult;
            },
            $results
        );
        $searchResults = array_filter($searchResults, function ($result) {
            return $result;
        });

        return $searchResults;
    }
}
