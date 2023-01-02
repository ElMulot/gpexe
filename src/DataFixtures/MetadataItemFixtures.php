<?php

namespace App\DataFixtures;

use App\Entity\MetadataItem;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MetadataItemFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_METADATA_ITEM_SERIE_0	= 'PROJECT_0_METADATA_ITEM_SERIE_0';
	public const PROJECT_0_METADATA_ITEM_SERIE_1	= 'PROJECT_0_METADATA_ITEM_SERIE_1';
	public const PROJECT_0_METADATA_ITEM_SERIE_2	= 'PROJECT_0_METADATA_ITEM_SERIE_2';

	public const PROJECT_0_METADATA_ITEM_DOCUMENT_0	= 'PROJECT_0_METADATA_ITEM_DOCUMENT_0';
	public const PROJECT_0_METADATA_ITEM_DOCUMENT_1	= 'PROJECT_0_METADATA_ITEM_DOCUMENT_1';
	public const PROJECT_0_METADATA_ITEM_DOCUMENT_2	= 'PROJECT_0_METADATA_ITEM_DOCUMENT_2';

	public const PROJECT_0_METADATA_ITEM_VERSION_0	= 'PROJECT_0_METADATA_ITEM_VERSION_0';
	public const PROJECT_0_METADATA_ITEM_VERSION_1	= 'PROJECT_0_METADATA_ITEM_VERSION_1';
	public const PROJECT_0_METADATA_ITEM_VERSION_2	= 'PROJECT_0_METADATA_ITEM_VERSION_2';

	public const PROJECT_1_METADATA_ITEM_SERIE_0	= 'PROJECT_1_METADATA_ITEM_SERIE_0';
	public const PROJECT_1_METADATA_ITEM_SERIE_1	= 'PROJECT_1_METADATA_ITEM_SERIE_1';
	public const PROJECT_1_METADATA_ITEM_SERIE_2	= 'PROJECT_1_METADATA_ITEM_SERIE_2';

	public const PROJECT_1_METADATA_ITEM_DOCUMENT_0	= 'PROJECT_1_METADATA_ITEM_DOCUMENT_0';
	public const PROJECT_1_METADATA_ITEM_DOCUMENT_1	= 'PROJECT_1_METADATA_ITEM_DOCUMENT_1';
	public const PROJECT_1_METADATA_ITEM_DOCUMENT_2	= 'PROJECT_1_METADATA_ITEM_DOCUMENT_2';

	public const PROJECT_1_METADATA_ITEM_VERSION_0	= 'PROJECT_1_METADATA_ITEM_VERSION_0';
	public const PROJECT_1_METADATA_ITEM_VERSION_1	= 'PROJECT_1_METADATA_ITEM_VERSION_1';
	public const PROJECT_1_METADATA_ITEM_VERSION_2	= 'PROJECT_1_METADATA_ITEM_VERSION_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$metadataItem = new MetadataItem();
				$metadataItem
					->setValue("Item serie {$i}{$j}")
					->setMetadata($this->getReference(constant("MetadataFixtures::PROJECT_{$i}_METADATA_SERIE_LIST")));
				$manager->persist($metadataItem);
				$this->addReference("PROJECT_{$i}_METADATA_ITEM_SERIE_{$j}", $metadataItem);

				$metadataItem = new MetadataItem();
				$metadataItem
					->setValue("Item document {$i}{$j}")
					->setMetadata($this->getReference(constant("MetadataFixtures::PROJECT_{$i}_METADATA_DOCUMENT_LIST")));
				$manager->persist($metadataItem);
				$this->addReference("PROJECT_{$i}_METADATA_ITEM_DOCUMENT_{$j}", $metadataItem);

				$metadataItem = new MetadataItem();
				$metadataItem
					->setValue("Item version {$i}{$j}")
					->setMetadata($this->getReference(constant("MetadataFixtures::PROJECT_{$i}_METADATA_VERSION_LIST")));
				$manager->persist($metadataItem);
				$this->addReference("PROJECT_{$i}_METADATA_ITEM_VERSION_{$j}", $metadataItem);
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
