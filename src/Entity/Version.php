<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Helpers\Date;
use Spatie\Regex\Regex;

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
	 * @ORM\ManyToMany(targetEntity=MetadataValue::class, cascade={"persist"})
	 * @ORM\JoinTable(name="version_metadata_value")
	 */
	private $metadataValues;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(onDelete="SET NULL")
	 */
	private $writer;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(onDelete="SET NULL")
	 */
	private $checker;

	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(onDelete="SET NULL")
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
		return ($this->isRequired === true)?$this->scheduledDate:$this->deliveryDate;
	}
	
	public function setDate(?\DateTimeInterface $date): self
	{
	    if ($this->isRequired === true) {
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
	
	public function setMetadataValue(Metadata $metadata, $value): self
	{
		//false: empty field
		//null: error field
		switch ($metadata->getType()) {
			case Metadata::BOOLEAN:
				$value = ($value)?true:false;
				break;
			case Metadata::DATE:
				if (is_string($value)) {
					$date = Date::fromFormat($value);
					if ($date->isValid() === false) {
						$value = null;
					}
				} elseif ($value instanceof \DateTimeInterface) {
					$value = $value->format('d-m-Y');
				} else {
					$value = false;
				}
				break;
			default:
			    if ($value === '') {
			        $value = false;
			    }
		}
		
		if ($metadata->isBoolean() === false && $value == false) {
		    if ($metadata->getIsMandatory() === true) {
		        throw new \Error(sprintf('Erreur: la valeur "%s" ne peut être vide', $metadata->getCodename()));
		        return $this;
		    }
		}
		
		switch ($metadata->getType()) {
			
			case Metadata::BOOLEAN:
			case Metadata::TEXT:
			case Metadata::DATE:
			case Metadata::LINK:
				foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
					if ($metadataValue->getMetadata() == $metadata) {
						if ($metadataValue->getValue() == $value) {
							return $this;
						} else {
							$this->metadataValues->removeElement($metadataValue);
						}
					}
				}
				
				if ($value === false) {
					return $this;
				} elseif ($value !== null) {
					foreach ($metadata->getMetadataValues()->getValues() as $metadataValue) {
						if ($metadataValue->getValue() == $value) {
							$this->addMetadataValue($metadataValue);
							return $this;
						}
					}
					$metadataValue = new MetadataValue();
					$metadataValue->setValue($value);
					$metadataValue->setMetadata($metadata);
					$this->addMetadataValue($metadataValue);
					return $this;
				}
				break;
				
			case Metadata::LIST:
				foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
					if ($metadataItem->getMetadata() == $metadata) {
						if ($metadataItem->getValue() == $value) {
							return $this;
						} else {
							$this->metadataItems->removeElement($metadataItem);
						}
					}
				}
				
				if ($value === false) {
					return $this;
				} elseif ($value !== null) {
					foreach ($metadata->getMetadataItems()->getValues() as $metadataItem) {
						if ($metadataItem->getValue() == $value) {
							$this->addMetadataItem($metadataItem);
						}
					}
					return $this;
				}
				break;
		}
		
		if ($metadata->getType() === Metadata::BOOLEAN) {
			return $this;
		}
		throw new \Error(sprintf('Erreur en écrivant la valeur "%s" dans le champ "%s"', $value, $metadata->getCodename()));
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
			
			case 'version.first':
				$date = $this->getDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getDate() < $date || ($version->getDate() == $date && $version->getName() < $this->getName())) {
						return false;
					}
				}
				return true;
				
			case 'version.firstScheduled':
				if ($this->getIsRequired() === false) return false;
				$date = $this->getScheduledDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() && ($version->getScheduledDate() < $date || ($version->getScheduledDate() == $date && $version->getName() < $this->getName()))) {
						return false;
					}
				}
				return true;
				
			case 'version.firstDelivered':
				if ($this->getIsRequired()) return false;
				$date = $this->getDeliveryDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() == false && ($version->getDeliveryDate() < $date || ($version->getDeliveryDate() == $date && $version->getName() < $this->getName()))) {
						return false;
					}
				}
				return true;
			
			case 'version.last':
				$date = $this->getDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getDate() > $date || ($version->getDate() == $date && $version->getName() > $this->getName())) {
						return false;
					}
				}
				return true;
			
			case 'version.lastScheduled':
				if ($this->getIsRequired() === false) return false;
				$date = $this->getScheduledDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() && ($version->getScheduledDate() > $date || ($version->getScheduledDate() == $date && $version->getName() > $this->getName()))) {
						return false;
					}
				}
				return true;
				
			case 'version.lastDelivered':
				if ($this->getIsRequired()) return false;
				$date = $this->getDeliveryDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getIsRequired() == false && ($version->getDeliveryDate() > $date || ($version->getDeliveryDate() == $date && $version->getName() > $this->getName()))) {
						return false;
					}
				}
				return true;
								
			default:
				
				if (Regex::match('/version\.\w+/', $codename)->hasMatch()) {
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() == $codename) {
							return $this->getMetadataValue($metadata);
						}
					}
					
				} elseif (Regex::match('/status\.\w+/', $codename)->hasMatch()) {
					
					return $this->getStatus()->getPropertyValue($codename);
					
				} elseif (($result = Regex::match('/visa\.(\w+)\.(\w+)/', $codename))->hasMatch()) {
					
					foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						if ($visa->getCompany()->getCodename() == $result->group(1)) {
							if ($review = $this->getReviewByCompany($visa->getCompany())) {
								switch ($result->group(2)) {
									
									case 'value':
										return $review->getVisa();
										break;
										
									case 'username':
										return $review->getUser();
										break;
										
									case 'date':
										return $review->getDate();
										break;
								}
							}
						}
					}
					
				} else {
					
					return $this->getDocument()->getPropertyValue($codename);
					
				}
		}
		
		return null;
	}
	
	public function setPropertyValue(string $codename, $value): self
	{
		
		switch ($codename) {
			case 'version.name':
				if ($value) {
					foreach ($this->document->getVersions()->getValues() as $version) {
						if ($version->getName() == $value && $version !== $this) {
							throw new \Error(sprintf('Erreur: le nom de révision "%s" existe déjà', $value));
						}
					}
					$this->setName($value);
					return $this;
				} else {
					throw new \Error('Erreur: le nom de révision ne peut être vide.');
				}
				break;
			
			case 'version.date':
				if ($value instanceof \DateTimeInterface) {
					if ($value > new Date('today')) {
						$this->isRequired = true;
					}
					$this->setDate($value);
					return $this;
				} elseif (($date = Date::fromFormat($value, 'd-m-Y'))->isValid() === true) {
					if ($date > new Date('today')) {
					    $this->isRequired = true;
					}
					$this->setDate($date);
					return $this;
				}
				break;
				
			case 'version.isRequired':
				switch ((string)$value) {
					case '':
					case 'false':
					case 'no':
						$this->setIsRequired(false);
						return $this;
					case '1':
					case 'true':
					case 'yes':
						$this->setIsRequired(true);
						return $this;
				}
				break;
				
			case 'version.writer':
				if ($value) {
					foreach ($this->getDocument()->getSerie()->getCompany()->getUsers()->getValues() as $user) {
						if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch()) {
							if ($user->getEmail() == $value) {
								$this->setWriter($user);
								return $this;
							}
						} else {
							if ($user->getName() == $value) {
								$this->setWriter($user);
								return $this;
							}
						}
					}
				} else {
					$this->setWriter(null);
				}
				break;
				
			case 'version.checker':
				if ($value) {
					foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
						if ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()) {
							if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch()) {
								if ($user->getEmail() == $value) {
									$this->setChecker($user);
									return $this;
								}
							} else {
								if ($user->getName() == $value) {
									$this->setChecker($user);
									return $this;
								}
							}
						}
					}
				} else {
					$this->setChecker(null);
				}
				break;
				
			case 'version.approver':
				if ($value) {
					foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
						if ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()) {
							if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch()) {
								if ($user->getEmail() == $value) {
									$this->setApprover($user);
									return $this;
								}
							} else {
								if ($user->getName() == $value) {
									$this->setApprover($user);
									return $this;
								}
							}
						}
					}
				} else {
					$this->setApprover(null);
				}
				break;
				
			default:
				
				if (Regex::match('/version\.\w+/', $codename)->hasMatch()) {
					
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() == $codename) {
							$this->setMetadataValue($metadata, $value);
							return $this;
						}
					}
					
				} elseif (Regex::match('/status\.value/', $codename)->hasMatch()) {
					
					foreach ($this->getDocument()->getSerie()->getProject()->getStatuses()->getValues() as $status) {
						if ($status->getValue() == $value) {
							$this->setStatus($status);
							return $this;
						}
					}
					
				} elseif (($result = Regex::match('/visa\.(\w+)\.(\w+)/', $codename))->hasMatch()) {
					
					foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						if ($visa->getCompany()->getCodename() == $result->group(1)) {
							switch ($result->group(2)) {
								
								case 'value':
									if ($visa->getName() == $value) {
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
											
											$review->setDate(new Date('today'));
											$review->setVisa($visa);
											$this->addReview($review);
										}
										return $this;
									}
									break;
									
								case 'username':
									if ($review = $this->getReviewByCompany($visa->getCompany())) {
									    if ($review->getUser()->getName() != $value) {
										    foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
												if ($user->getName() == $value) {
													$review->setUser($user);
													return $this;
												}
											}
											throw new \Error(sprintf('Erreur en écrivant la valeur "%s" dans le champ "%s" : le nom d\'utilisateur n\'est pas valable', $value, $codename));
										}
										return $this;
									}
									break;
									
								case 'date':
									if ($review = $this->getReviewByCompany($visa->getCompany())) {
										if ($date = Date::fromFormat($value)) {
											$review->setDate($date);
											return $this;
										}
									}
									break;
							}
							
						}
					}
				} else {
					$this->getDocument()->setPropertyValue($codename, $value);
					return $this;
				}
		}
		
		throw new \Error(sprintf('Erreur en écrivant la valeur "%s" dans le champ "%s"', $value, $codename));
	}
	
	public function __toString(): string
	{
		return (string)$this->getDocument()->__toString() . ' - ' . $this->getName();
	}
}
