<?php

namespace App\Entity;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProfilRepository;
use Symfony\Component\Validator\Constraints as Assert;

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
	#[Assert\NotBlank]
	#[Assert\Regex('/^[^$"]+$/')]
	private ?string $name = null;
	
	#[ORM\Column]
	private ?bool $superAdmin = null;
	
	#[ORM\Column]
	private ?bool $admin = null;
	
	#[ORM\Column]
	private ?bool $controller = null;
	
	#[ORM\Column]
	private ?bool $editor = null;
	
	public function __construct()
	{
		$this->superAdmin = false;
		$this->admin = false;
		$this->controller = false;
		$this->editor = false;
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
	
	public function isSuperAdmin(): ?bool
	{
		return $this->superAdmin;
	}
	
	public function setSuperAdmin(bool $superAdmin): self
	{
		$this->superAdmin = $superAdmin;
		
		if ($superAdmin === true) {
			$this->setAdmin(true);
		}
		
		return $this;
	}
	
	public function isAdmin(): ?bool
	{
		return $this->admin;
	}
	
	public function setAdmin(bool $admin): self
	{
		$this->admin = $admin;
		
		if ($admin === true) {
			$this->setEditor(true);
			$this->setController(true);
		}
		return $this;
	}
	
	public function isController(): ?bool
	{
		return $this->controller;
	}

	public function setController(bool $controller): self
	{
		$this->controller = $controller;
		
		return $this;
	}

	public function isEditor(): ?bool
	{
		return $this->editor;
	}

	public function setEditor(bool $editor): self
	{
		$this->editor = $editor;
		
		return $this;
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>