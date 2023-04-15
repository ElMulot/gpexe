<?php

namespace App\Entity;

use Spatie\Regex\Regex;
use App\Entity\Enum\MetadataTypeEnum;
use App\Exception\InvalidValueException;
use App\Exception\MandatoryValueException;
use App\Exception\InvalidCodenameException;
use Doctrine\Common\Collections\Collection;

abstract class AbstractElement
{

	abstract protected function getMetadataChoices(): Collection;

	abstract protected function addMetadataChoice(MetadataChoice $metadataChoice): self;

	abstract protected function removeMetadataChoice(MetadataChoice $metadataChoice): self;

	abstract protected function getMetadataElements(): Collection;

	abstract protected function addMetadataElement(MetadataElement $metadataElement): self;

	abstract protected function removeMetadataElement(MetadataElement $metadataElement): self;


	//todo: vraiment utile ?
	/**
	 * Return any MetadataElement or MetadataChoice from Metadata object
	 * If MetadataElement or MetadataChoice doesn't exist, return null
	 * 
	 * @param Metadata $metadata
	 * @return null|MetadataElement|MetadataChoice
	 */
	public function getMetadataValueAsObject(Metadata $metadata): null|MetadataElement|MetadataChoice
	{
		
		switch ($metadata->getType()) {
			
			case MetadataTypeEnum::BOOL:
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::DATE:
			case MetadataTypeEnum::LINK:
				foreach ($this->getMetadataElements()->getValues() as $metadataElement) {
					if ($metadataElement->getMetadata() == $metadata) {
						return $metadataElement;
					}
				}
				break;
				
			case MetadataTypeEnum::LIST:
				foreach ($this->getMetadataChoices()->getValues() as $metadataChoice) {
					if ($metadataChoice->getMetadata() == $metadata) {
						return $metadataChoice;
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
		switch ($metadata->getType()) {
			
			case MetadataTypeEnum::BOOL:
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::DATE:
			case MetadataTypeEnum::LINK:
				/**@var MetadataElement $metadataElement */
				foreach ($this->getMetadataElements()->getValues() as $metadataElement) {
					if ($metadataElement->getMetadata() == $metadata) {
						return $metadataElement->getValue();
					}
				}
				break;
				
			case MetadataTypeEnum::LIST:
				/**@var MetadataChoice $metadataChoice */
				foreach ($this->getMetadataChoices()->getValues() as $metadataChoice) {
					if ($metadataChoice->getMetadata() == $metadata) {
						return $metadataChoice->getValue();
					}
				}
				break;
		}
		
		return null;
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
		//a null value means that no MetadataElement or MetadataChoice should be created
		
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
				} else {
					$value = (string)$value;
				}
				
		}
		
		//check if metadata is mandatory
		// if ($value === null && $metadata->isMandatory() === true) {
		// 	throw new MandatoryValueException($metadata->getFullCodename());
		// }

		//check regex
		// if ($metadata->isRegex() === true && $value !== null && Regex::match('/' . $metadata->getPattern() . '/', $value)->hasMatch() === false) {
		// 	throw new InvalidValueException($value, $metadata->getFullCodename());
		// }
		
		//apply default value if empty
		// if ($value === null && $metadata->getDefaultValue()) {
		// 	$value = $metadata->getDefaultValue();
		// }

		//update metadataElement or metadataChoice
		switch ($metadata->getType()) {
			
			case MetadataTypeEnum::BOOL:
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::DATE:
			case MetadataTypeEnum::LINK:	
				foreach ($this->getMetadataElements()->getValues() as $metadataElement) {
					if ($metadataElement->getMetadata() === $metadata) {
						if ($metadataElement->getValue() === $value) {
							return $this;
						} else {
							$this->removeMetadataElement($metadataElement);
						}
					}
				}
				
				if ($value === null) {
					return $this;
				}

				foreach ($metadata->getMetadataElements()->getValues() as $metadataElement) {
					if ($metadataElement->getValue() === $value) {
						$this->addMetadataElement($metadataElement);
						return $this;
					}
				}
				$metadataElement = new MetadataElement();
				$metadataElement->setRawValue($value);
				$metadataElement->setMetadata($metadata);
				$this->addMetadataElement($metadataElement);
				return $this;
				
			case MetadataTypeEnum::LIST:
				foreach ($this->getMetadataChoices()->getValues() as $metadataChoice) {
					if ($metadataChoice->getMetadata() === $metadata) {
						if ($metadataChoice->getValue() === $value) {
							return $this;
						} else {
							$this->removeMetadataChoice($metadataChoice);
						}
					}
				}
				
				if ($value === null) {
					return $this;
				}

				foreach ($metadata->getMetadataChoices()->getValues() as $metadataChoice) {
					if ($metadataChoice->getValue() === $value) {
						$this->addMetadataChoice($metadataChoice);
						return $this;
					}
				}
				throw new InvalidValueException($value, $metadata->getFullCodename());

			default:
				throw new InvalidCodenameException($metadata->getFullCodename());
		}
	}
}
