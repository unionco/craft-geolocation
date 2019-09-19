<?php

namespace unionco\geolocation\services;

use Craft;
use craft\db\Query;
use ReflectionClass;
use ReflectionMethod;
use yii\db\Expression;
use craft\base\Element;
use craft\base\Component;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\ZipLatLng;
use unionco\geolocation\GeolocationPlugin;
use unionco\geolocation\models\SearchResult;

class Location extends Component
{
    const DISTANCE_METERS = 'm';
    const DISTANCE_KILOMETERS = 'km';
    const DISTANCE_MILES = 'mi';

    /**
     * Get the first Simplemap field for the given element
     * @param \crft\base\Element $element
     * @return null|string
     */
    public function getCoordinatesFieldHandle(\craft\base\Element $element)
    {
        $field = null;

        $fieldLayout = $element->getFieldLayout();
        $fields = $fieldLayout->getFields();

        foreach ($fields as $fieldCandidate) {
            if ($fieldCandidate instanceof \ether\simplemap\fields\MapField) {
                $field = $fieldCandidate;
                break;
            }
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
     * @param null|string $fieldHandle the name of the field used for coordinates (simplemap MapField)
     * @param null|string $units units for distance
     */
    public function distance($a, $b = null, $fieldHandle = null, $units = self::DISTANCE_MILES)
    {
        $latLngB = null;
        if (!$b) {
            $latLngB = GeolocationPlugin::getInstance()->geolocation->getCoords();
        } else {
            $latLngB = $this->getCoords($b, $fieldHandle);
        }
        $latLngA = $this->getCoords($a, $fieldHandle);

        return $latLngA->distance($latLngB, $units);
    }

    public function getCoords(\craft\base\Element $element, $fieldHandle = null)
    {
        if (!$fieldHandle) {
            $fieldHandle = $this->getCoordinatesFieldHandle($element);
        }
        $coords = new LatLng($element->{$fieldHandle}->lat, $element->{$fieldHandle}->lng);
        return $coords;
    }

    /**
     * Return a query for searching loations
     * @param ElementQueryInterface $query
     * @param LatLng $center
     * @param array $opts
     * @return Query
     */
    public function searchQuery($query, $center, $opts = [])
    {
        $radius = $opts['radius'] ?? null;

        // To get miles, use factor 3959. Adjust if alternate units are requested
        $unitFactor = 3959;
        switch ($opts['units'] ?? self::DISTANCE_MILES) {
            case self::DISTANCE_KILOMETERS:
                $unitFactor *= 1.609344;
                break;
            case self::DISTANCE_METERS:
                $unitFactor = $unitFactor * 1.609344 / 1000;
                break;
        }

        $query = $query
            ->addSelect([
                'distinct `elements`.`id` as id',
                'elements.type',
                'mapsSubquery.lat as mapsLat',
                'mapsSubquery.lng as mapsLng',
                'mapsDistance',
            ])
            ->leftJoin(
                [
                    'mapsSubquery' => (new Query())
                        ->select('*')
                        ->addSelect(
                            '(
                                :unitFactor
                                    * acos(
                                        cos(radians(:latitudeOne))
                                        * cos(radians(m.lat))
                                        * cos(radians(m.lng) - radians(:longitude))
                                        + sin(radians(:latitudeTwo))
                                        * sin(radians(m.lat))
                                    )
                                ) AS mapsDistance'
                        )
                        ->from('{{%maps}} m')
                ],
                'elements.id = mapsSubquery.ownerId'
            )
            ->from('{{%elements}} elements')
            ->where('elements.revisionId is null and elements.draftId is null')
            ->innerJoin('{{%maps}} maps', 'maps.ownerId = elements.id')
            ->orderBy(['coalesce(mapsDistance, 9999)' => SORT_ASC]);

        $params = [
            ':unitFactor' => new Expression("$unitFactor"),
            ':latitudeOne' => $center->lat,
            ':longitude' => $center->lng,
            ':latitudeTwo' => $center->lat,
        ];
        if ($radius) {
            $query = $query->andWhere('`mapsDistance` < :radius');

            $params[':radius'] = new Expression("$radius");
        }

        $query = $query->params($params);
        return $query;
    }

    /**
     * Search for elements based on their location fields
     * @param ElementQueryInterface $query
     * @param LatLng|null $center
     * @param array $opts
     * @return Element[]
     */
    public function search($query, $center = null, $opts = [])
    {
        $prefetchElements = $opts['prefetchElements'] ?? true;
        $units = $opts['units'] ?? self::DISTANCE_MILES;

        if (!$center) {
            $center = GeolocationPlugin::getInstance()->geolocation->getCoords();
        }

        $query = $this->searchQuery($query, $center, $opts);
        if ($opts['rawQuery'] ?? false) {
            return $query->getRawSql();
        }

        $results = $query->asArray()->all();

        $searchResults = array_map(
            /**
             * @param array $result
             * @return SearchResult|null
             */
            function ($result) use ($units, $prefetchElements) {
                $result['units'] = $units;
                $result['prefetch'] = $prefetchElements;

                $searchResult = new SearchResult($result);
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
