<?php

namespace App\Entity;

use App\Entity\Enum\MetadataTypeEnum;
use App\Exception\InvalidValueException;
use App\Exception\VersionAlreadyExist;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Helpers\Date;
use Spatie\Regex\Regex;
use App\Repository\VersionRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: VersionRepository::class)]
#[UniqueEntity(
	fields: ['name', 'document']
)]
class Version extends AbstractElement implements \Stringable
{
	#[ORM\Id]
	#[ORM\GeneratedValue]
	#[ORM\Column]
	private ?int $id = null;

	#[ORM\Column(length: 100)]
	#[Assert\NotBlank]
	private ?string $name = null;

	#[ORM\Column]
	private ?bool $required = null;

	#[ORM\Column(nullable: true)]
	private ?\DateTime $initialScheduledDate = null;

	#[ORM\Column(nullable: true)]
	private ?\DateTime $scheduledDate = null;

	#[ORM\Column(nullable: true)]
	private ?\DateTime $deliveryDate = null;

	#[ORM\ManyToOne]
	private ?Status $status = null;

	#[ORM\ManyToMany(targetEntity: MetadataChoice::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'version_metadata_choice')]
	private Collection $metadataChoices;

	#[ORM\ManyToMany(targetEntity: MetadataElement::class, cascade: ['persist'])]
	#[ORM\JoinTable(name: 'version_metadata_element')]
	private Collection $metadataElements;

	#[ORM\ManyToOne]
	#[ORM\JoinColumn(nullable: true)]
	private ?User $writer = null;

	#[ORM\ManyToOne(targetEntity: User::class)]
	#[ORM\JoinColumn(nullable: true)]
	private ?User $checker = null;

	#[ORM\ManyToOne(targetEntity: User::class)]
	#[ORM\JoinColumn(nullable: true)]
	private ?User $approver = null;

	#[ORM\ManyToOne(inversedBy: 'versions', cascade: ['persist'])]
	private ?Document $document = null;

	#[ORM\OneToMany(targetEntity: Review::class, mappedBy: 'version', orphanRemoval: true, cascade: ['persist'])]
	private Collection $reviews;

