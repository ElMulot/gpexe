<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CodificationDataRepository")
 */
class CodificationValue
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $value;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Document")
     * @ORM\JoinColumn(nullable=false)
     */
    private $document;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Codification")
     * @ORM\JoinColumn(nullable=false)
     */
    private $codification;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDocument(): ?Document
    {
    	return $this->document;
    }

    public function setDocument(?Document $document): self
    {
    	$this->document = $document;

        return $this;
    }

    public function getCodification(): ?Codification
    {
        return $this->codification;
    }

    public function setCodification(?Codification $codification): self
    {
        $this->codification = $codification;

        return $this;
    }
    
    public function __toString(): string
    {
    	return (string)$this->getValue();
    }
}
