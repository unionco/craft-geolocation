<?php

namespace unionco\geolocation\records;

use yii\db\Schema;
use craft\db\Migration;
use craft\db\ActiveRecord;
use unionco\geolocation\interfaces\Migratable;

class CoordinatesRecord extends ActiveRecord implements Migratable
{
    public static function tableName(): string
    {
        return '{{%geolocation_coordinates}}';
    }

    public static function columns(Migration $migration): array
    {
        return [
            'id' => $migration->primaryKey(),
            'lat' => $migration->double()->notNull(),
            'lng' => $migration->double()->notNUll(),
            // Craft Stuff
            'ownerId' => $migration->integer()->notNull(),
            'ownerSiteId' => $migration->integer()->notNull(),
            'fieldId' => $migration->integer()->notNull(),
            // Yii Stuff
            'uid' => $migration->uid()->notNull(),
            'dateCreated' => $migration->dateTime()->notNull(),
            'dateUpdated' => $migration->dateTime()->notNull(),
        ];
    }
}
