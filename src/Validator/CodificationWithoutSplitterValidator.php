<?php 

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use App\Entity\Codification;
use Spatie\Regex\Regex;

class CodificationWithoutSplitterValidator extends ConstraintValidator
{
	
	public function validate($codification, Constraint $constraint): void
	{
		if ($constraint instanceof CodificationWithoutSplitter === false) {
			throw new UnexpectedTypeException($constraint, CodificationWithoutSplitter::class);
		}
		
		if ($codification === null) {
			return;
		}
		
		if (Regex::match('/' . $codification->getProject()->getSplitter() . '/', $codification->getValue())->hasMatch() === true) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ splitter }}', $codification->getProject()->getSplitter())
				->addViolation()
			;
		}
	}
}

?>