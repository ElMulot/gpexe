<?php

namespace App\Entity;

use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\SerieBelongingEnum;
use App\Exception\InvalidCodenameException;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Spatie\Regex\Regex;
use App\Repository\SerieRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints\NotBlank;

#[ORM\Entity(repositoryClass: SerieRepository::class)]
#[UniqueEntity(
	fields: ['name', 'project']
)]
class Serie extends AbstractElement
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	#[NotBlank]
	#[Regex('/^[^$"]+$/')]
	private ?string $name = null;

	#[ORM\ManyToMany(targetEntity: MetadataItem::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'serie_metadata_item')]
	private Collection $metadataItems;

	#[ORM\ManyToMany(targetEntity: MetadataValue::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'serie_metadata_value')]
	private Collection $metadataValues;

	#[ORM\ManyToOne(inversedBy: 'series')]
	private ?Company $company = null;

	#[ORM\ManyToOne(inversedBy: 'series')]
	private ?Project $project = null;

	#[ORM\OneToMany(targetEntity: Document::class, mappedBy: 'serie', cascade: ['persist'], orphanRemoval: true)]
	private Collection $documents;

	#[ORM\OneToMany(targetEntity: Progress::class, mappedBy: 'serie', orphanRemoval: true)]
	private Collection $progress;

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

	/**
	 * Undocumented function
	 * @deprecated version
	 * @return string|null
	 */
	public function getBelonging(): ?string
	{
		return match ($this->getCompany()->getType()) {
			CompanyTypeEnum::MAIN_CONTRACTOR							=> SerieBelongingEnum::MDR,
			CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER	=> SerieBelongingEnum::SDR,
		};
	}

	/**
	 * Return true if the serie is part of MDR
	 *
	 * @return boolean
	 */
	public function isPartOfMDR(): bool
	{
		return ($this->getCompany()->getType() == CompanyTypeEnum::MAIN_CONTRACTOR);
	}

	/**
	 * Return true if the serie is part of SDR
	 *
	 * @return boolean
	 */
	public function isPartOfSDR(): bool
	{
		return ($this->getCompany()->getType() == CompanyTypeEnum::SUB_CONTRACTOR || $this->getCompany()->getType() == CompanyTypeEnum::SUPPLIER);
	}
	
	/**
	 * Return any property value based on its full codename
	 * 
	 * @param string $codename
	 * @return mixed
	 */
	public function getPropertyValue(string $codename): mixed
	{
		
		switch ($codename) {
			case 'serie.name':
				return $this->getName();
				
			case 'serie.company':
				return $this->getCompany()->getName();
				
			default:
				if (Regex::match('/serie\.\w+/', $codename)->hasMatch() === true) {
					/** @var Metadata $metadata */
					foreach ($this->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							return $this->getTypedMetadataValue($metadata);
						}
					}
				}
		}
		
		return null;
	}

	/**
	 * Set value from codename string
	 *
	 * @param string $codename
	 * @param mixed $value
	 * @return self
	 */
	public function setPropertyValue(string $codename, mixed $value): self
	{
		
		switch ($codename) {

			// case 'serie.name':
			// 	$this->setName($value);
			// 	return $this;

			default:
				if (Regex::match('/serie\.\w+/', $codename)->hasMatch() === true) {
					/** @var Metadata $metadata */
					foreach ($this->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							$this->setMetadataValue($metadata, $value);
							return $this;
						}
					}
				}
		}
		
		throw new InvalidCodenameException($codename);
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
}
