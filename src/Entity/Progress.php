<?php

namespace App\Entity;

use App\Repository\ProgressRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProgressRepository::class)]
class Progress
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column(type: 'integer')]
	private $id;

	#[ORM\Column(type: 'date')]
	private $date;

	#[ORM\Column(type: 'float')]
	private $value;

	#[ORM\ManyToOne(targetEntity: Serie::class, inversedBy: 'progress')]
	#[ORM\JoinColumn(nullable: false)]
	private $serie;

	#[ORM\ManyToOne(targetEntity: Program::class, cascade: ['persist'], inversedBy: 'progress')]
	#[ORM\JoinColumn(nullable: false)]
	private $program;

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
