<?php

namespace unionco\geolocation\models;

use Craft;
use DateTime;
use craft\base\Model;
use craft\base\Element;
use craft\elements\Entry;
use craft\services\Plugins;
use craft\services\Elements;

class CoordinatesModel extends Model
{
    /** @var int $id */
    public $id;

    /** @var int $ownerId */
    public $ownerId;

    /** @var int $ownerSiteId */
    public $ownerSiteId;

    /** @var int $fieldId */
    public $fieldId;

    /** @var float $lat */
    public $lat;
    
    /** @var float $lng */
    public $lng;

    public $distance = null;

    /** @var string $uid */
    public $uid;

    /** @var DateTime $dateCreated */
    public $dateCreated;

    /** @var DateTime $dateUpdated */
    public $dateUpdated;

    public function __construct(array $attributes = [], array $config = [])
    {
        Craft::configure($this, $attributes);
        parent::__construct($config);
    }
}
