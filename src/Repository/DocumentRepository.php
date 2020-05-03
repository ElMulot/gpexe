<?php

namespace App\Repository;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Project;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends ServiceEntityRepository
{
    
	private $encoder;
	
	public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
        $this->encoder = new JsonEncoder();
    }
    
    /**
     * @return Document[]
     *
     */
    public function getDocuments(Project $project, Company $company)
    {
    	return $this->createQueryBuilder('s')
    	->andWhere('s.project = :project')
    	->setParameter('project', $project)
    	->andWhere('s.company = :company')
    	->setParameter('company', $company)
    	->addOrderBy('c.name')
    	->getQuery()
    	->getResult()
    	;
    }
    
    /**
     * @return Document[]
     *
     */
    public function getDocumentsByRequest(Request $request)
    {	
    	$versionIds = $this->encoder->decode($request->query->get('versions'), 'json');
    	if (is_array($versionIds)) {
    		$query = $this->createQueryBuilder('d')
    			->innerJoin('d.versions', 'v');
    		return $query->andWhere($query->expr()->in('v.id', $versionIds))
    			->addGroupBy('d.id')
    			->getQuery()
    			->getResult();
    	}
    	return null;
    }
}
