<?php

namespace App\Entity;

use App\Entity\Codification;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CodificationChoiceRepository;
use App\Validator\IsValid;
use App\Validator\NotContainsSplitter;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: CodificationChoiceRepository::class)]
#[UniqueEntity(
	fields: ['value', 'codification']
)]
class CodificationChoice implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	#[Assert\NotBlank]
	#[Assert\Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\Column(length: 10)]
	#[NotContainsSplitter]
	#[IsValid]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'codificationChoices')]
	private ?Codification $codification = null;
	
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
?>