<?php

namespace App\Entity;

use App\Entity\Project;
use App\Entity\MetadataChoice;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Enum\MetadataTypeEnum;
use App\Repository\MetadataRepository;
use App\Entity\Enum\MetadataParentEnum;
use App\Validator\IsValid;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: MetadataRepository::class)]
#[UniqueEntity(
	fields: ['codename', 'project']
)]
class Metadata implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	#[Assert\NotBlank]
	#[Assert\Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\Column(length: 100)]
	#[Assert\NotBlank]
	#[Assert\Regex('/^\w+$/')]
	#[Assert\NotEqualTo('name')]
	#[Assert\NotEqualTo('reference')]
	#[Assert\NotEqualTo('initialScheduleDate')]
	#[Assert\NotEqualTo('scheduleDate')]
	#[Assert\NotEqualTo('deliveryDate')]
	#[Assert\NotEqualTo('date')]
	#[Assert\NotEqualTo('required')]
	#[Assert\NotEqualTo('writer')]
	#[Assert\NotEqualTo('checker')]
	#[Assert\NotEqualTo('approver')]
	#[Assert\NotEqualTo('reference')]
	#[Assert\NotEqualTo('company')]
	private ?string $codename = null;

	#[ORM\Column(type: 'string', enumType: MetadataTypeEnum::class)]
	private ?MetadataTypeEnum $type = null;

	#[ORM\Column]
	private ?bool $mandatory = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $pattern = null;

	#[ORM\Column(length: 255, nullable: true)]
	#[IsValid]
	private ?string $defaultRawValue = null;

	#[ORM\Column(type: 'string', enumType: MetadataParentEnum::class)]
	private ?MetadataParentEnum $parent = null;

	#[ORM\ManyToOne(inversedBy: 'metadatas', cascade:["persist"], fetch: 'EAGER')]
	private ?Project $project = null;

	#[ORM\OneToMany(targetEntity: MetadataChoice::class, mappedBy: 'metadata', orphanRemoval: true)]
	#[Assert\Valid]
	private Collection $metadataChoices;

	#[ORM\OneToMany(targetEntity: MetadataElement::class, mappedBy: 'metadata', orphanRemoval: true)]
	#[Assert\Valid]
	private Collection $metadataElements;

	public function __construct()
	{
		$this->type = MetadataTypeEnum::LIST;
		$this->metadataChoices = new ArrayCollection();
		$this->metadataElements = new ArrayCollection();
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

	public function getCodename(): ?string
	{
		return $this->codename;
	}

	public function setCodename(string $codename): self
	{
		$this->codename = strtolower($codename);
		
		return $this;
	}

	public function getType(): MetadataTypeEnum
	{
		return $this->type;
	}

	public function setType(MetadataTypeEnum $type): self
	{
		if ($type === MetadataTypeEnum::BOOL) {
			$this->mandatory = true;
		}
		$this->type = $type;

		return $this;
	}

	public function isMandatory(): ?bool
	{
		if ($this->type === MetadataTypeEnum::BOOL) {
			return false;
		}
		return $this->mandatory;
	}

	public function setMandatory(bool $mandatory): self
	{
		if ($this->type === MetadataTypeEnum::BOOL) {
			$mandatory = false;
		}
		$this->mandatory = $mandatory;
		
		return $this;
	}

	public function getPattern(): ?string
	{
		return $this->pattern;
	}

	public function setPattern(string $pattern): self
	{
		$this->pattern = $pattern;

		return $this;
	}

	public function getDefaultRawValue(): ?string
	{
		return $this->defaultRawValue;
	}

	public function setDefaultRawValue(mixed $defaultRawValue): self
	{
		$this->defaultRawValue = (string)$defaultRawValue;

		return $this;
	}

	public function getParent(): MetadataParentEnum
	{
		return $this->parent;
	}

	public function setParent(MetadataParentEnum $parent): self
	{
		$this->parent = $parent;

		return $this;
	}

	public function getProject(): ?Project
	{
		return $this->project;
	}

	public function setProject(?Project $project): self
	{
		$this->project = $project;

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
			$metadataChoice->setMetadata($this);
		}

		return $this;
	}

	public function removeMetadataChoice(MetadataChoice $metadataChoice): self
	{
		if ($this->metadataChoices->contains($metadataChoice)) {
			$this->metadataChoices->removeElement($metadataChoice);
			if ($metadataChoice->getMetadata() === $this) {
				$metadataChoice->setMetadata(null);
			}
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
			$metadataElement->setMetadata($this);
		}
		
		return $this;
	}

	public function removeMetadataElement(MetadataElement $metadataElement): self
	{
		if ($this->metadataElements->contains($metadataElement)) {
			$this->metadataElements->removeElement($metadataElement);
			if ($metadataElement->getMetadata() === $this) {
				$metadataElement->setMetadata(null);
			}
		}
		
		return $this;
	}

	public function getFullId(): string
	{
		return 'metadata_' . $this->id;
	}

	public function getFullCodename(): string
	{
		return $this->getParent()->value . '.' . $this->codename;
	}

	public function isBoolean(): bool
	{
		return ($this->getType() == MetadataTypeEnum::BOOL);
	}

	public function isText(): bool
	{
		return ($this->getType() == MetadataTypeEnum::TEXT);
	}

	public function isRegex(): bool
	{
		return ($this->getType() == MetadataTypeEnum::REGEX);
	}

	public function isDate(): bool
	{
		return ($this->getType() == MetadataTypeEnum::DATE);
	}

	public function isLink(): bool
	{
		return ($this->getType() == MetadataTypeEnum::LINK);
	}

	public function isList(): bool
	{
		return ($this->getType() == MetadataTypeEnum::LIST);
	}

	/**
	 * Get default value
	 * 
	 * - if MetadataTypeEnum::BOOL : return bool
	 * - if MetadataTypeEnum::TEXT : return string
	 * - if MetadataTypeEnum::REGEX : return string
	 * - if MetadataTypeEnum::DATE : return \DateTime object
	 * - if MetadataTypeEnum::LINK : return string
	 * - if MetadataTypeEnum::LIST : return string
	 *
	 * @return null|string
	 */
	public function getDefaultValue(): null|bool|string|\DateTimeInterface|MetadataChoice
	{
		if ($this->defaultRawValue === null) {
			return null;
		}
		
		switch ($this->type) {
			case MetadataTypeEnum::BOOL:
				return (bool)$this->defaultRawValue;
			case MetadataTypeEnum::DATE:
				return new \DateTime($this->defaultRawValue);
			case MetadataTypeEnum::LIST:
				/**@var MetadataChoice $metadataChoice */
				foreach ($this->metadataChoices as $metadataChoice) {
					if ($metadataChoice->getValue() === $this->defaultRawValue) {
						return $metadataChoice;
					}
				}
				return null;
			default:
				return $this->defaultRawValue;
		}
	}

	public function parentIsSerie(): bool
	{
		return ($this->getParent() == MetadataParentEnum::SERIE);
	}

	public function parentIsDocument(): bool
	{
		return ($this->getParent() == MetadataParentEnum::DOCUMENT);
	}

	public function parentIsVersion(): bool
	{
		return ($this->getParent() == MetadataParentEnum::VERSION);
	}

	public function __toString(): string
	{
		return $this->getName();
	}
}
?>