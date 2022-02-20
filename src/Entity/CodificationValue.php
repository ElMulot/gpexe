<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CodificationValueRepository;

#[ORM\Entity(repositoryClass: CodificationValueRepository::class)]
class CodificationValue implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column(type: 'integer')]
	private $id;

	#[ORM\Column(type: 'string', length: 10)]
	private $value;

	#[ORM\ManyToOne(targetEntity: Codification::class, inversedBy: 'codificationValues')]
	#[ORM\JoinColumn(nullable: false)]
	private $codification;

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getValue(): ?string
	{
		return $this->value;
	}

	public function setValue(string $value): self
	{
		$this->value = $value;
		
		return $this;
	}

	public function getCodification(): ?Codification
	{
		return $this->codification;
	}

	public function setCodification(?Codification $codification): self
	{
		$this->codification = $codification;

		return $this;
	}

	public function __toString(): string
	{
		return (string)$this->getValue();
	}
}
