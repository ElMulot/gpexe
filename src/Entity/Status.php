<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\StatusTypeEnum;
use App\Repository\StatusRepository;

#[ORM\Entity(repositoryClass: StatusRepository::class)]
class Status implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column(type: 'integer')]
	private $id;

	#[ORM\Column(type: 'string', length: 100)]
	private $name;

	#[ORM\Column(type: 'string', length: 10)]
	private $value;

	#[ORM\Column(type: 'status_type_enum')]
	#[DoctrineAssert\EnumType(entity: StatusTypeEnum::class)]
	private $type;

	#[ORM\Column(type: 'boolean')]
	private $isDefault;

	#[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'statuses')]
	#[ORM\JoinColumn(nullable: false)]
	private $project;

	public function __construct()
	{
		$this->type = StatusTypeEnum::getDefaultValue();
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

	public function getValue(): ?string
	{
		return $this->value;
	}

	public function setValue(string $value): self
	{
		$this->value = $value;

		return $this;
	}
	
	public function getType(): string
	{
		return $this->type;
	}

	public function setType(string $type): self
	{
		StatusTypeEnum::assertValidChoice($type);
		$this->type = $type;

		return $this;
	}

	public function getIsDefault(): ?bool
	{
		return $this->isDefault;
	}

	public function setIsDefault(bool $isDefault): self
	{
		$this->isDefault = $isDefault;
		
		return $this;
	}

	public function getIsInformation(): bool
	{
		return $this->type === StatusTypeEnum::INFORMATION;
	}

	public function getIsReview(): bool
	{
		return $this->type === StatusTypeEnum::REVIEW;
	}

	public function getIsCancel(): bool
	{
		return $this->type === StatusTypeEnum::CANCEL;
	}

	public function getIsAsBuilt(): bool
	{
		return $this->type === StatusTypeEnum::AS_BUILT;
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

	public function getPropertyValue(string $codename)
	{
		return match ($codename) {
			'status.name'			=> $this->getName(),
			'status.value'			=> $this,
			'status.type'			=> $this->getType(),
			'status.isInformation'	=> $this->getIsInformation(),
			'status.isReview'		=> $this->getIsReview(),
			'status.isCancel'		=> $this->getIsCancel(),
			'status.isAsBuilt'		=> $this->getIsAsBuilt(),
			default 				=> null,
		};
	}

	public function __toString(): string
	{
		return (string)$this->getValue();
	}
}
