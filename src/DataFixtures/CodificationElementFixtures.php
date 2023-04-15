<?php

namespace App\DataFixtures;

use App\Entity\CodificationChoice;
use App\Entity\CodificationElement;
use App\Entity\MetadataChoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CodificationElementFixtures extends Fixture implements DependentFixtureInterface
{	
	public const PROJECT_0_CODIFICATION_ELEMENT_TEXT_0	= 'PROJECT_0_CODIFICATION_ELEMENT_TEXT_0';
	public const PROJECT_0_CODIFICATION_ELEMENT_TEXT_1	= 'PROJECT_0_CODIFICATION_ELEMENT_TEXT_1';
	public const PROJECT_0_CODIFICATION_ELEMENT_TEXT_2	= 'PROJECT_0_CODIFICATION_ELEMENT_TEXT_2';
	public const PROJECT_0_CODIFICATION_ELEMENT_TEXT_3	= 'PROJECT_0_CODIFICATION_ELEMENT_TEXT_3';

	public const PROJECT_0_CODIFICATION_ELEMENT_REGEX_0	= 'PROJECT_0_CODIFICATION_ELEMENT_REGEX_0';
	public const PROJECT_0_CODIFICATION_ELEMENT_REGEX_1	= 'PROJECT_0_CODIFICATION_ELEMENT_REGEX_1';
	public const PROJECT_0_CODIFICATION_ELEMENT_REGEX_2	= 'PROJECT_0_CODIFICATION_ELEMENT_REGEX_2';

	public const PROJECT_1_CODIFICATION_ELEMENT_TEXT_0	= 'PROJECT_1_CODIFICATION_ELEMENT_TEXT_0';
	public const PROJECT_1_CODIFICATION_ELEMENT_TEXT_1	= 'PROJECT_1_CODIFICATION_ELEMENT_TEXT_1';
	public const PROJECT_1_CODIFICATION_ELEMENT_TEXT_2	= 'PROJECT_1_CODIFICATION_ELEMENT_TEXT_2';
	public const PROJECT_1_CODIFICATION_ELEMENT_TEXT_3	= 'PROJECT_1_CODIFICATION_ELEMENT_TEXT_3';

	public const PROJECT_1_CODIFICATION_ELEMENT_REGEX_0	= 'PROJECT_1_CODIFICATION_ELEMENT_REGEX_0';
	public const PROJECT_1_CODIFICATION_ELEMENT_REGEX_1	= 'PROJECT_1_CODIFICATION_ELEMENT_REGEX_1';
	public const PROJECT_1_CODIFICATION_ELEMENT_REGEX_2	= 'PROJECT_1_CODIFICATION_ELEMENT_REGEX_2';
	
	public function load(ObjectManager $manager)
	{
		$alphabet = range('A', 'Z');
		
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<4; $j++) {
				$codificationElement = new CodificationElement();
				$codificationElement
					->setValue($alphabet[$i] . $alphabet[$j])
					->setCodification($this->getReference(constant(CodificationFixtures::class . "::PROJECT_{$i}_CODIFICATION_TEXT")));
				$manager->persist($codificationElement);
				$this->addReference("PROJECT_{$i}_CODIFICATION_ELEMENT_TEXT_{$j}", $codificationElement);
			}
			for ($j=0; $j<3; $j++) {
				$codificationElement = new CodificationElement();
				$codificationElement
					->setValue("{$i}{$j}")
					->setCodification($this->getReference(constant(CodificationFixtures::class . "::PROJECT_{$i}_CODIFICATION_REGEX")));
				$manager->persist($codificationElement);
				$this->addReference("PROJECT_{$i}_CODIFICATION_ELEMENT_REGEX_{$j}", $codificationElement);
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
