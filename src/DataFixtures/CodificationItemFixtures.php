<?php

namespace App\DataFixtures;

use App\Entity\CodificationItem;
use App\Entity\MetadataItem;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CodificationItemFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_CODIFICATION_ITEM_0	= 'PROJECT_0_CODIFICATION_ITEM_0';
	public const PROJECT_0_CODIFICATION_ITEM_1	= 'PROJECT_0_CODIFICATION_ITEM_1';
	public const PROJECT_0_CODIFICATION_ITEM_2	= 'PROJECT_0_CODIFICATION_ITEM_2';

	public const PROJECT_1_CODIFICATION_ITEM_0	= 'PROJECT_1_CODIFICATION_ITEM_0';
	public const PROJECT_1_CODIFICATION_ITEM_1	= 'PROJECT_1_CODIFICATION_ITEM_1';
	public const PROJECT_1_CODIFICATION_ITEM_2	= 'PROJECT_1_CODIFICATION_ITEM_2';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<3; $j++) {
				$codificationItem = new CodificationItem();
				$codificationItem
					->setName("Item {$i}{$j}")
					->setValue("Item_{$i}{$j}")
					->setCodification($this->getReference(constant("CodificationFixtures::PROJECT_{$i}_CODIFICATION_LIST")));
				$manager->persist($codificationItem);
				$this->addReference("PROJECT_{$i}_CODIFICATION_ITEM_{$j}", $codificationItem);
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
