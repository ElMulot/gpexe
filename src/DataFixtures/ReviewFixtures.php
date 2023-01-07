<?php

namespace App\DataFixtures;

use App\Entity\Review;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ReviewFixtures extends Fixture implements DependentFixtureInterface
{
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			for ($j=0; $j<4; $j++) {
				
				for ($k=0; $k<9; $k++) {

					$date = new \DateTime("05-{$k}-1970");
					$visas = [$this->getReference(constant(VisaFixtures::class . "::PROJECT_{$i}_MAIN_CONTRACTOR_VISA_NO")),
						$this->getReference(constant(VisaFixtures::class . "::PROJECT_{$i}_MAIN_CONTRACTOR_VISA_NO"))];

					$review = new Review();
					$review
						->setDate($date)
						->setUser($this->getReference(UserFixtures::EDIT_DOCUMENTS_USER))
						->setVersion($this->getReference("PROJECT_{$i}_SERIE_{$j}_VERSION_{$k}0"))
						->setVisa($visas[array_rand($visas)]);
					$manager->persist($review);
				}
			}
		}
		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			VisaFixtures::class,
			UserFixtures::class,
			VersionFixtures::class,
		];
	}
}
