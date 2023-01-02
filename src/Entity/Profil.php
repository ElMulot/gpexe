<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProfilRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

#[ORM\Entity(repositoryClass: ProfilRepository::class)]
#[UniqueEntity(
	fields: 'name'
)]
class Profil implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100, unique: true)]
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;
	
	#[ORM\Column]
	private ?bool $isSuperAdmin = null;
	
	#[ORM\Column]
	private ?bool $isAdmin = null;
	
	#[ORM\Column]
	private ?bool $isController = null;
	
	#[ORM\Column]
	private ?bool $editDocuments = null;
	
	public function __construct()
	{
		$this->isSuperAdmin = false;
		$this->isAdmin = false;
		$this->isController = false;
		$this->editDocuments = false;
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
	
	public function getIsSuperAdmin(): ?bool
	{
		return $this->isSuperAdmin;
	}
	
	public function setIsSuperAdmin(bool $isSuperAdmin): self
	{
		$this->isSuperAdmin = $isSuperAdmin;
		
		if ($isSuperAdmin === true) {
			$this->setIsAdmin(true);
		}
		
		return $this;
	}
	
	public function getIsAdmin(): ?bool
	{
		return $this->isAdmin;
	}
	
	public function setIsAdmin(bool $isAdmin): self
	{
		$this->isAdmin = $isAdmin;
		
		if ($isAdmin === true) {
			$this->setEditDocuments(true);
			$this->setIsController(true);
		}
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

	public function getEditDocuments(): ?bool
	{
		return $this->editDocuments;
	}

	public function setEditDocuments(bool $editDocuments): self
	{
		$this->editDocuments = $editDocuments;
		
		return $this;
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>