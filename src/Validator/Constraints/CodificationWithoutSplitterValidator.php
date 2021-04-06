<?php 

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use App\Entity\Codification;
use Spatie\Regex\Regex;

class CodificationWithoutSplitterValidator extends ConstraintValidator
{
	
	public function validate($codification, Constraint $constraint)
	{
		if (!$constraint instanceof CodificationWithoutSplitter) {
			throw new UnexpectedTypeException($constraint, CodificationWithoutSplitter::class);
		}
		
		if ($codification === null) {
			return;
		}
		
		if (Regex::match('/' . $codification->getProject()->getSplitter() . '/', $codification->getValue())->hasMatch()) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ splitter }}', $codification->getProject()->getSplitter())
				->addViolation();
		}
	}
}

?>