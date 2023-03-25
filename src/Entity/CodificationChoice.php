<?php

namespace App\Entity;

use App\Entity\Codification;
use Doctrine\ORM\Mapping as ORM;
use App\Validator\CodificationChoiceValidator;
use App\Repository\CodificationChoiceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: CodificationChoiceRepository::class)]
#[UniqueEntity(
	fields: ['value', 'codification']
)]
#[Assert\Callback([CodificationChoiceValidator::class, 'validate'])]
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
	// #[Assert\Regex('/^[^$"]+$/')]
	#[Assert\Regex('/^\d{2}$/')]
	#[Assert\Regex(pattern: '/^\d{2}$/', groups:['Test'])]
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