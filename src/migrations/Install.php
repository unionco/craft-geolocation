<?php

namespace unionco\geolocation\migrations;

use Craft;
use craft\db\Migration;

/**
 * Install migration.
 */
class Install extends Migration
{
    /** @inheritdoc */
    public function safeUp()
    {
        return $this->createTable('{{%geolocation_coordinates}}', [
            'id' => $this->primaryKey(),
            'lat' => $this->double(),
            'lng' => $this->double(),
            // Craft Stuff
            'ownerId' => $this->integer(),
            'ownerSiteId' => $this->integer(),
            'fieldId' => $this->integer(),
            // Yii Stuff
            'uid' => $this->uid(),
            'dateCreated' => $this->dateTime(),
            'dateUpdated' => $this->dateTime(),
        ]);
    }

    /** @inheritdoc */
    public function safeDown()
    {
        $this->dropTableIfExists('{{%geolocation_coordinates}}');
        return true;
    }
}
