<?php

namespace unionco\geolocation\migrations;

use craft\db\Migration;
use unionco\geolocation\interfaces\Migratable;
use unionco\geolocation\records\CoordinatesRecord;

class m01_install extends Migration
{
    /** @var string[] $tables */
    public $tables = [
        CoordinatesRecord::class,
    ];

    public function safeUp()
    {
        foreach ($this->tables as $table) {
            $name = $table::tableName();
            $columns = $table::columns($this);

            $this->dropTableIfExists($name);
            $this->createTable(
                $name,
                $columns
            );
        }

    }

    public function safeDown()
    {
        foreach ($this->tables as $table) {
            $this->dropTableIfExists($table::tableName());
        }
    }
}
