<?php

namespace App\Entity;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields="email", message="An user with this email already exist.")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=180, unique=true)
	 */
	private $email;

	/**
     * @var string The hashed password
     * @ORM\Column(type="string")
	 */
	private $password;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	private $name;

	/**
	 * @ORM\Column(type="string", length=5)
	 */
	private $locale;

	/**
	 * @ORM\Column(type="boolean")
	 */
	private $activated;

	/**
	 * @ORM\Column(type="datetime")
	 */
	private $createdOn;

	/**
	 * @ORM\Column(type="datetime")
	 */
	private $lastConnected;

	/**
	 * @ORM\ManyToOne(targetEntity=Profil::class)
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $profil;

	/**
	 * @ORM\ManyToOne(targetEntity=Company::class, inversedBy="users")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $company;
	
	private $roles = [];

	/**
	 * @ORM\ManyToMany(targetEntity=Project::class, mappedBy="users")
	 */
	private $projects;

	/**
	 * @ORM\OneToMany(targetEntity=View::class, mappedBy="user", orphanRemoval=true)
	 */
	private $views;
	
	
	public function __construct()
	{
		$this->locale = 'fr_FR';
		$this->createdOn = new \DateTime();
		$this->lastConnected = new \DateTime();
		$this->projects = new ArrayCollection();
	  	$this->views = new ArrayCollection();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getEmail(): ?string
	{
		return $this->email;
	}

	public function setEmail(string $email): self
	{
		$this->email = $email;

		return $this;
	}

	/**
	 * A visual identifier that represents this user.
	 *
	 * @see UserInterface
	 */
	public function getUserIdentifier(): string
	{
		return (string) $this->email;
	}
	
	public function getUsername(): string
	{
		return $this->getUserIdentifier();
	}

	/**
	 * @see PasswordAuthenticatedUserInterface
	 */
	public function getPassword(): string
	{
		return $this->password;
	}

	public function setPassword(string $password): self
	{
		$this->password = $password;

		return $this;
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

	public function getLocale(): ?string
	{
		return $this->locale;
	}

	public function setLocale(string $locale): self
	{
		$this->locale = $locale;
		return $this;
	}

	public function getActivated(): ?bool
	{
		return $this->activated;
	}

	public function setActivated(bool $activated): self
	{
		$this->activated = $activated;

		return $this;
	}

	public function getCreatedOn(): ?\DateTimeInterface
	{
		return $this->createdOn;
	}

	public function setCreatedOn(\DateTimeInterface $createdOn): self
	{
		$this->createdOn = $createdOn;

		return $this;
	}

	public function getLastConnected(): ?\DateTimeInterface
	{
		return $this->lastConnected;
	}

	public function setLastConnected(\DateTimeInterface $lastConnected): self
	{
		$this->lastConnected = $lastConnected;

		return $this;
	}

	public function getProfil(): ?Profil
	{
		return $this->profil;
	}

	public function setProfil(?Profil $profil): self
	{
		$this->profil = $profil;

		return $this;
	}

	public function getCompany(): ?Company
	{
		return $this->company;
	}

	public function setCompany(?Company $company): self
	{
		$this->company = $company;

		return $this;
	}

	/**
	 * @return Collection|Project[]
	 */
	public function getProjects(): Collection
	{
		return $this->projects;
	}

	public function addProject(Project $project): self
	{
		if (!$this->projects->contains($project)) {
			$this->projects[] = $project;
			$project->addUser($this);
		}

		return $this;
	}

	public function removeProject(Project $project): self
	{
		if ($this->projects->contains($project)) {
			$this->projects->removeElement($project);
			$project->removeUser($this);
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
			$view->setUser($this);
		}

		return $this;
	}

	public function removeView(View $view): self
	{
		if ($this->views->contains($view)) {
			$this->views->removeElement($view);
			// set the owning side to null (unless already changed)
			if ($view->getUser() === $this) {
				$view->setUser(null);
			}
		}

		return $this;
	}
	
	/**
	 * Returning a salt is only needed, if you are not using a modern
	 * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
	 *
	 * @see UserInterface
	 */
	public function getSalt()
	{
		// not needed when using the "bcrypt" algorithm in security.yaml
	}
	
	/**
	 * @see UserInterface
	 */
	public function eraseCredentials()
	{
		// If you store any temporary, sensitive data on the user, clear it here
		// $this->plainPassword = null;
	}
	
	public function getRoles(): array
	{
		if (empty($this->roles)) {
			if ($this->getProfil()->getEditDocuments())		 $this->roles[] = 'ROLE_EDIT_DOCUMENTS';
			if ($this->getProfil()->getIsController())		 	$this->roles[] = 'ROLE_CONTROLLER';
			if ($this->getProfil()->getIsAdmin())			   $this->roles[] = 'ROLE_ADMIN';
			if ($this->getProfil()->getIsSuperAdmin())		  $this->roles[] = 'ROLE_SUPER_ADMIN';
		}
		$this->roles[] = 'ROLE_USER';
		return array_unique($this->roles);
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
?>