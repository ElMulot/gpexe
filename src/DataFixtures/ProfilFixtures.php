<?php

namespace App\DataFixtures;

use App\Entity\Profil;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProfilFixtures extends Fixture
{
	public const SUPER_ADMIN_PROFIL			= 'SUPER_ADMIN_PROFIL';
	public const ADMIN_PROFIL				= 'ADMIN_PROFIL';
	public const CONTROLLER_PROFIL			= 'CONTROLLER_PROFIL';
	public const EDIT_DOCUMENTS_PROFIL		= 'EDIT_DOCUMENTS_PROFIL';
	public const READ_ONLY_PROFIL			= 'READ_ONLY_PROFIL';

	public function load(ObjectManager $manager): void
	{
		$profil = new Profil();
		$profil
			->setName('Super Admin Profil Test')
			->setSuperAdmin(true);
		$manager->persist($profil);
		$this->addReference(self::SUPER_ADMIN_PROFIL, $profil);

		$profil = new Profil();
		$profil
			->setName('Admin Profil Test')
			->setAdmin(true);
		$manager->persist($profil);
		$this->addReference(self::ADMIN_PROFIL, $profil);

		$profil = new Profil();
		$profil
			->setName('Controller Profil Test')
			->setController(true);
		$manager->persist($profil);
		$this->addReference(self::CONTROLLER_PROFIL, $profil);

		$profil = new Profil();
		$profil
			->setName('Edit Documents Profil Test')
			->setEditor(true);
		$manager->persist($profil);
		$this->addReference(self::EDIT_DOCUMENTS_PROFIL, $profil);

		$profil = new Profil();
		$profil
			->setName('Read Only Profil Test');
		$manager->persist($profil);
		$this->addReference(self::READ_ONLY_PROFIL, $profil);

		$manager->flush();
	}
}
