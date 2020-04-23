<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VersionRepository")
 */
class Version
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
     * @ORM\Column(type="date")
     */
    private $initialDate;

    /**
     * @ORM\Column(type="date")
     * @ORM\JoinColumn(nullable=false)
     */
    private $date;
    
    /**
     * @ORM\Column(type="boolean")
     */
    private $isRequired;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataItem", cascade={"persist"})
     */
    private $metadataItems;
    
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\MetadataValue", cascade={"persist", "remove"})
     */
    private $metadataValues;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $writer;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $checker;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $approver;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Document", inversedBy="versions", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $document;

    public function __construct()
    {
    	$this->metadataItems = new ArrayCollection();
    	$this->metadataValues = new ArrayCollection();
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

    public function getInitialDate(): ?\DateTimeInterface
    {
        return $this->initialDate;
    }

    public function setInitialDate(\DateTimeInterface $initialDate): self
    {
        $this->initialDate = $initialDate;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
    
    public function getIsRequired(): ?bool
    {
    	return $this->isRequired;
    }
    
    public function setIsRequired(bool $isRequired): self
    {
    	$this->isRequired = $isRequired;
    	
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

    public function getWriter(): ?User
    {
        return $this->writer;
    }

    public function setWriter(?User $writer): self
    {
        $this->writer = $writer;

        return $this;
    }

    public function getChecker(): ?User
    {
        return $this->checker;
    }

    public function setChecker(?User $checker): self
    {
        $this->checker = $checker;

        return $this;
    }

    public function getApprover(): ?User
    {
        return $this->approver;
    }

    public function setApprover(?User $approver): self
    {
        $this->approver = $approver;

        return $this;
    }

    public function getDocument(): ?Document
    {
    	return $this->document;
    }

    public function setDocument(?Document $document): self
    {
    	$this->document = $document;

        return $this;
    }
	    
    public function getPropertyValue(string $properyName)
    {
    	
    	switch ($properyName) {
    		/*case 'name':
    			return $this->getName();
    			break;*/
    		case 'date':
    			return $this->getDate();
    			break;
    		case 'initialDate':
    			return $this->getInitialDate();
    			break;
    		case 'isRequired':
    			return $this->getIsRequired();
    			break;
    		case 'writer':
    			return $this->getWriter();
    			break;
    		case 'checker':
    			return $this->getChecker();
    			break;
    		case 'approver':
    			return $this->getApprover();
    			break;
    		default:
    			
    			foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
    				
    				if ($metadata->getName() == $properyName) {
    					
    					switch ($metadata->getType()) {
    						
    						case Metadata::BOOLEAN:
    							foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
    								if ($metadataValue->getMetadata() == $metadata) {
    									return $metadataValue;
    								}
    							}
    							break;
    							
    						case Metadata::TEXT:
    							foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
    								if ($metadataValue->getMetadata() == $metadata) {
    									return $metadataValue;
    								}
    							}
    							break;
    							
    						case Metadata::DATE:
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
    				
    			}
    	}
    	
    	return null;
    }
    
    public function getPropertyValueToString(string $properyName): string
    {
    	$value = $this->getPropertyValue($properyName);
    	
    	switch (gettype($value)) {
    		case 'boolean':
    			return ($value)?'Yes':'No';
    			break;
    			
    		case 'object':
    			switch (get_class($value)) {
    				case \DateTime::class:
    					return $value->format('d-m-Y');
    					break;
    					
    				case User::class:
    					return $value->getName();
    					break;
    					
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
    			}
    			break;
    			
    		default:
    			return (string)$value;
    	}
    }
    
    public function setMetadataValue(Metadata $metadata, $value): bool
    {
    	
    	switch ($metadata->getType()) {
    		case Metadata::BOOLEAN:
    			$value = ($value == '1')?true:false;
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
    			
    			if ($value != '') {
    				$metadataValue = new MetadataValue();
    				$metadataValue->setValue($value);
    				$metadataValue->setVersion($this);
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
    
    public function __toString(): string
    {
    	return (string)$this->getDocument()->__toString() . ' - ' . $this->getName();
    }
}
