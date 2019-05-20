<?php

namespace unionco\geolocation\models;

use Craft;
use DateTime;
use craft\base\Model;

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
