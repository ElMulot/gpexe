<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Enum\StatusTypeEnum;
use App\Repository\StatusRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: StatusRepository::class)]
#[UniqueEntity(
	fields: ['name', 'project']
)]
class Status implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	#[Assert\NotBlank]
	#[Assert\Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\Column(length: 10)]
	private ?string $value = null;

	#[ORM\Column(type: 'string', enumType: StatusTypeEnum::class)]
	private ?StatusTypeEnum $type = null;

	#[ORM\Column(name: '`default`')]
	private ?bool $default = null;

	#[ORM\ManyToOne(inversedBy: 'statuses')]
	private ?Project $project = null;

	public function __construct()
	{
		$this->type = StatusTypeEnum::REVIEW;
		$this->default = false;
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
	
	public function getType(): StatusTypeEnum
	{
		return $this->type;
	}

	public function setType(StatusTypeEnum $type): self
	{
		$this->type = $type;

		return $this;
	}

	public function isDefault(): ?bool
	{
		return $this->default;
	}

	public function setDefault(bool $default): self
	{
		$this->default = $default;
		
		return $this;
	}

	public function isInformation(): bool
	{
		return $this->type === StatusTypeEnum::INFORMATION;
	}

	public function isReview(): bool
	{
		return $this->type === StatusTypeEnum::REVIEW;
	}

	public function isCancel(): bool
	{
		return $this->type === StatusTypeEnum::CANCEL;
	}

	public function isAsBuilt(): bool
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
			'status.value'			=> $this->getValue(),
			'status.type'			=> $this->getType(),
			'status.isInformation'	=> $this->isInformation(),
			'status.isReview'		=> $this->isReview(),
			'status.isCancel'		=> $this->isCancel(),
			'status.isAsBuilt'		=> $this->isAsBuilt(),
			default 				=> null,
		};
	}

	public function __toString(): string
	{
		return (string)$this->getValue();
	}
}
