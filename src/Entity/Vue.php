<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VueRepository")
 */
class Vue
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="json")
     */
    private $value = [];

    /**
     * @ORM\Column(type="boolean")
     */
    private $isShared;
    
    /**
     * @ORM\Column(type="boolean")
     */
    private $isDefault;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="vues")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="vues")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

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

    public function getValue(): ?array
    {
    	return $this->value;
    }
    
    public function setValue(array $value): self
    {
    	$this->value = $value;
    	
    	return $this;
    }

    public function getIsShared(): ?bool
    {
        return $this->isShared;
    }

    public function setIsShared(bool $isShared): self
    {
    	$this->isShared = $isShared;

        return $this;
    }
    
    public function getIsDefault(): ?bool
    {
    	return $this->isDefault;
    }
    
    public function setIsDefault(bool $isDefault): self
    {
    	$this->isDefault = $isDefault;
    	
    	return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
    	$this->project = $project;

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
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
