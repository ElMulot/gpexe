<?php

namespace App\DataFixtures;

use App\Entity\Serie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SerieFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_SERIE_0	= 'PROJECT_0_SERIE_0';
	public const PROJECT_0_SERIE_1	= 'PROJECT_0_SERIE_1';
	public const PROJECT_0_SERIE_2	= 'PROJECT_0_SERIE_2';
	public const PROJECT_0_SERIE_3	= 'PROJECT_0_SERIE_3';

	public const PROJECT_1_SERIE_0	= 'PROJECT_1_SERIE_0';
	public const PROJECT_1_SERIE_1	= 'PROJECT_1_SERIE_1';
	public const PROJECT_1_SERIE_2	= 'PROJECT_1_SERIE_2';
	public const PROJECT_1_SERIE_3	= 'PROJECT_1_SERIE_3';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$serie = new Serie();
				$serie
					->setName("Serie {$j}")
					->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")))
					->setCompany($this->getReference(CompanyFixtures::SUB_CONTRACTOR_COMPANY_0))
					->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_SERIE_BOOL")))
					->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_SERIE_TEXT_" . rand(0, 2))))
					->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_SERIE_REGEX_" . rand(0, 2))))
					->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_SERIE_DATE_" . rand(0, 2))))
					->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_SERIE_LINK_" . rand(0, 2))))
					->addMetadataItem($this->getReference(constant("MetadataItemFixtures::PROJECT_{$i}_METADATA_ITEM_SERIE_" . rand(0, 2))));
				$manager->persist($serie);
				$this->addReference("PROJECT_{$i}_SERIE_{$j}", $serie);
			}

			$serie = new Serie();
			$serie
				->setName("Serie 3")
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")))
				->setCompany($this->getReference(CompanyFixtures::SUB_CONTRACTOR_COMPANY_1));
			$manager->persist($serie);
			$this->addReference("PROJECT_{$i}_SERIE_3", $serie);
		}
		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			ProjectFixtures::class,
			CompanyFixtures::class,
			MetadataValueFixtures::class,
			MetadataItemFixtures::class,
		];
	}
}
