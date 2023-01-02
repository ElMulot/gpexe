<?php

namespace App\DataFixtures;

use App\Entity\Codification;
use App\Entity\Enum\CodificationTypeEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CodificationFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_CODIFICATION_FIXED	= 'PROJECT_0_CODIFICATION_FIXED';
	public const PROJECT_0_CODIFICATION_TEXT	= 'PROJECT_0_CODIFICATION_TEXT';
	public const PROJECT_0_CODIFICATION_REGEX	= 'PROJECT_0_CODIFICATION_REGEX';
	public const PROJECT_0_CODIFICATION_LIST	= 'PROJECT_0_CODIFICATION_LIST';

	public const PROJECT_1_CODIFICATION_FIXED	= 'PROJECT_1_CODIFICATION_FIXED';
	public const PROJECT_1_CODIFICATION_TEXT	= 'PROJECT_1_CODIFICATION_TEXT';
	public const PROJECT_1_CODIFICATION_REGEX	= 'PROJECT_1_CODIFICATION_REGEX';
	public const PROJECT_1_CODIFICATION_LIST	= 'PROJECT_1_CODIFICATION_LIST';

	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) { 
			$codification = new Codification();
			$codification
				->setName('Codification fixed')
				->setCodename('codificationFixed')
				->setType(CodificationTypeEnum::FIXED)
				->setValue('TEST')
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($codification);
			$this->addReference("PROJECT_{$i}_CODIFICATION_FIXED", $codification);

			$codification = new Codification();
			$codification
				->setName('Codification text')
				->setCodename('codificationText')
				->setType(CodificationTypeEnum::TEXT)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($codification);
			$this->addReference("PROJECT_{$i}_CODIFICATION_TEXT", $codification);

			$codification = new Codification();
			$codification
				->setName('Codification regex')
				->setCodename('codificationRegex')
				->setType(CodificationTypeEnum::REGEX)
				->setPattern('^\d{2}$')
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($codification);
			$this->addReference("PROJECT_{$i}_CODIFICATION_REGEX", $codification);

			$codification = new Codification();
			$codification
				->setName('Codification list')
				->setCodename('codificationList')
				->setType(CodificationTypeEnum::LIST)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")));
			$manager->persist($codification);
			$this->addReference("PROJECT_{$i}_CODIFICATION_LIST", $codification);
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
