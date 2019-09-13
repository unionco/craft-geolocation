<?php

namespace unionco\geolocation\services;

use Craft;
use craft\base\Element;
use craft\helpers\Json;
use craft\base\Component;
use craft\base\ElementInterface;
use unionco\geolocation\models\LatLng;
use craft\elements\db\ElementQueryInterface;
use unionco\geolocation\fields\CoordinatesField;
use unionco\geolocation\models\CoordinatesModel;
use unionco\geolocation\records\CoordinatesRecord;

class Coordinates extends Component
{
    public function getField(CoordinatesField $field, ElementInterface $owner, $value)
    {
        /**
         * @var string $ownerId
         * @psalm-suppress NoInterfaceProperties
         */
        $ownerId = (string) $owner->id;

        /**
         * @var string $ownerSiteId
         * @psalm-suppress NoInterfaceProperties
         */
        $ownerSiteId = (string) $owner->siteId;

        /** @var null|CoordinatesRecord $record */
        $record = CoordinatesRecord::findOne([
            'ownerId' => $ownerId,
            'ownerSiteId' => $ownerSiteId,
            'fieldId' => $field->id,
        ]);

        $request = Craft::$app->getRequest();
        if (!$request->isConsoleRequest
            && $request->isPost
            && $value) {
            if (is_string($value)) {
                $value = Json::decode($value);
            }
            if ($value instanceof CoordinatesModel) {
                $model = $value;
            } else {
                $model = new CoordinatesModel($value);
            }
        } elseif ($record) {
            $model = new CoordinatesModel($record->getAttributes());
        } else {
            $model = new CoordinatesModel();
        }

        return $model;
    }

    /**
     * @param ElementQueryInterface $query
     * @param mixed $value
     * @return null
     */
    public function modifyElementsQuery(ElementQueryInterface $query, $value)
    {
        if (!$value) {
            return null;
        }

        $tableName = CoordinatesRecord::tableName();
        // $tableAlias = 'googleservices' . bin2hex(openssl_random_pseudo_bytes(5));

        $on = [
            'and',
            '[[elements.id]] = [[' . $tableName . '.ownerId]]',
            '[[elements_sites.siteId]] = [[' . $tableName . '.ownerSiteId]]',
        ];

        /** @psalm-suppress NoInterfaceProperties */
        $query->query->join(
            'JOIN',
            "{$tableName}",
            $on
        );

        /** @psalm-suppress NoInterfaceProperties */
        $query->subQuery->join(
            'JOIN',
            "{$tableName}",
            $on
        );

        return null;
    }

    public function saveField(CoordinatesField $field, Element $owner): bool
    {
        /** @var null|string $fieldHandle */
        $fieldHandle = $field->handle;
        if (!$fieldHandle) {
            throw new \Exception('Field handle is missing');
        }

        $value = $owner->getFieldValue($fieldHandle);

        $record = CoordinatesRecord::findOne([
            'ownerId' => $owner->id,
            'ownerSiteId' => $owner->siteId,
            'fieldId' => $field->id,
        ]);

        if (!$record) {
            $record = new CoordinatesRecord();
            $record->ownerId = $owner->id;
            $record->ownerSiteId = $owner->siteId;
            $record->fieldId = $field->id;
        }

        $record->lat = $value->lat;
        $record->lng = $value->lng;
        
        $saveResult = $record->save();

        return $saveResult;
    }
    
    public function search(float $lat, float $lng, float $radius)
    {
        $latLng = new LatLng($lat, $lng);
        
        return CoordinatesRecord::find()
            ->withDistanceFrom($latLng, $radius)
            ->all();
    }


}
