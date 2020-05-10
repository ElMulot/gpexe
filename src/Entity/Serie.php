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
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataItem", cascade={"persist"})
     * @ORM\JoinTable(name="serie_metadata_item")
     */
    private $metadataItems;
    
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataValue", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $metadataValues;
    
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
    		if ($document->getSerie() === $document) {
    			$document->setSerie(null);
            }
        }

        return $this;
    }
    
    public function getMetadataValue(Metadata $metadata) {
    	
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
    			if ($value instanceof \DateTime) {
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
    						return false;
    					} else {
    						$this->removeMetadataValue($metadataValue);
    					}
    				}
    			}
    			
    			if ($value != '') {
    				$metadataValue = new MetadataValue();
    				$metadataValue->setValue($value);
    				$metadataValue->setMetadata($metadata);
    				$this->addMetadataValue($metadataValue);
    				return true;
    			}
    			
    			return false;
    			break;
    			
    		case Metadata::LIST:
    			foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
    				if ($metadataItem->getMetadata() == $metadata) {
    					if ($metadataItem->getValue() == $value) {
    						return false;
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
    			
    			return false;
    			break;
    	}
    }
    
    public function getPropertyValue(string $codename)
    {
    	
    	switch ($codename) {
    		case 'serie[name]':
    			return $this->getName();
    			break;
    		case 'serie[company]':
    			return $this->getCompany()->getName();
    			break;
    		default:
    			if (preg_match('/serie\[\w+\]/', $codename)) {
    				foreach ($this->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->getMetadataValue($metadata);
    					}
    				}
    			}
    	}
    	
    	return null;
    }
    
    public function getPropertyValueToString(string $codename): string
    {
    	$value = $this->getPropertyValue($codename);
    	
    	switch (gettype($value)) {
    		case 'boolean':
    			return ($value)?'Yes':'No';
    			break;
    			
    		case 'object':
    			switch (ClassUtils::getClass($value)) {
    				case MetadataItem::class:
    				case MetadataValue::class:
    					switch (gettype($value->getValue())) {
    						case 'boolean':
    							return ($value->getValue())?'Yes':'No';
    							break;
    						case 'object':
    							return $value->getValue()->format('d-m-Y');
    							break;
    						default:
    							return $value->getValue();
    					}
    					break;
    				default:
    					return (string)$value;
    			}
    			break;
    			
    		default:
    			return (string)$value;
    	}
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }
}
