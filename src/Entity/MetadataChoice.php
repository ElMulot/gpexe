<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Metadata;
use App\Repository\MetadataChoiceRepository;
use App\Validator\IsValid;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: MetadataChoiceRepository::class)]
#[UniqueEntity(
	fields: ['value', 'metadata']
)]
class MetadataChoice implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	#[Assert\NotBlank]
	#[IsValid]
	private ?string $value = null;

	#[ORM\ManyToOne(inversedBy: 'metadataChoices')]
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
?>