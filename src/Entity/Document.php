<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\DocumentRepository;
use App\Exception\InvalidValueException;
use App\Entity\Enum\CodificationTypeEnum;
use App\Exception\InvalidCodenameException;
use Doctrine\Common\Collections\Collection;
use App\Exception\InvalidReferenceException;
use App\Validator\CodificationIsUnique;
use Doctrine\Common\Collections\ArrayCollection;
use Spatie\Regex\Regex;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DocumentRepository::class)]
class Document extends AbstractElement implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	// #[Assert\NotBlank]
	// #[Assert\Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\ManyToMany(targetEntity: CodificationChoice::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_codification_choice')]
	#[Assert\Valid]
	private Collection $codificationChoices;

	#[ORM\ManyToMany(targetEntity: CodificationElement::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_codification_element')]
	#[Assert\Valid]
	private Collection $codificationElements;

	#[ORM\ManyToMany(targetEntity: MetadataChoice::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_metadata_choice')]
	#[Assert\Valid]
	private Collection $metadataChoices;

	#[ORM\ManyToMany(targetEntity: MetadataElement::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'document_metadata_element')]
	#[Assert\Valid]
	private Collection $metadataElements;

	#[ORM\OneToMany(targetEntity: Version::class, mappedBy: 'document', cascade: ['persist'], orphanRemoval: true)]
	private Collection $versions;

	#[ORM\ManyToOne(inversedBy: 'documents', cascade: ['persist'])]
	private ?Serie $serie = null;

	private $reference;

	public function __construct()
	{
		$this->codificationChoices = new ArrayCollection();
		$this->codificationElements = new ArrayCollection();
		$this->metadataChoices = new ArrayCollection();
		$this->metadataElements = new ArrayCollection();
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
	 * @return Collection|CodificationChoice[]
	 */
	public function getCodificationChoices(): Collection
	{
		return $this->codificationChoices;
	}

	public function addCodificationChoice(CodificationChoice $codificationChoice): self
	{
		if (!$this->codificationChoices->contains($codificationChoice)) {
			$this->codificationChoices[] = $codificationChoice;
			$this->reference = null;
		}

		return $this;
	}

	public function removeCodificationChoice(CodificationChoice $codificationChoice): self
	{
		if ($this->codificationChoices->contains($codificationChoice)) {
			$this->codificationChoices->removeElement($codificationChoice);
			$this->reference = null;
		}

		return $this;
	}
	/**
	 * @return Collection|CodificationElement[]
	 */
	public function getCodificationElements(): Collection
	{
		return $this->codificationElements;
	}

	public function addCodificationElement(CodificationElement $codificationElement): self
	{
		if (!$this->codificationElements->contains($codificationElement)) {
			$this->codificationElements[] = $codificationElement;
			$this->reference = null;
		}
		
		return $this;
	}

	public function removeCodificationElement(CodificationElement $codificationElement): self
	{
		if ($this->codificationElements->contains($codificationElement)) {
			$this->codificationElements->removeElement($codificationElement);
			$this->reference = null;
		}
		
		return $this;
	}

	/**
	 * @return Collection|MetadataChoice[]
	 */
	public function getMetadataChoices(): Collection
	{
		return $this->metadataChoices;
	}

	public function addMetadataChoice(MetadataChoice $metadataChoice): self
	{
		if (!$this->metadataChoices->contains($metadataChoice)) {
			$this->metadataChoices[] = $metadataChoice;
		}
		
		return $this;
	}

	public function removeMetadataChoice(MetadataChoice $metadataChoice): self
	{
		if ($this->metadataChoices->contains($metadataChoice)) {
			$this->metadataChoices->removeElement($metadataChoice);
		}
		
		return $this;
	}

	/**
	 * @return Collection|MetadataElement[]
	 */
	public function getMetadataElements(): Collection
	{
		return $this->metadataElements;
	}

	public function addMetadataElement(MetadataElement $metadataElement): self
	{
		if (!$this->metadataElements->contains($metadataElement)) {
			$this->metadataElements[] = $metadataElement;
		}
		
		return $this;
	}

	public function removeMetadataElement(MetadataElement $metadataElement): self
	{
		if ($this->metadataElements->contains($metadataElement)) {
			$this->metadataElements->removeElement($metadataElement);
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
		
		if ($this->getCodificationChoices()->count() === 0 && $this->getCodificationElements()->count() === 0) {
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
					return $codification->getDefaultValue();
			case CodificationTypeEnum::TEXT:
			case CodificationTypeEnum::REGEX:
				/** @var CodificationElement $codificationElement */
				foreach ($this->getCodificationElements()->getValues() as $codificationElement) {
					if ($codificationElement->getCodification() === $codification) {
						return $codificationElement->getValue();
					}
				}
				break;
				
			case CodificationTypeEnum::LIST:
				/** @var CodificationChoice $codificationChoice */
				foreach ($this->getCodificationChoices()->getValues() as $codificationChoice) {
					if ($codificationChoice->getCodification() === $codification) {
						return $codificationChoice->getValue();
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
		// if ($codification->isRegex() === true && $value !== null && Regex::match('/' . $codification->getPattern() . '/', $value)->hasMatch() === false) {
		// 	throw new InvalidValueException($value, $codification->getFullCodename());
		// }

		//apply default value if empty
		if ($value === null && $codification->getDefaultValue()) {
			$value = $codification->getDefaultValue();
		}

		//check empty value
		// if ($value === '') {
		// 	throw new InvalidValueException($value, $codification->getFullCodename());
		// }

		//update codificationElement or codificationChoice
		switch ($codification->getType()) {
			case CodificationTypeEnum::FIXED:
				return $this;
				
			case CodificationTypeEnum::LIST:
				foreach ($this->getCodificationChoices()->getValues() as $codificationChoice) {
					if ($codificationChoice->getCodification() === $codification) {
						if ($codificationChoice->getValue() === $value) {
							return $this;
						} else {
							$this->removeCodificationChoice($codificationChoice);
						}
					}
				}
				
				foreach ($codification->getCodificationChoices()->getValues() as $codificationChoice) {
					if ($codificationChoice->getValue() === $value) {
						$this->addCodificationChoice($codificationChoice);
						return $this;
					}
				}
				throw new InvalidValueException($value, $codification->getFullCodename());
			
			case CodificationTypeEnum::TEXT:
			case CodificationTypeEnum::REGEX:
				
				foreach ($this->getCodificationElements()->getValues() as $codificationElement) {
					if ($codificationElement->getCodification() === $codification) {
						if ($codificationElement->getValue() === $value) {
							return $this;
						} else {
							$this->removeCodificationElement($codificationElement);
						}
					}
				}

				foreach ($codification->getCodificationElements()->getValues() as $codificationElement) {
					if ($codificationElement->getValue() === $value) {
						$this->addCodificationElement($codificationElement);
						return $this;
					}
				}
				$codificationElement = new CodificationElement();
				$codificationElement->setValue($value);
				$codificationElement->setCodification($codification);
				$this->addCodificationElement($codificationElement);
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
