<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProfilRepository")
 * 
 * @UniqueEntity(fields="name", message="A profil with this name already exist.")
 */
class Profil
{
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
     * @ORM\Column(type="boolean")
     */
    private $editProgressRules;

    /**
     * @ORM\Column(type="boolean")
     */
    private $editCodifications;

    /**
     * @ORM\Column(type="boolean")
     */
    private $editMetadatas;

    /**
     * @ORM\Column(type="boolean")
     */
    private $editVisas;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isAdmin;

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

    public function getEditProgressRules(): ?bool
    {
        return $this->editProgressRules;
    }

    public function setEditProgressRules(bool $editProgressRules): self
    {
        $this->editProgressRules = $editProgressRules;

        return $this;
    }

    public function getEditCodifications(): ?bool
    {
        return $this->editCodifications;
    }

    public function setEditCodifications(bool $editCodifications): self
    {
        $this->editCodifications = $editCodifications;

        return $this;
    }

    public function getEditMetadatas(): ?bool
    {
        return $this->editMetadatas;
    }

    public function setEditMetadatas(bool $editMetadatas): self
    {
        $this->editMetadatas = $editMetadatas;

        return $this;
    }

    public function getEditVisas(): ?bool
    {
        return $this->editVisas;
    }

    public function setEditVisas(bool $editVisas): self
    {
        $this->editVisas = $editVisas;

        return $this;
    }

    public function getIsAdmin(): ?bool
    {
        return $this->isAdmin;
    }

    public function setIsAdmin(bool $isAdmin): self
    {
        $this->isAdmin = $isAdmin;

        return $this;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
?>