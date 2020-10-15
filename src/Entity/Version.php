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
	 * @ORM\Column(type="boolean")
	 */
	private $isRequired;
	
	/**
	 * @ORM\Column(type="date", nullable=true))
	 */
	private $initialScheduledDate;
	
	/**
	 * @ORM\Column(type="date", nullable=true)
	 */
	private $scheduledDate;
	
	/**
	 * @ORM\Column(type="date", nullable=true)
	 */
	private $deliveryDate;
	
	/**
	 * @ORM\ManyToOne(targetEntity=Status::class)
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $status;

	/**
	 * @ORM\ManyToMany(targetEntity=MetadataItem::class, cascade={"persist"})
	 * @ORM\JoinTable(name="version_metadata_item")
	 */
	private $metadataItems;
	
	/**
	 * @ORM\ManyToMany(targetEntity=MetadataValue::class, cascade={"persist", "remove"}, orphanRemoval=true)
	 * @ORM\JoinTable(name="version_metadata_value")
	 */
	private $metadataValues;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 */
	private $writer;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 */
	private $checker;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 */
	private $approver;

	/**
	 * @ORM\ManyToOne(targetEntity=Document::class, inversedBy="versions", cascade={"persist"})
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $document;

	/**
	 * @ORM\OneToMany(targetEntity=Review::class, mappedBy="version", orphanRemoval=true, cascade={"persist"})
	 */
	private $reviews;

	public function __construct()
	{
		$this->isRequired = true;
		$this->deliveryDate = new \DateTime('now');
		$this->metadataItems = new ArrayCollection();
		$this->metadataValues = new ArrayCollection();
	 	$this->reviews = new ArrayCollection();
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
	
	public function getIsRequired(): ?bool
	{
		return $this->isRequired;
	}
	
	public function setIsRequired(bool $isRequired): self
	{
		$this->isRequired = $isRequired;
		if ($isRequired === true) {
			$this->deliveryDate = null;
		}
		
		return $this;
	}

	public function getInitialScheduledDate(): ?\DateTimeInterface
	{
		return $this->initialScheduledDate;
	}

	public function getScheduledDate(): ?\DateTimeInterface
	{
		return $this->scheduledDate;
	}

	public function setScheduledDate(?\DateTimeInterface $scheduledDate): self
	{
		if ($this->initialScheduledDate === null) {
			$this->initialScheduledDate = $scheduledDate;
		}
		$this->scheduledDate = $scheduledDate;
		
		return $this;
	}
	
	public function getDeliveryDate(): ?\DateTimeInterface
	{
		return $this->deliveryDate;
	}
	
	public function setDeliveryDate(?\DateTimeInterface $deliveryDate): self
	{
		if ($deliveryDate !== null) {
			$this->deliveryDate = $deliveryDate;
		}
		
		return $this;
	}
	
	public function getDate(): ?\DateTimeInterface
	{
		return ($this->isRequired)?$this->scheduledDate:$this->deliveryDate;
	}
	
	public function setDate(?\DateTimeInterface $date): self
	{
		if ($this->getIsRequired()) {
			$this->setScheduledDate($date);
		} else {
			$this->setDeliveryDate($date);
		}
		
		return $this;
	}
	
	public function getStatus(): ?Status
	{
		return $this->status;
	}
	
	public function setStatus(?Status $status): self
	{
		$this->status = $status;
		
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
	
	
	/**
	 * @return Collection|Review[]
	 */
	public function getReviews(): Collection
	{
		return $this->reviews;
	}
	
	public function addReview(Review $review): self
	{
		if (!$this->reviews->contains($review)) {
			$this->reviews[] = $review;
			$review->setVersion($this);
		}
		
		return $this;
	}
	
	public function removeReview(Review $review): self
	{
		if ($this->reviews->contains($review)) {
			$this->reviews->removeElement($review);
			// set the owning side to null (unless already changed)
			if ($review->getVersion() === $this) {
				$review->setVersion(null);
			}
		}
		
		return $this;
	}
	
	public function getReviewByCompany(Company $company): ?Review
	{
		foreach ($this->getReviews()->getValues() as $review) {
			if ($review->getVisa()->getCompany() == $company) {
				return $review;
			}
		}
		return null;
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
							return true;
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
						}
					}
					return true;
				}
				break;
		}
		
		return false;
	}
	
	public function getPropertyValue(string $codename)
	{
		
		switch ($codename) {
			case 'version.name':
				return $this->getName();
				
			case 'version.initialScheduledDate':
				return $this->getInitialScheduledDate();
				
			case 'version.scheduledDate':
				return $this->getScheduledDate();
				
			case 'version.deliveryDate':
				return $this->getDeliveryDate();
			
			case 'version.date':
				return $this->getDate();
				
			case 'version.isRequired':
				return $this->getIsRequired();
				
			case 'version.writer':
				return $this->getWriter();
				
			case 'version.checker':
				return $this->getChecker();
				
			case 'version.approver':
				return $this->getApprover();
				
			case 'version.lastDelivered':
				if ($this->getIsRequired()) return false;
				$date = $this->getDeliveryDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() == false && $version->getDeliveryDate() > $date) {
						return false;
					}
				}
				return true;
				
			case 'version.lastScheduled':
				if ($this->getIsRequired() == false) return false;
				$date = $this->getScheduledDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() && $version->getScheduledDate() > $date) {
						return false;
					}
				}
				return true;
				
			default:
				if (preg_match('/version\.\w+/', $codename)) {
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() == $codename) {
							return $this->getMetadataValue($metadata);
						}
					}
				} elseif (preg_match('/status\.\w+/', $codename)) {
					return $this->getStatus()->getPropertyValue($codename);
				} else {
					return $this->getDocument()->getPropertyValue($codename);
				}
		}
		
		return null;
	}
	
	public function setPropertyValue(string $codename, $value): bool
	{
		
		switch ($codename) {
			case 'version.name':
				if ($value) {
					$this->setName($value);
					return true;
				} else {
					return false;
				}
			
			case 'version.date':
				if ($date = \DateTime::createFromFormat('d-m-Y', $value)) {
					if ($date > new \DateTime('now')) {
						$this->isRequired = true;
					}
					$this->setDate($date);
					return true;
				}
				return false;
				
			case 'version.isRequired':
				switch ($value) {
					case false:
					case 'false':
					case 'no':
						$this->setIsRequired(false);
						return true;
					case true:
					case 'true':
					case 'yes':
						$this->setIsRequired(true);
						return true;
					default:
						return false;
				}
				
			case 'version.writer':
				foreach ($this->getDocument()->getSerie()->getCompany()->getUsers()->getValues() as $user) {
					if (preg_match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value) == 1) {
						if ($user->getEmail() == $value) {
							$this->setWriter($user);
							return true;
						}
					} else {
						if ($user->getName() == $value) {
							$this->setWriter($user);
							return true;
						}
					}
				}
				break;
				
			case 'version.checker':
				foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
					if ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()) {
						if (preg_match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value) == 1) {
							if ($user->getEmail() == $value) {
								$this->setChecker($user);
								return true;
							}
						} else {
							if ($user->getName() == $value) {
								$this->setChecker($user);
								return true;
							}
						}
					}
				}
				break;
				
			case 'version.approver':
				foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
					if ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()) {
						if (preg_match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value) == 1) {
							if ($user->getEmail() == $value) {
								$this->setApprover($user);
								return true;
							}
						} else {
							if ($user->getName() == $value) {
								$this->setApprover($user);
								return true;
							}
						}
					}
				}
				break;
				
			default:
				if (preg_match('/version\.\w+/', $codename)) {
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() == $codename) {
							return $this->setMetadataValue($metadata, $value);
						}
					}
				} elseif (preg_match('/status\.value/', $codename)) {
					foreach ($this->getDocument()->getSerie()->getProject()->getStatuses()->getValues() as $status) {
						if ($status->getValue() == $value) {
							$this->setStatus($status);
							return true;
						}
					}
				} elseif (preg_match('/visa\.(\w+)/', $codename, $matches)) {
					
					foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						
						if ($visa->getCompany()->getCodename() == $matches[1] && $visa->getName() == $value) {
							
							if ($review = $this->getReviewByCompany($visa->getCompany())) {
								if ($review->getVisa()->getName() != $value) {
									$review->setVisa($visa);
								}
							} else {
								$review = new Review();
								
								if ($this->getChecker()) {
									if ($this->getChecker()->getCompany() == $visa->getCompany()) {
										$review->setUser($this->getChecker());
									} else {
										foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
											$review->setUser($user);
											break;
										}
									}
								} else {
									foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
										$review->setUser($user);
										break;
									}
								}
								
								$review->setDate(new \DateTime('now'));
								$review->setVisa($visa);
								$this->addReview($review);
							}
							return true;
							
						}
					}
				} else {
					return $this->getDocument()->setPropertyValue($codename, $value);
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
				if ($value instanceof \DateTime) {
					return $value->format('d-m-Y');
				} else if ($value instanceof User) {
					return $value->getName();
				} else if ($value instanceof MetadataItem || $value instanceof MetadataValue) {
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
	
	public function __toString(): string
	{
		return (string)$this->getDocument()->__toString() . ' - ' . $this->getName();
	}
}
