<?php

namespace App\Service;

use App\Entity\Codification;
use App\Entity\Document;
use App\Entity\Project;
use App\Repository\DocumentRepository;
use Doctrine\ORM\EntityManagerInterface;

class DocumentService
{
	
	// public function __construct(private readonly EntityManagerInterface $entityManager, private readonly DocumentRepository $documentRepository)
	// {
	// }

	// public function removeOrphans()
	// {
	// 	foreach ($this->documentRepository->getOrphanedDocuments() as $document) {
	// 		$this->entityManager->remove($document);
	// 	}
	// }
	
	
	// public function validateReference(Document $document): bool
	// {
	// 	$documents = $this->documentRepository->getDocumentsByReference($document->getSerie()->getProject(), $document->getCodificationElements(), $document->getCodificationChoices());
		
	// 	if (empty($documents)) {
	// 		return true;
	// 	} elseif ($document->getId() !== null) {
	// 		return empty(array_filter($documents, fn($item) => $item->getId() !== $document->getId()));
	// 	}
		
	// 	return false;
	// }
	
}

?>