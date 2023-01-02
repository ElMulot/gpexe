<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CodificationValueRepository;
use Symfony\Component\Validator\Constraints\Regex;

#[ORM\Entity(repositoryClass: CodificationValueRepository::class)]
class CodificationValue implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 10)]
	#[Regex('/^[^$"]+$/')]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'codificationValues')]
	private ?Codification $codification = null;

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
