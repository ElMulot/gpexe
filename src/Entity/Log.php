<?php

namespace App\Entity;

use App\Repository\LogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\LogTypeEnum;

#[ORM\Entity(repositoryClass: LogRepository::class)]
class Log implements \Stringable
{

	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(type: 'log_type_enum')]
	#[DoctrineAssert\EnumType(entity: LogTypeEnum::class)]
	private ?string $type = null;
	
	#[ORM\Column(length: 100)]
	private ?string $entity = null;

	#[ORM\Column(nullable: true)]
	private ?int $entityId = null;

	#[ORM\Column(length: 255, nullable: true)]
	private ?string $entityName = null;

	#[ORM\ManyToOne]
	private ?User $user = null;

	#[ORM\Column]
	private ?\DateTime $date = null;

	#[ORM\OneToMany(targetEntity: ChangeSet::class, mappedBy: 'log', orphanRemoval: true)]
	private Collection $changeSets;

	public function __construct()
	{
		$this->changeSets = new ArrayCollection();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getType(): string
	{
		return $this->type;
	}

	public function setType(string $type): self
	{
		LogTypeEnum::assertValidChoice($type);
		$this->type = $type;

		return $this;
	}
	
	public function getEntity(): ?string
	{
		return $this->entity;
	}
	
	public function setEntity(string $entity): self
	{
		$this->entity = $entity;

		return $this;
	}
	
	public function getEntityId(): ?int
	{
		return $this->entityId;
	}
	
	public function setEntityId(?int $entityId): self
	{
		$this->entityId = $entityId;

		return $this;
	}
	
	public function getEntityName(): ?string
	{
		return $this->entityName;
	}

	public function setEntityName(?string $entityName): self
	{
		$this->entityName = $entityName;

		return $this;
	}

	public function getUser(): ?User
	{
		return $this->user;
	}

	public function setUser(?User $user): self
	{
		$this->user = $user;

		return $this;
	}

	public function getDate(): ?\DateTimeInterface
	{
		return $this->date;
	}

	public function setDate(\DateTimeInterface $date): self
	{
		$this->date = $date;

		return $this;
	}

	/**
	 * @return Collection|ChangeSet[]
	 */
	public function getChangeSets(): Collection
	{
		return $this->changeSets;
	}

	public function addChangeSet(ChangeSet $changeSet): self
	{
		if (!$this->changeSets->contains($changeSet)) {
			$this->changeSets[] = $changeSet;
			$changeSet->setLog($this);
		}

		return $this;
	}

	public function removeChangeSet(ChangeSet $changeSet): self
	{
		if ($this->changeSets->contains($changeSet)) {
			$this->changeSets->removeElement($changeSet);
			// set the owning side to null (unless already changed)
			if ($changeSet->getLog() === $this) {
				$changeSet->setLog(null);
			}
		}

		return $this;
	}

	public function __toString(): string
	{
		return (string)$this->getEntity() . '->' . $this->getType();
	}
}
