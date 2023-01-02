<?php

namespace App\DataFixtures;

use App\Entity\Document;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class DocumentFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_SERIE_0_DOCUMENT_	= 'PROJECT_0_SERIE_0_DOCUMENT_';
	public const PROJECT_0_SERIE_1_DOCUMENT_	= 'PROJECT_0_SERIE_1_DOCUMENT_';
	public const PROJECT_0_SERIE_2_DOCUMENT_	= 'PROJECT_0_SERIE_2_DOCUMENT_';
	public const PROJECT_0_SERIE_3_DOCUMENT_	= 'PROJECT_0_SERIE_3_DOCUMENT_';

	public const PROJECT_1_SERIE_0_DOCUMENT_	= 'PROJECT_1_SERIE_0_DOCUMENT_';
	public const PROJECT_1_SERIE_1_DOCUMENT_	= 'PROJECT_1_SERIE_1_DOCUMENT_';
	public const PROJECT_1_SERIE_2_DOCUMENT_	= 'PROJECT_1_SERIE_2_DOCUMENT_';
	public const PROJECT_1_SERIE_3_DOCUMENT_	= 'PROJECT_1_SERIE_3_DOCUMENT_';

	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<4; $j++) {
				
				for ($k=0; $k<9; $k++) {

					$a = floor($k / 3);
					$b = $k % 3;

					$document = new Document();
					$document
						->setName("Document {$k}")
						->setSerie($this->getReference(constant("SerieFixtures::PROJECT_{$i}_SERIE_{$j}")))
						->addCodificationValue($this->getReference(constant("CodificationValueFixtures::PROJECT_{$i}_CODIFICATION_VALUE_TEXT_" . $a)))
						->addCodificationValue($this->getReference(constant("CodificationValueFixtures::PROJECT_{$i}_CODIFICATION_VALUE_REGEX_" . $b)))
						->addCodificationItem($this->getReference(constant("CodificationValueFixtures::PROJECT_{$i}_CODIFICATION_ITEM_" . $b)))
						->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_DOCUMENT_BOOL")))
						->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_DOCUMENT_TEXT_" . rand(0, 2))))
						->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_DOCUMENT_REGEX_" . rand(0, 2))))
						->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_DOCUMENT_DATE_" . rand(0, 2))))
						->addMetadataValue($this->getReference(constant("MetadataValueFixtures::PROJECT_{$i}_METADATA_VALUE_DOCUMENT_LINK_" . rand(0, 2))))
						->addMetadataItem($this->getReference(constant("MetadataItemFixtures::PROJECT_{$i}_METADATA_ITEM_DOCUMENT_" . rand(0, 2))));
					$manager->persist($document);
					$this->addReference(constant("self::PROJECT_{$i}_SERIE_{$j}_DOCUMENT_") . $k, $document);
				}
			}
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
