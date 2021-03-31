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
use App\Service\RegexService;
use App\Helpers\Date;

class TestController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(): Response
	{
		
		
		set_time_limit(100);
		
		$count = 10000;
		$search_index_end = $count * 1.5;
		$search_index_start = $count * .5;
		
		$array = array();
		
		for ($i = 0; $i < $count; $i++)
			$array[md5($i)] = $i;
			
			$start = microtime(true);
			for ($i = $search_index_start; $i < $search_index_end; $i++) {
				$key = md5($i);
				$test = isset($array[$key]) ? $array[$key] : null;
			}
			$end = microtime(true);
			echo ($end - $start) . " seconds<br/>";
			
			$start = microtime(true);
			for ($i = $search_index_start; $i < $search_index_end; $i++) {
				$key = md5($i);
				$test = array_key_exists($key, $array) ? $array[$key] : null;
			}
			$end = microtime(true);
			echo ($end - $start) . " seconds<br/>";
			
			
			$start = microtime(true);
			for ($i = $search_index_start; $i < $search_index_end; $i++) {
				$key = md5($i);
				$test = @$array[$key];
			}
			$end = microtime(true);
			echo ($end - $start) . " seconds<br/>";
			
			$error_reporting = error_reporting();
			error_reporting(0);
			$start = microtime(true);
			for ($i = $search_index_start; $i < $search_index_end; $i++) {
				$key = md5($i);
				$test = $array[$key];
			}
			$end = microtime(true);
			echo ($end - $start) . " seconds<br/>";
			error_reporting($error_reporting);
			
			$start = microtime(true);
			for ($i = $search_index_start; $i < $search_index_end; $i++) {
				$key = md5($i);
				$tmp = &$array[$key];
				$test = isset($tmp) ? $tmp : null;
			}
			$end = microtime(true);
			echo ($end - $start) . " seconds<br/>";
		
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
