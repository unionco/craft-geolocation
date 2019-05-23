<?php

namespace unionco\geolocation\records\db;

use yii\db\ActiveQuery;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\CoordinatesModel;

class CoordinatesQuery extends ActiveQuery
{
    public function withDistanceFrom(LatLng $latLng, ?float $radius)
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

    // public function one($db = null)
    // {
    //     return new CoordinatesModel(parent::one()->toArray());
    // }

    // public function all()
}
