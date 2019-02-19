<?php

namespace unionco\geolocation\traits;

use unionco\geolocation\models\LocationSearchResult;
use unionco\geolocation\models\db\AbstractLocationQuery;
use unionco\geolocation\models\db\LocationQueryInterface;

trait LocationQueryTrait
{
    public function withinRange(float $range): LocationQueryInterface
    {
        $this->_range = $range;

        if (!($this instanceof AbstractLocationQuery)) {
            return $this;
        }
        
        return (new self($this->getRecordClass()))
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
