<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FileRepository")
 */
class File
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Codification")
     */
    private $codification;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Version", mappedBy="file", orphanRemoval=true)
     */
    private $versions;

    public function __construct()
    {
        $this->codification = new ArrayCollection();
        $this->versions = new ArrayCollection();
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

    /**
     * @return Collection|codification[]
     */
    public function getCodification(): Collection
    {
        return $this->codification;
    }

    public function addCodification(Codification $codification): self
    {
        if (!$this->codification->contains($codification)) {
            $this->codification[] = $codification;
        }

        return $this;
    }

    public function removeCodification(Codification $codification): self
    {
        if ($this->codification->contains($codification)) {
            $this->codification->removeElement($codification);
        }

        return $this;
    }

    /**
     * @return Collection|Version[]
     */
    public function getVersions(): Collection
    {
        return $this->versions;
    }

    public function addVersion(Version $version): self
    {
        if (!$this->versions->contains($version)) {
            $this->versions[] = $version;
            $version->setFile($this);
        }

        return $this;
    }

    public function removeVersion(Version $version): self
    {
        if ($this->versions->contains($version)) {
            $this->versions->removeElement($version);
            // set the owning side to null (unless already changed)
            if ($version->getFile() === $this) {
                $version->setFile(null);
            }
        }

        return $this;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
