<?php

namespace unionco\geolocation\services;

use Craft;
use craft\base\Component;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\Geolocation as Plugin;
use unionco\geolocation\models\LocationSearchResult;

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

    // /**
    //  * Return an array of LocationSearchResult objects
    //  * @param array $opts
    //  * @return array<LocationSearchResult>
    //  */
    // public function search(array $opts = []): array
    // {
    //     /** @var float */
    //     $lat = 0.0;

    //     /** @var float */
    //     $lng = 0.0;
        
    //     /** @var float */
    //     $range = 10.0;

    //     /** @var null|LatLng */
    //     $latLng = null;

    //     if (isset($opts['lat'])) {
    //         $lat = $opts['lat'];
    //     } else {
    //         $lat = (float) Craft::$app->request->getParam('lat');
    //     }

    //     if (isset($opts['lng'])) {
    //         $lng = $opts['lng'];
    //     } else {
    //         $lng = (float) Craft::$app->request->getParam('lng');
    //     }

    //     if (isset($opts['range'])) {
    //         $range = $opts['range'];
    //     } else {
    //         $range = (float) Craft::$app->request->getParam('range');
    //     }

        
    //     if (!$lat && !$lng) {
    //         $latLng = Plugin::$plugin->geolocation->getCoords();
    //     } else {
    //         $latLng = new LatLng($lat, $lng);
    //     }

    //     $results = $this->closestLocationsWithDistance($latLng, 10, $range);

    //     return $results;
    // }

    // /**
    //  * @param LatLng $latLng
    //  * @param float $range
    //  * @param int $limit
    //  * @return array
    //  */
    // public function getMarkers(LatLng $latLng, float $range = 10.0, int $limit = 10): array
    // {
    //     // if (!$latLng) {
    //     //     $myLocation = $this->myLocation();
    //     //     $latLng = new LatLng($myLocation->googlePlace->latitude, $myLocation->googlePlace->longitude);
    //     // }
    //     $locations = $this->closestLocationswithDistance($latLng, $range, $limit);

        

    //     return array_map(
    //         /**
    //          * @param \union\app\models\LocationSearchResult $searchResult
    //          * @psalm-return array{lat: float, lng: float, id: int}
    //          */
    //         function ($searchResult) {
    //             $location = $searchResult->location;
    //             return [
    //                 'lat' => (float) $location->googlePlace->latitude,
    //                 'lng' => (float) $location->googlePlace->longitude,
    //                 'id' => (int) $location->id,
    //             ];
    //         },
    //         $locations
    //     );
    // }

    // /**
    //  * Return the closest geolocated location
    //  *
    //  * @return \craft\elements\Entry
    //  */
    // public function myLocation(): Entry
    // {
    //     $userOverride = $this->getCookie(self::COOKIE_MY_LOCATION);
    //     if ($userOverride) {
    //         /** @var \craft\elements\Entry */
    //         $location = Entry::find()
    //             ->id((int) $userOverride)
    //             ->one();

    //         return $location;
    //     }

    //     /** @var \craft\elements\Entry */
    //     $location = $this->closestLocations(null, 1)->one();

    //     return $location;
    // }

    // /**
    //  * @param string $name
    //  * @return null|string
    //  */
    // private function getCookie(string $name): ?string
    // {
    //     /** @psalm-suppress UndefinedClass */
    //     return Craft::$app->request
    //         ->cookies
    //         ->getValue($name, null);
    // }

    // /**
    //  * @param string $name
    //  * @param string $value
    //  * @return null
    //  */
    // private function setCookie(string $name, string $value)
    // {
    //     Craft::$app->response
    //         ->cookies
    //         ->add(new Cookie(compact('name', 'value')));
    // }

    // /**
    //  * @param int $locationId
    //  * @return null
    //  */
    // public function setMyLocation(int $locationId)
    // {
    //     $this->setCookie(self::COOKIE_MY_LOCATION, (string) $locationId);
    // }

    // /**
    //  * @param int $locationId
    //  * @return void
    //  */
    // public function setTempLocation(int $locationId)
    // {
    //     $this->setCookie(self::COOKIE_TEMP_LOCATION, (string) $locationId);
    // }

    // /**
    //  * @param \unionco\geolocation\models\LatLng $latLng
    //  * @param int $limit
    //  * @param float $range
    //  * @return array<\union\app\models\LocationSearchResult>
    //  */
    // public function closestLocationsWithDistance(LatLng $latLng, int $limit, float $range = null): array
    // {
    //     $mapQuery = GoogleServicesRecord::find()
    //         ->limit($limit)
    //         ->select('*')
    //         ->addSelect('(
    //             3959
    //                 * acos(
    //                     cos(radians(:latitude1))
    //                     * cos(radians(latitude))
    //                     * cos(radians(longitude) - radians(:longitude1))
    //                     + sin(radians(:latitude2))
    //                     * sin(radians(latitude))
    //                 )
    //             ) AS distance
    //         ')
    //         ->orderBy('distance asc');

    //     $mapQuery->params[':latitude1'] = $latLng->lat;
    //     $mapQuery->params[':longitude1'] = $latLng->lng;
    //     $mapQuery->params[':latitude2'] = $latLng->lat;

    //     $ids = [];

    //     /** @var array<\union\app\models\LocationSearchResult> */
    //     $results = [];
    //     foreach ($mapQuery->asArray()->all() as $location) {
    //         $id = intval($location['ownerId']);
    //         $ids[] = $id;
    //         if (!$range || ($range && (float) $location['distance'] <= $range)) {
    //             /** @var \union\app\models\LocationSearchResult */
    //             $searchResult = LocationSearchResult::make($id, (float) $location['distance']);
    //             $results[] = $searchResult;
    //         }
    //     }

    //     return $results;
    // }

    // /**
    //  * Return a query for the closest location(s) to the given LatLng object
    //  */
    // public function closestLocations(LatLng $latLng = null, int $limit = 1): ElementQueryInterface
    // {
    //     if (!$latLng) {
    //         $latLng = UnionModule::$instance->geolocation->getCoords();
    //     }

    //     $mapQuery = GoogleServicesRecord::find()
    //         ->limit($limit)
    //         ->select('*')
    //         ->addSelect('(
    //             3959
    //                 * acos(
    //                     cos(radians(:latitude1))
    //                     * cos(radians(latitude))
    //                     * cos(radians(longitude) - radians(:longitude1))
    //                     + sin(radians(:latitude2))
    //                     * sin(radians(latitude))
    //                 )
    //             ) AS distance
    //         ')
    //         ->orderBy('distance asc');

    //     $mapQuery->params[':latitude1'] = $latLng->lat;
    //     $mapQuery->params[':longitude1'] = $latLng->lng;
    //     $mapQuery->params[':latitude2'] = $latLng->lat;

    //     $ids = [];
    //     foreach ($mapQuery->all() as $location) {
    //         $ids[] = intval($location->ownerId);
    //     }

    //     $locationsQuery = Entry::find()
    //         ->id($ids)
    //         ->fixedOrder();

    //     return $locationsQuery;
    // }

    // public function getServiceBreakdown(Entry $locationEntry): ServiceBreakdownModel
    // {
    //     $serviceBreakdown = new ServiceBreakdownModel($locationEntry);

    //     return $serviceBreakdown;
    // }

    // /**
    //  * Return a location in this precedence:
    //  * 1. Temp location (set by entering zipcode) (cookie)
    //  * 2. My Autobell (cookie)
    //  * 3. closest based on geolocation
    //  */
    // public function getLocation(): Entry
    // {
    //     $tempLocation = $this->getCookie(self::COOKIE_TEMP_LOCATION);
    //     if ($tempLocation) {
    //         /** @var Entry */
    //         $location = Entry::find()
    //             ->id((int) $tempLocation)
    //             ->one();
    //         return $location;
    //     }

    //     return $this->myLocation();
    // }
}
