<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Serie;
use App\Entity\Version;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @method Serie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Serie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Serie[]	findAll()
 * @method Serie[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SerieRepository extends RepositoryService
{
	
	private $router;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Serie::class);
		$this->router = $router;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeries(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->andWhere($qb->eq('s.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	
	/**
	 * @return Serie[]
	 *
	 */
	public function getHydratedSeries(Project $project)
	{
		$qb = $this->newQb();
		
		$series = $qb
			->select('serie, document, company, project')
			->from(Serie::class, 'serie')
			->leftJoin('serie.documents', 'document')
			->innerJoin('serie.company', 'company')
			->innerJoin('serie.project', 'project')
			->andWhere($qb->eq('serie.project', $project))
			->andWhere($qb->eq('serie.id', '29'))
			->getQuery()
			->getResult()
		;
			
		$this->newQB()
			->select('PARTIAL project.{id}, visa, company')
			->from(Project::class, 'project')
			->innerJoin('project.visas', 'visa')
			->innerJoin('visa.company', 'company')
			->getQuery()
			->getResult()
		;
			return $series;
		$this->newQB()
			->select('PARTIAL serie.{id}, serieMetadataItem, metadata1')
			->from(Serie::class, 'serie')
			->innerJoin('serie.metadataItems', 'serieMetadataItem')
			->innerJoin('serieMetadataItem.metadata', 'metadata1')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL serie.{id}, serieMetadataValue, metadata2')
			->from(Serie::class, 'serie')
			->innerJoin('serie.metadataValues', 'serieMetadataValue')
			->innerJoin('serieMetadataValue.metadata', 'metadata2')
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
			->select('PARTIAL document.{id}, documentCodificationItem, codification1')
			->from(Document::class, 'document')
			->innerJoin('document.codificationItems', 'documentCodificationItem')
			->innerJoin('documentCodificationItem.codification', 'codification1')
			->getQuery()
			->getResult()
		;
			
		$this->newQB()
			->select('PARTIAL document.{id}, documentCodificationValue, codification2')
			->from(Document::class, 'document')
			->innerJoin('document.codificationValues', 'documentCodificationValue')
			->innerJoin('documentCodificationValue.codification', 'codification2')
			->getQuery()
			->getResult()
		;
			
		$this->newQB()
			->select('PARTIAL document.{id}, documentMetadataItem, metadata3')
			->from(Document::class, 'document')
			->innerJoin('document.metadataItems', 'documentMetadataItem')
			->innerJoin('documentMetadataItem.metadata', 'metadata3')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL document.{id}, documentMetadataValue, metadata4')
			->from(Document::class, 'document')
			->innerJoin('document.metadataValues', 'documentMetadataValue')
			->innerJoin('documentMetadataValue.metadata', 'metadata4')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL version.{id}, review')
			->from(Version::class, 'version')
			->innerJoin('version.reviews', 'review')
			->getQuery()
			->getResult()
		;
		
		$this->newQB()
			->select('PARTIAL version.{id}, versionMetadataItem, metadata5')
			->from(Version::class, 'version')
			->innerJoin('version.metadataItems', 'versionMetadataItem')
			->innerJoin('versionMetadataItem.metadata', 'metadata5')
			->getQuery()
			->getResult()
		;
			
		$this->newQB()
			->select('PARTIAL version.{id}, versionMetadataValue, metadata6')
			->from(Version::class, 'version')
			->innerJoin('version.metadataValues', 'versionMetadataValue')
			->innerJoin('versionMetadataValue.metadata', 'metadata6')
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
		
		return $series;
	}
	
// 	/**
// 	 * @return Serie[]
// 	 */
// 	public function getSeriesByType(Project $project, string $type)
// 	{
// 		switch ($type) {
// 			case 'sdr':
// 				$qb = $this->newQb('s');
// 				return $qb
// 				->innerJoin('s.company', 'c')
// 				->andWhere($qb->in('c.type', [Company::SUB_CONTRACTOR, Company::SUPPLIER]))
// 				->getQuery()
// 				->getResult()
// 				;
// 			case 'mdr':
// 				$qb = $this->newQb('s');
// 				return $qb
// 				->innerJoin('s.company', 'c')
// 				->andWhere($qb->eq('c.type', Company::MAIN_CONTRACTOR))
// 				->getQuery()
// 				->getResult()
// 				;
// 			default:
// 				return null;
// 		}
// 	}
	
// 	/**
// 	 * @return Serie[]
// 	 */
// 	public function getSeriesByCompany(Project $project, Company $company)
// 	{
// 		$qb = $this->newQb('s');
// 		return $qb
// 			->andWhere($qb->eq('s.project', $project))
// 			->andWhere($qb->eq('s.company', $company))
// 			->addOrderBy('s.name')
// 			->getQuery()
// 			->getResult()
// 		;
// 	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesByCompany(Project $project, Company $company)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('s.company', $company))
			->addOrderBy('s.name')
			->getQuery()
			->getResult()
		;
	}	
	
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesArrayByType(Project $project, string $type)
	{
		switch ($type) {
			case 'sdr':
				$qb = $this->newQb('s');
				$series = $qb
					->select('s.id, s.name, c.type')
					->innerJoin('s.company', 'c')
					->andWhere($qb->in('c.type', [Company::SUB_CONTRACTOR, Company::SUPPLIER]))
					->addOrderBy('s.name')
					->getQuery()
					->getArrayResult()
				;
				break;
			case 'mdr':
				$qb = $this->newQb('s');
				$series = $qb
					->select('s.id, s.name, c.type')
					->innerJoin('s.company', 'c')
					->andWhere($qb->eq('c.type', Company::MAIN_CONTRACTOR))
					->addOrderBy('s.name')
					->getQuery()
					->getArrayResult()
				;
				break;
			default:
				$series = [];
		}
		
		foreach ($series as &$serie) {
			$serie['type'] = $type;
			$serie['url'] = $this->router->generate('document', [
				'project' => $project->getId(),
				'type' => $type,
				'serie' => $serie['id'],
			]);
		}
		
		return $series;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesArrayByCompany(Project $project, Company $company)
	{
		$qb = $this->newQb('s');
		$series = $qb
			->select('s.id, s.name, c.type AS company_type')
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('s.company', $company))
			->addOrderBy('s.name')
			->getQuery()
			->getArrayResult()
		;
		
		foreach ($series as &$serie) {
			switch ($serie['company_type']) {
				case Company::SUB_CONTRACTOR:
				case Company::SUPPLIER:
					$serie['type'] = 'sdr';
				case Company::MAIN_CONTRACTOR:
					$serie['type'] = 'mdr';
			}
			unset($serie['company_type']);
			
			$serie['url'] = $this->router->generate('document', [
				'project' => $project->getId(),
				'type' => $serie['type'],
				'serie' => $serie['id'],
			]);	
		}
		
		return $series;
	}
	
}
