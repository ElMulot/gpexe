<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Entity\Project;
use App\Form\Type\ChoiceVariousType;
use Symfony\UX\Turbo\TurboBundle;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validation;

class TestController extends AbstractController
{
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly ManagerRegistry $doctrine,
                                private readonly string $publicDirectory,
								#[Autowire('%app.uploads_directory%')]
                                private readonly string $uploadsDirectory)
	{
	}
	
	#[Route(path: '/test', name: 'test', requirements: ['id' => '\d+'])]
	public function index(Request $request) : Response
	{
		
		// $project = $this->doctrine->getRepository(Project::class)->findOneBy(['id' => 1]);
		// $company = $this->doctrine->getRepository(Company::class)->findOneBy(['id' => 1]);

		// $series = $this->doctrine->getRepository(Serie::class)->findBy(['id' => [3, 29]]);

		/**@var Serie $serie */
		// foreach ($series as $serie) {
			// dump($serie->getDocuments()->getValues());
			// foreach ($serie->getDocuments()->getValues() as $document) {
				// $document->getVersions()->getValues();
			// }
		// }

		// $form = $this->createFormBuilder(null, ['csrf_protection' => false])
		// 	->add('test', ChoiceVariousType::class, [
		// 		'choices' => [
		// 			'Zero'	=> 0,
		// 			'One'	=> 1,
		// 			'Two'	=> 2,
		// 		],
		// 		'data' => [0, 1]
		// 	])
		// 	->getForm();

		// $form->get('test')->submit([
		// 	'input'		=> 50,
		// 	'switch'	=> null,
		// ]);

		// dump($form->get('test')->getNormData());

		return $this->renderForm('test/index.html.twig', [
			// 'form' => $form,
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
