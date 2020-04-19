<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Project;
use App\Entity\MetadataItem;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MetadataRepository")
 */
class Metadata
{
    
	const BOOLEAN   		= 1;
	const TEXT			    = 2;
	const DATE			    = 3;
	const LIST      	    = 4;
	const DEFAULT           = self::LIST;
	
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
     * @ORM\Column(type="smallint")
     *      columnDefinition="ENUM(
     *          1,
     *          2,
     *          3)",
     *      options={"default": 3})
     */
    private $type;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isMandatory;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="metadatas")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MetadataItem", mappedBy="metadata", orphanRemoval=true)
     */
    private $metadataItems;

    public function __construct()
    {
        $this->type = self::DEFAULT;
    	$this->metadataItems = new ArrayCollection();
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

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getIsMandatory(): ?bool
    {
        return $this->isMandatory;
    }

    public function setIsMandatory(bool $isMandatory): self
    {
        $this->isMandatory = $isMandatory;

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
     * @return Collection|MetadataItem[]
     */
    public function getMetadataItems(): Collection
    {
        return $this->metadataItems;
    }

    public function addMetadataItem(MetadataItem $metadataItem): self
    {
        if (!$this->metadataItems->contains($metadataItem)) {
            $this->metadataItems[] = $metadataItem;
            $metadataItem->setMetadata($this);
        }

        return $this;
    }

    public function removeMetadataItem(MetadataItem $metadataItem): self
    {
        if ($this->metadataItems->contains($metadataItem)) {
            $this->metadataItems->removeElement($metadataItem);
            // set the owning side to null (unless already changed)
            if ($metadataItem->getMetadata() === $this) {
                $metadataItem->setMetadata(null);
            }
        }

        return $this;
    }
    
    public function getIsBoolean(): ?bool
    {
    	return ($this->getType() == self::BOOLEAN);
    }
    
    public function isText(): bool
    {
    	return ($this->getType() == self::TEXT);
    }
    
    public function isDate(): bool
    {
    	return ($this->getType() == self::DATE);
    }
    
    public function isList(): bool
    {
    	return ($this->getType() == self::LIST);
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
?>