	public function __construct()
	{
		$this->required = true;
		$this->metadataChoices = new ArrayCollection();
		$this->metadataElements = new ArrayCollection();
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

	public function isRequired(): ?bool
	{
		return $this->required;
	}

	public function setRequired(bool $required): self
	{
		$this->required = $required;
		if ($required === true) {
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
		return ($this->required === true)?$this->scheduledDate:$this->deliveryDate;
	}

	public function setDate(?\DateTimeInterface $date): self
	{
		if ($this->required === true) {
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
	 * @return Collection|MetadataChoice[]
	 */
	public function getMetadataChoices(): Collection
	{
		return $this->metadataChoices;
	}

	public function addMetadataChoice(MetadataChoice $metadataChoice): self
	{
		if (!$this->metadataChoices->contains($metadataChoice)) {
			$this->metadataChoices[] = $metadataChoice;
		}
		
		return $this;
	}

	public function removeMetadataChoice(MetadataChoice $metadataChoice): self
	{
		if ($this->metadataChoices->contains($metadataChoice)) {
			$this->metadataChoices->removeElement($metadataChoice);
		}
		
		return $this;
	}
	
	/**
	 * @return Collection|MetadataElement[]
	 */
	public function getMetadataElements(): Collection
	{
		return $this->metadataElements;
	}

	public function addMetadataElement(MetadataElement $metadataElement): self
	{
		if (!$this->metadataElements->contains($metadataElement)) {
			$this->metadataElements[] = $metadataElement;
		}
		
		return $this;
	}

	public function removeMetadataElement(MetadataElement $metadataElement): self
	{
		if ($this->metadataElements->contains($metadataElement)) {
			$this->metadataElements->removeElement($metadataElement);
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

	/**
	 * Get Review object from Company object 
	 *
	 * @param Company $company
	 * @return Review|null
	 */
	public function getReviewByCompany(Company $company): ?Review
	{
		/** @var Review $review */
		foreach ($this->getReviews()->getValues() as $review) {
			if ($review->getVisa()->getCompany() === $company) {
				return $review;
			}
		}
		return null;
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
				
			case 'version.required':
				return $this->isRequired();
				
			case 'version.writer':
				return $this->getWriter();
				
			case 'version.checker':
				return $this->getChecker();
				
			case 'version.approver':
				return $this->getApprover();
			
			case 'version.first':
				$date = $this->getDate();
				/** @var Version $version */
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getDate() < $date || ($version->getDate() == $date && $version->getName() < $this->getName())) {
						return false;
					}
				}
				return true;
				
			case 'version.firstScheduled':
				if ($this->isRequired() === false) return false;
				$date = $this->getScheduledDate();
				/** @var Version $version */
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->isRequired() && ($version->getScheduledDate() < $date || ($version->getScheduledDate() == $date && $version->getName() < $this->getName()))) {
						return false;
					}
				}
				return true;
				
			case 'version.firstDelivered':
				if ($this->isRequired()) return false;
				$date = $this->getDeliveryDate();
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->isRequired() == false && ($version->getDeliveryDate() < $date || ($version->getDeliveryDate() == $date && $version->getName() < $this->getName()))) {
						return false;
					}
				}
				return true;
			
			case 'version.last':
				$date = $this->getDate();
				/** @var Version $version */
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->getDate() > $date || ($version->getDate() == $date && $version->getName() > $this->getName())) {
						return false;
					}
				}
				return true;
			
			case 'version.lastScheduled':
				if ($this->isRequired() === false) return false;
				$date = $this->getScheduledDate();
				/** @var Version $version */
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->isRequired() && ($version->getScheduledDate() > $date || ($version->getScheduledDate() == $date && $version->getName() > $this->getName()))) {
						return false;
					}
				}
				return true;
				
			case 'version.lastDelivered':
				if ($this->isRequired()) return false;
				$date = $this->getDeliveryDate();
				/** @var Version $version */
				foreach ($this->getDocument()->getVersions()->getValues() as $version) {
					if ($version->isRequired() == false && ($version->getDeliveryDate() > $date || ($version->getDeliveryDate() == $date && $version->getName() > $this->getName()))) {
						return false;
					}
				}
				return true;
								
			default:
				
				if (Regex::match('/version\.\w+/', $codename)->hasMatch() === true) {
					/** @var Metadata $metadata */
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							return $this->getMetadataValue($metadata);
						}
					}
					
				} elseif (Regex::match('/status\.\w+/', $codename)->hasMatch() === true) {
					
					return $this->getStatus()->getPropertyValue($codename);
					
				} elseif (($result = Regex::match('/visa\.(\w+)\.(\w+)/', $codename))->hasMatch() === true) {
					
					/** @var Visa $visa */
					foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						if ($visa->getCompany()->getCodename() === $result->group(1)) {
							if ($review = $this->getReviewByCompany($visa->getCompany())) {
								return match ($result->group(2)) {
									'value'		=> $review->getVisa(),
									'username'	=> $review->getUser(),
									'date'		=> $review->getDate(),
								};
							}
						}
					}
					
				} else {
					
					return $this->getDocument()->getPropertyValue($codename);
					
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
			case 'version.name':
				foreach ($this->document->getVersions()->getValues() as $version) {
					if ($version->getName() === (string)$value && $version !== $this) {
						throw new VersionAlreadyExist($value);
					}
				}
				$this->setName($value);
				return $this;
			
			case 'version.date':
				if ($value instanceof \DateTimeInterface === true) {
					if ($value > new Date('today')) {
						$this->required = true;
					}
					$this->setDate($value);
					return $this;
				}
				break;
				
			case 'version.required':
				$this->setRequired($value || $value === 'true' || $value === 'yes');
				break;
				
			case 'version.writer':
				/** @var User $user */
				foreach ($this->getDocument()->getSerie()->getCompany()->getUsers()->getValues() as $user) {
					if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch() === true) {
						if ($user->getEmail() === (string)$value) {
							$this->setWriter($user);
							return $this;
						}
					} else {
						if ($user->getName() === (string)$value) {
							$this->setWriter($user);
							return $this;
						}
					}
				}
				$this->setWriter(null);
				return $this;
				
			case 'version.checker':
				/** @var User $user */
				foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
					if ($user->getCompany()->isChecker() === true) {
						if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch()) {
							if ($user->getEmail() === (string)$value) {
								$this->setChecker($user);
								return $this;
							}
						} else {
							if ($user->getName() === (string)$value) {
								$this->setChecker($user);
								return $this;
							}
						}
					}
				}
				$this->setChecker(null);
				return $this;
				
			case 'version.approver':
				/** @var User $user */
				foreach ($this->getDocument()->getSerie()->getProject()->getUsers()->getValues() as $user) {
					if ($user->getCompany()->isChecker() === true) {
						if (Regex::match('/^[\w\-\.]+@[\w\-\.]+\.[a-zA-Z]{2,5}$/', $value)->hasMatch() === true) {
							if ($user->getEmail() === (string)$value) {
								$this->setApprover($user);
								return $this;
							}
						} else {
							if ($user->getName() === (string)$value) {
								$this->setApprover($user);
								return $this;
							}
						}
					}
				}
				$this->setApprover(null);
				return $this;
				
			default:
				
				if (Regex::match('/version\.\w+/', $codename)->hasMatch() === true) {
					/** @var Metadata $metadata */
					foreach ($this->getDocument()->getSerie()->getProject()->getMetadatas()->getValues() as $metadata) {
						if ($metadata->getFullCodename() === $codename) {
							$this->setMetadataValue($metadata, $value);
							return $this;
						}
					}
					
				} elseif (Regex::match('/status\.value/', $codename)->hasMatch() === true) {
					/** @var Status $status */
					foreach ($this->getDocument()->getSerie()->getProject()->getStatuses()->getValues() as $status) {
						if ($status->getValue() === (string)$value) {
							$this->setStatus($status);
							return $this;
						}
					}
					
				} elseif (($result = Regex::match('/visa\.(\w+)\.(\w+)/', $codename))->hasMatch() === true) {
					/** @var Visa $visa */
					foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						if ($visa->getCompany()->getCodename() === $result->group(1)) {
							switch ($result->group(2)) {
								
								case 'value':
									if ($visa->getName() === (string)$value) {
										if ($review = $this->getReviewByCompany($visa->getCompany())) {
											if ($review->getVisa()->getName() === (string)$value) {
												return $this;
											}
											$review->setVisa($visa);
											return $this;
										} else {
											$review = new Review();
											if ($this->getChecker() !== null) {
												//if Review object is created, Checker will be used as Review user
												if ($this->getChecker()->getCompany() === $visa->getCompany()) {
													$review->setUser($this->getChecker());
													break;
												} else {
													//if Checker doesn't belong to the Visa Company, the first user will be used
													/** @var User $user */
													foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
														$review->setUser($user);
														break;
													}
													return $this;
												}
											} else {
												//If Checked is not defined, the first user will be used
												/** @var User $user */
												foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
													$review->setUser($user);
													break;
												}
												return $this;
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
										if ($review->getUser()->getName() === (string)$value) {
											return $this;
										}
										/** @var User $user */
										foreach ($visa->getCompany()->getUsers()->getValues() as $user) {
											if ($user->getName() === (string)$value) {
												$review->setUser($user);
												return $this;
											}
										}
										throw new InvalidValueException($value, $codename);
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
	}
	
	public function __toString(): string
	{
		return $this->getDocument()->__toString() . $this->getDocument()->getSerie()->getProject()->getSplitter() ?? ''. $this->getName() ?? '';
	}
}
