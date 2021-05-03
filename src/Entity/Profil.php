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
	private $editDocuments;
	
	/**
	 * @ORM\Column(type="boolean")
	 */
	private $isController;
	
	/**
	 * @ORM\Column(type="boolean")
	 */
	private $isAdmin;

	/**
	 * @ORM\Column(type="boolean")
	 */
	private $isSuperAdmin;


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
	
	public function getEditDocuments(): ?bool
	{
		return $this->editDocuments;
	}
	
	public function setEditDocuments(bool $editDocuments): self
	{
		$this->editDocuments = $editDocuments;
		
		return $this;
	}
	
	public function getIsController(): ?bool
	{
		return $this->isController;
	}
	
	public function setIsController(bool $isController): self
	{
		$this->isController = $isController;
		
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

	public function getIsSuperAdmin(): ?bool
	{
		return $this->isSuperAdmin;
	}

	public function setIsSuperAdmin(bool $isSuperAdmin): self
	{
		$this->isSuperAdmin = $isSuperAdmin;

		return $this;
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
	
}
?>