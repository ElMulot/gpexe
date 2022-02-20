<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class StatusTypeEnum extends AbstractEnumType
{
	public final const INFORMATION  = 'information';
	public final const REVIEW		= 'review';
	public final const CANCEL		= 'cancel';
	public final const AS_BUILT		= 'as_build';
	
	protected static array $choices = [
		self::INFORMATION			=> 'Checkbox',
		self::REVIEW				=> 'Text',
		self::CANCEL				=> 'Date',
		self::AS_BUILT				=> 'Link',
	];

	public static function getDefaultValue(): ?string
    {
        return self::REVIEW;
    }
}

?>