<?php

namespace unionco\geolocation\services;

use craft\db\Query;
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

    /**
     * @param LatLng|null $center
     */
    public function search($center = null, $opts = [])
    {
        $preFretchElements = $opts['prefetchElements'] ?? false;
        $radius = $opts['radius'] ?? null;
        // $radiusUnits = $opts['radiusUnits'] ?? self::DISTANCE_MILES;
        $units = $opts['units'] ?? self::DISTANCE_MILES;

        if (!$center) {
            $center = GeolocationPlugin::getInstance()->geolocation->getCoords();
        }
        // $mapsSubQuery = (new Query)//->select('*')
        //     ->addSelect('(
        //     3959
        //         * acos(
        //             cos(radians(:latitudeOne))
        //             * cos(radians(maps.lat))
        //             * cos(radians(maps.lng) - radians(:longitude))
        //             + sin(radians(:latitudeTwo))
        //             * sin(radians(maps.lat))
        //         )
        //     ) AS maps_distance
        // ')
        //     ->from('{{%maps}} maps')
        //     ->params([
        //         ':latitudeOne' => $center->lat,
        //         ':longitude' => $center->lng,
        //         ':latitudeTwo' => $center->lat,
        //     ]);

        // $coordsSubQuery = (new Query)
        //     //->select('*')
        //     ->addSelect('(
        //         3959
        //             * acos(
        //                 cos(radians(:latitudeOne))
        //                 * cos(radians(coords.lat))
        //                 * cos(radians(coords.lng) - radians(:longitude))
        //                 + sin(radians(:latitudeTwo))
        //                 * sin(radians(coords.lat))
        //             )
        //         ) AS coords_distance
        //     ')
        //     ->from('{{%geolocation_coordinates}} coords')
        //     ->params([
        //         ':latitudeOne' => $center->lat,
        //         ':longitude' => $center->lng,
        //         ':latitudeTwo' => $center->lat,
        //     ]);

        // $query = (new Query)
        //     ->select(['mapsDist' => $mapsSubQuery, 'coordsDist' => $coordsSubQuery, 'id'])
        //     ->from('{{%elements}}');

        $query = (new Query)
        ->select('elements.*')
        ->addSelect('(
                3959
                    * acos(
                        cos(radians(:latitudeOne))
                        * cos(radians(maps.lat))
                        * cos(radians(maps.lng) - radians(:longitude))
                        + sin(radians(:latitudeTwo))
                        * sin(radians(maps.lat))
                    )
                ) AS maps_distance
            ')
            // ->from('{{%maps}} maps')
            ->addSelect('(
                        3959
                            * acos(
                                cos(radians(:latitudeOne))
                                * cos(radians(coords.lat))
                                * cos(radians(coords.lng) - radians(:longitude))
                                + sin(radians(:latitudeTwo))
                                * sin(radians(coords.lat))
                            )
                        ) AS coords_distance
                    ')
                // ->from('{{%geolocation_coordinates}} coords')
                ->params([
                    ':latitudeOne' => $center->lat,
                    ':longitude' => $center->lng,
                    ':latitudeTwo' => $center->lat,
                ])
               ->from('{{%elements}} elements')
               ->innerJoin('{{%maps}} maps', 'maps.ownerId = elements.id')
               ->innerJoin('{{%geolocation_coordinates}} coords', 'coords.ownerId = elements.id');
        // var_dump($query->getRawSql());
        $results = $query->all();


        return $results;
        // var_dump($results);
        // die;“
        $searchResults = array_map(
            /**
             * @param array $result
             * @return SearchResult
             */
            function ($result) {
                $searchResult = new SearchResult;
                $searchResult->element = $result['ownerId'];
                $searchResult->distance = $result['maps_distance'];
                $searchResult->latLng = new LatLng($result['lat'], $result['lng']);
                return $searchResult;
            },
            $results
        );
        return $searchResults;
    }
}
