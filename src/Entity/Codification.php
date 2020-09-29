<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Project;
use App\Entity\CodificationItem;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CodificationRepository")
 */
class Codification
{
    
	const FIXED   			= 1;
	const LIST			    = 2;
	const REGEX      	    = 3;
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
     * @ORM\Column(type="string", length=100)
     */
    private $codename;

    /**
     * @ORM\Column(type="smallint")
     */
    private $type;
    
    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $value;
    
    /**
     * @ORM\Column(type="boolean")
     */
    private $isMandatory;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="codifications", fetch="EAGER")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\OneToMany(targetEntity=CodificationItem::class, mappedBy="codification", orphanRemoval=true)
     */
    private $codificationItems;
    
    /**
     * @ORM\OneToMany(targetEntity=CodificationValue::class, mappedBy="codification", orphanRemoval=true)
     */
    private $codificationValues;

    public function __construct()
    {
        $this->type = self::DEFAULT;
        $this->isMandatory = true;
    	$this->codificationItems = new ArrayCollection();
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
    
    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

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
            $codificationItem->setCodification($this);
        }

        return $this;
    }

    public function removeCodificationItem(CodificationItem $codificationItem): self
    {
        if ($this->codificationItems->contains($codificationItem)) {
            $this->codificationItems->removeElement($codificationItem);
            // set the owning side to null (unless already changed)
            if ($codificationItem->getCodification() === $this) {
                $codificationItem->setCodification(null);
            }
        }

        return $this;
    }
    
    public function getCodificationItemByValue(string $value): ?CodificationItem
    {
    	foreach ($this->getCodificationItems()->getValues() as $codificationItem) {
    		if ($codificationItem->__toString() == $value) {
    			return $codificationItem;
    		}
    	}
    	return null;
    }
    
    public function getFullDomId(): string
    {
    	return 'codification_' . $this->id;
    }
    
    public function getFullDomName(): string
    {
    	return 'codification[' . $this->id . ']';
    }
    
    public function getFullCodename(): string
    {
    	return 'codification.' . $this->codename;
    }
    
    public function isFixed(): bool
    {
    	return ($this->getType() == self::FIXED);
    }
    
    public function isList(): bool
    {
    	return ($this->getType() == self::LIST);
    }
    
    public function isRegex(): bool
    {
    	return ($this->getType() == self::REGEX);
    }
    
    public function __toString(): string
    {
    	return (string)$this->getName();
    }

}
?>