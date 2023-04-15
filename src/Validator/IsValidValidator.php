<?php

namespace App\Validator;

use App\Entity\Codification;
use App\Entity\CodificationChoice;
use App\Entity\CodificationElement;
use App\Entity\Metadata;
use App\Entity\MetadataElement;
use Spatie\Regex\Regex;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use UnexpectedValueException;

class IsValidValidator extends ConstraintValidator
{
	public function validate($value, Constraint $constraint): void
	{
		if (!$constraint instanceof IsValid) {
			throw new UnexpectedTypeException($constraint, IsValid::class);
		}

		if ($value === null || $value === '') {
			return;
		}
		
		if ($value instanceof \DateTime === true) {
			return;
		}

		if (is_string($value) === false) {
			throw new UnexpectedValueException($value, 'string');
		}

		foreach (['$', '"'] as $symbol) {
			if (str_contains($value, $symbol) === true) {
				$this->context->buildViolation($constraint->forbiddenSymbolMessage)
					->setParameter('{{ symbol }}', $symbol)
					->addViolation();
				break;
			}
		}

		$object = $this->context->getObject();

		$pattern = '';
		if (isset($constraint->payload['pattern']) === true) {
			$pattern = $constraint->payload['pattern'];
		} elseif ($object instanceof CodificationElement && $object->getCodification()->isRegex() === true) {
			$pattern = $object->getCodification()->getPattern();
		} elseif ($object instanceof MetadataElement && $object->getMetadata()->isRegex() === true) {
			$pattern = $object->getMetadata()->getPattern();
		} elseif ($object instanceof Codification && $object->isRegex() === true) {
			$pattern = $object->getPattern();
		} elseif ($object instanceof Metadata && $object->isRegex() === true) {
			$pattern = $object->getPattern();
		}

		if ($pattern !== '') {
			if (Regex::match('/' . $pattern . '/', $value)->hasMatch() === false) {
				$this->context->buildViolation($constraint->regexMessage)
					->addViolation();
			}
		}
		
		$isUrl = false;

		if (isset($constraint->payload['isUrl']) === true) {
			$isUrl = $constraint->payload['isUrl'];
		} elseif ($object instanceof MetadataElement && $object->getMetadata()->isLink() === true) {
			$isUrl = true;
		} elseif ($object instanceof Metadata && $object->isLink() === true) {
			$isUrl = true;
		}
		
		if ($isUrl === true) {
			
			//add standard constraint. To be functionnal, the Default group must be used (don't know why)
			$this->context
				->getValidator()
				->inContext($this->context)
				->validate($value, new Url(), Constraint::DEFAULT_GROUP);
		}
	}
}

?>