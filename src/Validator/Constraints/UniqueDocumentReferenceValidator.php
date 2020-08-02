<?php 

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use App\Entity\Document;
use App\Repository\DocumentRepository;

class UniqueDocumentReferenceValidator extends ConstraintValidator
{
	private $documentRepository;
	
	public function __construct(DocumentRepository $documentRepository)
	{
		$this->documentRepository = $documentRepository;
	}
	
	public function validate($document, Constraint $constraint)
	{
		if (!$constraint instanceof UniqueDocumentReference) {
			throw new UnexpectedTypeException($constraint, UniqueDocumentReference::class);
		}
		
		if ($document === null) {
			return;
		}
		
		if ($this->documentRepository->getDocumentByReference($document->getSerie()->getProject(), $document->getCodificationItems(), $document->getCodificationValues())) {
			$this->context->buildViolation($constraint->message)
				->setParameter('{{ reference }}', $document->getReference())
				->addViolation();
		}
	}
}

?>