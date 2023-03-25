<?php

namespace App\Repository;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Serie;
use App\Entity\Version;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]	findAll()
 * @method Document[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Document::class);
	}
	
	/**
	 * @return Document[]
	 *
	 */
	public function getDocumentsByProject(Project $project)
	{
		
		$qb = $this->newQb();
		
		$documents = $qb
			->select('serie, document, company, project')
			->from(Document::class, 'document')
			->innerJoin('document.serie', 'serie')
			->innerJoin('serie.company', 'company')
			->innerJoin('serie.project', 'project')
			->andWhere($qb->eq('serie.project', $project))
// 			->andWhere($qb->eq('serie.id', '29'))
			->getQuery()
			->getResult()
		;
		
		$this->hydrateDocuments();
		
		return $documents;
	}
	
	/**
	 * @return Document[]
	 *
	 */
	public function getDocumentsBySeries(array $series)
	{
		
		$qb = $this->newQb();
		
		$documents = $qb
			->select('serie, document, company, project')
			->from(Document::class, 'document')
			->innerJoin('document.serie', 'serie')
			->innerJoin('serie.company', 'company')
			->innerJoin('serie.project', 'project')
			->andWhere($qb->in('serie.id', $series))
			->getQuery()
			->getResult()
		;
		
		$this->hydrateDocuments();
		
		return $documents;
	}

	/**
	 * Return an array of documents from an array of version.id.
	 * Used by : EngineeringController->action
	 * @param array|null $versionIds
	 * @return Document[]
	 */
	public function getDocumentsByVersionsId(?array $versionIds = []): array
	{
		
		$qb = $this->newQb('d');

		return $qb
			->innerJoin('d.versions', 'v')
			->andWhere($qb->in('v.id', $versionIds))
			->getQuery()
			->getResult()
		;
	}

	/**
	 * @return Document[]
	 *
	 */
	public function getDocumentsByIds(?array $ids = [])
	{
		$qb = $this->newQb('d');
		return $qb
			->andWhere($qb->in('d.id', $ids))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Document[]
	 *
	 */
	public function getDocumentsByReference(Project $project, $codificationChoices, $codificationElements)
	{
		$qb = $this->newQB('d');
		$qb->innerJoin('d.serie', 's')
			->andWhere($qb->eq('s.project', $project));
		
		foreach ($codificationChoices->getValues() as $codificationChoice) {
			
			$id = $codificationChoice->getCodification()->getId();
			
			$subQb = $this->newQB();
			$subQb->select('d' . $id)
				->from(Document::class, 'd' . $id)
				->innerJoin('d' . $id . '.codificationChoices', 'i' . $id)
				->andWhere($subQb->eq('i' . $id . '.value', $codificationChoice->getValue()))
			;
			
			$qb->andWhere($qb->in('d.id', $subQb->getQuery()->getArrayResult()));
			
		}
		
		foreach ($codificationElements->getValues() as $id => $codificationElement) {
			
			$id = $codificationElement->getCodification()->getId();
			
			$subQb = $this->newQB();
			$subQb->select('d' . $id)
				->from(Document::class, 'd' . $id)
				->innerJoin('d' . $id . '.codificationElements', 'v' . $id)
				->andWhere($subQb->eq('v' . $id . '.value', $codificationElement->getValue()))
			;
			
			$qb->andWhere($qb->in('d.id', $subQb->getQuery()->getArrayResult()));
			
		}
		
		return $qb
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Document[]
	 *
	 */
	public function getOrphanedDocuments()
	{
		$qb = $this->newQB('d');
		
		return $qb
			->leftJoin('d.versions', 'v')
			->andWhere($qb->isNull('v.id'))
			->getQuery()
			->getResult()
		;
	}
	
	private function hydrateDocuments()
	{
		$this->newQB()
			->select('PARTIAL project.{id}, visa, company')
			->from(Project::class, 'project')
			->innerJoin('project.visas', 'visa')
			->innerJoin('visa.company', 'company')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL serie.{id}, serieMetadataChoice, metadata1')
			->from(Serie::class, 'serie')
			->innerJoin('serie.metadataChoices', 'serieMetadataChoice')
			->innerJoin('serieMetadataChoice.metadata', 'metadata1')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL serie.{id}, serieMetadataElement, metadata2')
			->from(Serie::class, 'serie')
			->innerJoin('serie.metadataElements', 'serieMetadataElement')
			->innerJoin('serieMetadataElement.metadata', 'metadata2')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, version, status, writer, checker, approver')
			->from(Document::class, 'document')
			->innerJoin('document.versions', 'version')
			->innerJoin('version.status', 'status')
			->leftJoin('version.writer', 'writer')
			->leftJoin('version.checker', 'checker')
			->leftJoin('version.approver', 'approver')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, documentCodificationChoice, codification1')
			->from(Document::class, 'document')
			->innerJoin('document.codificationChoices', 'documentCodificationChoice')
			->innerJoin('documentCodificationChoice.codification', 'codification1')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, documentCodificationElement, codification2')
			->from(Document::class, 'document')
			->innerJoin('document.codificationElements', 'documentCodificationElement')
			->innerJoin('documentCodificationElement.codification', 'codification2')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, documentMetadataChoice, metadata3')
			->from(Document::class, 'document')
			->innerJoin('document.metadataChoices', 'documentMetadataChoice')
			->innerJoin('documentMetadataChoice.metadata', 'metadata3')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, documentMetadataElement, metadata4')
			->from(Document::class, 'document')
			->innerJoin('document.metadataElements', 'documentMetadataElement')
			->innerJoin('documentMetadataElement.metadata', 'metadata4')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL version.{id}, review')
			->from(Version::class, 'version')
			->leftJoin('version.reviews', 'review')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL version.{id}, versionMetadataChoice, metadata5')
			->from(Version::class, 'version')
			->innerJoin('version.metadataChoices', 'versionMetadataChoice')
			->innerJoin('versionMetadataChoice.metadata', 'metadata5')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL version.{id}, versionMetadataElement, metadata6')
			->from(Version::class, 'version')
			->innerJoin('version.metadataElements', 'versionMetadataElement')
			->innerJoin('versionMetadataElement.metadata', 'metadata6')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL review.{id}, visa, company')
			->from(Review::class, 'review')
			->innerJoin('review.visa', 'visa')
			->innerJoin('visa.company', 'company')
			->getQuery()
			->getResult()
		;
	}
}
