<?php

namespace App\Validator;

use App\Entity\CodificationChoice;
use App\Entity\CodificationElement;
use DoctrineExtensions\Query\Mysql\Instr;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

#[\Attribute]
class NotContainsSplitterValidator extends ConstraintValidator
{
	public function validate($value, Constraint $constraint): void
	{
		if (!$constraint instanceof NotContainsSplitter) {
			throw new UnexpectedTypeException($constraint, NotContainsSplitter::class);
		}

		if ($value === null || $value === '') {
			return;
		}

		if (!is_string($value)) {
			throw new UnexpectedValueException($value, 'string');
		}

		$object = $this->context->getObject();

		if (isset($constraint->payload['splitter']) === true) {
			$splitter = $constraint->payload['splitter'];
		} elseif ($object instanceof CodificationElement) {
			/**@var CodificationElement $object */
			$splitter = $object->getCodification()->getProject()->getSplitter();
		} elseif ($object instanceof CodificationChoice) {
			/**@var CodificationChoice $object */
			$splitter = $object->getCodification()->getProject()->getSplitter();
		}

		if (str_contains($value, $splitter) === true) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ splitter }}', $splitter)
				->addViolation();
		}

	}

}

?>