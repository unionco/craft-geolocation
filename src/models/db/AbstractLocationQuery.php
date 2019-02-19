<?php

namespace unionco\geolocation\models\db;

use yii\db\ActiveQuery;
use unionco\geolocation\models\LatLng;

class AbstractLocationQuery extends ActiveQuery
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
}
