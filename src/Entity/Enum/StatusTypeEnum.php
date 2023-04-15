<?php

namespace App\Entity\Enum;

enum StatusTypeEnum: string implements EnumTypeInterface
{
	case INFORMATION	= 'information';
	case REVIEW			= 'review';
	case CANCEL			= 'cancel';
	case AS_BUILT		= 'as_built';

	public static function getPrefix(): string
	{
		return 'status_type';
	}
}

?>