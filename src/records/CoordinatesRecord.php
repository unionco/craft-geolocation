<?php

namespace unionco\geolocation\records;

use Craft;
use yii\db\Schema;
use craft\base\Element;
use craft\db\Migration;
use craft\elements\Entry;
use craft\db\ActiveRecord;
use unionco\geolocation\records\db\CoordinatesQuery;

class CoordinatesRecord extends ActiveRecord
{
    public $distance = null;

    public static function tableName(): string
    {
        return '{{%geolocation_coordinates}}';
    }

    public static function find(): CoordinatesQuery
    {
        return new CoordinatesQuery(get_called_class());
    }

    /**
     * @param string $name
     * @param array $args
     */
    public function __call($name, $args = [])
    {
        // die('call');
        $owner = $this->getOwner();
        if (!$owner) {
            return $this->{$name};
        }
        if (!in_array($name, get_class_methods($this))) {
            if (isset($owner->{$name})) {
                return $owner->{$name};
            }
            return $owner->{$name}(...$args);
        } else {
            return $this->{$name};
        }
    }

    /**
     * @return null|Element
     */
    public function getOwner()
    {
        /** @var Plugins $pluginService */
        $pluginService = Craft::$app->getPlugins();

        /** @var Elements $elementService */
        $elementService = Craft::$app->getElements();

        $element = $elementService->getElementById($this->ownerId, null, $this->ownerSiteId);
        if (!$element) {
            return null;
        }

        if ($element instanceof Entry) {
            return Entry::find()
                ->id($this->ownerId)
                ->one();
        } elseif ($element instanceof MatrixBlock) {
            return MatrixBlock::find()
                ->id($this->ownerId)
                ->one();
        // } elseif ($pluginService->isPluginEnabled('supertable')
        // && class_exists('verbb\supertable\elements\SuperTable')) {
        }

        return null;
    }


    public static function getElementIdsInOrder($coords)
    {
        return CoordinatesRecord::find()
            ->withDistanceFrom($coords, 9999999)
            ->innerJoin('{{%elements}}', '{{%elements}}.id = {{%geolocation_coordinates}}."ownerId"')
            ->addSelect('{{%elements}}.id elementId');
    }
}