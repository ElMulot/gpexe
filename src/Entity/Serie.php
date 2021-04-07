<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Spatie\Regex\Regex;

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
     * @ORM\ManyToMany(targetEntity=MetadataItem::class, cascade={"persist"})
     * @ORM\JoinTable(name="serie_metadata_item")
     */
    private $metadataItems;
    
    /**
     * @ORM\ManyToMany(targetEntity=MetadataValue::class, cascade={"persist"})
     */
    private $metadataValues;
    
    /**
     * @ORM\ManyToOne(targetEntity=Company::class, inversedBy="series")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="series")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\OneToMany(targetEntity=Document::class, mappedBy="serie", cascade={"persist"}, orphanRemoval=true)
     */
    private $documents;

    /**
     * @ORM\OneToMany(targetEntity=Progress::class, mappedBy="serie", orphanRemoval=true)
     */
    private $progress;

    public function __construct()
    {
    	$this->metadataItems = new ArrayCollection();
    	$this->metadataValues = new ArrayCollection();
    	$this->documents = new ArrayCollection();
     $this->progress = new ArrayCollection();
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
    	}
    	
    	return $this;
    }
    
    public function removeMetadataItem(MetadataItem $metadataItem): self
    {
    	if ($this->metadataItems->contains($metadataItem)) {
    		$this->metadataItems->removeElement($metadataItem);
    	}
    	
    	return $this;
    }
    
    /**
     * @return Collection|MetadataValue[]
     */
    public function getMetadataValues(): Collection
    {
    	return $this->metadataValues;
    }
    
    public function addMetadataValue(MetadataValue $metadataValue): self
    {
    	if (!$this->metadataValues->contains($metadataValue)) {
    		$this->metadataValues[] = $metadataValue;
    	}
    	
    	return $this;
    }
    
    public function removeMetadataValue(MetadataValue $metadataValue): self
    {
    	if ($this->metadataValues->contains($metadataValue)) {
    		$this->metadataValues->removeElement($metadataValue);
    	}
    	
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
    		if ($document->getSerie() === $this) {
    			$document->setSerie(null);
            }
        }

        return $this;
    }
    
    /**
     * @return Collection|Progress[]
     */
    public function getProgress(): Collection
    {
    	return $this->progress;
    }
    
    public function addProgress(Progress $progress): self
    {
    	if (!$this->progress->contains($progress)) {
    		$this->progress[] = $progress;
    		$progress->setSerie($this);
    	}
    	
    	return $this;
    }
    
    public function removeProgress(Progress $progress): self
    {
    	if ($this->progress->removeElement($progress)) {
    		// set the owning side to null (unless already changed)
    		if ($progress->getSerie() === $this) {
    			$progress->setSerie(null);
    		}
    	}
    	
    	return $this;
    }
    
    public function belongToMDR(): bool
    {
    	return ($this->getCompany()->getType() == Company::MAIN_CONTRACTOR);
    }

    public function belongToSDR(): bool
    {
    	return ($this->getCompany()->getType() == Company::SUB_CONTRACTOR || $this->getCompany()->getType() == Company::SUPPLIER);
    }
    
    public function getType(): ?string
    {
    	switch ($this->getCompany()->getType()) {
    		case Company::MAIN_CONTRACTOR:
    			return 'mdr';
    		case Company::SUB_CONTRACTOR:
    		case Company::SUPPLIER:
    			return 'sdr';
    	}
    }
    
    
    public function getMetadataValue(Metadata $metadata)
    {
    	
    	switch ($metadata->getType()) {
    		
    		case Metadata::BOOLEAN:
    		case Metadata::TEXT:
    		case Metadata::DATE:
    		case Metadata::LINK:
    			foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
    				if ($metadataValue->getMetadata() == $metadata) {
    					return $metadataValue;
    				}
    			}
    			break;
    			
    		case Metadata::LIST:
    			foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
    				if ($metadataItem->getMetadata() == $metadata) {
    					return $metadataItem;
    				}
    			}
    			break;
    	}
    	
    }
    
    public function setMetadataValue(Metadata $metadata, $value): bool
    {
    	
    	switch ($metadata->getType()) {
    		case Metadata::BOOLEAN:
    			$value = ($value)?true:false;
    			break;
    		case Metadata::DATE:
    			if ($value instanceof \DateTimeInterface) {
    				$value = $value->format('d-m-Y');
    			}
    			break;
    	}
    	
    	switch ($metadata->getType()) {
    		
    		case Metadata::BOOLEAN:
    		case Metadata::TEXT:
    		case Metadata::DATE:
    			foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
    				if ($metadataValue->getMetadata() == $metadata) {
    					if ($metadataValue->getValue() == $value) {
    						return true;
    					} else {
    						$this->removeMetadataValue($metadataValue);
    					}
    				}
    			}
    			
    			if ($value) {
    				foreach ($metadata->getMetadataValues()->getValues() as $metadataValue) {
    					if ($metadataValue->getValue() == $value) {
    						$this->addMetadataValue($metadataValue);
    						return true;
    					}
    				}
    				$metadataValue = new MetadataValue();
    				$metadataValue->setValue($value);
    				$metadataValue->setMetadata($metadata);
//     				$this->addMetadataValue($metadataValue);
    				return true;
    			}
    			
    			break;
    			
    		case Metadata::LIST:
    			foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
    				if ($metadataItem->getMetadata() == $metadata) {
    					if ($metadataItem->getValue() == $value) {
    						return true;
    					} else {
    						$this->removeMetadataItem($metadataItem);
    					}
    				}
    			}
    			
    			if ($value) {
    				foreach ($metadata->getMetadataItems()->getValues() as $metadataItem) {
    					if ($metadataItem->getValue() == $value) {
    						$this->addMetadataItem($metadataItem);
    					}
    				}
    				return true;
    			}
    			
    			break;
    	}
    	
    	return false;
    }
    
    public function getPropertyValue(string $codename)
    {
    	
    	switch ($codename) {
    		case 'serie.name':
    			return $this->getName();
    			
    		case 'serie.company':
    			return $this->getCompany()->getName();
    			
    		default:
    			if (Regex::match('/serie\.\w+/', $codename)->hasMatch()) {
    				foreach ($this->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->getMetadataValue($metadata);
    					}
    				}
    			}
    	}
    	
    	return null;
    }
    
    public function setPropertyValue(string $codename, $value)
    {
    	
    	switch ($codename) {
    		default:
    			if (Regex::match('/serie\.\w+/', $codename)->hasMatch()) {
    				foreach ($this->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->setMetadataValue($metadata, $value);
    					}
    				}
    			}
    	}
    	
    	return false;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
