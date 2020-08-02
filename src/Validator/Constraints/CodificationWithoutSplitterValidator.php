<?php 

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use App\Entity\Codification;

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
		
		if (preg_match('/' . $codification->getProject()->getSplitter() . '/', $codification->getValue())) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ splitter }}', $codification->getProject()->getSplitter())
				->addViolation();
		}
	}
}

?>