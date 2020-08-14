<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Codification;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CodificationItemRepository")
 */
class CodificationItem
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
     * @ORM\Column(type="string", length=10)
     */
    private $value;

    /**
     * @ORM\ManyToOne(targetEntity=Codification::class, inversedBy="codificationItems")
     * @ORM\JoinColumn(nullable=false)
     */
    private $codification;

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
?>