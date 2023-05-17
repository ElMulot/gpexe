<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CodificationElementRepository;
use App\Validator\IsValid;
use App\Validator\NotContainsSplitter;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CodificationElementRepository::class)]
class CodificationElement implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 10)]
	#[NotContainsSplitter]
	#[IsValid]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'codificationElements')]
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
