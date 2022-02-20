<?php

namespace App\Entity\Enum;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class CompanyTypeEnum extends AbstractEnumType
{
	public final const MAIN_CONTRACTOR  = 'main_contractor';
	public final const SUB_CONTRACTOR	= 'sub_contractor';
	public final const SUPPLIER			= 'supplier';
	public final const CHECKER			= 'checker';
	
	protected static array $choices = [
		self::MAIN_CONTRACTOR	=> 'Main contractor',
		self::SUB_CONTRACTOR	=> 'Sub-contractor',
		self::SUPPLIER			=> 'Supplier',
		self::CHECKER			=> 'Checker',
	];

	public static function getDefaultValue(): ?string
    {
        return self::SUPPLIER;
    }
}

?>