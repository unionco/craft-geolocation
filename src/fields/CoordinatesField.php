<?php

namespace unionco\geolocation\fields;

use Craft;
use yii\db\Schema;
use craft\base\Field;
use craft\helpers\Json;
use craft\base\ElementInterface;
use unionco\geolocation\GeolocationPlugin;
use craft\elements\db\ElementQueryInterface;
use unionco\geolocation\services\Geolocation;

class CoordinatesField extends Field
{
    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('app', 'Coordinates');
    }

    /** @var bool $showMap */
    public $showMap = false;

    /** @var string $mapProvider */
    public $mapProvider = '';

    /** @var string $apiKey */
    public $apiKey = '';

    public $columnType = Schema::TYPE_TEXT;

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml()
    {
        return '';
    }

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): string
    {
        return $this->columnType;
    }

    /**
     * @inheritdoc
     */
    public function normalizeValue($value, ElementInterface $element = null)
    {
        if (!$element) {
            return null;
        }
        return GeolocationPlugin::getInstance()
            ->getCoordinates()
            ->getField($this, $element, $value);
        //return Json::encode($value);
    }

    /**
     * @param ElementQueryInterface $query
     * @param $value
     * @return null
     */
    public function modifyElementsQuery(ElementQueryInterface $query, $value)
    {
        GeolocationPlugin::getInstance()
            ->getCoordinates()
            ->modifyElementsQuery($query, $value);
    }

    /**
     * @param ElementInterface $element
     * @param bool $isNew
     * @return null
     */
    public function afterElementSave(ElementInterface $element, bool $isNew)
    {
        GeolocationPlugin::getInstance()
            ->getCoordinates()
            ->saveField($this, $element);
        parent::afterElementSave($element, $isNew);
    }

    /**
     * @inheritdoc
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        return parent::serializeValue($value, $element);
    }

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $view = Craft::$app->getView();
        $debug = $value;
        $js = '';
        if ($this->showMap) {
            // if ($this->mapProvider === 'mapbox') {
            $view->registerAssetBundle('unionco\\geolocation\\assetbundles\\Geolocation\\GeolocationAdminAsset');
            // }
        }
        return $view->renderTemplate(
            'geolocation/fieldtypes/Coordinates/input',
            [
                'name' => $this->handle,
                // 'debug' => $debug,
                'lat' => $value->lat ?? 0,
                'lng' => $value->lng ?? 0,
                // 'geocoderString' => $value->geocoderString ?? null,
                'field' => $this,
            ]
        );
    }
}
