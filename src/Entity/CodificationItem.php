<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Codification;
use App\Repository\CodificationItemRepository;

#[ORM\Entity(repositoryClass: CodificationItemRepository::class)]
class CodificationItem implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	private ?string $name = null;

	#[ORM\Column(length: 10)]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'codificationItems')]
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