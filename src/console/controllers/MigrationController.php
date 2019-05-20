<?php

namespace unionco\geolocation\console\controllers;

use yii\console\Controller;
use unionco\geolocation\migrations\m01_install;

class MigrationController extends Controller
{
    public function actionInstall()
    {
        (new m01_install())->safeUp();
    }
}
