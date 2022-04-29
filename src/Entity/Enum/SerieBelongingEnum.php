<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class SerieBelongingEnum extends AbstractEnumType
{
	public final const ALL  = 'all';
	public final const MDR  = 'mdr';
	public final const SDR	= 'sdr';
	
	protected static array $choices = [
		self::ALL			=> 'All documents',
		self::MDR			=> 'MDR only',
		self::SDR			=> 'SDR only',
	];
}

?>