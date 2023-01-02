<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\VisaRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

#[ORM\Entity(repositoryClass: VisaRepository::class)]
#[UniqueEntity(
	fields: ['name', 'company', 'project']
)]
class Visa implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\Column]
	private ?bool $revisionRequired = null;

	#[ORM\ManyToOne(inversedBy: 'visas')]
	private ?Company $company = null;

	#[ORM\ManyToOne(inversedBy: 'visas')]
	private ?Project $project = null;

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

	public function getRevisionRequired(): ?bool
	{
		return $this->revisionRequired;
	}

	public function setRevisionRequired(bool $revisionRequired): self
	{
		$this->revisionRequired = $revisionRequired;

		return $this;
	}

	public function getCompany(): ?Company
	{
		return $this->company;
	}

	public function setCompany(?Company $company): self
	{
		$this->company = $company;

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

	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>