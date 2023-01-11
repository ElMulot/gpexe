<?php

namespace App\DataFixtures;

use App\Entity\Enum\StatusTypeEnum;
use App\Entity\Status;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class StatusFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_REVIEW_STATUS		= 'PROJECT_0_REVIEW_STATUS';
	public const PROJECT_0_INFORMATION_STATUS	= 'PROJECT_0_INFORMATION_STATUS';
	public const PROJECT_0_CANCEL_STATUS		= 'PROJECT_0_CANCEL_STATUS';
	public const PROJECT_0_AS_BUILT_STATUS		= 'PROJECT_0_AS_BUILT_STATUS';
	public const PROJECT_1_REVIEW_STATUS		= 'PROJECT_1_REVIEW_STATUS';
	public const PROJECT_1_INFORMATION_STATUS	= 'PROJECT_1_INFORMATION_STATUS';
	public const PROJECT_1_CANCEL_STATUS		= 'PROJECT_1_CANCEL_STATUS';
	public const PROJECT_1_AS_BUILT_STATUS		= 'PROJECT_1_AS_BUILT_STATUS';

	public function load(ObjectManager $manager): void
	{
		for ($i=0; $i<2; $i++) {
			
			$status = new Status();
			$status
			->setName('Review')
			->setValue('REV')
			->setType(StatusTypeEnum::REVIEW)
			->setDefault(true)
			->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($status);
			$this->addReference("PROJECT_{$i}_REVIEW_STATUS", $status);
			
			$status = new Status();
			$status
				->setName('Information')
				->setValue('INF')
				->setType(StatusTypeEnum::INFORMATION)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($status);
			$this->addReference("PROJECT_{$i}_INFORMATION_STATUS", $status);

			$status = new Status();
			$status
				->setName('Cancel')
				->setValue('CNL')
				->setType(StatusTypeEnum::CANCEL)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($status);
			$this->addReference("PROJECT_{$i}_CANCEL_STATUS", $status);

			$status = new Status();
			$status
				->setName('As Built')
				->setValue('BLT')
				->setType(StatusTypeEnum::AS_BUILT)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($status);
			$this->addReference("PROJECT_{$i}_AS_BUILT_STATUS", $status);

		}

		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			ProjectFixtures::class,
		];
	}
}
