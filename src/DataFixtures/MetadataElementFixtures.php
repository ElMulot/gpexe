<?php

namespace App\DataFixtures;

use App\Entity\MetadataElement;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MetadataElementFixtures extends Fixture implements DependentFixtureInterface
{	
	public const PROJECT_0_METADATA_ELEMENT_SERIE_BOOL		= 'PROJECT_0_METADATA_ELEMENT_SERIE_BOOL';
	
	public const PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_0		= 'PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_0';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_1		= 'PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_1';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_2		= 'PROJECT_0_METADATA_ELEMENT_SERIE_TEXT_2';

	public const PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_0		= 'PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_0';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_1		= 'PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_1';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_2		= 'PROJECT_0_METADATA_ELEMENT_SERIE_REGEX_2';

	public const PROJECT_0_METADATA_ELEMENT_SERIE_DATE_0		= 'PROJECT_0_METADATA_ELEMENT_SERIE_DATE_0';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_DATE_1		= 'PROJECT_0_METADATA_ELEMENT_SERIE_DATE_1';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_DATE_2		= 'PROJECT_0_METADATA_ELEMENT_SERIE_DATE_2';

	public const PROJECT_0_METADATA_ELEMENT_SERIE_LINK_0		= 'PROJECT_0_METADATA_ELEMENT_SERIE_LINK_0';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_LINK_1		= 'PROJECT_0_METADATA_ELEMENT_SERIE_LINK_1';
	public const PROJECT_0_METADATA_ELEMENT_SERIE_LINK_2		= 'PROJECT_0_METADATA_ELEMENT_SERIE_LINK_2';

	//------

	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_BOOL		= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_BOOL';

	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_0	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_0';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_1	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_1';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_2	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_TEXT_2';

	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_0	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_0';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_1	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_1';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_2	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_REGEX_2';

	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_0	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_0';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_1	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_1';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_2	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_DATE_2';

	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_0	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_0';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_1	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_1';
	public const PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_2	= 'PROJECT_0_METADATA_ELEMENT_DOCUMENT_LINK_2';

	//------

	public const PROJECT_0_METADATA_ELEMENT_VERSION_BOOL		= 'PROJECT_0_METADATA_ELEMENT_VERSION_BOOL';

	public const PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_0	= 'PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_0';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_1	= 'PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_1';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_2	= 'PROJECT_0_METADATA_ELEMENT_VERSION_TEXT_2';

	public const PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_0	= 'PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_0';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_1	= 'PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_1';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_2	= 'PROJECT_0_METADATA_ELEMENT_VERSION_REGEX_2';

	public const PROJECT_0_METADATA_ELEMENT_VERSION_DATE_0	= 'PROJECT_0_METADATA_ELEMENT_VERSION_DATE_0';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_DATE_1	= 'PROJECT_0_METADATA_ELEMENT_VERSION_DATE_1';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_DATE_2	= 'PROJECT_0_METADATA_ELEMENT_VERSION_DATE_2';

	public const PROJECT_0_METADATA_ELEMENT_VERSION_LINK_0	= 'PROJECT_0_METADATA_ELEMENT_VERSION_LINK_0';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_LINK_1	= 'PROJECT_0_METADATA_ELEMENT_VERSION_LINK_1';
	public const PROJECT_0_METADATA_ELEMENT_VERSION_LINK_2	= 'PROJECT_0_METADATA_ELEMENT_VERSION_LINK_2';

	//------

	public const PROJECT_1_METADATA_ELEMENT_SERIE_BOOL		= 'PROJECT_1_METADATA_ELEMENT_SERIE_BOOL';

	public const PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_0		= 'PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_0';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_1		= 'PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_1';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_2		= 'PROJECT_1_METADATA_ELEMENT_SERIE_TEXT_2';

	public const PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_0		= 'PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_0';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_1		= 'PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_1';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_2		= 'PROJECT_1_METADATA_ELEMENT_SERIE_REGEX_2';

	public const PROJECT_1_METADATA_ELEMENT_SERIE_DATE_0		= 'PROJECT_1_METADATA_ELEMENT_SERIE_DATE_0';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_DATE_1		= 'PROJECT_1_METADATA_ELEMENT_SERIE_DATE_1';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_DATE_2		= 'PROJECT_1_METADATA_ELEMENT_SERIE_DATE_2';

	public const PROJECT_1_METADATA_ELEMENT_SERIE_LINK_0		= 'PROJECT_1_METADATA_ELEMENT_SERIE_LINK_0';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_LINK_1		= 'PROJECT_1_METADATA_ELEMENT_SERIE_LINK_1';
	public const PROJECT_1_METADATA_ELEMENT_SERIE_LINK_2		= 'PROJECT_1_METADATA_ELEMENT_SERIE_LINK_2';

	//------

	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_BOOL		= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_BOOL';

	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_0	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_0';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_1	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_1';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_2	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_TEXT_2';

	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_0	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_0';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_1	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_1';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_2	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_REGEX_2';

	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_0	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_0';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_1	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_1';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_2	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_DATE_2';

	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_0	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_0';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_1	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_1';
	public const PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_2	= 'PROJECT_1_METADATA_ELEMENT_DOCUMENT_LINK_2';

	//------

	public const PROJECT_1_METADATA_ELEMENT_VERSION_BOOL		= 'PROJECT_1_METADATA_ELEMENT_VERSION_BOOL';
	
	public const PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_0	= 'PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_0';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_1	= 'PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_1';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_2	= 'PROJECT_1_METADATA_ELEMENT_VERSION_TEXT_2';

	public const PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_0	= 'PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_0';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_1	= 'PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_1';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_2	= 'PROJECT_1_METADATA_ELEMENT_VERSION_REGEX_2';

	public const PROJECT_1_METADATA_ELEMENT_VERSION_DATE_0	= 'PROJECT_1_METADATA_ELEMENT_VERSION_DATE_0';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_DATE_1	= 'PROJECT_1_METADATA_ELEMENT_VERSION_DATE_1';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_DATE_2	= 'PROJECT_1_METADATA_ELEMENT_VERSION_DATE_2';

	public const PROJECT_1_METADATA_ELEMENT_VERSION_LINK_0	= 'PROJECT_1_METADATA_ELEMENT_VERSION_LINK_0';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_LINK_1	= 'PROJECT_1_METADATA_ELEMENT_VERSION_LINK_1';
	public const PROJECT_1_METADATA_ELEMENT_VERSION_LINK_2	= 'PROJECT_1_METADATA_ELEMENT_VERSION_LINK_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {

			$metadataElement = new MetadataElement();
			$metadataElement
				->setRawValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_BOOL")));
			$manager->persist($metadataElement);
			$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_SERIE_BOOL", $metadataElement);

			$metadataElement = new MetadataElement();
			$metadataElement
				->setRawValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_BOOL")));
			$manager->persist($metadataElement);
			$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_BOOL", $metadataElement);

			$metadataElement = new MetadataElement();
			$metadataElement
				->setRawValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_BOOL")));
			$manager->persist($metadataElement);
			$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_VERSION_BOOL", $metadataElement);

			for ($j=0; $j<3; $j++) {
				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_TEXT")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_SERIE_TEXT_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_REGEX")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_SERIE_REGEX_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_DATE")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_SERIE_DATE_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_LINK")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_SERIE_LINK_{$j}", $metadataElement);

				//--------

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_TEXT")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_TEXT_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_REGEX")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_REGEX_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_DATE")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_DATE_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_LINK")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_DOCUMENT_LINK_{$j}", $metadataElement);

				//--------

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_TEXT")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_VERSION_TEXT_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_REGEX")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_VERSION_REGEX_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_DATE")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_VERSION_DATE_{$j}", $metadataElement);

				$metadataElement = new MetadataElement();
				$metadataElement
					->setRawValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_LINK")));
				$manager->persist($metadataElement);
				$this->addReference("PROJECT_{$i}_METADATA_ELEMENT_VERSION_LINK_{$j}", $metadataElement);

			}
		}

		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			MetadataFixtures::class,
		];
	}
}
