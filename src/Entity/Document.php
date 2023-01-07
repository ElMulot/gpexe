<?php

namespace App\Entity;

use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Exception\InvalidCodenameException;
use App\Exception\InvalidReferenceException;
use App\Exception\InvalidValueException;
use App\Helpers\Date;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Spatie\Regex\Regex;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\DocumentRepository;
use Symfony\Component\Validator\Constraints\NotBlank;

#[ORM\Entity(repositoryClass: DocumentRepository::class)]
class Document extends AbstractElement
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\ManyToMany(targetEntity: CodificationItem::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_codification_item')]
	private Collection $codificationItems;

	#[ORM\ManyToMany(targetEntity: CodificationValue::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_codification_value')]
	private Collection $codificationValues;

	#[ORM\ManyToMany(targetEntity: MetadataItem::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_metadata_item')]
	private Collection $metadataItems;

	#[ORM\ManyToMany(targetEntity: MetadataValue::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_metadata_value')]
	private Collection $metadataValues;

	#[ORM\OneToMany(targetEntity: Version::class, mappedBy: 'document', cascade: ['persist'], orphanRemoval: true)]
	private Collection $versions;

	#[ORM\ManyToOne(inversedBy: 'documents', cascade: ['persist'])]
	private ?Serie $serie = null;

	private $reference;

	public function __construct()
	{
		$this->codificationItems = new ArrayCollection();
		$this->codificationValues = new ArrayCollection();
		$this->metadataItems = new ArrayCollection();
		$this->metadataValues = new ArrayCollection();
		$this->versions = new ArrayCollection();
	}
	public function getId(): ?int
	{
		return $this->id;
	}

	public function getName(): ?string
	{
		return $this->name;
	}

	public function setName(string $name): self
	{
		$this->name = $name;

		return $this;
	}

	/**
	 * @return Collection|CodificationItem[]
	 */
	public function getCodificationItems(): Collection
	{
		return $this->codificationItems;
	}

	public function addCodificationItem(CodificationItem $codificationItem): self
	{
		if (!$this->codificationItems->contains($codificationItem)) {
			$this->codificationItems[] = $codificationItem;
			$this->reference = null;
		}

		return $this;
	}

	public function removeCodificationItem(CodificationItem $codificationItem): self
	{
		if ($this->codificationItems->contains($codificationItem)) {
			$this->codificationItems->removeElement($codificationItem);
			$this->reference = null;
		}

		return $this;
	}
	/**
	 * @return Collection|CodificationValue[]
	 */
	public function getCodificationValues(): Collection
	{
		return $this->codificationValues;
	}

	public function addCodificationValue(CodificationValue $codificationValue): self
	{
		if (!$this->codificationValues->contains($codificationValue)) {
			$this->codificationValues[] = $codificationValue;
			$this->reference = null;
		}
		
		return $this;
	}

	public function removeCodificationValue(CodificationValue $codificationValue): self
	{
		if ($this->codificationValues->contains($codificationValue)) {
			$this->codificationValues->removeElement($codificationValue);
			$this->reference = null;
		}
		
		return $this;
	}

	/**
	 * @return Collection|MetadataItem[]
	 */
	public function getMetadataItems(): Collection
	{
		return $this->metadataItems;
	}

	public function addMetadataItem(MetadataItem $metadataItem): self
	{
		if (!$this->metadataItems->contains($metadataItem)) {
			$this->metadataItems[] = $metadataItem;
		}
		
		return $this;
	}

	public function removeMetadataItem(MetadataItem $metadataItem): self
	{
		if ($this->metadataItems->contains($metadataItem)) {
			$this->metadataItems->removeElement($metadataItem);
		}
		
		return $this;
	}

	/**
	 * @return Collection|MetadataValue[]
	 */
	public function getMetadataValues(): Collection
	{
		return $this->metadataValues;
	}

	public function addMetadataValue(MetadataValue $metadataValue): self
	{
		if (!$this->metadataValues->contains($metadataValue)) {
			$this->metadataValues[] = $metadataValue;
		}
		
		return $this;
	}

	public function removeMetadataValue(MetadataValue $metadataValue): self
	{
		if ($this->metadataValues->contains($metadataValue)) {
			$this->metadataValues->removeElement($metadataValue);
		}
		
		return $this;
	}

	/**
	 * @return Collection|Version[]
	 */
	public function getVersions(): Collection
	{
		return $this->versions;
	}

	public function addVersion(Version $version): self
	{
		if (!$this->versions->contains($version)) {
			$this->versions[] = $version;
			$version->setDocument($this);
		}

		return $this;
	}

	public function removeVersion(Version $version): self
	{
		if ($this->versions->contains($version)) {
			$this->versions->removeElement($version);
			// set the owning side to null (unless already changed)
			if ($version->getDocument() === $this) {
				$version->setDocument(null);
			}
		}

		return $this;
	}

	public function getSerie(): ?Serie
	{
		return $this->serie;
	}

	public function setSerie(?Serie $serie): self
	{
		$this->serie = $serie;
		return $this;
	}

	/**
	 * Get the count of versions of this document
	 *
	 * @return integer
	 */
	public function getVersionsCount(): int
	{
		$count = 0;
		
		foreach ($this->getVersions()->getValues() as $version) {
			if ($version->isRequired() === false && $version->getStatus()->isCancel() === false) {
				$count++;
			}
		}
		
		return $count;
	}

	/**
	 * Get last version of a document
	 *
	 * @return Version|null
	 */
	public function getLastVersion(): ?Version
	{
		
		$lastVersion = null;
		foreach ($this->getVersions()->getValues() as $version) {
			if ($lastVersion === null) {
				$lastVersion = $version;
			} else {
				if ($version->getDate() > $lastVersion->getDate()) {
					$lastVersion = $version;
				} elseif ($version->getDate() === $lastVersion->getDate() && $version->getName() > $lastVersion->getName()) {
					$lastVersion = $version;
				}
			}
		}
		
		return $lastVersion;
	}

	/**
	 * Get the full reference of the document
	 *
	 * @return string|null
	 */
	public function getReference(): ?string
	{
		if ($this->reference !== null) {
			return $this->reference;
		}
		
		if ($this->getCodificationItems()->count() == 0 && $this->getCodificationValues()->count() == 0) {
			return null;
		}
		
		$project = $this->getSerie()->getProject();
		$references = [];
		
		/** @var Codification $codification */
		foreach ($project->getCodifications()->getValues() as $codification) {
			$references[] = $this->getCodificationValue($codification);
		}
		
		$this->reference = join($project->getSplitter(), $references);
		
		return $this->reference;
		
	}

	/**
	 * Set the full reference of the document
	 *
	 * @param string $value
	 * @return self
	 * @throws InvalidReferenceException if the value is empty or not complete
	 */
	public function setReference(string $value): self
	{
		if ($value === '') {
			throw new InvalidReferenceException($value);
		}
		
		$project = $this->getSerie()->getProject();
		$references = explode($project->getSplitter(), $value);
		
		foreach ($project->getCodifications()->getValues() as $codification) {
			
			$value = trim(array_shift($references));
			
			try {
			$this->setCodificationValue($codification, $value);
			} catch (InvalidValueException) {
				throw new InvalidReferenceException($value);
			}
		}
		
		return $this;
	}

	/**
	 * Return codification value as string from Codification object
	 *
	 * @param Codification $codification
	 * @return string
	 * @throws InvalidCodenameException if codification doesn't exist for this document
	 */
	public function getCodificationValue(Codification $codification): string
	{
		
		switch ($codification->getType()) {
			
			case CodificationTypeEnum::FIXED;
					return $codification->getValue();
			case CodificationTypeEnum::REGEX:
				/** @var CodificationValue $codificationValue */
				foreach ($this->getCodificationValues()->getValues() as $codificationValue) {
					if ($codificationValue->getCodification() === $codification) {
						return $codificationValue->getValue();
					}
				}
				break;
				
			case CodificationTypeEnum::LIST:
				/** @var CodificationItem $codificationItem */
				foreach ($this->getCodificationItems()->getValues() as $codificationItem) {
					if ($codificationItem->getCodification() === $codification) {
						return $codificationItem->getValue();
					}
				}
				break;
		}
		
		throw new InvalidCodenameException($codification->getFullCodename());
	}

	/**
	 * Set a value from Codification object
	 *
	 * @param Codification $codification
	 * @param string $value
	 * @return self
	 * @ throws InvalidValueException if the value is not correct
	 */
	public function setCodificationValue(Codification $codification, string $value): self
	{
		//check regex
		if ($codification->isRegex() === true && $value !== null && Regex::match('/' . $codification->getPattern() . '/', $value)->hasMatch() === false) {
			throw new InvalidValueException($value, $codification->getFullCodename());
		}

		//apply default value if empty
		if ($value === null && $codification->getValue()) {
			$value = $codification->getValue();
		}

		//check empty value
		if ($value === '') {
			throw new InvalidValueException($value, $codification->getFullCodename());
		}

		//update codificationValue or codificationItem
		switch ($codification->getType()) {
			case CodificationTypeEnum::FIXED:
				return $this;
				
			case CodificationTypeEnum::LIST:
				foreach ($this->getCodificationItems()->getValues() as $codificationItem) {
					if ($codificationItem->getCodification() === $codification) {
						if ($codificationItem->getValue() === $value) {
							return $this;
						} else {
							$this->removeCodificationItem($codificationItem);
						}
					}
				}
				
				foreach ($codification->getCodificationItems()->getValues() as $codificationItem) {
					if ($codificationItem->getValue() === $value) {
						$this->addCodificationItem($codificationItem);
						return $this;
					}
				}
				throw new InvalidValueException($value, $codification->getFullCodename());
			
			case CodificationTypeEnum::TEXT:
			case CodificationTypeEnum::REGEX:
				
				foreach ($this->getCodificationValues()->getValues() as $codificationValue) {
					if ($codificationValue->getCodification() === $codification) {
						if ($codificationValue->getValue() === $value) {
							return $this;
						} else {
							$this->removeCodificationValue($codificationValue);
						}
					}
				}

				foreach ($codification->getCodificationValues()->getValues() as $codificationValue) {
					if ($codificationValue->getValue() === $value) {
						$this->addCodificationValue($codificationValue);
						return $this;
					}
				}
				$codificationValue = new CodificationValue();
				$codificationValue->setValue($value);
				$codificationValue->setCodification($codification);
				$this->addCodificationValue($codificationValue);
				return $this;
		}
		
		throw new \Error(sprintf('Erreur en écrivant la valeur "%s" dans la codification "%s".', $value, $codification->getCodename()));
	}

	/**
	 * Return any property value based on its full codename
	 * 
	 * @param string $codename
	 * @return mixed
	 */
	public function getPropertyValue(string $codename): mixed
	{
		
		switch ($codename) {
			case 'document.name':
				return $this->getName();
				break;
			case 'document.reference':
				return $this->getReference();
				break;
			case 'document.versionsCount':
				return $this->getVersionsCount();
			default:
				if (Regex::match('/document\.\w+/', $codename)->hasMatch()) {
					/** @var Metadata $metadata */
					foreach ($this->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							return $this->getMetadataValue($metadata);
						}
					}
				} elseif (Regex::match('/codification\.\w+/', $codename)->hasMatch()) {
					/** @var Codification $codification */
					foreach ($this->getSerie()->getProject()->getCodifications()->getValues() as $codification) {
						if ($codification->getFullCodename() === $codename) {
							return $this->getCodificationValue($codification);
						}
					}
				} else {
					return $this->getSerie()->getPropertyValue($codename);
				}
		}
		
		return null;
	}

	/**
	 * Set value from codename string
	 *
	 * @param string $codename
	 * @param mixed $value
	 * @return self
	 */
	public function setPropertyValue(string $codename, mixed $value): self
	{
		
		switch ($codename) {
			
			case 'serie.name':
				/** @var Serie $serie */
				foreach ($this->getSerie()->getProject()->getSeries()->getValues() as $serie) {
					if ($serie->getName() === (string)$value) {
						$this->setSerie($serie);
						return $this;
					}
				}
				break;
				
			case 'document.name':
				$this->setName($value);
				return $this;
				
			case 'document.reference':
				$this->setReference($value);
				return $this;
				
			default:
				if (Regex::match('/document\.\w+/', $codename)->hasMatch() === true) {
					/** @var Metadata $metadata */
					foreach ($this->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							$this->setMetadataValue($metadata, $value);
							return $this;
						}
					}
				} else {
					$this->getSerie()->setPropertyValue($codename, $value);
					return $this;
				}
		}
	}
	
	public function __toString(): string
	{
		return $this->getReference() ?? '';
	}
}
