<?php

namespace App\Entity;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Company;
use App\Entity\Profil;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields="email", message="An user with this email already exist.")
 */
class User implements UserInterface
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
    private $lastConnected;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Profil")
     * @ORM\JoinColumn(nullable=false)
     */
    private $profil;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;
    
    private $roles = [];

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Project", mappedBy="users")
     */
    private $projects;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Vue", mappedBy="User", orphanRemoval=true)
     */
    private $vues;
    
	
    public function __construct()
    {
    	$this->locale = 'fr_FR';
        $this->lastConnected = new \DateTime;
    	$this->projects = new ArrayCollection();
     	$this->versions = new ArrayCollection();
      $this->vues = new ArrayCollection();
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
    public function getUsername(): string
    {
        return (string) $this->email;
    }
    

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
    
    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
    
    public function getRoles(): array
    { 
    	if (empty($this->roles)) {
            if ($this->getProfil()->getEditProgressRules())     $this->roles[] = 'ROLE_PROGRESS_RULES';
            if ($this->getProfil()->getEditCodifications())     $this->roles[] = 'ROLE_CODIFICATIONS';
            if ($this->getProfil()->getEditMetadatas())         $this->roles[] = 'ROLE_METADATAS';
            if ($this->getProfil()->getEditVisas())             $this->roles[] = 'ROLE_VISAS';
            if ($this->getProfil()->getIsAdmin())               $this->roles[] = 'ROLE_ADMIN';
        }
        $this->roles[] = 'ROLE_USER';
        return array_unique($this->roles);
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
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }

    /**
     * @return Collection|Vue[]
     */
    public function getVues(): Collection
    {
        return $this->vues;
    }

    public function addVue(Vue $vue): self
    {
        if (!$this->vues->contains($vue)) {
            $this->vues[] = $vue;
            $vue->setUser($this);
        }

        return $this;
    }

    public function removeVue(Vue $vue): self
    {
        if ($this->vues->contains($vue)) {
            $this->vues->removeElement($vue);
            // set the owning side to null (unless already changed)
            if ($vue->getUser() === $this) {
                $vue->setUser(null);
            }
        }

        return $this;
    }
}
?>