<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\StatusRepository")
 */
class Status
{
    
	const INFORMATION		= 1;
	const REVIEW		    = 2;
	const CANCEL			= 3;
	const AS_BUILT     	    = 4;
	const DEFAULT           = self::REVIEW;

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
     * @ORM\Column(type="string", length=10)
     */
    private $value;

    /**
     * @ORM\Column(type="smallint")
     */
    private $type;
    
    /**
     * @ORM\Column(type="boolean")
     */
    private $isDefault;
    
    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="statuses")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    
    public function __construct()
    {
    	$this->type = self::DEFAULT;
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

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

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
    
    public function getIsDefault(): ?bool
    {
    	return $this->isDefault;
    }
    
    public function setIsDefault(bool $isDefault): self
    {
    	$this->isDefault = $isDefault;
    	
    	return $this;
    }
    
    public function getIsInformation(): bool
    {
    	return ($this->getType() == self::INFORMATION);
    }

    public function getIsReview(): bool
    {
    	return ($this->getType() == self::REVIEW);
    }
    
    public function getIsCancel(): bool
    {
    	return ($this->getType() == self::CANCEL);
    }
    
    public function getIsAsBuilt(): bool
    {
    	return ($this->getType() == self::AS_BUILT);
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
    
    public function getPropertyValue(string $codename)
    {
    	
    	switch ($codename) {
    		case 'status.name':
    			return $this->getName();
    			break;
    		case 'status.value':
    			return $this;
    			break;
    		case 'status.type':
    			return $this->getType();
    			break;
    		case 'status.isInformation':
    			return $this->getIsInformation();
    			break;
    		case 'status.isReview':
    			return $this->getIsReview();
    			break;
    		case 'status.isCancel':
    			return $this->getIsCancel();
    			break;
    		case 'status.isAsBuilt':
    			return $this->getIsAsBuilt();
    			break;
    	}
    	
    	return null;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getValue();
    }
}
