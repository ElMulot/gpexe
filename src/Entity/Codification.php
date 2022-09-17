<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Project;
use App\Entity\CodificationItem;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\CodificationTypeEnum;
use App\Repository\CodificationRepository;

#[ORM\Entity(repositoryClass: CodificationRepository::class)]
class Codification implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	private ?string $name = null;

	#[ORM\Column(length: 100)]
	private ?string $codename = null;

	#[ORM\Column(type: 'codification_type_enum')]
	#[DoctrineAssert\EnumType(entity: CodificationTypeEnum::class)]
	private ?string $type = null;

	#[ORM\Column(length: 10, nullable: true)]
	private ?string $value = null;

	#[ORM\Column]
	private ?bool $isMandatory = null;

	#[ORM\ManyToOne(inversedBy: 'codifications', fetch: 'EAGER')]
	private ?Project $project = null;

	#[ORM\OneToMany(targetEntity: CodificationItem::class, mappedBy: 'codification', orphanRemoval: true)]
	private Collection $codificationItems;

	#[ORM\OneToMany(targetEntity: CodificationValue::class, mappedBy: 'codification', orphanRemoval: true)]
	private Collection $codificationValues;

	public function __construct()
	{
		$this->type = CodificationTypeEnum::getDefaultValue();
		$this->isMandatory = true;
		$this->codificationItems = new ArrayCollection();
		$this->codificationValues = new ArrayCollection();
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
		CodificationTypeEnum::assertValidChoice($type);
		$this->type = $type;

		return $this;
	}

	public function getValue(): ?string
	{
		return $this->value;
	}

	public function setValue(string $value): self
	{
		$this->value = $value;

		return $this;
	}

	public function getIsMandatory(): ?bool
	{
		return $this->isMandatory;
	}

	public function setIsMandatory(bool $isMandatory): self
	{
		$this->isMandatory = $isMandatory;

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
			$codificationItem->setCodification($this);
		}

		return $this;
	}

	public function removeCodificationItem(CodificationItem $codificationItem): self
	{
		if ($this->codificationItems->contains($codificationItem)) {
			$this->codificationItems->removeElement($codificationItem);
			if ($codificationItem->getCodification() === $this) {
				$codificationItem->setCodification(null);
			}
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
			$codificationValue->setCodification($this);
		}
		
		return $this;
	}

	public function removeCodificationValue(CodificationValue $codificationValue): self
	{
		if ($this->codificationValues->contains($codificationValue)) {
			$this->codificationValues->removeElement($codificationValue);
			if ($codificationValue->getCodification() === $this) {
				$codificationValue->setCodification(null);
			}
		}
		
		return $this;
	}

	public function getFullId(): string
	{
		return 'codification_' . $this->id;
	}

	public function getFullCodename(): string
	{
		return 'codification.' . $this->codename;
	}

	public function isFixed(): bool
	{
		return $this->type === CodificationTypeEnum::FIXED;
	}

	public function isList(): bool
	{
		return $this->type === CodificationTypeEnum::LIST;
	}

	public function isRegex(): bool
	{
		return $this->type === CodificationTypeEnum::REGEX;
	}

	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>