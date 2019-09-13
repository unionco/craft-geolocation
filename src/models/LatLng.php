<?php

namespace unionco\geolocation\models;

use craft\helpers\Json;

class LatLng
{
    const DISTANCE_METERS = 'm';
    const DISTANCE_KILOMETERS = 'km';
    const DISTANCE_MILES = 'mi';

    /** @var float */
    public $lat = 0;

    /** @var float */
    public $lng = 0;

    /**
     * @param mixed $lat
     * @param mixed $lng
     */
    public function __construct($lat, $lng)
    {
        $this->setLat($lat);
        $this->setLng($lng);
    }

    /**
     * @param mixed $lat
     * @return null
     */
    public function setLat($lat)
    {
        if (is_numeric($lat)) {
            $this->lat = (float)$lat;
        }
    }

    /**
     * @param mixed $lng
     * @return null
     */
    public function setLng($lng)
    {
        if (is_numeric($lng)) {
            $this->lng = (float)$lng;
        }
    }

    /**
     * Calculate distance between this LatLng and another
     * @param LatLng $dest
     * @param string{'m','mi','km'} $units units for distance
     */
    public function distance(LatLng $dest, string $units = self::DISTANCE_MILES)
    {
        $latFrom = deg2rad($this->lat);
        $lonFrom = deg2rad($this->lng);
        $latTo = deg2rad($dest->lat);
        $lonTo = deg2rad($dest->lng);

        $lonDelta = $lonTo - $lonFrom;
        $a = pow(cos($latTo) * sin($lonDelta), 2) +
            pow(cos($latFrom) * sin($latTo) - sin($latFrom) * cos($latTo) * cos($lonDelta), 2);
        $b = sin($latFrom) * sin($latTo) + cos($latFrom) * cos($latTo) * cos($lonDelta);

        $angle = atan2(sqrt($a), $b);
        $meters = $angle * 6371000;
        switch ($units) {
            case self::DISTANCE_KILOMETERS:
                return $meters / 1000;
            case self::DISTANCE_MILES:
                return $meters * 0.0006213712;
            case self::DISTANCE_METERS:
            default:
                return $meters;
        }
    }
}
