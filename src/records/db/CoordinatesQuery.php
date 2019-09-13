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
                        cos(radians(:latitudeOne))
                        * cos(radians(lat))
                        * cos(radians(lng) - radians(:longitude))
                        + sin(radians(:latitudeTwo))
                        * sin(radians(lat))
                    )
                ) AS distance
            ')
            ->orderBy('distance asc');
        $locationQuery->params = [
            ':latitudeOne' => $latLng->lat,
            ':longitude' => $latLng->lng,
            ':latitudeTwo' => $latLng->lat,
        ];

        return $locationQuery;
    }

    // public function one($db = null)
    // {
    //     return new CoordinatesModel(parent::one()->toArray());
    // }

    // public function all()
}
