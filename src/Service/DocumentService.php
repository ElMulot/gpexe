<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Document;
use App\Repository\DocumentRepository;

class DocumentService
{
	
	private $documentRepository;
	
	public function __construct(DocumentRepository $documentRepository)
	{
		$this->documentRepository = $documentRepository;
	}

	
	public function validateReference(Document $document): bool
	{
		return empty($this->documentRepository->getDocumentByReference($document->getSerie()->getProject(), $document->getCodificationItems(), $document->getCodificationValues()));
	}
	
}

?>