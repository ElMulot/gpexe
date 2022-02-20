<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class MetadataParentEnum extends AbstractEnumType
{
	public final const SERIE  	= 'serie';
	public final const DOCUMENT	= 'document';
	public final const VERSION	= 'version';
	
	protected static array $choices = [
		self::SERIE				=> 'Serie',
		self::DOCUMENT			=> 'Document',
		self::VERSION			=> 'Version',
	];
}

?>