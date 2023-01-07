<?php

namespace App\DataFixtures;

use App\Entity\Visa;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class VisaFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_MAIN_CONTRACTOR_VISA_OK	= 'PROJECT_0_MAIN_CONTRACTOR_VISA_OK';
	public const PROJECT_0_MAIN_CONTRACTOR_VISA_NO	= 'PROJECT_0_MAIN_CONTRACTOR_VISA_NO';
	public const PROJECT_0_CHECKER_0_VISA_OK		= 'PROJECT_0_CHECKER_0_VISA_OK';
	public const PROJECT_0_CHECKER_0_VISA_NO		= 'PROJECT_0_CHECKER_0_VISA_NO';
	public const PROJECT_0_CHECKER_1_VISA_OK		= 'PROJECT_0_CHECKER_1_VISA_OK';
	public const PROJECT_0_CHECKER_1_VISA_NO		= 'PROJECT_0_CHECKER_1_VISA_NO';
	public const PROJECT_0_CHECKER_2_VISA_OK		= 'PROJECT_0_CHECKER_2_VISA_OK';
	public const PROJECT_0_CHECKER_2_VISA_NO		= 'PROJECT_0_CHECKER_2_VISA_NO';

	public const PROJECT_1_MAIN_CONTRACTOR_VISA_OK	= 'PROJECT_1_MAIN_CONTRACTOR_VISA_OK';
	public const PROJECT_1_MAIN_CONTRACTOR_VISA_NO	= 'PROJECT_1_MAIN_CONTRACTOR_VISA_NO';
	public const PROJECT_1_CHECKER_0_VISA_OK		= 'PROJECT_1_CHECKER_0_VISA_OK';
	public const PROJECT_1_CHECKER_0_VISA_NO		= 'PROJECT_1_CHECKER_0_VISA_NO';
	public const PROJECT_1_CHECKER_1_VISA_OK		= 'PROJECT_1_CHECKER_1_VISA_OK';
	public const PROJECT_1_CHECKER_1_VISA_NO		= 'PROJECT_1_CHECKER_1_VISA_NO';
	public const PROJECT_1_CHECKER_2_VISA_OK		= 'PROJECT_1_CHECKER_2_VISA_OK';
	public const PROJECT_1_CHECKER_2_VISA_NO		= 'PROJECT_1_CHECKER_2_VISA_NO';

	public function load(ObjectManager $manager): void
	{
		for ($i=0; $i<2; $i++) {
			
			$visa = new Visa();
			$visa
				->setName('OK')
				->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
				->setRevisionRequired(false)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($visa);
			$this->addReference("PROJECT_{$i}_MAIN_CONTRACTOR_VISA_OK", $visa);

			$visa = new Visa();
			$visa
				->setName('NO')
				->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
				->setRevisionRequired(true)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($visa);
			$this->addReference("PROJECT_{$i}_MAIN_CONTRACTOR_VISA_NO", $visa);
			
			for ($j=0; $j<3; $j++) {
				$visa = new Visa();
				$visa
					->setName('OK')
					->setCompany($this->getReference(constant(CompanyFixtures::class . "::SUPPLIER_COMPANY_{$j}")))
					->setRevisionRequired(false)
					->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
				$manager->persist($visa);
				$this->addReference("PROJECT_{$i}_CHECKER_{$j}_VISA_OK", $visa);

				$visa = new Visa();
				$visa
					->setName('NO')
					->setCompany($this->getReference(constant(CompanyFixtures::class . "::SUPPLIER_COMPANY_{$j}")))
					->setRevisionRequired(true)
					->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
				$manager->persist($visa);
				$this->addReference("PROJECT_{$i}_CHECKER_{$j}_VISA_NO", $visa);
			}
			

		}

		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			ProjectFixtures::class,
			CompanyFixtures::class,

		];
	}
}
