<?php

namespace App\Entity;

use App\Repository\ChangeSetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChangeSetRepository::class)]
class ChangeSet
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	private ?string $field = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $oldValue = null;

	#[ORM\Column(length: 255)]
	private ?string $newValue = null;

	#[ORM\ManyToOne(inversedBy: 'changeSets')]
	private ?Log $log = null;
	
	public function getId(): ?int
	{
		return $this->id;
	}

	public function getField(): ?string
	{
		return $this->field;
	}

	public function setField(string $field): self
	{
		$this->field = $field;

		return $this;
	}

	public function getOldValue(): ?string
	{
		return $this->oldValue;
	}

	public function setOldValue(?string $oldValue): self
	{
		$this->oldValue = substr($oldValue, 0, 255);

		return $this;
	}

	public function getNewValue(): ?string
	{
		return $this->newValue;
	}

	public function setNewValue(string $newValue): self
	{
		$this->newValue = substr($newValue, 0, 255);

		return $this;
	}

	public function getLog(): ?Log
	{
		return $this->log;
	}
	
	public function setLog(?Log $log): self
	{
		$this->log = $log;

		return $this;
	}
}
