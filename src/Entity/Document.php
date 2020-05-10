<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentRepository")
 */
class Document
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
     * @ORM\ManyToMany(targetEntity="App\Entity\CodificationItem", cascade={"persist"})
     */
    private $codificationItems;
    
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\CodificationValue", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $codificationValues;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataItem", cascade={"persist"})
     * @ORM\JoinTable(name="document_metadata_item")
     */
    private $metadataItems;
    
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataValue", cascade={"persist", "remove"}, orphanRemoval=true)
     * @ORM\JoinTable(name="document_metadata_value")
     */
    private $metadataValues;
    
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Version", mappedBy="document", orphanRemoval=true)
     */
    private $versions;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Serie", inversedBy="documents")
     * @ORM\JoinColumn(nullable=false)
     */
    private $serie;
    
    public function __construct()
    {
    	$this->codificationItems = new ArrayCollection();
    	$this->codificationValues = new ArrayCollection();
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
     * @return Collection|CodificationItem[]
     */
    public function getCodificationItems(): Collection
    {
        return $this->codificationItems;
    }

    public function addCodificationItem(CodificationItem $codificationItem): self
    {
    	if (!$this->codificationItems->contains($codificationItem)) {
    		$this->codificationItems[] = $codificationItem;
        }

        return $this;
    }

    public function removeCodificationItem(CodificationItem $codificationItem): self
    {
    	if ($this->codificationItems->contains($codificationItem)) {
    		$this->codificationItems->removeElement($codificationItem);
        }

        return $this;
    }
    
    /**
     * @return Collection|CodificationValue[]
     */
    
    public function getCodificationValues(): Collection
    {
    	return $this->codificationValues;
    }
    
    public function addCodificationValue(CodificationValue $codificationValue): self
    {
    	if (!$this->codificationValues->contains($codificationValue)) {
    		$this->codificationValues[] = $codificationValue;
    	}
    	
    	return $this;
    }
    
    public function removeCodificationValue(CodificationValue $codificationValue): self
    {
    	if ($this->codificationValues->contains($codificationValue)) {
    		$this->codificationValues->removeElement($codificationValue);
    	}
    	
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
            $version->setDocument($this);
        }

        return $this;
    }

    public function removeVersion(Version $version): self
    {
        if ($this->versions->contains($version)) {
            $this->versions->removeElement($version);
            // set the owning side to null (unless already changed)
            if ($version->getDocument() === $this) {
            	$version->setDocument(null);
            }
        }

        return $this;
    }

    public function getSerie(): ?Serie
    {
        return $this->serie;
    }

    public function setSerie(?Serie $serie): self
    {
        $this->serie = $serie;

        return $this;
    }
    
    public function getCodificationItemByCodification($codification): ?CodificationItem
    {
    	foreach ($this->getCodificationItems() as $codificationItem) {
    		if ($codificationItem->getCodification() == $codification) {
    			return $codificationItem;
    		}
    	}
    	return null;
    }
    
    public function getCodificationValueByCodification($codification): ?CodificationValue
    {
    	foreach ($this->getCodificationValues() as $codificationValue) {
    		if ($codificationValue->getCodification() == $codification) {
    			return $codificationValue;
    		}
    	}
    	return null;
    }
    
    public function getReference(): ?string
    {
    	$project = $this->getSerie()->getProject();
    	$codifications = $project->getCodifications()->getValues();
    	$references = [];
    	
    	foreach ($codifications as $codification) {
    		
    		if ($codification->isList()) {
    			
    			if ($codificationItem = $this->getCodificationItemByCodification($codification)) {
    				$value = $codificationItem->getValue();
    				if (!empty($value)) $references[] = $value;
    			}
    			
    		} elseif ($codification->isRegex()) {

    			if ($codificationValue = $this->getCodificationValueByCodification($codification)) {
    				$value = $codificationValue->getValue();
    				if (!empty($value)) $references[] = $value;
    			}
    			
    		} else {
    			
    			$value = $codification->getValue();
    			if (!empty($value)) $references[] .= $codification->getValue();
    			
    		}
    	}
    	
    	return join($project->getSplitter(), $references);
    	
    }
    
    public function setCodificationValue(Codification $codification, $value): bool
    {
    	
    	switch ($codification->getType()) {
    		case Codification::FIXED:
    			return true;
    			break;
    			
    		case Codification::LIST:
    			if ($codificationItem = $this->getCodificationItemByCodification($codification)) {
    				if ($codificationItem == $value) {
    					return false;
    				} else {
    					$this->codificationItems->removeElement($codificationItem);
    				}
    			}
    			
    			if ($value) {
    				$this->addCodificationItem($value);
    				return true;
    			}
    			
    			return false;
    			break;
    				
    		case Codification::REGEX:
    			if ($codificationValue = $this->getCodificationValueByCodification($codification)) {
    				if ($codificationValue->getValue() == $value) {
    					return false;
    				} else {
    					$this->codificationValues->removeElement($codificationValue);
    				}
    			}
    			
    			if ($value != '') {
    				$codificationValue = new CodificationValue();
    				$codificationValue->setValue($value);
    				$codificationValue->setDocument($this);
    				$codificationValue->setCodification($codification);
    				$this->addCodificationValue($codificationValue);
    				return true;
    			}
    			
    			return false;
    			break;
    	}
    	
    	return false;
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
    						$this->metadataValues->removeElement($metadataValue);
    					}
    				}
    			}
    			
    			if ($value) {
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
    						$this->metadataItems->removeElement($metadataItem);
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
    		case 'document[name]':
    			return $this->getName();
    			break;
    		case 'document[reference]':
    			return $this->getReference();
    			break;
    		default:
    			if (preg_match('/document\[\w+\]/', $codename)) {
    				foreach ($this->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->getMetadataValue($metadata);
    					}
    				}
    			} else {
    				return $this->getSerie()->getPropertyValue($codename);
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
    	return (string)$this->getReference();
    }
    
}
