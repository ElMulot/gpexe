<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class CodificationTypeEnum extends AbstractEnumType
{
	public final const FIXED  	= 'fixed';
	public final const TEXT  	= 'text';
	public final const REGEX	= 'regex';
	public final const LIST		= 'list';
	
	protected static array $choices = [
		self::FIXED				=> 'Fixed',
		self::TEXT				=> 'Text',
		self::REGEX				=> 'Regex',
		self::LIST				=> 'List',
	];

	public static function getDefaultValue(): ?string
    {
        return self::LIST;
    }
}

?>