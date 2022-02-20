<?php

namespace App\Entity;

use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;
use Doctrine\ORM\Mapping as ORM;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\ProgramTypeEnum;
use App\Form\ProgramType;
use App\Repository\ProgramRepository;
use Fresh\DoctrineEnumBundle\Exception\InvalidArgumentException;

#[ORM\Entity(repositoryClass: ProgramRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Program implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column(type: 'integer')]
	private $id;

	#[ORM\Column(type: 'string', length: 100)]
	private $name;

	#[ORM\Column(type: 'program_type_enum')]
	#[DoctrineAssert\EnumType(entity: ProgramTypeEnum::class)]
	private $type;

	#[ORM\Column(type: 'text')]
	private $code;

	#[ORM\Column(type: 'boolean')]
	private $enabled;

	#[ORM\ManyToOne(targetEntity: User::class)]
	#[ORM\JoinColumn(nullable: false)]
	private $createdBy;

	#[ORM\Column(type: 'datetime')]
	private $createdOn;

	#[ORM\ManyToOne(targetEntity: User::class)]
	private $lastModifiedBy;

	#[ORM\Column(type: 'datetime', nullable: true)]
	private $lastModifiedOn;
	
	#[ORM\OneToMany(targetEntity: Progress::class, mappedBy: 'program', cascade: ['persist'], orphanRemoval: true)]
	private $progress;

	#[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'programs')]
	#[ORM\JoinColumn(nullable: false)]
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

	public function getType(): string
	{
		return $this->type;
	}

	public function setType(string $type): self
	{
		try {
			ProgramTypeEnum::assertValidChoice($type);
		} catch (InvalidArgumentException $e) {
			$this->parseError = true;
			return $this;
		}
		$this->type = $type;

		return $this;
	}

	public function getCode(): ?string
	{
		return $this->code;
	}

	public function setCode(string $code): self
	{
		$this->code = $code;
		
		if ($this->isValid()) {
			$this->type = $this->parsedCode['type'];
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

	#[ORM\PrePersist]
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

	#[ORM\PreUpdate]
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
			} catch (ParseException) {
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
		return $this->type === ProgramTypeEnum::EXPORT;
	}

	public function isTypeImport(): bool
	{
		return $this->type === ProgramTypeEnum::IMPORT;
	}

	public function isTypeTask(): bool
	{
		return $this->type === ProgramTypeEnum::TASK;
	}

	public function isTypeProgress(): bool
	{
		return $this->type === ProgramTypeEnum::PROGRESS;
	}

	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
