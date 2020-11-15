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
	private $route;

	/**
	 * @ORM\Column(type="json")
	 */
	private $parameters = [];
	
	/**
	 * @ORM\ManyToOne(targetEntity=Project::class)
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
	
	public function getRoute(): ?string
	{
		return $this->route;
	}

	public function setRoute(string $route): self
	{
		$this->route = $route;
                  
		return $this;
	}

	public function getParameters(): ?array
	{
		return $this->parameters;
	}

	public function setParameters(array $parameters): self
	{
		$this->parameters = $parameters;
                  
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
