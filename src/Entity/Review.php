<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ReviewRepository;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\ManyToOne]
	private ?User $user = null;

	#[ORM\Column]
	private ?\DateTime $date = null;

	#[ORM\ManyToOne]
	private ?Visa $visa = null;

	#[ORM\ManyToOne(inversedBy: 'reviews')]
	private ?Version $version = null;

	public function __construct()
	{
		$this->date = new \DateTime();
	}

	public function getId(): ?int
	{
		return $this->id;
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

	public function getVisa(): ?Visa
	{
		return $this->visa;
	}

	public function setVisa(?Visa $visa): self
	{
		$this->visa = $visa;

		return $this;
	}

	public function getVersion(): ?Version
	{
		return $this->version;
	}
	
	public function setVersion(?Version $version): self
	{
		$this->version = $version;

		return $this;
	}
}
