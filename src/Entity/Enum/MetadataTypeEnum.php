<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class MetadataTypeEnum extends AbstractEnumType
{
	public final const BOOLEAN  = 'boolean';
	public final const TEXT		= 'text';
	public final const DATE		= 'date';
	public final const LINK		= 'link';
	public final const LIST		= 'list';
	
	protected static array $choices = [
		self::BOOLEAN			=> 'Checkbox',
		self::TEXT				=> 'Text',
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