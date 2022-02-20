<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class CodificationTypeEnum extends AbstractEnumType
{
	public final const FIXED  	= 'fixed';
	public final const LIST		= 'list';
	public final const REGEX	= 'regex';
	
	protected static array $choices = [
		self::FIXED				=> 'Fixed',
		self::LIST				=> 'List',
		self::REGEX				=> 'Regex',
	];

	public static function getDefaultValue(): ?string
    {
        return self::LIST;
    }
}

?>