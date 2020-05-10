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
	const LINK				= 4;
	const LIST      	    = 5;
	const DEFAULT           = self::LIST;
	
	const SERIE				= 1;
	const DOCUMENT			= 2;
	const VERSION			= 3;
	
	
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
     * @ORM\Column(type="string", length=100)
     */
    private $codename;
    
    /**
     * @ORM\Column(type="smallint")
     */
    private $type;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isMandatory;

    /**
     * @ORM\Column(type="smallint")
     */
    private $parent;
    
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

    public function getCodename(): ?string
    {
    	return $this->codename;
    }
    
    public function setCodename(string $codename): self
    {
    	$this->codename = $codename;
    	
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
    
    public function getParent(): ?int
    {
    	return $this->parent;
    }
    
    public function setParent(int $parent): self
    {
    	$this->parent = $parent;
    	
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
    
    public function getParentName(): string
    {
    	switch ($this->parent) {
    		case self::SERIE:
    			return 'serie';
    		case self::DOCUMENT:
    			return 'document';
    		case self::VERSION:
    			return 'version';
    	}
    }
    
    public function getFullId(): string
    {
    	return $this->getParentName() . '[' . $this->id . ']';
    }
    
    public function getSnakeCaseFullId(): string
    {
    	return $this->getParentName() . '_' . $this->id;
    }
    
    public function getFullCodename(): string
    {
    	return $this->getParentName() . '[' . $this->codename . ']';
    }
    
    public function getSnakeCodeName(): string
    {
    	return $this->getParentName() . '_' . $this->codename;
    }
    
    public function getIsBoolean(): bool
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
    
    public function isLink(): bool
    {
    	return ($this->getType() == self::LINK);
    }
    
    public function isList(): bool
    {
    	return ($this->getType() == self::LIST);
    }
    
    public function parentIsSerie(): bool
    {
    	return ($this->getParent() == self::SERIE);
    }
    
    public function parentIsDocument(): bool
    {
    	return ($this->getParent() == self::DOCUMENT);
    }
    
    public function parentIsVersion(): bool
    {
    	return ($this->getParent() == self::VERSION);
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
?>