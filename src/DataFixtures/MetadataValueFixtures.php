<?php

namespace App\DataFixtures;

use App\Entity\MetadataValue;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MetadataValueFixtures extends Fixture implements DependentFixtureInterface
{	
	public const PROJECT_0_METADATA_VALUE_SERIE_BOOL		= 'PROJECT_0_METADATA_VALUE_SERIE_BOOL';
	
	public const PROJECT_0_METADATA_VALUE_SERIE_TEXT_0		= 'PROJECT_0_METADATA_VALUE_SERIE_TEXT_0';
	public const PROJECT_0_METADATA_VALUE_SERIE_TEXT_1		= 'PROJECT_0_METADATA_VALUE_SERIE_TEXT_1';
	public const PROJECT_0_METADATA_VALUE_SERIE_TEXT_2		= 'PROJECT_0_METADATA_VALUE_SERIE_TEXT_2';

	public const PROJECT_0_METADATA_VALUE_SERIE_REGEX_0		= 'PROJECT_0_METADATA_VALUE_SERIE_REGEX_0';
	public const PROJECT_0_METADATA_VALUE_SERIE_REGEX_1		= 'PROJECT_0_METADATA_VALUE_SERIE_REGEX_1';
	public const PROJECT_0_METADATA_VALUE_SERIE_REGEX_2		= 'PROJECT_0_METADATA_VALUE_SERIE_REGEX_2';

	public const PROJECT_0_METADATA_VALUE_SERIE_DATE_0		= 'PROJECT_0_METADATA_VALUE_SERIE_DATE_0';
	public const PROJECT_0_METADATA_VALUE_SERIE_DATE_1		= 'PROJECT_0_METADATA_VALUE_SERIE_DATE_1';
	public const PROJECT_0_METADATA_VALUE_SERIE_DATE_2		= 'PROJECT_0_METADATA_VALUE_SERIE_DATE_2';

	public const PROJECT_0_METADATA_VALUE_SERIE_LINK_0		= 'PROJECT_0_METADATA_VALUE_SERIE_LINK_0';
	public const PROJECT_0_METADATA_VALUE_SERIE_LINK_1		= 'PROJECT_0_METADATA_VALUE_SERIE_LINK_1';
	public const PROJECT_0_METADATA_VALUE_SERIE_LINK_2		= 'PROJECT_0_METADATA_VALUE_SERIE_LINK_2';

	//------

	public const PROJECT_0_METADATA_VALUE_DOCUMENT_BOOL		= 'PROJECT_0_METADATA_VALUE_DOCUMENT_BOOL';

	public const PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_0	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_0';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_1	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_1';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_2	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_TEXT_2';

	public const PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_0	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_0';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_1	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_1';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_2	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_REGEX_2';

	public const PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_0	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_0';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_1	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_1';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_2	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_DATE_2';

	public const PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_0	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_0';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_1	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_1';
	public const PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_2	= 'PROJECT_0_METADATA_VALUE_DOCUMENT_LINK_2';

	//------

	public const PROJECT_0_METADATA_VALUE_VERSION_BOOL		= 'PROJECT_0_METADATA_VALUE_VERSION_BOOL';

	public const PROJECT_0_METADATA_VALUE_VERSION_TEXT_0	= 'PROJECT_0_METADATA_VALUE_VERSION_TEXT_0';
	public const PROJECT_0_METADATA_VALUE_VERSION_TEXT_1	= 'PROJECT_0_METADATA_VALUE_VERSION_TEXT_1';
	public const PROJECT_0_METADATA_VALUE_VERSION_TEXT_2	= 'PROJECT_0_METADATA_VALUE_VERSION_TEXT_2';

	public const PROJECT_0_METADATA_VALUE_VERSION_REGEX_0	= 'PROJECT_0_METADATA_VALUE_VERSION_REGEX_0';
	public const PROJECT_0_METADATA_VALUE_VERSION_REGEX_1	= 'PROJECT_0_METADATA_VALUE_VERSION_REGEX_1';
	public const PROJECT_0_METADATA_VALUE_VERSION_REGEX_2	= 'PROJECT_0_METADATA_VALUE_VERSION_REGEX_2';

	public const PROJECT_0_METADATA_VALUE_VERSION_DATE_0	= 'PROJECT_0_METADATA_VALUE_VERSION_DATE_0';
	public const PROJECT_0_METADATA_VALUE_VERSION_DATE_1	= 'PROJECT_0_METADATA_VALUE_VERSION_DATE_1';
	public const PROJECT_0_METADATA_VALUE_VERSION_DATE_2	= 'PROJECT_0_METADATA_VALUE_VERSION_DATE_2';

	public const PROJECT_0_METADATA_VALUE_VERSION_LINK_0	= 'PROJECT_0_METADATA_VALUE_VERSION_LINK_0';
	public const PROJECT_0_METADATA_VALUE_VERSION_LINK_1	= 'PROJECT_0_METADATA_VALUE_VERSION_LINK_1';
	public const PROJECT_0_METADATA_VALUE_VERSION_LINK_2	= 'PROJECT_0_METADATA_VALUE_VERSION_LINK_2';

	//------

	public const PROJECT_1_METADATA_VALUE_SERIE_BOOL		= 'PROJECT_1_METADATA_VALUE_SERIE_BOOL';

	public const PROJECT_1_METADATA_VALUE_SERIE_TEXT_0		= 'PROJECT_1_METADATA_VALUE_SERIE_TEXT_0';
	public const PROJECT_1_METADATA_VALUE_SERIE_TEXT_1		= 'PROJECT_1_METADATA_VALUE_SERIE_TEXT_1';
	public const PROJECT_1_METADATA_VALUE_SERIE_TEXT_2		= 'PROJECT_1_METADATA_VALUE_SERIE_TEXT_2';

	public const PROJECT_1_METADATA_VALUE_SERIE_REGEX_0		= 'PROJECT_1_METADATA_VALUE_SERIE_REGEX_0';
	public const PROJECT_1_METADATA_VALUE_SERIE_REGEX_1		= 'PROJECT_1_METADATA_VALUE_SERIE_REGEX_1';
	public const PROJECT_1_METADATA_VALUE_SERIE_REGEX_2		= 'PROJECT_1_METADATA_VALUE_SERIE_REGEX_2';

	public const PROJECT_1_METADATA_VALUE_SERIE_DATE_0		= 'PROJECT_1_METADATA_VALUE_SERIE_DATE_0';
	public const PROJECT_1_METADATA_VALUE_SERIE_DATE_1		= 'PROJECT_1_METADATA_VALUE_SERIE_DATE_1';
	public const PROJECT_1_METADATA_VALUE_SERIE_DATE_2		= 'PROJECT_1_METADATA_VALUE_SERIE_DATE_2';

	public const PROJECT_1_METADATA_VALUE_SERIE_LINK_0		= 'PROJECT_1_METADATA_VALUE_SERIE_LINK_0';
	public const PROJECT_1_METADATA_VALUE_SERIE_LINK_1		= 'PROJECT_1_METADATA_VALUE_SERIE_LINK_1';
	public const PROJECT_1_METADATA_VALUE_SERIE_LINK_2		= 'PROJECT_1_METADATA_VALUE_SERIE_LINK_2';

	//------

	public const PROJECT_1_METADATA_VALUE_DOCUMENT_BOOL		= 'PROJECT_1_METADATA_VALUE_DOCUMENT_BOOL';

	public const PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_0	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_0';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_1	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_1';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_2	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_TEXT_2';

	public const PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_0	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_0';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_1	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_1';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_2	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_REGEX_2';

	public const PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_0	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_0';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_1	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_1';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_2	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_DATE_2';

	public const PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_0	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_0';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_1	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_1';
	public const PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_2	= 'PROJECT_1_METADATA_VALUE_DOCUMENT_LINK_2';

	//------

	public const PROJECT_1_METADATA_VALUE_VERSION_BOOL		= 'PROJECT_1_METADATA_VALUE_VERSION_BOOL';
	
	public const PROJECT_1_METADATA_VALUE_VERSION_TEXT_0	= 'PROJECT_1_METADATA_VALUE_VERSION_TEXT_0';
	public const PROJECT_1_METADATA_VALUE_VERSION_TEXT_1	= 'PROJECT_1_METADATA_VALUE_VERSION_TEXT_1';
	public const PROJECT_1_METADATA_VALUE_VERSION_TEXT_2	= 'PROJECT_1_METADATA_VALUE_VERSION_TEXT_2';

	public const PROJECT_1_METADATA_VALUE_VERSION_REGEX_0	= 'PROJECT_1_METADATA_VALUE_VERSION_REGEX_0';
	public const PROJECT_1_METADATA_VALUE_VERSION_REGEX_1	= 'PROJECT_1_METADATA_VALUE_VERSION_REGEX_1';
	public const PROJECT_1_METADATA_VALUE_VERSION_REGEX_2	= 'PROJECT_1_METADATA_VALUE_VERSION_REGEX_2';

	public const PROJECT_1_METADATA_VALUE_VERSION_DATE_0	= 'PROJECT_1_METADATA_VALUE_VERSION_DATE_0';
	public const PROJECT_1_METADATA_VALUE_VERSION_DATE_1	= 'PROJECT_1_METADATA_VALUE_VERSION_DATE_1';
	public const PROJECT_1_METADATA_VALUE_VERSION_DATE_2	= 'PROJECT_1_METADATA_VALUE_VERSION_DATE_2';

	public const PROJECT_1_METADATA_VALUE_VERSION_LINK_0	= 'PROJECT_1_METADATA_VALUE_VERSION_LINK_0';
	public const PROJECT_1_METADATA_VALUE_VERSION_LINK_1	= 'PROJECT_1_METADATA_VALUE_VERSION_LINK_1';
	public const PROJECT_1_METADATA_VALUE_VERSION_LINK_2	= 'PROJECT_1_METADATA_VALUE_VERSION_LINK_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {

			$metadataValue = new MetadataValue();
			$metadataValue
				->setValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_BOOL")));
			$manager->persist($metadataValue);
			$this->addReference("PROJECT_{$i}_METADATA_VALUE_SERIE_BOOL", $metadataValue);

			$metadataValue = new MetadataValue();
			$metadataValue
				->setValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_BOOL")));
			$manager->persist($metadataValue);
			$this->addReference("PROJECT_{$i}_METADATA_VALUE_DOCUMENT_BOOL", $metadataValue);

			$metadataValue = new MetadataValue();
			$metadataValue
				->setValue("1")
				->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_BOOL")));
			$manager->persist($metadataValue);
			$this->addReference("PROJECT_{$i}_METADATA_VALUE_VERSION_BOOL", $metadataValue);

			for ($j=0; $j<3; $j++) {
				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_TEXT")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_SERIE_TEXT_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_REGEX")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_SERIE_REGEX_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_DATE")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_SERIE_DATE_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_LINK")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_SERIE_LINK_{$j}", $metadataValue);

				//--------

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_TEXT")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_DOCUMENT_TEXT_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_REGEX")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_DOCUMENT_REGEX_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_DATE")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_DOCUMENT_DATE_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_LINK")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_DOCUMENT_LINK_{$j}", $metadataValue);

				//--------

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("Item_{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_TEXT")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_VERSION_TEXT_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("I{$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_REGEX")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_VERSION_REGEX_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("0{$i}-0{$j}-1970")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_DATE")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_VERSION_DATE_{$j}", $metadataValue);

				$metadataValue = new MetadataValue();
				$metadataValue
					->setValue("http://example.com/?project={$i}&value={$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_LINK")));
				$manager->persist($metadataValue);
				$this->addReference("PROJECT_{$i}_METADATA_VALUE_VERSION_LINK_{$j}", $metadataValue);

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
