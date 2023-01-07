<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Project;
use App\Entity\MetadataItem;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\MetadataParentEnum;
use App\Repository\MetadataRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotEqualTo;
use Symfony\Component\Validator\Constraints\Regex;

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
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\Column(length: 100)]
	#[NotBlank]
	#[Regex('/^\w+$/')]
	#[NotEqualTo('name')]
	#[NotEqualTo('reference')]
	#[NotEqualTo('initialScheduleDate')]
	#[NotEqualTo('scheduleDate')]
	#[NotEqualTo('deliveryDate')]
	#[NotEqualTo('date')]
	#[NotEqualTo('isRequired')]
	#[NotEqualTo('writer')]
	#[NotEqualTo('checker')]
	#[NotEqualTo('approver')]
	#[NotEqualTo('reference')]
	#[NotEqualTo('company')]
	
	private ?string $codename = null;

	#[ORM\Column(type: 'metadata_type_enum')]
	#[DoctrineAssert\EnumType(entity: MetadataTypeEnum::class)]
	private ?string $type = null;

	#[ORM\Column]
	private ?bool $mandatory = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $pattern = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $defaultValue = null;

	#[ORM\Column(type: 'metadata_parent_enum')]
	#[DoctrineAssert\EnumType(entity: MetadataParentEnum::class)]
	private ?string $parent = null;

	#[ORM\ManyToOne(inversedBy: 'metadatas', cascade:["persist"], fetch: 'EAGER')]
	private ?Project $project = null;

	#[ORM\OneToMany(targetEntity: MetadataItem::class, mappedBy: 'metadata', orphanRemoval: true)]
	private Collection $metadataItems;

	#[ORM\OneToMany(targetEntity: MetadataValue::class, mappedBy: 'metadata', orphanRemoval: true)]
	private Collection $metadataValues;

	public function __construct()
	{
		$this->type = MetadataTypeEnum::getDefaultValue();
		$this->metadataItems = new ArrayCollection();
		$this->metadataValues = new ArrayCollection();
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

	public function getType(): string
	{
		return $this->type;
	}

	public function setType(string $type): self
	{
		MetadataTypeEnum::assertValidChoice($type);
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

	public function getDefaultValue(): ?string
	{
		return $this->defaultValue;
	}

	public function setDefaultValue(string $defaultValue): self
	{
		$this->defaultValue = $defaultValue;

		return $this;
	}

	public function getParent(): string
	{
		return $this->parent;
	}

	public function setParent(string $parent): self
	{
		MetadataParentEnum::assertValidChoice($parent);
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
			$metadataItem->setMetadata($this);
		}

		return $this;
	}

	public function removeMetadataItem(MetadataItem $metadataItem): self
	{
		if ($this->metadataItems->contains($metadataItem)) {
			$this->metadataItems->removeElement($metadataItem);
			if ($metadataItem->getMetadata() === $this) {
				$metadataItem->setMetadata(null);
			}
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
			$metadataValue->setMetadata($this);
		}
		
		return $this;
	}

	public function removeMetadataValue(MetadataValue $metadataValue): self
	{
		if ($this->metadataValues->contains($metadataValue)) {
			$this->metadataValues->removeElement($metadataValue);
			if ($metadataValue->getMetadata() === $this) {
				$metadataValue->setMetadata(null);
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
		return $this->getParent() . '.' . $this->codename;
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
		return (string)$this->getName();
	}
}
?>