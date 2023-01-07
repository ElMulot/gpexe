<?php

namespace App\DataFixtures;

use App\Entity\Version;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class VersionFixtures extends Fixture implements DependentFixtureInterface
{

	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<4; $j++) {
				
				for ($k=0; $k<9; $k++) {

					for ($n=0; $n<rand(1, 3); $n++) {

						$date = new \DateTime($n+1 . '-' . $k+1 . '-1970');
						$status = match($n) {
							0 => $this->getReference(constant(StatusFixtures::class . "::PROJECT_{$i}_INFORMATION_STATUS")),
							1 => $this->getReference(constant(StatusFixtures::class . "::PROJECT_{$i}_REVIEW_STATUS")),
							2 => $this->getReference(constant(StatusFixtures::class . "::PROJECT_{$i}_AS_BUILT_STATUS")),
						};

						$version = new Version();
						$version
							->setName("0{$n}")
							->setDocument($this->getReference("PROJECT_{$i}_SERIE_{$j}_DOCUMENT_{$k}"))
							->setRequired((bool)rand(0, 1))
							->setWriter($this->getReference(constant(UserFixtures::class . "::SUB_CONTRACTOR_USER_" . rand(0, 2))))
							->setChecker($this->getReference(UserFixtures::EDIT_DOCUMENTS_USER))
							->setApprover($this->getReference(UserFixtures::CONTROLLER_USER))
							->setDate($date)
							->setStatus($status)
							->addMetadataValue($this->getReference(constant(MetadataValueFixtures::class . "::PROJECT_{$i}_METADATA_VALUE_VERSION_BOOL")))
							->addMetadataValue($this->getReference(constant(MetadataValueFixtures::class . "::PROJECT_{$i}_METADATA_VALUE_VERSION_TEXT_" . rand(0, 2))))
							->addMetadataValue($this->getReference(constant(MetadataValueFixtures::class . "::PROJECT_{$i}_METADATA_VALUE_VERSION_REGEX_" . rand(0, 2))))
							->addMetadataValue($this->getReference(constant(MetadataValueFixtures::class . "::PROJECT_{$i}_METADATA_VALUE_VERSION_DATE_" . rand(0, 2))))
							->addMetadataValue($this->getReference(constant(MetadataValueFixtures::class . "::PROJECT_{$i}_METADATA_VALUE_VERSION_LINK_" . rand(0, 2))))
							->addMetadataItem($this->getReference(constant(MetadataItemFixtures::class . "::PROJECT_{$i}_METADATA_ITEM_VERSION_" . rand(0, 2))));
						$manager->persist($version);
						$this->addReference("PROJECT_{$i}_SERIE_{$j}_VERSION_{$k}{$n}", $version);
					}
				}
			}
		}
		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			DocumentFixtures::class,
			UserFixtures::class,
			StatusFixtures::class,
			MetadataValueFixtures::class,
			MetadataItemFixtures::class,
		];
	}
}
