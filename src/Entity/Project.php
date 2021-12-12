<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\User;
use App\Entity\Codification;
use App\Entity\Metadata;
use App\Entity\Visa;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
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
	 * @ORM\Column(type="string", length=255, nullable=true)
	 */
	private $image;

	/**
	 * @ORM\Column(type="string", length=4, nullable=true)
	 */
	private $splitter;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $newVersionTime;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $prodWarningLimit;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $prodDangerLimit;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $checkWarningLimit;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $checkDangerLimit;

	/**
	 * @ORM\ManyToMany(targetEntity=User::class, inversedBy="projects")
	 */
	private $users;

	/**
	 * @ORM\OneToMany(targetEntity=Codification::class, mappedBy="project", orphanRemoval=true, fetch="EAGER")
	 */
	private $codifications;

	/**
	 * @ORM\OneToMany(targetEntity=Metadata::class, mappedBy="project", orphanRemoval=true, fetch="EAGER")
	 */
	private $metadatas;

	/**
	 * @ORM\OneToMany(targetEntity=Status::class, mappedBy="project", orphanRemoval=true)
	 */
	private $statuses;

	/**
	 * @ORM\OneToMany(targetEntity=Visa::class, mappedBy="project", orphanRemoval=true)
	 */
	private $visas;

	/**
	 * @ORM\OneToMany(targetEntity=Serie::class, mappedBy="project", orphanRemoval=true)
	 * @ORM\OrderBy({"name" = "ASC"})
	 */
	private $series;

	/**
	 * @ORM\OneToMany(targetEntity=View::class, mappedBy="project", orphanRemoval=true)
	 */
	private $views;

	/**
	 * @ORM\OneToMany(targetEntity=Program::class, mappedBy="project", orphanRemoval=true)
	 */
	private $programs;

	public function __construct()
	{
		$this->users = new ArrayCollection();
		$this->codifications = new ArrayCollection();
		$this->metadatas = new ArrayCollection();
		$this->statuses = new ArrayCollection();
		$this->visas = new ArrayCollection();
		$this->series = new ArrayCollection();
		$this->views = new ArrayCollection();
		$this->programs = new ArrayCollection();
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

	public function getImage(): ?string
	{
		return $this->image;
	}

	public function setImage(?string $image): self
	{
		$this->image = $image;

		return $this;
	}

	public function getSplitter(): ?string
	{
		return $this->splitter;
	}

	public function setSplitter(?string $splitter): self
	{
		$this->splitter = $splitter;

		return $this;
	}

	public function getNewVersionTime(): ?int
	{
		return $this->newVersionTime;
	}

	public function setNewVersionTime(int $newVersionTime): self
	{
		$this->newVersionTime = $newVersionTime;

		return $this;
	}

	public function getProdWarningLimit(): ?int
	{
		return $this->prodWarningLimit;
	}

	public function setProdWarningLimit(int $prodWarningLimit): self
	{
		$this->prodWarningLimit = $prodWarningLimit;

		return $this;
	}

	public function getProdDangerLimit(): ?int
	{
		return $this->prodDangerLimit;
	}

	public function setProdDangerLimit(int $prodDangerLimit): self
	{
		$this->prodDangerLimit = $prodDangerLimit;

		return $this;
	}

	public function getCheckWarningLimit(): ?int
	{
		return $this->checkWarningLimit;
	}

	public function setCheckWarningLimit(int $checkWarningLimit): self
	{
		$this->checkWarningLimit = $checkWarningLimit;

		return $this;
	}

	public function getCheckDangerLimit(): ?int
	{
		return $this->checkDangerLimit;
	}

	public function setCheckDangerLimit(int $checkDangerLimit): self
	{
		$this->checkDangerLimit = $checkDangerLimit;

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
		}

		return $this;
	}

	public function removeUser(User $user): self
	{
		if ($this->users->contains($user)) {
			$this->users->removeElement($user);
		}

		return $this;
	}

	public function hasUser(User $user): bool
	{
		return $this->users->contains($user);
	}

	/**
	 * @return Collection|Codification[]
	 */
	public function getCodifications(): Collection
	{
		return $this->codifications;
	}

	public function addCodification(Codification $codification): self
	{
		if (!$this->codifications->contains($codification)) {
			$this->codifications[] = $codification;
			$codification->setProject($this);
		}

		return $this;
	}

	public function removeCodification(Codification $codification): self
	{
		if ($this->codifications->contains($codification)) {
			$this->codifications->removeElement($codification);
			// set the owning side to null (unless already changed)
			if ($codification->getProject() === $this) {
				$codification->setProject(null);
			}
		}

		return $this;
	}

	/**
	 * @return Collection|Metadata[]
	 */
	public function getMetadatas(): Collection
	{
		return $this->metadatas;
	}

	public function addMetadata(Metadata $metadata): self
	{
		if (!$this->metadatas->contains($metadata)) {
			$this->metadatas[] = $metadata;
			$metadata->setProject($this);
		}

		return $this;
	}

	public function removeMetadata(Metadata $metadata): self
	{
		if ($this->metadatas->contains($metadata)) {
			$this->metadatas->removeElement($metadata);
			// set the owning side to null (unless already changed)
			if ($metadata->getProject() === $this) {
				$metadata->setProject(null);
			}
		}

		return $this;
	}

	/**
	 * @return Collection|Status[]
	 */
	public function getStatuses(): Collection
	{
		return $this->statuses;
	}

	public function addStatus(Status $status): self
	{
		if (!$this->statuses->contains($status)) {
			$this->statuses[] = $status;
			$status->setProject($this);
		}

		return $this;
	}

	public function removeStatus(Status $status): self
	{
		if ($this->statuses->contains($status)) {
			$this->statuses->removeElement($status);
			// set the owning side to null (unless already changed)
			if ($status->getProject() === $this) {
				$status->setProject(null);
			}
		}

		return $this;
	}

	/**
	 * @return Collection|Visa[]
	 */
	public function getVisas(): Collection
	{
		return $this->visas;
	}

	/**
	 * @return Collection|Visa[]
	 */
	public function getVisasByCompany(Company $company): Collection
	{
		$visas = new ArrayCollection();
		foreach ($this->getVisas()->getValues() as $visa) {
			if ($visa->getCompany() == $company) {
				$visas[] = $visa;
			}
		}
		return $visas;
	}

	public function addVisa(Visa $visa): self
	{
		if (!$this->visas->contains($visa)) {
			$this->visas[] = $visa;
			$visa->setProject($this);
		}

		return $this;
	}

	public function removeVisa(Visa $visa): self
	{
		if ($this->visas->contains($visa)) {
			$this->visas->removeElement($visa);
			// set the owning side to null (unless already changed)
			if ($visa->getProject() === $this) {
				$visa->setProject(null);
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
			$series->setProject($this);
		}

		return $this;
	}

	public function removeSeries(Serie $series): self
	{
		if ($this->series->contains($series)) {
			$this->series->removeElement($series);
			// set the owning side to null (unless already changed)
			if ($series->getProject() === $this) {
				$series->setProject(null);
			}
		}

		return $this;
	}

	/**
	 * @return Collection|View[]
	 */
	public function getViews(): Collection
	{
		return $this->views;
	}

	public function addView(View $view): self
	{
		if (!$this->views->contains($view)) {
			$this->views[] = $view;
			$view->setProject($this);
		}

		return $this;
	}

	public function removeView(View $view): self
	{
		if ($this->views->contains($view)) {
			$this->views->removeElement($view);
			// set the owning side to null (unless already changed)
			if ($view->getProject() === $this) {
				$view->setProject(null);
			}
		}

		return $this;
	}


	/**
	 * @return Collection|Program[]
	 */
	public function getPrograms(): Collection
	{
		return $this->programs;
	}

	public function addProgram(Program $program): self
	{
		if (!$this->programs->contains($program)) {
			$this->programs[] = $program;
			$program->setProject($this);
		}

		return $this;
	}

	public function removeProgram(Program $program): self
	{
		if ($this->programs->contains($program)) {
			$this->programs->removeElement($program);
			// set the owning side to null (unless already changed)
			if ($program->getProject() === $this) {
				$program->setProject(null);
			}
		}

		return $this;
	}

	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
