<?php

namespace App\EventListener;

use App\Entity\Document;
use App\Repository\DocumentRepository;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Symfony\Contracts\Translation\TranslatorInterface;

#[AsEntityListener(entity:Document::class, event: Events::postPersist, method: 'codificationIsUnique')]
#[AsEntityListener(entity:Document::class, event: Events::preUpdate, method: 'codificationIsUnique')]
class UniqueCodificationListener
{
	
	public function __construct(private readonly DocumentRepository $documentRepository,
								private readonly TranslatorInterface $translator)
	{
	}
	
	public function codificationIsUnique(Document $document, LifecycleEventArgs $event)
	{
		$project = $document->getSerie()->getProject();

		$duplicateDocument = $this->documentRepository->getDocumentByReference($project, $document->getCodificationElements(), $document->getCodificationChoices());
		
		if ($duplicateDocument !== null && $duplicateDocument->getId() !== $document->getId()) {
			throw new \Exception($this->translator->trans('alreadyExist.reference', ['reference' => $document->getReference()], 'error'));
		}
	}
}

?>