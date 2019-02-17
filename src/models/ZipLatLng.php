<?php

namespace unionco\geolocation\models;

use craft\db\ActiveRecord;
use unionco\geolocation\models\db\ZipLatLngQuery;

class ZipLatLng extends ActiveRecord
{
    public function __cosntruct(array $opts = [])
    {
        $this->zip = $opts['zip'] ?? '';
        $this->lat = $opts['lat'] ?? 0.0;
        $this->lng = $opts['lng'] ?? 0.0;
    }

    /**
     * @return string
     */
    public static function tableName()
    {
        return '{{%geolocation_zipcodes}}';
    }

    public static function find(): ZipLatLngQuery
    {
        return new ZipLatLngQuery(self::class);
    }
}
