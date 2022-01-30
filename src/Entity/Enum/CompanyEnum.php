<?php

namespace App\Entity\Enum;

use Doctrine\DBAL\Types\Type;
use Doctrine\DBAL\Platforms\AbstractPlatform;

class CompanyEnum extends AbstractEnum
{
    protected $name = 'company_enum';
    protected $values = array('visible', 'invisible');
}

?>