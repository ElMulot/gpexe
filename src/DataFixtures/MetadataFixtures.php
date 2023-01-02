<?php

namespace App\DataFixtures;

use App\Entity\Enum\MetadataParentEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class MetadataFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_METADATA_SERIE_BOOL		= 'PROJECT_0_METADATA_SERIE_BOOL';
	public const PROJECT_0_METADATA_SERIE_TEXT		= 'PROJECT_0_METADATA_SERIE_TEXT';
	public const PROJECT_0_METADATA_SERIE_REGEX		= 'PROJECT_0_METADATA_SERIE_REGEX';
	public const PROJECT_0_METADATA_SERIE_DATE		= 'PROJECT_0_METADATA_SERIE_DATE';
	public const PROJECT_0_METADATA_SERIE_LINK		= 'PROJECT_0_METADATA_SERIE_LINK';
	public const PROJECT_0_METADATA_SERIE_LIST		= 'PROJECT_0_METADATA_SERIE_LIST';
	public const PROJECT_0_METADATA_DOCUMENT_BOOL	= 'PROJECT_0_METADATA_DOCUMENT_BOOL';
	public const PROJECT_0_METADATA_DOCUMENT_TEXT	= 'PROJECT_0_METADATA_DOCUMENT_TEXT';
	public const PROJECT_0_METADATA_DOCUMENT_REGEX	= 'PROJECT_0_METADATA_DOCUMENT_REGEX';
	public const PROJECT_0_METADATA_DOCUMENT_DATE	= 'PROJECT_0_METADATA_DOCUMENT_DATE';
	public const PROJECT_0_METADATA_DOCUMENT_LINK	= 'PROJECT_0_METADATA_DOCUMENT_LINK';
	public const PROJECT_0_METADATA_DOCUMENT_LIST	= 'PROJECT_0_METADATA_DOCUMENT_LIST';
	public const PROJECT_0_METADATA_VERSION_BOOL	= 'PROJECT_0_METADATA_VERSION_BOOL';
	public const PROJECT_0_METADATA_VERSION_TEXT	= 'PROJECT_0_METADATA_VERSION_TEXT';
	public const PROJECT_0_METADATA_VERSION_REGEX	= 'PROJECT_0_METADATA_VERSION_REGEX';
	public const PROJECT_0_METADATA_VERSION_DATE	= 'PROJECT_0_METADATA_VERSION_DATE';
	public const PROJECT_0_METADATA_VERSION_LINK	= 'PROJECT_0_METADATA_VERSION_LINK';
	public const PROJECT_0_METADATA_VERSION_LIST	= 'PROJECT_0_METADATA_VERSION_LIST';

	public const PROJECT_1_METADATA_SERIE_BOOL		= 'PROJECT_1_METADATA_SERIE_BOOL';
	public const PROJECT_1_METADATA_SERIE_TEXT		= 'PROJECT_1_METADATA_SERIE_TEXT';
	public const PROJECT_1_METADATA_SERIE_REGEX		= 'PROJECT_1_METADATA_SERIE_REGEX';
	public const PROJECT_1_METADATA_SERIE_DATE		= 'PROJECT_1_METADATA_SERIE_DATE';
	public const PROJECT_1_METADATA_SERIE_LINK		= 'PROJECT_1_METADATA_SERIE_LINK';
	public const PROJECT_1_METADATA_SERIE_LIST		= 'PROJECT_1_METADATA_SERIE_LIST';
	public const PROJECT_1_METADATA_DOCUMENT_BOOL	= 'PROJECT_1_METADATA_DOCUMENT_BOOL';
	public const PROJECT_1_METADATA_DOCUMENT_TEXT	= 'PROJECT_1_METADATA_DOCUMENT_TEXT';
	public const PROJECT_1_METADATA_DOCUMENT_REGEX	= 'PROJECT_1_METADATA_DOCUMENT_REGEX';
	public const PROJECT_1_METADATA_DOCUMENT_DATE	= 'PROJECT_1_METADATA_DOCUMENT_DATE';
	public const PROJECT_1_METADATA_DOCUMENT_LINK	= 'PROJECT_1_METADATA_DOCUMENT_LINK';
	public const PROJECT_1_METADATA_DOCUMENT_LIST	= 'PROJECT_1_METADATA_DOCUMENT_LIST';
	public const PROJECT_1_METADATA_VERSION_BOOL	= 'PROJECT_1_METADATA_VERSION_BOOL';
	public const PROJECT_1_METADATA_VERSION_TEXT	= 'PROJECT_1_METADATA_VERSION_TEXT';
	public const PROJECT_1_METADATA_VERSION_REGEX	= 'PROJECT_1_METADATA_VERSION_REGEX';
	public const PROJECT_1_METADATA_VERSION_DATE	= 'PROJECT_1_METADATA_VERSION_DATE';
	public const PROJECT_1_METADATA_VERSION_LINK	= 'PROJECT_1_METADATA_VERSION_LINK';
	public const PROJECT_1_METADATA_VERSION_LIST	= 'PROJECT_1_METADATA_VERSION_LIST';
	
	public function load(ObjectManager $manager)
	{
		for ($i=0; $i<2; $i++) {
			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie bool')
				->setCodename('metadataSerieBool')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::BOOL)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_BOOL", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie text')
				->setCodename('metadataSerieText')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::TEXT)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_TEXT", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie regex')
				->setCodename('metadataSerieRegex')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::REGEX)
				->setPattern('^\w\d{2}$')
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_REGEX", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie date')
				->setCodename('metadataSerieDate')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::DATE)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_DATE", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie link')
				->setCodename('metadataSerieLink')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::LINK)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_LINK", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata serie list')
				->setCodename('metadataSerieList')
				->setParent(MetadataParentEnum::SERIE)
				->setType(MetadataTypeEnum::LIST)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_SERIE_LIST", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document bool')
				->setCodename('metadataDocumentBool')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::BOOL)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_BOOL", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document text')
				->setCodename('metadataDocumentText')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::TEXT)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_TEXT", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document regex')
				->setCodename('metadataDocumentRegex')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::REGEX)
				->setPattern('^\w\d{2}$')
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_REGEX", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document date')
				->setCodename('metadataDocumentDate')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::DATE)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_DATE", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document link')
				->setCodename('metadataDocumentLink')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::LINK)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_LINK", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata document list')
				->setCodename('metadataDocumentList')
				->setParent(MetadataParentEnum::DOCUMENT)
				->setType(MetadataTypeEnum::LIST)
				->setIsMandatory(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_DOCUMENT_LIST", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version bool')
				->setCodename('metadataVersionBool')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::BOOL)
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?true:false)
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_BOOL", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version text')
				->setCodename('metadataVersionText')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::TEXT)
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?'Test':'')
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_TEXT", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version regex')
				->setCodename('metadataVersionRegex')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::REGEX)
				->setPattern('^\w\d{2}$')
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?'A12':'')
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_REGEX", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version date')
				->setCodename('metadataVersionDate')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::DATE)
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?'01-01-1970':'')
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_DATE", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version link')
				->setCodename('metadataVersionLink')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::LINK)
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?'http://example.com/':'')
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_LINK", $metadata);

			$metadata = new Metadata();
			$metadata
				->setName('Metadata version list')
				->setCodename('metadataVersionList')
				->setParent(MetadataParentEnum::VERSION)
				->setType(MetadataTypeEnum::LIST)
				->setIsMandatory(($i === 1)?true:false)
				->setDefault(($i === 1)?'Item version {$i}1':'')
				->setProject($this->getReference(constant("ProjectFixtures::PROJECT_{$i}")));
			$manager->persist($metadata);
			$this->addReference("PROJECT_{$i}_METADATA_VERSION_LIST", $metadata);
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
