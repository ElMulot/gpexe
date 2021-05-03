<?php

namespace App\Entity;

use App\Repository\LogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LogRepository::class)
 */
class Log
{

	const INSERT	= 1;
	const UPDATE	= 2;
	const DELETE	= 3;
	
	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="smallint")
	 */
	private $type;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	private $entity;

	/**
	 * @ORM\Column(type="integer", nullable=true)
	 */
	private $entityId;

	/**
	 * @ORM\Column(type="string", length=255, nullable=true)
	 */
	private $entityName;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $user;

	/**
	 * @ORM\Column(type="datetime")
	 */
	private $date;

	/**
	 * @ORM\OneToMany(targetEntity=ChangeSet::class, mappedBy="log", orphanRemoval=true)
	 */
	private $changeSets;

	public function __construct()
	{
		$this->changeSets = new ArrayCollection();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getType(): ?int
	{
		return $this->type;
	}

	public function setType(int $type): self
	{
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
	
	public function getTypeName(): string
	{
		switch ($this->getType()) {
			case self::INSERT:
				return 'INSERT';
			case self::UPDATE:
				return 'UPDATE';
			case self::DELETE:
				return 'DELETE';
			case ddefault:
				return 'UNKNOWN';
		}
	}
	
	public function __toString(): string
	{
		return (string)$this->getEntity() . '->' . $this->getTypeName();
	}
}
