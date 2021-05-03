<?php

namespace App\Entity;

use App\Repository\AutomationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AutomationRepository::class)
 */
class Automation
{
	/**
	 * @ORM\Id
	 * @ORM\GeneratedValue
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="boolean")
	 */
	private $enabled;

	/**
	 * @ORM\Column(type="datetime", nullable=true)
	 */
	private $lastRun;
	
	/**
	 * @ORM\Column(type="datetime", nullable=true)
	 */
	private $nextRun;
	
	/**
	 * @ORM\Column(type="string", length=255)
	 */
	private $command;

	/**
	 * @ORM\Column(type="json", nullable=true)
	 */
	private $arguments = [];
	
	/**
	 * @ORM\ManyToOne(targetEntity=Project::class, cascade={"persist"})
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $project;
	
	public function getId(): ?int
	{
		return $this->id;
	}

	public function getEnabled(): ?bool
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
