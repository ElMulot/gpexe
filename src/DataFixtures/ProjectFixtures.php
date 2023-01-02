<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture
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
				->setSplitter("-");

			$manager->persist($project);
			$this->addReference(constant("self::PROJECT_{$i}"), $project);
		}
	}
}
