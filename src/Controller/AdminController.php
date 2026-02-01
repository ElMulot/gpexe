<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Entity\Project;
use App\Repository\SerieRepository;
use App\Repository\ProjectRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
	private $doctrine;

	private $projectRepository;

	private $serieRepository;

	public function __construct(ManagerRegistry $doctrine, ProjectRepository $projectRepository, SerieRepository $serieRepository)
	{
		$this->doctrine = $doctrine;
		$this->projectRepository = $projectRepository;
		$this->serieRepository = $serieRepository;
	}	


	public function index(): Response
	{
		return $this->render('admin/index.html.twig');
	}

	public function clearDuplicateDocuments(bool $flush = null): Response
	{
		$entityManager = $this->doctrine->getManager();
		$duplicated_documents = [];
		
		foreach ($this->projectRepository->getAllProjects() as $project) {
			
			$series = $this->serieRepository->getSeriesByProject($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $s1) {
					foreach ($s1->getDocuments()->getValues() as $d1) {
						
						foreach ($series as $s2) {
							foreach ($s2->getDocuments()->getValues() as $d2) {
								
								if ($d1->getId() != $d2->getId() && $d1->getReference() == $d2->getReference()) {
									$s2->removeDocument($d2);
									$entityManager->persist($s2);
									$restart = true;
									$duplicated_documents[] = $d1->getReference() . ' ' . $d1->getName();
									break 4;
								}
								
							}
						}
					}
				}
				
			} while ($restart);
		}

		if ($flush === true) {
			$entityManager->flush();
			return $this->render('admin/index.html.twig', [
				'flush' => true,
				'duplicated_documents' => $duplicated_documents
			]);
		} else {
			return $this->render('admin/index.html.twig', [
				'duplicated_documents' => $duplicated_documents
			]);
		}
	}
	
	public function clearDuplicateVersions(bool $flush = null): Response
	{
		$entityManager = $this->doctrine->getManager();
		$duplicated_versions = [];
		
		foreach ($this->projectRepository->getAllProjects() as $project) {
			
			$series = $this->serieRepository->getSeriesByProject($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $serie) {
					foreach ($serie->getDocuments()->getValues() as $document) {
						
						foreach ($document->getVersions()->getValues() as $v1) {
														
							foreach ($document->getVersions()->getValues() as $v2) {
								
								if ($v1->getId() != $v2->getId() && $v1->getName() == $v2->getName()) {
									$document->removeVersion($v2);
									$entityManager->persist($document);
									$restart = true;
									$duplicated_versions[] = $document->getReference() . $project->getSplitter() . $v1->getName() . ' ' . $document->getName();
									break 4;
								}
							}
						}
					}
				}
				
			} while ($restart);
		}
		
		if ($flush === true) {
			$entityManager->flush();
			return $this->render('admin/index.html.twig', [
				'flush' => true,
				'duplicated_versions' => $duplicated_versions
			]);
		} else {
			return $this->render('admin/index.html.twig', [
				'duplicated_versions' => $duplicated_versions
			]);
		}
	}
}
