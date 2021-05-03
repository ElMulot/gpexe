<?php

namespace App\Repository;

use App\Entity\Program;
use App\Entity\Project;
use App\Entity\Serie;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @method Program|null find($id, $lockMode = null, $lockVersion = null)
 * @method Program|null findOneBy(array $criteria, array $orderBy = null)
 * @method Program[]	findAll()
 * @method Program[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgramRepository extends RepositoryService
{
	
	private $router;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Program::class);
		$this->router = $router;
	}
	
	/**
	 * @return Program[]
	 *
	 */
	public function getPrograms(Project $project)
	{
		$qb = $this->newQB('p');
		return $qb
			->andWhere($qb->eq('p.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Program[]
	 *
	 */
	public function getEnabledPrograms(Project $project)
	{
		$qb = $this->newQB('p');
		return $qb
			->andWhere($qb->eq('p.project', $project))
			->andWhere($qb->eq('p.enabled', true))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Program[]
	 *
	 */
	public function getEnabledProgressPrograms(Project $project)
	{
		$qb = $this->newQB('p');
		return $qb
			->andWhere($qb->eq('p.project', $project))
			->andWhere($qb->eq('p.enabled', true))
			->andWhere($qb->eq('p.type', Program::PROGRESS))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Program[]
	 *
	 */
	public function getEnabledProgressProgramsAsArray(Project $project, array $series)
	{
		$qb = $this->newQB('p');
		$programs = $qb
			->select('p.id, p.name')
			->andWhere($qb->eq('p.project', $project))
			->andWhere($qb->eq('p.enabled', true))
			->andWhere($qb->eq('p.type', Program::PROGRESS))
			->getQuery()
			->getArrayResult()
		;
		
		array_walk($programs, function(&$item) use ($project, $series) {
			$item['url'] = $this->router->generate('program_preload', [
				'program' => $item['id'],
				'series' => array_column($series, 'id'),
			]);
		});
		
		return $programs;
	}
	
	
	/**
	 * @return Program[]
	 *
	 */
	public function getProgramById(int $id)
	{
		$qb = $this->newQB('p');
		return $qb
			->andWhere($qb->eq('p.id', $id))
			->getQuery()
			->getSingleResult()
		;
	}
}
