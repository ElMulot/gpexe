<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;
use App\Entity\Enum\CompanyTypeEnum;
use App\Repository\CompanyRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

#[ORM\Entity(repositoryClass: CompanyRepository::class)]
#[UniqueEntity(
	fields: 'name'
)]
#[UniqueEntity(
	fields: 'codename'
)]
class Company implements \Stringable
{
	
	#[ORM\Id()]
	#[ORM\GeneratedValue()]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100, unique: true)]
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;
	
	#[ORM\Column(length: 100)]
	#[NotBlank]
	#[Regex('/^\w+$/')]
	private ?string $codename = null;
	
	#[ORM\Column(type: 'company_type_enum')]
	#[DoctrineAssert\EnumType(entity: CompanyTypeEnum::class)]
	private ?string $type = null;

	#[ORM\Column]
	private ?int $priority = null;

	#[ORM\OneToMany(targetEntity: User::class, mappedBy: "company", orphanRemoval: true)]
	private Collection $users;

	#[ORM\OneToMany(targetEntity: Serie::class, mappedBy: "company", orphanRemoval: true)]
	private Collection $series;
	
	#[ORM\OneToMany(targetEntity: Visa::class, mappedBy: "company", orphanRemoval: true)]
	private Collection $visas;

	public function __construct()
	{
		$this->type = CompanyTypeEnum::getDefaultValue();
		$this->priority = 0;
		$this->users = new ArrayCollection();
	 	$this->series = new ArrayCollection();
		$this->visas = new ArrayCollection();
	}

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
	
	
	public function getCodename(): ?string
	{
		return $this->codename;
	}
	
	public function setCodename(string $codename): self
	{
		$this->codename = strtolower($codename);
		
		return $this;
	}

	public function getType(): string
	{
		return $this->type;
	}

	public function setType(string $type): self
	{
		CompanyTypeEnum::assertValidChoice($type);
		$this->type = $type;

		return $this;
	}

	public function getPriority(): ?int
	{
		return $this->priority;
	}

	public function setPriority(int $priority): self
	{
		$this->priority = $priority;

		return $this;
	}

	public function getUsers(): Collection
	{
		return $this->users;
	}

	public function addUser(User $user): self
	{
		if (!$this->users->contains($user)) {
			$this->users[] = $user;
			$user->setCompany($this);
		}

		return $this;
	}

	public function removeUser(User $user): self
	{
		if ($this->users->contains($user)) {
			$this->users->removeElement($user);
			// set the owning side to null (unless already changed)
			if ($user->getCompany() === $this) {
				$user->setCompany(null);
			}
		}

		return $this;
	}

	public function getSeries(): Collection
	{
		return $this->series;
	}

	public function addSeries(Serie $series): self
	{
		if (!$this->series->contains($series)) {
			$this->series[] = $series;
			$series->setCompany($this);
		}

		return $this;
	}

	public function removeSeries(Serie $series): self
	{
		if ($this->series->contains($series)) {
			$this->series->removeElement($series);
			// set the owning side to null (unless already changed)
			if ($series->getCompany() === $this) {
				$series->setCompany(null);
			}
		}

		return $this;
	}
	
	public function isMainContractor(): bool
	{
		return ($this->getType() === CompanyTypeEnum::MAIN_CONTRACTOR);
	}
	
	public function isSubContractor(): bool
	{
		return ($this->getType() === CompanyTypeEnum::SUB_CONTRACTOR);
	}
	
	public function isSupplier(): bool
	{
		return ($this->getType() === CompanyTypeEnum::SUPPLIER);
	}
	
	public function isChecker(): bool
	{
		return ($this->getType() === CompanyTypeEnum::MAIN_CONTRACTOR || $this->getType() === CompanyTypeEnum::CHECKER);
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>