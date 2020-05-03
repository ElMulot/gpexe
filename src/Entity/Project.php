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
     * @ORM\Column(type="string", length=4, nullable=true)
     */
    private $splitter;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="projects")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Codification", mappedBy="project", orphanRemoval=true)
     */
    private $codifications;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Metadata", mappedBy="project", orphanRemoval=true)
     */
    private $metadatas;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Status", mappedBy="project", orphanRemoval=true)
     */
    private $statuses;
    
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Visa", mappedBy="project", orphanRemoval=true)
     */
    private $visas;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Serie", mappedBy="project", orphanRemoval=true)
     */
    private $series;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Vue", mappedBy="Project", orphanRemoval=true)
     */
    private $vues;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->codifications = new ArrayCollection();
        $this->metadatas = new ArrayCollection();
        $this->statuses = new ArrayCollection();
        $this->visas = new ArrayCollection();
        $this->series = new ArrayCollection();
        $this->vues = new ArrayCollection();
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

    public function getSplitter(): ?string
    {
        return $this->splitter;
    }

    public function setSplitter(?string $splitter): self
    {
        $this->splitter = $splitter;

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
            $vue->setProject($this);
        }

        return $this;
    }

    public function removeVue(Vue $vue): self
    {
        if ($this->vues->contains($vue)) {
            $this->vues->removeElement($vue);
            // set the owning side to null (unless already changed)
            if ($vue->getProject() === $this) {
                $vue->setProject(null);
            }
        }

        return $this;
    }
}
?>