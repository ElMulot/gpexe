<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ViewRepository;

#[ORM\Entity(repositoryClass: ViewRepository::class)]
class View implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	private ?string $name = null;

	#[ORM\Column]
	private array $value = [];

	#[ORM\Column]
	private ?bool $shared = null;

	#[ORM\Column(name: '`default`')]
	private ?bool $default = null;

	#[ORM\ManyToOne(inversedBy: 'views')]
	private ?Project $project = null;

	#[ORM\ManyToOne(inversedBy: 'views')]
	private ?User $user = null;

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

	public function getValue(): ?array
	{
		return $this->value;
	}

	public function setValue(array $value): self
	{
		$this->value = $value;
		
		return $this;
	}

	public function isShared(): ?bool
	{
		return $this->shared;
	}

	public function setShared(bool $shared): self
	{
		$this->shared = $shared;

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

	public function getProject(): ?Project
	{
		return $this->project;
	}

	public function setProject(?Project $project): self
	{
		$this->project = $project;

		return $this;
	}

	public function getUser(): ?User
	{
		return $this->user;
	}

	public function setUser(?User $user): self
	{
		$this->user = $user;

		return $this;
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
