<?php

namespace App\Entity\Enum;

enum LogTypeEnum: string implements EnumTypeInterface
{
	case INSERT	= 'insert';
	case UPDATE	= 'update';
	case DELETE	= 'delete';

	public static function getPrefix(): string
	{
		return 'log_type';
	}
}

?>