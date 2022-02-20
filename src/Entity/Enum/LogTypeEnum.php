<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class LogTypeEnum extends AbstractEnumType
{
	public final const INSERT  	= 'insert';
	public final const UPDATE	= 'update';
	public final const DELETE	= 'delete';

	protected static array $choices = [
		self::INSERT			=> 'Insert',
		self::UPDATE			=> 'Update',
		self::DELETE			=> 'Delete',
	];
}

?>