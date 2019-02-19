<?php

namespace unionco\geolocation\models\db;

use ether\simplemap\records\MapRecord;
use unionco\geolocation\models\db\AbstractLocationQuery;
use unionco\geolocation\models\db\LocationQueryInterface;
use unionco\geolocation\models\LatLng;

class SimpleMapQuery extends AbstractLocationQuery implements LocationQueryInterface
{
    protected $_recordClass = MapRecord::class;

    /**
     * @return SimpleMapQuery
     */
    public function closestTo(LatLng $latLng): LocationQueryInterface
    {
        $locationQuery = $this
            ->select('*')
            ->addSelect('(
            3959
                * acos(
                    cos(radians(:latitude1))
                    * cos(radians(lat))
                    * cos(radians(lng) - radians(:longitude1))
                    + sin(radians(:latitude2))
                    * sin(radians(lat))
                )
            ) AS distance
        ')
            ->orderBy('distance asc');
        $locationQuery->params[':latitude1'] = $latLng->lat;
        $locationQuery->params[':longitude1'] = $latLng->lng;
        $locationQuery->params[':latitude2'] = $latLng->lat;

        return $locationQuery;
    }
}
