<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\Serie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Spatie\Regex\Regex;
use App\Service\Code\Node;
use App\Helpers\Date;
use Symfony\Component\Validator\Constraints\Count;

class TestController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(): Response
	{

		$keyExist = function($array, $key)
		{
			return isset($array[$key]);
		};
		
		$a = [
			"A" => 1,
			"B" => 2,
		];
		
		
		$s = new Stopwatch();
		
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$d = null;
			$d = isset($a["D"]);
		}
		
		$e = $s->stop('a');
		dump((string)$d, $e->getDuration());
		

		$s = new Stopwatch();
		
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$d = null;
			$d = array_key_exists("D", $a);
		}
		
		$e = $s->stop('a');
		dump((string)$d, $e->getDuration());
		
		
		$s = new Stopwatch();
		
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$d = null;
			$d = $a["D"] ?? false;
		}
		
		$e = $s->stop('a');
		dump((string)$d, $e->getDuration());
		
		
		dd();

		
// 		dump($d->format());
		

		
		return new Response();
		

		
	}
	

	
	private function clearDuplicateDocuments()
	{
		$entityManager = $this->getDoctrine()->getManager();
		$nb = 0;
		
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->getDoctrine()->getRepository(Serie::class)->getHydratedSeries($project);
			
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
		$entityManager = $this->getDoctrine()->getManager();
		$nb = 0;
		
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->getDoctrine()->getRepository(Serie::class)->getHydratedSeries($project);
			
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
