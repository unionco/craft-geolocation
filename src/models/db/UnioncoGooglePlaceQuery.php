<?php

namespace unionco\geolocation\models\db;

use unionco\geolocation\models\db\LocationQueryInterface;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\UnioncoGooglePlace;
use unionco\geolocation\traits\LocationQueryTrait;
use unionco\googleservices\records\GoogleServicesRecord;

class UnioncoGooglePlaceQuery extends AbstractLocationQuery implements LocationQueryInterface
{
    use LocationQueryTrait;

    protected $_recordClass = GoogleServicesRecord::class;
    /**
     * @return UnioncoGooglePlaceQuery
     */
    public function closestTo(LatLng $latLng): LocationQueryInterface
    {
        $this->_closestTo = $latLng;

        $locationQuery = $this
            ->select('*')
            ->addSelect('(
                3959
                    * acos(
                        cos(radians(:latitude1))
                        * cos(radians(latitude))
                        * cos(radians(longitude) - radians(:longitude1))
                        + sin(radians(:latitude2))
                        * sin(radians(latitude))
                    )
                ) AS distance
            ')
            ->orderBy('distance asc');

        $locationQuery->params[':latitude1'] = $latLng->lat;
        $locationQuery->params[':longitude1'] = $latLng->lng;
        $locationQuery->params[':latitude2'] = $latLng->lat;

        return $locationQuery;
    }

    public function one($db = null)
    {
        return new UnioncoGooglePlace(
            parent::one()
                ->toArray()
        );
    }
}
