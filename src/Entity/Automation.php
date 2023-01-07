<?php

namespace App\Entity;

use App\Repository\AutomationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AutomationRepository::class)]
class Automation
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column]
	private ?bool $enabled = null;

	#[ORM\Column(nullable: true)]
	private ?\DateTime $lastRun = null;

	#[ORM\Column(nullable: true)]
	private ?\DateTime $nextRun = null;

	#[ORM\Column(length: 255)]
	private ?string $command = null;

	#[ORM\Column(nullable: true)]
	private array $arguments = [];

	#[ORM\ManyToOne(cascade: ['persist'])]
	private ?Project $project = null;

	public function getId(): ?int
	{
		return $this->id;
	}
	public function isEnabled(): ?bool
	{
		return $this->enabled;
	}
	public function setEnabled(bool $enabled): self
	{
		$this->enabled = $enabled;

		if ($enabled === false) {
			$this->nextRun = null;
		}

		return $this;
	}
	public function getLastRun(): ?\DateTimeInterface
	{
		return $this->lastRun;
	}
	public function setLastRun(?\DateTimeInterface $lastRun): self
	{
		$this->lastRun = $lastRun;

		return $this;
	}
	public function getNextRun(): ?\DateTimeInterface
	{
		return $this->nextRun;
	}
	public function setNextRun(?\DateTimeInterface $nextRun): self
	{
		if ($this->enabled) {
			$this->nextRun = $nextRun;
		} else {
			$this->nextRun = null;
		}

		return $this;
	}
	public function getCommand(): ?string
	{
		return $this->command;
	}
	public function setCommand(string $command): self
	{
		$this->command = $command;

		return $this;
	}
	public function getArguments(): ?array
	{
		return $this->arguments;
	}
	public function setArguments(array $arguments): self
	{
		$this->arguments = $arguments;

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
}
