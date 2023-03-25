<?php

namespace App\Entity\Enum;

enum MetadataParentEnum: string implements EnumTypeInterface
{
	case SERIE		= 'serie';
	case DOCUMENT	= 'document';
	case VERSION	= 'version';

	public static function getPrefix(): string
	{
		return 'metadata_parent';
	}
}

?>