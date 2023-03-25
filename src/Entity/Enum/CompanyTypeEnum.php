<?php

namespace App\Entity\Enum;

enum CompanyTypeEnum: string implements EnumTypeInterface
{
	case MAIN_CONTRACTOR	= 'main_contractor';
	case SUB_CONTRACTOR		= 'sub_contractor';
	case SUPPLIER			= 'supplier';
	case CHECKER			= 'checker';

	public static function getPrefix(): string
	{
		return 'company_type';
	}
}

?>