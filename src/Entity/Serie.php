<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SerieRepository")
 */
class Serie
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
    private $pirsFolderPath;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="series")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="series")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Document", mappedBy="serie", orphanRemoval=true)
     */
    private $documents;

    public function __construct()
    {
    	$this->documents = new ArrayCollection();
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

    public function getPirsFolderPath(): ?string
    {
        return $this->pirsFolderPath;
    }

    public function setPirsFolderPath(?string $pirsFolderPath): self
    {
        $this->pirsFolderPath = $pirsFolderPath;

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

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
    	return $this->documents;
    }

    public function addDocument(Document $document): self
    {
    	if (!$this->documents->contains($document)) {
    		$this->documents[] = $document;
    		$document->setSerie($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
    	if ($this->documents->contains($document)) {
    		$this->documents->removeElement($document);
            // set the owning side to null (unless already changed)
    		if ($document->getSerie() === $document) {
    			$document->setSerie(null);
            }
        }

        return $this;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
