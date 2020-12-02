<?php

namespace App\Service;

use App\Entity\Document;
use App\Repository\DocumentRepository;
use Doctrine\ORM\EntityManagerInterface;

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
		$documents = $this->documentRepository->getDocumentsByReference($document->getSerie()->getProject(), $document->getCodificationItems(), $document->getCodificationValues());
		
		if (empty($documents)) {
			return true;
		} elseif ($document->getId() !== null) {
			return empty(array_filter($documents, function($item) use ($document) {
				return ($item->getId() !== $document->getId());
			}));
		}
		
		return false;
	}
	
}

?>