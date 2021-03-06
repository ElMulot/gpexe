<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MetadataValueRepository")
 */
class MetadataValue
{
	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=255)
	 */
	private $value;

	/**
	 * @ORM\ManyToOne(targetEntity=Metadata::class, inversedBy="metadataValues")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $metadata;

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
