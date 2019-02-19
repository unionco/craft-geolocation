<?php

namespace unionco\geolocation\models\db;

use yii\db\ActiveQuery;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\LocationSearchResult;

abstract class AbstractLocationQuery extends ActiveQuery implements LocationQueryInterface
{
    /** @var string */
    protected $_recordClass;

    /** @var float */
    protected $_range;

    /** @var LatLng */
    protected $_closestTo;

    public function getRecordClass(): string
    {
        return $this->_recordClass;
    }

    public function withinRange(float $range): LocationQueryInterface
    {
        $this->_range = $range;
        
        $reflectClass = new \ReflectionClass($this->className());

        return ($reflectClass->newInstanceArgs([$this->getRecordClass()]))
        //
        //return (new self($this->getRecordClass()))
            ->select('*')
            ->from(['d' => $this])
            ->where(['<', 'd.distance', $range]);
    }

    public function allWithDistance(): array
    {
        /** @var array<int> */
        $ids = [];

        /** @var array<LocationSearchResult> */
        $searchResults = [];

        foreach ($this->asArray()->all() as $location) {
            $id = intval($location['ownerId']);
            $ids[] = $id;

            $searchResult = LocationSearchResult::make($id, (float) $location['distance']);
            $searchResults[] = $searchResult;
        }

        return $searchResults;
    }
}
