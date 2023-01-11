<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class StatusTypeEnum extends AbstractEnumType
{
	public final const INFORMATION  = 'information';
	public final const REVIEW		= 'review';
	public final const CANCEL		= 'cancel';
	public final const AS_BUILT		= 'as_built';
	
	protected static array $choices = [
		self::INFORMATION			=> 'Information',
		self::REVIEW				=> 'Review',
		self::CANCEL				=> 'Cancel',
		self::AS_BUILT				=> 'As built',
	];

	public static function getDefaultValue(): ?string
    {
        return self::REVIEW;
    }
}

?>