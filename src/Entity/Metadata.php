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

#[ORM\Entity(repositoryClass: MetadataRepository::class)]
class Metadata implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column(type: 'integer')]
	private $id;

	#[ORM\Column(type: 'string', length: 100)]
	private $name;

	#[ORM\Column(type: 'string', length: 100)]
	private $codename;

	#[ORM\Column(type: 'metadata_type_enum')]
	#[DoctrineAssert\EnumType(entity: MetadataTypeEnum::class)]
	private $type;

	#[ORM\Column(type: 'boolean')]
	private $isMandatory;

	#[ORM\Column(type: 'metadata_parent_enum')]
	#[DoctrineAssert\EnumType(entity: MetadataParentEnum::class)]
	private $parent;

	#[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'metadatas', fetch: 'EAGER')]
	#[ORM\JoinColumn(nullable: false)]
	private $project;

	#[ORM\OneToMany(targetEntity: MetadataItem::class, mappedBy: 'metadata', orphanRemoval: true)]
	private $metadataItems;

	#[ORM\OneToMany(targetEntity: MetadataValue::class, mappedBy: 'metadata', orphanRemoval: true)]
	private $metadataValues;

	public function __construct()
	{
		$this->type = MetadataTypeEnum::getDefaultValue();
		$this->metadataItems = new ArrayCollection();
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
			$this->isMandatory = true;
		}
		$this->type = $type;

		return $this;
	}

	public function getIsMandatory(): ?bool
	{
		return $this->isMandatory;
	}

	public function setIsMandatory(bool $isMandatory): self
	{
		if ($this->type === MetadataTypeEnum::BOOL) {
			$isMandatory = true;
		}
		$this->isMandatory = $isMandatory;
		
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