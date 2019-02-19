<?php

namespace unionco\geolocation\services;

use craft\base\Component;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\models\ZipLatLng;

class Location extends Component
{
    /**
     * Return the distance between two LatLng points, in miles
     *
     * @return float
     **/
    public function distance(LatLng $start, LatLng $end): float
    {
        $theta = $start->lng - $end->lng;

        $dist = sin(deg2rad($start->lat))
         * sin(deg2rad($end->lat))
         + cos(deg2rad($start->lat))
         * cos(deg2rad($end->lat))
         * cos(deg2rad($theta));

        $dist = acos($dist);
        $dist = rad2deg($dist);

        $miles = $dist * 60 * 1.1515;

        return $miles;
    }

    /**
     * @param string $zipcode
     * @return null|LatLng
     */
    public function getLatLngByZipcode(string $zipcode)
    {
        return ZipLatLng::find()
            ->zipcode($zipcode)
            ->asLatLng();
    }
}
