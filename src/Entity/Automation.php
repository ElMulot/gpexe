<?php

namespace App\Entity;

use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AutomationRepository;

/**
 * @ORM\Entity(repositoryClass=AutomationRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Automation
{
	
	const EXPORT	= 'export';
	const IMPORT	= 'import';
	const PROGRESS	= 'progress';

	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	private $name;

	/**
	 * @ORM\Column(type="text")
	 */
	private $code;
	
	/**
	 * @ORM\Column(type="boolean")
	 */
	private $enabled;
	
	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $createdBy;
	
	/**
	 * @ORM\Column(type="datetime")
	 */
	private $createdOn;
	
	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 */
	private $lastModifiedBy;
	
	/**
	 * @ORM\Column(type="datetime", nullable=true)
	 */
	private $lastModifiedOn;
	
	/**
	 * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="automations")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $project;
	
	private $structure;
	
	private $parsedCode;
	
	private $parseError;

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

	public function getCode(): ?string
	{
		return $this->code;
	}

	public function setCode(string $code): self
	{
		$this->code = $code;
		
		return $this;
	}

	public function getEnabled(): ?bool
	{
		return $this->enabled;
	}

	public function setEnabled(bool $enabled): self
	{
		$this->enabled = $enabled;

		return $this;
	}
	
	public function getCreatedBy(): ?User
	{
		return $this->createdBy;
	}
	
	public function setCreatedBy(?User $createdBy): self
	{
		$this->createdBy = $createdBy;
		
		return $this;
	}
	
	public function getCreatedOn(): ?\DateTimeInterface
	{
		return $this->createdOn;
	}
	
	public function setCreatedOn(\DateTimeInterface $createdOn): self
	{
		$this->createdOn = $createdOn;
		
		return $this;
	}
	
	/**
	 * @ORM\PrePersist
	 */
	public function setCreatedOnValue()
	{
		$this->createdOn = new \DateTime();
	}
	
	public function getLastModifiedBy(): ?User
	{
		return $this->lastModifiedBy;
	}
	
	public function setLastModifiedBy(?User $lastModifiedBy): self
	{
		$this->lastModifiedBy = $lastModifiedBy;
		
		return $this;
	}
	
	public function getLastModifiedOn(): ?\DateTimeInterface
	{
		return $this->lastModifiedOn;
	}
	
	public function setLastModifiedOn(\DateTimeInterface $lastModifiedOn): self
	{
		$this->lastModifiedOn = $lastModifiedOn;
		
		return $this;
	}
	
	/**
	 * @ORM\PreUpdate
	 */
	public function setLastModifiedOnValue()
	{
		$this->lastModifiedOn = new \DateTime();
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
	
	public function getParsedCode(): array
	{
		if ($this->parsedCode === null) {
			try {
				$this->parsedCode = Yaml::parse($this->code ?? '');
			} catch (ParseException $exception) {
				$this->parsedCode = [];
				$this->parseError = true;
			}
			$this->parseError = false;
		}
		
		return $this->parsedCode;
	}
	
	public function isValid(): bool
	{
		if ($this->parseError === null) {
			$this->getParsedCode();
		}
		return $this->parseError === false;
	}
	
	public function getType(): ?string
	{
		if ($this->isValid()) {
			return $this->parsedCode['type'] ?? null;
		}
		return null;
	}
	
	public function isTypeExport(): bool
	{
		return $this->getType() ?? '' == 'export';
	}
	
	public function isTypeImport(): bool
	{
		return $this->getType() ?? '' == 'import';
	}

	public function isTypeProgress(): bool
	{
		return $this->getType() ?? '' == 'progress';
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
	
}
