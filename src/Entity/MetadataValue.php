<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MetadataValueRepository;
use Symfony\Component\Validator\Constraints\Regex;

#[ORM\Entity(repositoryClass: MetadataValueRepository::class)]
class MetadataValue implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	#[Regex('/^[^$"]+$/')]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'metadataValues')]
	private ?Metadata $metadata = null;


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

	public function getMetadata(): ?Metadata
	{
		return $this->metadata;
	}

	public function setMetadata(?Metadata $metadata): self
	{
		$this->metadata = $metadata;

		return $this;
	}
	
	public function __toString(): string
	{
		return (string)$this->getValue();
	}
}
