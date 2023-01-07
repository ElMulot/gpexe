<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0	= 'PROJECT_0';
	public const PROJECT_1	= 'PROJECT_1';
	public const PROJECT_2	= 'PROJECT_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<3; $i++) {
			$project = new Project();
			$project
				->setName("Project {$i}")
				->setImage("default.jpg")
				->setSplitter("-")
				->addUser($this->getReference(UserFixtures::CONTROLLER_USER))
				->addUser($this->getReference(UserFixtures::EDIT_DOCUMENTS_USER))
				->addUser($this->getReference(UserFixtures::READ_ONLY_USER))
				->addUser($this->getReference(constant(UserFixtures::class . "::CHECKER_USER_{$i}")))
				->addUser($this->getReference(constant(UserFixtures::class . "::SUB_CONTRACTOR_USER_{$i}")))
				->addUser($this->getReference(constant(UserFixtures::class . "::SUPPLIER_USER_{$i}")));

			$manager->persist($project);
			$this->addReference(constant("self::PROJECT_{$i}"), $project);
		}

		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			UserFixtures::class,
		];
	}
}
