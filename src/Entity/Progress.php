<?php

namespace App\Entity;

use App\Repository\ProgressRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProgressRepository::class)]
class Progress
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(type: 'date')]
	private ?\DateTime $date = null;

	#[ORM\Column]
	private ?float $value = null;

	#[ORM\ManyToOne(inversedBy: 'progress')]
	private ?Serie $serie = null;

	#[ORM\ManyToOne(inversedBy: 'progress', cascade: ['persist'])]
	private ?Program $program = null;

	public function __construct()
	{
		$this->date = new \DateTime();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getDate(): ?\DateTimeInterface
	{
		return $this->date;
	}

	public function setDate(\DateTimeInterface $date): self
	{
		$this->date = $date;

		return $this;
	}

	public function getValue(): ?float
	{
		return $this->value;
	}

	public function setValue(float $value): self
	{
		$this->value = $value;

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

	public function getProgram(): ?Program
	{
		return $this->program;
	}
	
	public function setProgram(?Program $program): self
	{
		$this->program = $program;

		return $this;
	}
}
