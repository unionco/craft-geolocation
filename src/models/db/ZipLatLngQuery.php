<?php

namespace unionco\geolocation\models\db;

use yii\db\ActiveQuery;
use unionco\geolocation\models\LatLng;

class ZipLatLngQuery extends ActiveQuery
{
    public function zipcode(string $value): ZipLatLngQuery
    {
        return $this->where(['zip' => $value]);
    }

    public function asLatLng()
    {
        $result = parent::one();
        if (!$result) {
            return null;
        }
        
        return new LatLng($result->lat, $result->lng);
    }
}
