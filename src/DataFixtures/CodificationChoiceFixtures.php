<?php

namespace App\DataFixtures;

use App\Entity\CodificationChoice;
use App\Entity\MetadataChoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CodificationChoiceFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_CODIFICATION_CHOICE_0	= 'PROJECT_0_CODIFICATION_CHOICE_0';
	public const PROJECT_0_CODIFICATION_CHOICE_1	= 'PROJECT_0_CODIFICATION_CHOICE_1';
	public const PROJECT_0_CODIFICATION_CHOICE_2	= 'PROJECT_0_CODIFICATION_CHOICE_2';

	public const PROJECT_1_CODIFICATION_CHOICE_0	= 'PROJECT_1_CODIFICATION_CHOICE_0';
	public const PROJECT_1_CODIFICATION_CHOICE_1	= 'PROJECT_1_CODIFICATION_CHOICE_1';
	public const PROJECT_1_CODIFICATION_CHOICE_2	= 'PROJECT_1_CODIFICATION_CHOICE_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$codificationChoice = new CodificationChoice();
				$codificationChoice
					->setName("Item {$i}{$j}")
					->setValue("Item_{$i}{$j}")
					->setCodification($this->getReference(constant(CodificationFixtures::class . "::PROJECT_{$i}_CODIFICATION_LIST")));
				$manager->persist($codificationChoice);
				$this->addReference("PROJECT_{$i}_CODIFICATION_CHOICE_{$j}", $codificationChoice);
			}
		}
		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			CodificationFixtures::class,
		];
	}
}
