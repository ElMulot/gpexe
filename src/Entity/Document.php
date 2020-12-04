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
     * @ORM\ManyToMany(targetEntity=CodificationItem::class, cascade={"persist"})
     */
    private $codificationItems;
    
    /**
     * @ORM\ManyToMany(targetEntity=CodificationValue::class, cascade={"persist"})
     */
    private $codificationValues;

    /**
     * @ORM\ManyToMany(targetEntity=MetadataItem::class, cascade={"persist"})
     * @ORM\JoinTable(name="document_metadata_item")
     */
    private $metadataItems;
    
    /**
     * @ORM\ManyToMany(targetEntity=MetadataValue::class, cascade={"persist"})
     * @ORM\JoinTable(name="document_metadata_value")
     */
    private $metadataValues;
    
    /**
     * @ORM\OneToMany(targetEntity=Version::class, mappedBy="document", orphanRemoval=true)
     */
    private $versions;

    /**
     * @ORM\ManyToOne(targetEntity=Serie::class, inversedBy="documents")
     * @ORM\JoinColumn(nullable=false)
     */
    private $serie;
    
    private $reference;
    
    public function __construct()
    {
    	$this->codificationItems = new ArrayCollection();
    	$this->codificationValues = new ArrayCollection();
    	$this->metadataItems = new ArrayCollection();
    	$this->metadataValues = new ArrayCollection();
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
    		$this->reference = null;
        }

        return $this;
    }

    public function removeCodificationItem(CodificationItem $codificationItem): self
    {
    	if ($this->codificationItems->contains($codificationItem)) {
    		$this->codificationItems->removeElement($codificationItem);
    		$this->reference = null;
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
    		$this->reference = null;
    	}
    	
    	return $this;
    }
    
    public function removeCodificationValue(CodificationValue $codificationValue): self
    {
    	if ($this->codificationValues->contains($codificationValue)) {
    		$this->codificationValues->removeElement($codificationValue);
    		$this->reference = null;
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
    	foreach ($this->getCodificationItems()->getValues() as $codificationItem) {		
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
    	if ($this->reference !== null) {
    		return $this->reference;
    	}
    	
    	if ($this->getCodificationItems()->count() == 0 && $this->getCodificationValues()->count() == 0) {
    		return null;
    	}
    	
    	$project = $this->getSerie()->getProject();
    	$references = [];
    	
    	foreach ($project->getCodifications()->getValues() as $codification) {
    		
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
    	
    	$this->reference = join($project->getSplitter(), $references);
    	
    	return $this->reference;
    	
    }
    
    public function setReference($value): bool
    {
    	$project = $this->getSerie()->getProject();
    	$references = explode($project->getSplitter(), $value);
    	$reference = null;
    	
    	foreach ($project->getCodifications()->getValues() as $codification) {
    		
    		if ($reference === null) $reference = trim(array_shift($references));
    		
    		if ($reference === null) return false;
    		
    		if ($this->setCodificationValue($codification, $reference)) {
    			$reference = null;
    		} elseif ($codification->getIsMandatory()) {
    			return false;
    		}
    	}
    	
    	return true;
    }
    
    public function getCodificationPropertyValue(Codification $codification) {
    	
    	switch ($codification->getType()) {
    		
    		case Codification::FIXED:
    				return $codification->getValue();
    		case Codification::REGEX:
    			foreach ($this->getCodificationValues()->getValues() as $codificationValue) {
    				if ($codificationValue->getCodification() == $codification) {
    					return $codificationValue->getValue();
    				}
    			}
    			break;
    			
    		case Codification::LIST:
    			foreach ($this->getCodificationItems()->getValues() as $codificationItem) {
    				if ($codificationItem->getCodification() == $codification) {
    					return $codificationItem->getName();
    				}
    			}
    			break;
    	}
    	
    }
    
    public function setCodificationValue(Codification $codification, $value): bool
    {
    	
    	switch ($codification->getType()) {
    		case Codification::FIXED:
    			return true;
    			
    		case Codification::LIST:
    			
    			if ($codificationItem = $this->getCodificationItemByCodification($codification)) {
    				if ($codificationItem->getValue() == $value) {
    					return true;
    				} else {
    					$this->codificationItems->removeElement($codificationItem);
    				}
    			}
    			
    			if ($value) {
    				foreach ($codification->getCodificationItems()->getValues() as $codificationItem) {
    					if ($codificationItem->getValue() == $value) {
    						$this->addCodificationItem($codificationItem);
    						return true;
    					}
    				}
    			}
    			
    			break;
    				
    		case Codification::REGEX:
    			
    			if ($codificationValue = $this->getCodificationValueByCodification($codification)) {
    				if ($codificationValue->getValue() == $value) {
    					return true;
    				} else {
    					$this->codificationValues->removeElement($codificationValue);
    				}
    			}
    			
    			if ($value != '' && preg_match('/' . $codification->getValue() . '/', $value) === 1) {
    				if ($value) {
    					foreach ($codification->getCodificationValues()->getValues() as $codificationValue) {
    						if ($codificationValue->getValue() == $value) {
    							$this->addCodificationValue($codificationValue);
    							return true;
    						}
    					}
    					$codificationValue = new CodificationValue();
    					$codificationValue->setValue($value);
    					$codificationValue->setCodification($codification);
    					$this->addCodificationValue($codificationValue);
    					return true;
    				}
    			}
    			
    			break;
    	}
    	
    	return false;
    }
    
    public function getVersionsCount(): int
    {
    	$count = 0;
    	
    	foreach ($this->getVersions()->getValues() as $version) {
    		if ($version->getIsRequired() === false && $version->getStatus()->getIsCancel() === false) {
    			$count++;
    		}
    	}
    	
    	return $count;
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
    	
    	if ($value instanceof MetadataItem || $value instanceof MetadataValue) {
    		$value = $value->__toString();
    	}
    	
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
    						return true;
    					} else {
    						$this->metadataValues->removeElement($metadataValue);
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
    				$this->addMetadataValue($metadataValue);
    				return true;
    			}
    			
    			break;
    			
    		case Metadata::LIST:
    			foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
    				if ($metadataItem->getMetadata() == $metadata) {
    					if ($metadataItem->getValue() == $value) {
    						return true;
    					} else {
    						$this->metadataItems->removeElement($metadataItem);
    					}
    				}
    			}
    			
    			if ($value) {
    				foreach ($metadata->getMetadataItems()->getValues() as $metadataItem) {
    					if ($metadataItem->getValue() == $value) {
    						$this->addMetadataItem($metadataItem);
    						return true;
    					}
    				}
    			}
    			
    			break;
    	}
    	
    	return false;
    }
    
    public function getPropertyValue(string $codename)
    {
    	
    	switch ($codename) {
    		case 'document.name':
    			return $this->getName();
    			break;
    		case 'document.reference':
    			return $this->getReference();
    			break;
    		case 'document.versionsCount':
    			return $this->getVersionsCount();
    		default:
    			if (preg_match('/document\.\w+/', $codename)) {
    				foreach ($this->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->getMetadataValue($metadata);
    					}
    				}
    			} elseif (preg_match('/codification\.\w+/', $codename)) {
    				foreach ($this->getSerie()->getProject()->getCodifications()->getValues() as $codification) {
    					if ($codification->getFullCodename() == $codename) {
    						return $this->getCodificationPropertyValue($codification);
    					}
    				}
    				
    				foreach ($this->getCodificationItems()->getValues() as $codificationItem) {
    					if ($codificationItem->getCodification()->getFullCodename() == $codename) {
    						return $codificationItem->getName();
    					}
    				}
    			} else {
    				return $this->getSerie()->getPropertyValue($codename);
    			}
    	}
    	
    	return null;
    }
    
    public function setPropertyValue(string $codename, $value): bool
    {
    	
    	switch ($codename) {
    		case 'document.name':
    			$this->setName($value);
    			return true;
    			
    		case 'document.reference':
    			return $this->setReference($value);
    			
    		default:
    			if (preg_match('/document\.\w+/', $codename)) {
    				foreach ($this->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
    					if ($metadata->getFullCodename() == $codename) {
    						return $this->setMetadataValue($metadata, $value);
    					}
    				}
    			} else {
    				return $this->getSerie()->setPropertyValue($codename, $value);
    			}
    	}
    	
    	return false;
    }
    
    public function getPropertyValueToString(string $codename): string
    {
    	$value = $this->getPropertyValue($codename);
    	
    	switch (gettype($value)) {
    		case 'boolean':
    			return ($value)?'Yes':'No';
    			
    		case 'object':
    			if ($value instanceof MetadataItem || $value instanceof MetadataValue) {
    				switch (gettype($value->getValue())) {
    					case 'boolean':
    						return ($value->getValue())?'Yes':'No';
    						
    					case 'object':
    						return $value->getValue()->format('d-m-Y');
    						
    					default:
    						return $value->getValue();
    				}
    			} else {
    				return (string)$value;
    			}
    			
    		default:
    			return (string)$value;
    	}
    }
    
    public function getLastVersion(): ?Version
    {
    	
    	$lastVersion = null;
    	foreach ($this->getVersions()->getValues() as $version) {
    		if ($lastVersion === null) {
    			$lastVersion = $version;
    		} else {
    			if ($version->getDate() > $lastVersion->getDate()) {
    				$lastVersion = $version;
    			} elseif ($version->getDate() == $lastVersion->getDate() && $version->getName() > $lastVersion->getName()) {
    				$lastVersion = $version;
    			}
    		}
    	}
    	
    	return $lastVersion;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getReference();
    }
    
}
