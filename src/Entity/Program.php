<?php

namespace App\Entity;

use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProgramRepository;

/**
 * @ORM\Entity(repositoryClass=ProgramRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Program
{
	
	const EXPORT	= 1;
	const IMPORT	= 2;
	const TASK		= 3;
	const PROGRESS	= 4;

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
	 * @ORM\Column(type="smallint", nullable=true)
	 */
	private $type;
	
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
	 * @ORM\OneToMany(targetEntity=Progress::class, mappedBy="program", cascade={"persist"}, orphanRemoval=true)
	 */
	private $progress;
	
	/**
	 * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="programs")
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
	
	public function getType(): ?int
	{
		if ($this->isValid()) {
			switch ($this->parsedCode['type'] ?? null) {
				case 'export':
					$this->type = self::EXPORT;
					break;
				case 'import':
					$this->type = self::IMPORT;
					break;
				case 'task':
					$this->type = self::TASK;
					break;
				case 'progress':
					$this->type = self::PROGRESS;
					break;
				default:
					$this->type = null;
			}
		}
		return $this->type;
	}
	
	public function getTypeAsString(): string
	{
		switch ($this->getType()) {
			case self::EXPORT:
				return 'export';
			case self::IMPORT:
				return 'import';
			case self::TASK:
				return 'task';
			case self::PROGRESS:
				return 'progress';
			default:
				return '';
		}
	}

	public function getCode(): ?string
	{
		return $this->code;
	}

	public function setCode(string $code): self
	{
		$this->code = $code;
		
		if ($this->isValid()) {
			$this->type = $this->parsedCode['type'] ?? null;
		}
		
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
	
	public function getParsedCode(...$keys)
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
		
		if ($keys == false) {
			return $this->parsedCode ?? [];
		} else {
			$parsedCode = $this->parsedCode;
			foreach ($keys as $key) {
				$parsedCode = $parsedCode[$key] ?? [];
			}
			return $parsedCode;
		}
	}
	
	public function isValid(): bool
	{
		if ($this->parseError === null) {
			$this->getParsedCode();
		}
		return $this->parseError === false;
	}
	
	public function isTypeExport(): bool
	{
		return $this->getType() === self::EXPORT;
	}
	
	public function isTypeImport(): bool
	{
		return $this->getType() === self::IMPORT;
	}
	
	public function isTypeTask(): bool
	{
		return $this->getType() === self::TASK;
	}
	
	public function isTypeProgress(): bool
	{
		return $this->getType() === self::PROGRESS;
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
	
}
