<?php

namespace App\DataFixtures;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MetadataChoiceFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_METADATA_CHOICE_SERIE_0	= 'PROJECT_0_METADATA_CHOICE_SERIE_0';
	public const PROJECT_0_METADATA_CHOICE_SERIE_1	= 'PROJECT_0_METADATA_CHOICE_SERIE_1';
	public const PROJECT_0_METADATA_CHOICE_SERIE_2	= 'PROJECT_0_METADATA_CHOICE_SERIE_2';

	public const PROJECT_0_METADATA_CHOICE_DOCUMENT_0	= 'PROJECT_0_METADATA_CHOICE_DOCUMENT_0';
	public const PROJECT_0_METADATA_CHOICE_DOCUMENT_1	= 'PROJECT_0_METADATA_CHOICE_DOCUMENT_1';
	public const PROJECT_0_METADATA_CHOICE_DOCUMENT_2	= 'PROJECT_0_METADATA_CHOICE_DOCUMENT_2';

	public const PROJECT_0_METADATA_CHOICE_VERSION_0	= 'PROJECT_0_METADATA_CHOICE_VERSION_0';
	public const PROJECT_0_METADATA_CHOICE_VERSION_1	= 'PROJECT_0_METADATA_CHOICE_VERSION_1';
	public const PROJECT_0_METADATA_CHOICE_VERSION_2	= 'PROJECT_0_METADATA_CHOICE_VERSION_2';

	public const PROJECT_1_METADATA_CHOICE_SERIE_0	= 'PROJECT_1_METADATA_CHOICE_SERIE_0';
	public const PROJECT_1_METADATA_CHOICE_SERIE_1	= 'PROJECT_1_METADATA_CHOICE_SERIE_1';
	public const PROJECT_1_METADATA_CHOICE_SERIE_2	= 'PROJECT_1_METADATA_CHOICE_SERIE_2';

	public const PROJECT_1_METADATA_CHOICE_DOCUMENT_0	= 'PROJECT_1_METADATA_CHOICE_DOCUMENT_0';
	public const PROJECT_1_METADATA_CHOICE_DOCUMENT_1	= 'PROJECT_1_METADATA_CHOICE_DOCUMENT_1';
	public const PROJECT_1_METADATA_CHOICE_DOCUMENT_2	= 'PROJECT_1_METADATA_CHOICE_DOCUMENT_2';

	public const PROJECT_1_METADATA_CHOICE_VERSION_0	= 'PROJECT_1_METADATA_CHOICE_VERSION_0';
	public const PROJECT_1_METADATA_CHOICE_VERSION_1	= 'PROJECT_1_METADATA_CHOICE_VERSION_1';
	public const PROJECT_1_METADATA_CHOICE_VERSION_2	= 'PROJECT_1_METADATA_CHOICE_VERSION_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$metadataChoice = new MetadataChoice();
				$metadataChoice
					->setValue("Item serie {$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_LIST")));
				$manager->persist($metadataChoice);
				$this->addReference("PROJECT_{$i}_METADATA_CHOICE_SERIE_{$j}", $metadataChoice);

				$metadataChoice = new MetadataChoice();
				$metadataChoice
					->setValue("Item document {$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_LIST")));
				$manager->persist($metadataChoice);
				$this->addReference("PROJECT_{$i}_METADATA_CHOICE_DOCUMENT_{$j}", $metadataChoice);

				$metadataChoice = new MetadataChoice();
				$metadataChoice
					->setValue("Item version {$i}{$j}")
					->setMetadata($this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_LIST")));
				$manager->persist($metadataChoice);
				$this->addReference("PROJECT_{$i}_METADATA_CHOICE_VERSION_{$j}", $metadataChoice);
			}
		}
		$manager->flush();

		// $i = 1;
		// $j = 2;

		// /**@var Metadata */
		// $metadata = $this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_SERIE_LIST"));
		// /**@var MetadataChoice */
		// $metadataChoice = $this->getReference("PROJECT_{$i}_METADATA_CHOICE_SERIE_{$j}");
		// $metadata->setDefaultRawValue($metadataChoice->getId());
		// $manager->persist($metadata);
		// $manager->flush();

		// /**@var Metadata */
		// $metadata = $this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_DOCUMENT_LIST"));
		// /**@var MetadataChoice */
		// $metadataChoice = $this->getReference("PROJECT_{$i}_METADATA_CHOICE_DOCUMENT_{$j}");
		// $metadata->setDefaultRawValue($metadataChoice->getId());
		// $manager->persist($metadata);
		// $manager->flush();

		// /**@var Metadata */
		// $metadata = $this->getReference(constant(MetadataFixtures::class . "::PROJECT_{$i}_METADATA_VERSION_LIST"));
		// /**@var MetadataChoice */
		// $metadataChoice = $this->getReference("PROJECT_{$i}_METADATA_CHOICE_VERSION_{$j}");
		// $metadata->setDefaultRawValue($metadataChoice->getId());
		// $manager->persist($metadata);
		// $manager->flush();
	}

	public function getDependencies()
	{
		return [
			MetadataFixtures::class,
		];
	}
}
