<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class ProgramTypeEnum extends AbstractEnumType
{
	public final const EXPORT	= 'export';
	public final const IMPORT	= 'import';
	public final const TASK		= 'task';
	public final const PROGRESS	= 'progress';
	
	protected static array $choices = [
		self::EXPORT			=> 'Export',
		self::IMPORT			=> 'Import',
		self::TASK				=> 'Task',
		self::PROGRESS			=> 'Progress',
	];
}

?>