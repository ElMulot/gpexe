<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
	public const SUPER_ADMIN_USER		= 'SUPER_ADMIN_USER';
	public const ADMIN_USER				= 'ADMIN_USER';
	public const CONTROLLER_USER		= 'CONTROLLER_USER';
	public const EDIT_DOCUMENTS_USER	= 'EDIT_DOCUMENTS_USER';
	public const READ_ONLY_USER			= 'READ_ONLY_USER';
	public const UNACTIVATED_USER	 	= 'UNACTIVATED_USER';
	public const CHECKER_USER_0			= 'CHECKER_USER_0';
	public const CHECKER_USER_1			= 'CHECKER_USER_1';
	public const CHECKER_USER_2			= 'CHECKER_USER_2';
	public const SUB_CONTRACTOR_USER_0	= 'SUB_CONTRACTOR_USER_0';
	public const SUB_CONTRACTOR_USER_1	= 'SUB_CONTRACTOR_USER_1';
	public const SUB_CONTRACTOR_USER_2	= 'SUB_CONTRACTOR_USER_2';
	public const SUPPLIER_USER_0		= 'SUPPLIER_USER_0';
	public const SUPPLIER_USER_1		= 'SUPPLIER_USER_1';
	public const SUPPLIER_USER_2		= 'SUPPLIER_USER_2';
	
	public function load(ObjectManager $manager): void
	{
		$user = new User();
		$user
			->setName('Super Admin User')
			->setEmail('super-admin@test.com')
			->setPlainPassword('super_admin') //hash : $2y$13$EWI/.VflFi/wILWfWT/kUObJzfmOOgorwfaSEirdO4z46IgVHT6ay
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::SUPER_ADMIN_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(true);
		$manager->persist($user);
		$this->addReference(self::SUPER_ADMIN_USER, $user);

		$user = new User();
		$user
			->setName('Admin User')
			->setEmail('admin@test.com')
			->setPlainPassword('admin')
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::ADMIN_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(true);
		$manager->persist($user);
		$this->addReference(self::ADMIN_USER, $user);
		
		$user = new User();
		$user
			->setName('Controller User')
			->setEmail('controller@test.com')
			->setPlainPassword('controller')
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::CONTROLLER_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(true);
		$manager->persist($user);
		$this->addReference(self::CONTROLLER_USER, $user);

		$user = new User();
		$user
			->setName('Edit Documents User')
			->setEmail('edit-documents@test.com')
			->setPlainPassword('edit_document')
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::EDIT_DOCUMENTS_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(true);
		$manager->persist($user);
		$this->addReference(self::EDIT_DOCUMENTS_USER, $user);

		$user = new User();
		$user
			->setName('Read Only User')
			->setEmail('read-only@test.com')
			->setPlainPassword('read_only')
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::READ_ONLY_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(true);
		$manager->persist($user);
		$this->addReference(self::READ_ONLY_USER, $user);

		$user = new User();
		$user
			->setName('Unactivated User')
			->setEmail('unactivated@test.com')
			->setPlainPassword('unactivated')
			->setCompany($this->getReference(CompanyFixtures::MAIN_CONTRACTOR_COMPANY))
			->setProfil($this->getReference(ProfilFixtures::READ_ONLY_PROFIL))
			->setLocale('fr_FR')
			->setTimezone('Europe/Paris')
			->setActivated(false);
		$manager->persist($user);
		$this->addReference(self::UNACTIVATED_USER, $user);

		for ($i=0; $i<3; $i++) {
			$user = new User();
			$user
				->setName("Checker User {$i}")
				->setEmail("checker-{$i}@test.com")
				->setPlainPassword("checker {$i}")
				->setCompany($this->getReference(constant(CompanyFixtures::class . "::CHECKER_COMPANY_{$i}")))
				->setProfil($this->getReference(ProfilFixtures::READ_ONLY_PROFIL))
				->setLocale('fr_FR')
				->setTimezone('Europe/Paris')
				->setActivated(true);
			$manager->persist($user);
			$this->addReference(constant("self::CHECKER_USER_{$i}"), $user);
		}

		for ($i=0; $i<3; $i++) {
			$user = new User();
			$user
				->setName("Sub Contractor User {$i}")
				->setEmail("sub-contractor-{$i}@test.com")
				->setPlainPassword("sub_contractor {$i}")
				->setCompany($this->getReference(constant(CompanyFixtures::class . "::SUB_CONTRACTOR_COMPANY_{$i}")))
				->setProfil($this->getReference(ProfilFixtures::READ_ONLY_PROFIL))
				->setLocale('fr_FR')
				->setTimezone('Europe/Paris')
				->setActivated(true);
			$manager->persist($user);
			$this->addReference(constant("self::SUB_CONTRACTOR_USER_{$i}"), $user);
		}

		for ($i=0; $i<3; $i++) {
			$user = new User();
			$user
				->setName("Supplier User {$i}")
				->setEmail("supplier-{$i}@test.com")
				->setPlainPassword("supplier {$i}")
				->setCompany($this->getReference(constant(CompanyFixtures::class . "::SUPPLIER_COMPANY_{$i}")))
				->setProfil($this->getReference(ProfilFixtures::READ_ONLY_PROFIL))
				->setLocale('fr_FR')
				->setTimezone('Europe/Paris')
				->setActivated(true);
			$manager->persist($user);
			$this->addReference(constant("self::SUPPLIER_USER_{$i}"), $user);
		}
				
		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			ProfilFixtures::class,
			CompanyFixtures::class,
		];
	}
}
