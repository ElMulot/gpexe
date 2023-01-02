<?php

namespace App\DataFixtures;

use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{
	public const MAIN_CONTRACTOR_COMPANY	= 'MAIN_CONTRACTOR_COMPANY';
	public const CHECKER_COMPANY_0			= 'CHECKER_COMPANY_0';
	public const CHECKER_COMPANY_1			= 'CHECKER_COMPANY_1';
	public const CHECKER_COMPANY_2			= 'CHECKER_COMPANY_2';
	public const SUB_CONTRACTOR_COMPANY_0	= 'SUB_CONTRACTOR_COMPANY_0';
	public const SUB_CONTRACTOR_COMPANY_1	= 'SUB_CONTRACTOR_COMPANY_1';
	public const SUB_CONTRACTOR_COMPANY_2	= 'SUB_CONTRACTOR_COMPANY_2';
	public const SUPPLIER_COMPANY_0			= 'SUPPLIER_COMPANY_0';
	public const SUPPLIER_COMPANY_1			= 'SUPPLIER_COMPANY_1';
	public const SUPPLIER_COMPANY_2			= 'SUPPLIER_COMPANY_2';
	
	public function load(ObjectManager $manager): void
	{
		$company = new Company();
		$company
			->setName('Main Contractor Company')
			->setCodename('mainContractorCompany')
			->setType(CompanyTypeEnum::MAIN_CONTRACTOR);
		$manager->persist($company);
		$this->addReference(self::MAIN_CONTRACTOR_COMPANY, $company);

		for ($i=0; $i<3; $i++) {
			$company = new Company();
			$company
				->setName("Checker Company {$i}")
				->setCodename("checkerCompany{$i}")
				->setType(CompanyTypeEnum::CHECKER)
				->setPriority($i);
			$manager->persist($company);
			$this->addReference(constant("self::CHECKER_COMPANY_{$i}"), $company);
		}

		for ($i=0; $i<3; $i++) {
			$company = new Company();
			$company
				->setName("Sub Contractor Company {$i}")
				->setCodename("subContractorCompany{$i}")
				->setType(CompanyTypeEnum::SUB_CONTRACTOR);
			$manager->persist($company);
			$this->addReference(constant("self::SUB_CONTRACTOR_COMPANY_{$i}"), $company);
		}

		for ($i=0; $i<3; $i++) {
			$company = new Company();
			$company
				->setName("Supplier Company {$i}")
				->setCodename("supplierCompany{$i}")
				->setType(CompanyTypeEnum::SUPPLIER);
			$manager->persist($company);
			$this->addReference(constant("self::SUPPLIER_COMPANY_{$i}"), $company);
		}

		$manager->flush();

		
	}
}
