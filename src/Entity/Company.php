<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyRepository")
 * 
 * @UniqueEntity(fields="name", message="A company with this name already exist.")
 */
class Company
{
    
    const MAIN_CONTRACTOR   = 1;
    const SUB_CONTRACTOR    = 2;
    const SUPPLIER          = 3;
    const CHECKER           = 4;
    const DEFAULT           = self::SUPPLIER;
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    private $name;
    
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $codename;
    
    /**
     * @ORM\Column(type="smallint")
     */
    private $type;

    /**
     * @ORM\Column(type="integer")
     */
    private $priority;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="company", orphanRemoval=true)
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity=Serie::class, mappedBy="company", orphanRemoval=true)
     */
    private $series;
    
    /**
     * @ORM\OneToMany(targetEntity=Visa::class, mappedBy="company", orphanRemoval=true)
     */
    private $visas;

    public function __construct()
    {
    	$this->type = self::DEFAULT;
    	$this->users = new ArrayCollection();
     	$this->series = new ArrayCollection();
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

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
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

    /**
     * @return Collection|User[]
     */
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

    /**
     * @return Collection|Serie[]
     */
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
    	return ($this->getType() == self::MAIN_CONTRACTOR);
    }
    
    public function isSubContractor(): bool
    {
    	return ($this->getType() == self::SUB_CONTRACTOR);
    }
    
    public function isSupplier(): bool
    {
    	return ($this->getType() == self::SUPPLIER);
    }
    
    public function isChecker(): bool
    {
    	return ($this->getType() == self::CHECKER);
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
?>