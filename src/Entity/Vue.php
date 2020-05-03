<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VueRepository")
 */
class Vue
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
    private $Name;

    /**
     * @ORM\Column(type="string", length=2048)
     */
    private $Value;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Share;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="vues")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="vues")
     * @ORM\JoinColumn(nullable=false)
     */
    private $User;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->Value;
    }

    public function setValue(string $Value): self
    {
        $this->Value = $Value;

        return $this;
    }

    public function getShare(): ?bool
    {
        return $this->Share;
    }

    public function setShare(bool $Share): self
    {
        $this->Share = $Share;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->Project;
    }

    public function setProject(?Project $Project): self
    {
        $this->Project = $Project;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }
}
