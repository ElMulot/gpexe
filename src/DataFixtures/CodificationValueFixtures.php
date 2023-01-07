<?php

namespace App\DataFixtures;

use App\Entity\CodificationItem;
use App\Entity\CodificationValue;
use App\Entity\MetadataItem;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CodificationValueFixtures extends Fixture implements DependentFixtureInterface
{	
	public const PROJECT_0_CODIFICATION_VALUE_TEXT_0	= 'PROJECT_0_CODIFICATION_VALUE_TEXT_0';
	public const PROJECT_0_CODIFICATION_VALUE_TEXT_1	= 'PROJECT_0_CODIFICATION_VALUE_TEXT_1';
	public const PROJECT_0_CODIFICATION_VALUE_TEXT_2	= 'PROJECT_0_CODIFICATION_VALUE_TEXT_2';

	public const PROJECT_0_CODIFICATION_VALUE_REGEX_0	= 'PROJECT_0_CODIFICATION_VALUE_REGEX_0';
	public const PROJECT_0_CODIFICATION_VALUE_REGEX_1	= 'PROJECT_0_CODIFICATION_VALUE_REGEX_1';
	public const PROJECT_0_CODIFICATION_VALUE_REGEX_2	= 'PROJECT_0_CODIFICATION_VALUE_REGEX_2';

	public const PROJECT_1_CODIFICATION_VALUE_TEXT_0	= 'PROJECT_1_CODIFICATION_VALUE_TEXT_0';
	public const PROJECT_1_CODIFICATION_VALUE_TEXT_1	= 'PROJECT_1_CODIFICATION_VALUE_TEXT_1';
	public const PROJECT_1_CODIFICATION_VALUE_TEXT_2	= 'PROJECT_1_CODIFICATION_VALUE_TEXT_2';

	public const PROJECT_1_CODIFICATION_VALUE_REGEX_0	= 'PROJECT_1_CODIFICATION_VALUE_REGEX_0';
	public const PROJECT_1_CODIFICATION_VALUE_REGEX_1	= 'PROJECT_1_CODIFICATION_VALUE_REGEX_1';
	public const PROJECT_1_CODIFICATION_VALUE_REGEX_2	= 'PROJECT_1_CODIFICATION_VALUE_REGEX_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$codificationValue = new CodificationValue();
				$codificationValue
					->setValue("Item_{$i}{$j}")
					->setCodification($this->getReference(constant(CodificationFixtures::class . "::PROJECT_{$i}_CODIFICATION_TEXT")));
				$manager->persist($codificationValue);
				$this->addReference("PROJECT_{$i}_CODIFICATION_VALUE_TEXT_{$j}", $codificationValue);

				$codificationValue = new CodificationValue();
				$codificationValue
					->setValue("{$i}{$j}")
					->setCodification($this->getReference(constant(CodificationFixtures::class . "::PROJECT_{$i}_CODIFICATION_REGEX")));
				$manager->persist($codificationValue);
				$this->addReference("PROJECT_{$i}_CODIFICATION_VALUE_REGEX_{$j}", $codificationValue);
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
