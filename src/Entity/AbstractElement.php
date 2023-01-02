<?php

namespace App\Entity;

use App\Entity\Enum\MetadataTypeEnum;
use App\Exception\InvalidCodenameException;
use App\Exception\InvalidValueException;
use App\Exception\MandatoryValueException;

use Doctrine\Common\Collections\Collection;
use Spatie\Regex\Regex;

abstract class AbstractElement implements \Stringable
{

	abstract protected function getMetadataItems(): Collection;

	abstract protected function addMetadataItem(MetadataItem $metadataItem): self;

	abstract protected function removeMetadataItem(MetadataItem $metadataItem): self;

	abstract protected function getMetadataValues(): Collection;

	abstract protected function addMetadataValue(MetadataValue $metadataValue): self;

	abstract protected function removeMetadataValue(MetadataValue $metadataValue): self;


	/**
	 * Return any MetadataValue or MetadataItem from Metadata object
	 * If MetadataValue or MetadataItem doesn't exist, return null
	 * 
	 * @param Metadata $metadata
	 * @return null|MetadataValue|MetadataItem
	 */
	public function getMetadataValueAsObject(Metadata $metadata): null|MetadataValue|MetadataItem
	{
		
		switch ($metadata->getType()) {
			
			case MetadataTypeEnum::BOOL:
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::DATE:
			case MetadataTypeEnum::LINK:
				foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
					if ($metadataValue->getMetadata() == $metadata) {
						return $metadataValue;
					}
				}
				break;
				
			case MetadataTypeEnum::LIST:
				foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
					if ($metadataItem->getMetadata() == $metadata) {
						return $metadataItem;
					}
				}
				break;
		}
		
		return null;

	}

	/**
	 * Get a metadata value from Metadata object
	 * Mainly used with forms
	 * 
	 * - if MetadataTypeEnum::BOOL : return bool
	 * - if MetadataTypeEnum::TEXT : return string
	 * - if MetadataTypeEnum::REGEX : return string
	 * - if MetadataTypeEnum::DATE : return \DateTime object
	 * - if MetadataTypeEnum::LINK : return string
	 * - if MetadataTypeEnum::LIST : return string
	 * 
	 * @param Metadata $metadata
	 * @return mixed
	 */
	public function getMetadataValue(Metadata $metadata): mixed
	{
		if ($this->getMetadataValueAsObject($metadata) === null) {
			$value = null;
		} else {
			$value = $this->getMetadataValueAsObject($metadata)->getValue();
		}

		return match($metadata->getType()) {
			MetadataTypeEnum::BOOL	=>  $value ?? false,
			MetadataTypeEnum::TEXT	=>  $value ?? '',
			MetadataTypeEnum::REGEX	=>  $value ?? '',
			MetadataTypeEnum::DATE	=> new \DateTime($value) ?? null,
			MetadataTypeEnum::LINK	=>  $value ?? '',
			MetadataTypeEnum::LIST	=>  $value ?? '',
		};
	}

	/**
	 * Set a value from Metadata object
	 * 
	 * @param Metadata $metadata
	 * @param mixed $value
	 * @return self
	 */
	public function setMetadataValue(Metadata $metadata, mixed $value): self
	{
		//check and format input value
		//a null value means that no MetadataValue or MetadataItem should be created
		switch ($metadata->getType()) {
			case MetadataTypeEnum::BOOL:
				if (is_scalar($value) === false) {
					throw new InvalidValueException($value, $metadata->getFullCodename());
				}
				$value = ($value || $value === 'true' || $value === 'yes')?true:null;
				break;
			case MetadataTypeEnum::DATE:
				if ($value === null || $value === '') {
					$value = null;
				} elseif ($value instanceof \DateTimeInterface === true) {
					$value = $value->format('d-m-Y');
				} else {
					throw new InvalidValueException($value, $metadata->getFullCodename());
				}
				break;
			default:
				if ($value === null || $value === '') {
					$value = null;
				} elseif (is_scalar($value) === false) {
					throw new InvalidValueException($value, $metadata->getFullCodename());
				}
				$value = (string)$value;
		}
		
		//check if metadata is mandatory
		if ($value === null && $metadata->getIsMandatory() === true) {
			throw new MandatoryValueException($metadata->getFullCodename());
		}

		//check regex
		if ($metadata->isRegex() === true && $value !== null && Regex::match('/' . $metadata->getPattern() . '/', $value)->hasMatch() === false) {
			throw new InvalidValueException($value, $metadata->getFullCodename());
		}
		
		//apply default value if empty
		if ($value === null && $metadata->getDefault()) {
			$value = $metadata->getDefault();
		}

		//update metadataValue or metadataItem
		switch ($metadata->getType()) {
			
			case MetadataTypeEnum::BOOL:
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::DATE:
				foreach ($this->getMetadataValues()->getValues() as $metadataValue) {
					if ($metadataValue->getMetadata() === $metadata) {
						if ($metadataValue->getValue() === $value) {
							return $this;
						} else {
							$this->removeMetadataValue($metadataValue);
						}
					}
				}
				
				if ($value === null) {
					return $this;
				}

				foreach ($metadata->getMetadataValues()->getValues() as $metadataValue) {
					if ($metadataValue->getValue() === $value) {
						$this->addMetadataValue($metadataValue);
						return $this;
					}
				}
				$metadataValue = new MetadataValue();
				$metadataValue->setValue($value);
				$metadataValue->setMetadata($metadata);
				return $this;
				
			case MetadataTypeEnum::LIST:
				foreach ($this->getMetadataItems()->getValues() as $metadataItem) {
					if ($metadataItem->getMetadata() === $metadata) {
						if ($metadataItem->getValue() === $value) {
							return $this;
						} else {
							$this->removeMetadataItem($metadataItem);
						}
					}
				}
				
				if ($value === null) {
					return $this;
				}

				foreach ($metadata->getMetadataItems()->getValues() as $metadataItem) {
					if ($metadataItem->getValue() === $value) {
						$this->addMetadataItem($metadataItem);
						return $this;
					}
				}
				throw new InvalidValueException($value, $metadata->getFullCodename());

			default:
				throw new InvalidCodenameException($metadata->getFullCodename());
		}
	}

	abstract function __toString(): string;
}
