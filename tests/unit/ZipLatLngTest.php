<?php 

namespace unionco\geolocation\tests\unit;

use unionco\geolocation\models\ZipLatLng;
use unionco\geolocation\models\db\ZipLatLngQuery;


class ZipLatLngTest extends \Codeception\Test\Unit
{
    /**
     * @var \UnitTester
     */
    protected $tester;
    
    protected function _before()
    {
    }

    protected function _after()
    {
    }

    // tests
    public function testSomeFeature()
    {
        $this->assertTrue(ZipLatLng::find() instanceof ZipLatLngQuery);
        // ZipLatLng::find()->zipcode('19807')->one();
    }
}
