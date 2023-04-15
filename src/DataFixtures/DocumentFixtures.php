<?php

namespace App\DataFixtures;

use App\Entity\Document;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class DocumentFixtures extends Fixture implements DependentFixtureInterface
{
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<4; $j++) {
				
				for ($k=0; $k<9; $k++) {

					$a = floor($k / 3);
					$b = $k % 3;
					$document = new Document();
					$document
						->setName("Document {$i}-{$j}-{$k}")
						->setSerie($this->getReference(constant(SerieFixtures::class. "::PROJECT_{$i}_SERIE_{$j}")))
						->addCodificationElement($this->getReference(constant(CodificationElementFixtures::class . "::PROJECT_{$i}_CODIFICATION_ELEMENT_TEXT_0")))
						->addCodificationElement($this->getReference(constant(CodificationElementFixtures::class . "::PROJECT_{$i}_CODIFICATION_ELEMENT_REGEX_{$a}")))
						->addCodificationChoice($this->getReference(constant(CodificationChoiceFixtures::class . "::PROJECT_{$i}_CODIFICATION_CHOICE_{$b}")))
						->addMetadataElement($this->getReference(constant(MetadataElementFixtures::class . "::PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_BOOL")))
						->addMetadataElement($this->getReference(constant(MetadataElementFixtures::class . "::PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_TEXT_" . rand(0, 2))))
						->addMetadataElement($this->getReference(constant(MetadataElementFixtures::class . "::PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_REGEX_" . rand(0, 2))))
						->addMetadataElement($this->getReference(constant(MetadataElementFixtures::class . "::PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_DATE_" . rand(0, 2))))
						->addMetadataElement($this->getReference(constant(MetadataElementFixtures::class . "::PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_LINK_" . rand(0, 2))))
						->addMetadataChoice($this->getReference(constant(MetadataChoiceFixtures::class . "::PROJECT_{$i}_METADATA_CHOICE_DOCUMENT_" . rand(0, 2))));
					$manager->persist($document);
					$this->addReference("PROJECT_{$i}_SERIE_{$j}_DOCUMENT_{$k}", $document);
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
			MetadataElementFixtures::class,
			MetadataChoiceFixtures::class,
		];
	}
}
