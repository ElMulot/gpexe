<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class MetadataTypeEnum extends AbstractEnumType
{
	public final const BOOL  	= 'bool';
	public final const TEXT		= 'text';
	public final const REGEX	= 'regex';
	public final const DATE		= 'date';
	public final const LINK		= 'link';
	public final const LIST		= 'list';
	
	protected static array $choices = [
		self::BOOL				=> 'Checkbox',
		self::TEXT				=> 'Text',
		self::REGEX				=> 'Regex',
		self::DATE				=> 'Date',
		self::LINK				=> 'Link',
		self::LIST				=> 'List',
	];

	public static function getDefaultValue(): ?string
    {
        return self::LIST;
    }
}

?>