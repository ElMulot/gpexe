<?php

namespace App\Entity\Enum;

enum CodificationTypeEnum: string implements EnumTypeInterface
{
	case FIXED  = 'fixed';
	case TEXT  	= 'text';
	case REGEX	= 'regex';
	case LIST	= 'list';

	public static function getPrefix(): string
	{
		return 'codification_type';
	}
}

?>