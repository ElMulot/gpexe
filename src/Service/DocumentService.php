<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Document;
use App\Repository\DocumentRepository;

class DocumentService
{
	
	private $entityManager;
	
	private $documentRepository;
	
	public function __construct(EntityManagerInterface $entityManager, DocumentRepository $documentRepository)
	{
		$this->entityManager = $entityManager;
		$this->documentRepository = $documentRepository;
	}

	public function removeOrphans()
	{
		foreach ($this->documentRepository->getOrphanedDocuments() as $document) {
			$this->entityManager->remove($document);
		}
		$this->entityManager->flush();
	}
	
	
	public function validateReference(Document $document): bool
	{
		$this->removeOrphans();
		return empty($this->documentRepository->getDocumentByReference($document->getSerie()->getProject(), $document->getCodificationItems(), $document->getCodificationValues()));
	}
	
}

?>