<?php

namespace App\Entity;

use App\Entity\Enum\MetadataTypeEnum;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\MetadataElementRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[ORM\Entity(repositoryClass: MetadataElementRepository::class)]
class MetadataElement implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 255)]
	#[Assert\Regex('/^[^$"]+$/')]
	private ?string $rawValue = null;

	#[ORM\ManyToOne(inversedBy: 'metadataElements')]
	private ?Metadata $metadata = null;


	public function getId(): ?int
	{
		return $this->id;
	}

	public function getRawValue(): ?string
	{
		return $this->rawValue;
	}

	public function setRawValue(mixed $rawValue): self
	{
		$this->rawValue = (string)$rawValue;

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

	public function getValue(): null|bool|string|\DateTimeInterface
	{
		if ($this->rawValue === null) {
			return null;
		}
		
		return match ($this->metadata->getType()) {
			MetadataTypeEnum::BOOL	=> (bool)$this->rawValue,
			MetadataTypeEnum::DATE	=> new \DateTime($this->rawValue),
			default					=> $this->rawValue,
		};
	}
	
	public function __toString(): string
	{
		return (string)$this->getValue();
	}
}
