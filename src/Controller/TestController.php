<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Helpers\Date;
use App\Entity\Project;
use App\Entity\Version;
use Symfony\UX\Turbo\TurboBundle;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestController extends AbstractController
{
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine)
	{
	}
	
    /**
     * @param int id Id of the post to be highlighted
     */
	#[Route(path: '/test', name: 'test', requirements: ['id' => '\d+'])]
	public function index(Request $request) : Response
	{
		$repository = $this->doctrine->getManager()->getRepository(Version::class);

		return $this->renderForm('test/index.html.twig', [
			'dates' => [$repository->findOneBy(['id' => '5308']), $repository->findOneBy(['id' => '5310'])],
		]);
	}

	#[Route(path: '/f2', name: 'f2')]
	public function f2(Request $request) : Response
	{
		// sleep(2);
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->renderForm('test/f2.html.twig', [
		]);
	}

	#[Route(path: '/f3', name: 'f3')]
	public function f3() : Response
	{
		sleep(2);
		return $this->renderForm('test/f3.html.twig', [
			
		]);
	}

	private function clearDuplicateDocuments()
	{
		$entityManager = $this->doctrine->getManager();
		$nb = 0;
		
		foreach ($this->doctrine->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->doctrine->getRepository(Serie::class)->getHydratedSeries($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $serie1) {
					foreach ($serie1->getDocuments()->getValues() as $d1) {
						
						foreach ($series as $serie2) {
							foreach ($serie2->getDocuments()->getValues() as $d2) {
								
								if ($d1->getId() != $d2->getId() && $d1->getReference() == $d2->getReference()) {
									$serie2->removeDocument($d2);
									$entityManager->persist($serie2);
									$restart = true;
									$nb++;
									break 4;
								}
								
							}
						}
					}
				}
				
			} while ($restart);
		}
		
		$entityManager->flush();
		
		dump('documents dupliqués : ' . $nb);
	}
	
	private function clearDuplicateVersions()
	{
		$entityManager = $this->doctrine->getManager();
		$nb = 0;
		
		foreach ($this->doctrine->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->doctrine->getRepository(Serie::class)->getHydratedSeries($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $serie) {
					foreach ($serie->getDocuments()->getValues() as $d1) {
						
						foreach ($d1->getVersions()->getValues() as $v1) {
														
							foreach ($d1->getVersions()->getValues() as $v2) {
								
								if ($v1->getId() != $v2->getId() && $v1->getName() == $v2->getName()) {
									$d1->removeVersion($v2);
									$entityManager->persist($d1);
									$restart = true;
									$nb++;
									break 4;
								}
							}
						}
					}
				}
				
			} while ($restart);
		}
		
		$entityManager->flush();
		
		dump('versions dupliquées : ' . $nb);
	}
}
