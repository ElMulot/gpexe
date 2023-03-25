<?php

namespace App\Entity\Enum;

enum MetadataTypeEnum: string implements EnumTypeInterface
{
	case BOOL	= 'bool';
	case TEXT	= 'text';
	case REGEX	= 'regex';
	case DATE	= 'date';
	case LINK	= 'link';
	case LIST	= 'list';

	public static function getPrefix(): string
	{
		return 'metadata_type';
	}
}

?>