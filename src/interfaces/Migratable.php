<?php

namespace unionco\geolocation\interfaces;

use craft\db\Migration;

interface Migratable
{
    public static function tableName(): string;
    public static function columns(Migration $mgiration): array;
}
