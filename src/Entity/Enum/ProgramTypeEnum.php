<?php

namespace App\Entity\Enum;

enum ProgramTypeEnum: string implements EnumTypeInterface
{
	case EXPORT	= 'export';
	case IMPORT	= 'import';
	case TASK		= 'task';
	case PROGRESS	= 'progress';

	public static function getPrefix(): string
	{
		return 'program_type';
	}
}

?>