<?php

namespace unionco\geolocation\services;

use craft\base\Component;
use League\Csv\Reader;
use unionco\geolocation\migrations\Install as InstallMigration;
use unionco\geolocation\models\ZipLatLng;

class Install extends Component
{
    public function migrate()
    {
        return (new InstallMigration())->safeUp();
    }

    public function seed()
    {
        $filePath = __DIR__ . '/../../resources/zip.csv';

        $csvReader = Reader::createFromPath($filePath, 'r');

        foreach ($csvReader as $record) {
            $zip = (string) $record[0];
            $lat = (float) $record[1];
            $lng = (float) $record[2];

            if (ZipLatLng::find()->zipcode($zip)->count()) {
                continue;
            }

            $zipLatLng = new ZipLatLng([
                'zip' => $zip,
                'lat' => $lat,
                'lng' => $lng,
            ]);

            $zipLatLng->save();
        }
    }
}
