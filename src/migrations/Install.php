<?php

namespace unionco\geolocation\migrations;

use craft\db\Migration;

class Install extends Migration
{
    public function safeUp()
    {
        $this->dropTableIfExists('{{%geolocation_zipcodes}}');
        $this->createTable(
            '{{%geolocation_zipcodes}}',
            [
                'id' => $this->primaryKey(),
                'zip' => $this->string(5)->notNull()->unique(),
                'lat' => $this->float()->notNull(),
                'lng' => $this->float()->notNull(),
                'dateCreated' => $this->dateTime(),
                'dateUpdated' => $this->dateTime(),
                'uid' => $this->uid(),
            ]
        );

        return true;
    }

    public function safeDown()
    {
        $this->dropTableIfExists('{{%geolocation_zipcodes}}');

        return true;
    }
}
