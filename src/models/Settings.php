<?php
/**
 * Geolocation plugin for Craft CMS 3.x
 *
 * Geolocation helper for Craft
 *
 * @link      https://github.com/abryrath
 * @copyright Copyright (c) 2019 Abry Rath <abry.rath@union.co>
 */

namespace unionco\geolocation\models;

use unionco\geolocation\Geolocation;

use Craft;
use craft\base\Model;

/**
 * @author    Abry Rath <abry.rath@union.co>
 * @package   Geolocation
 * @since     0.0.1
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $ipStackApiKey = '';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['ipStackApiKey', 'string'],
            ['ipStackApiKey', 'default', 'value' => ''],
        ];
    }
}
