<?php

namespace App\Entity;

use App\Entity\Project;
use App\Entity\CodificationChoice;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Enum\CodificationTypeEnum;
use App\Repository\CodificationRepository;
use App\Validator\IsValid;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: CodificationRepository::class)]
#[UniqueEntity(
	fields: ['codename', 'project']
)]
class Codification implements \Stringable
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
	private ?string $codename = null;

	#[ORM\Column(type: 'string', enumType: CodificationTypeEnum::class)]
	private ?CodificationTypeEnum $type = null;
	
	#[ORM\Column(length: 10, nullable: true)]
	private ?string $pattern = null;

	#[ORM\Column(length: 10, nullable: true)]
	#[IsValid]
	private ?string $defaultValue = null;

	#[ORM\ManyToOne(inversedBy: 'codifications', cascade:['persist'], fetch: 'EAGER')]
	private ?Project $project = null;

	#[ORM\OneToMany(targetEntity: CodificationChoice::class, mappedBy: 'codification', orphanRemoval: true)]
	#[Assert\Valid]
	private Collection $codificationChoices;

	#[ORM\OneToMany(targetEntity: CodificationElement::class, mappedBy: 'codification', orphanRemoval: true)]
	#[Assert\Valid]
	private Collection $codificationElements;

	public function __construct()
	{
		$this->type = CodificationTypeEnum::LIST;
		$this->codificationChoices = new ArrayCollection();
		$this->codificationElements = new ArrayCollection();
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

	public function getType(): CodificationTypeEnum
	{
		return $this->type;
	}

	public function setType(CodificationTypeEnum $type): self
	{
		$this->type = $type;

		return $this;
	}

	public function getPattern(): ?string
	{
		return ($this->isRegex() === true)?$this->pattern:null;
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

	public function setDefaultValue(mixed $defaultValue): self
	{
		$this->defaultValue = (string)$defaultValue;

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
			$codificationChoice->setCodification($this);
		}

		return $this;
	}

	public function removeCodificationChoice(CodificationChoice $codificationChoice): self
	{
		if ($this->codificationChoices->contains($codificationChoice)) {
			$this->codificationChoices->removeElement($codificationChoice);
			if ($codificationChoice->getCodification() === $this) {
				$codificationChoice->setCodification(null);
			}
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
			$codificationElement->setCodification($this);
		}
		
		return $this;
	}

	public function removeCodificationElement(CodificationElement $codificationElement): self
	{
		if ($this->codificationElements->contains($codificationElement)) {
			$this->codificationElements->removeElement($codificationElement);
			if ($codificationElement->getCodification() === $this) {
				$codificationElement->setCodification(null);
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

	public function isText(): bool
	{
		return $this->type === CodificationTypeEnum::TEXT;
	}
	
	public function isRegex(): bool
	{
		return $this->type === CodificationTypeEnum::REGEX;
	}
	
	public function isList(): bool
	{
		return $this->type === CodificationTypeEnum::LIST;
	}

	/**
	 * Gets default value as string
	 *
	 * @return null|string
	 */
	public function getTypedDefaultValue(): null|string
	{
		if ($this->defaultValue === null) {
			return null;
		}
		
		switch ($this->type) {
			case CodificationTypeEnum::LIST:
				/**@var CodificationChoice $codificationChoice */
				foreach ($this->codificationChoices as $codificationChoice) {
					if ($codificationChoice->getValue() === $this->defaultValue) {
						return $codificationChoice;
					}
				}
				return null;
			default:
				return $this->defaultValue;
		}
	}

	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>