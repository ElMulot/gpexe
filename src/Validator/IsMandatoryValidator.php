<?php

namespace App\Validator;

use App\Entity\MetadataChoice;
use App\Entity\MetadataElement;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

#[\Attribute]
class IsMandatoryValidator extends ConstraintValidator
{
	public function validate($value, Constraint $constraint): void
	{
		if (!$constraint instanceof IsMandatory) {
			throw new UnexpectedTypeException($constraint, IsMandatory::class);
		}

		$object = $this->context->getObject();

		$mandatory = false;
		if ($object instanceof MetadataElement) {
			/**@var MetadataElement $object */
			$mandatory = $object->getMetadata()->isMandatory();
		} elseif ($object instanceof MetadataChoice) {
			/**@var MetadataChoice $object */
			$mandatory = $object->getMetadata()->isMandatory();
		}

		if (($value === null || $value === false || $value === '' || $value === []) && $mandatory === true) {
			$this->context->buildViolation($constraint->message)
				->addViolation();
		}
	}

}

?>