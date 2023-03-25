<?php

namespace App\Entity\Enum;

enum SerieBelongingEnum: string implements EnumTypeInterface
{
	case ALL	= 'all';
	case MDR	= 'mdr';
	case SDR	= 'sdr';

	public static function getPrefix(): string
	{
		return 'serie_belonging';
	}
}


?>