<?php 

namespace unionco\geolocation\tests\unit;

use Craft;
use Codeception\Test\Unit;
use craft\services\Plugins;
use unionco\geolocation\models\LatLng;
use unionco\geolocation\GeolocationPlugin;

class LocationServiceTest extends Unit
{
    /**
     * @var \UnitTester
     */
    protected $tester;

    /**
     * @var GeolocationPlugin $plugin
     */
    protected $plugin;
    
    protected function _before()
    {
        $plugin = GeolocationPlugin::$plugin;
    }

    protected function _after()
    {
    }

    // tests
    public function testPluginIsInstalled()
    {
        /** @var Plugins $pluginService */
        $pluginService = Craft::$app->getPlugins();
        
        $installed = $pluginService->isPluginInstalled('geolocation');
        $enabled = $pluginService->isPluginEnabled('geolocation');

        $this->assertTrue($installed);
        $this->assertTrue($enabled);
    }

    public function testDistanceBetweenLatLng()
    {
        $latLng1 = new LatLng(35, -80);
        $this->assertIsObject($latLng1);

        $latLng2 = new LatLng(47, -89);
        $this->assertIsObject($latLng2);

        // var_dump($this->plugin); die;
        $distance = $this->plugin->location->distance($latLng1, $latLng2);
        $this->assertIsFloat($distance);
        // ZipLatLng::find()->zipcode('19807')->one();
    }
}
