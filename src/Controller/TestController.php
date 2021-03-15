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
use App\Service\Node\Node;
use App\Service\RegexService;

class TestController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(): Response
	{
		
		$s = new Stopwatch();
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$date = null;
			$date = new \DateTime('10-01-2020');
		}
		
		$event = $s->stop('a');
		echo $i . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$date = null;
			$date = \DateTime::createFromFormat('d-m-Y', '10-01-2020');
		}
		
		$event = $s->stop('a');
		echo $i . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
		$s->start('a');
		
		for ($i=0; $i<100000; $i++) {
			$date = null;
			$date = strtotime('2020-10-01');
		}
		
		$event = $s->stop('a');
		echo $i . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
		
		
// 		$a = "[i] + 10";
		
// 		$b[] = Node::newExcelNode("i");
// 		$b[] = Node::newCodeNode(" + 10");
		
// 		echo 'preg_replace_callback<br>';
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
			
// 			$t = preg_replace_callback('/\[(\w+)\]/', function($matches) use ($i) {
// 				return ($matches[1] == 'i')?$i:0;
// 			}, $a);
			
// 			$j = eval('return ' . $t . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
// 		echo 'RegexService<br>';
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
			
// 			$t = (new RegexService('/\[(\w+)\]/'))->replace($a, function($matches) use ($i) {
// 				return ($matches[1] == 'i')?$i:0;
// 			});
				
// 			$j = eval('return ' . $t . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
// 		echo 'Spatie/Regex<br>';
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
			
// 			$t = Regex::replace('/\[(\w+)\]/', function($result) use ($i) {
// 				return ($result->group(1) == 'i')?$i:0;
// 			}, $a)->result();
				
// 			$j = eval('return ' . $t . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';

// 		echo 'foreach<br>';
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
// 			$t = '';
// 			foreach ($b as $node) {
// 				$t .= $node->getValue($i);
// 			}
// 			$j = eval('return ' . $t . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
// 		echo 'array_map<br>';
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
// 			$t = join(array_map(function($item) use ($i) {
// 				return $item->getValue($i);
// 			}, $b));
// 			$j = eval('return ' . $t . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br><br>';
		
		
// 		echo json_decode(json_encode('"\"kk"'));
		
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<10000; $i++) {
// 			$j = eval('return 1 + ' . $i . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
		
// 		$el = new ExpressionLanguage();
// 		$s->start('a');
		
// 		for ($i=0; $i<10000; $i++) {
// 			$j = $el->evaluate('1 + i', ['i' => $i]);
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
// 		$el = new ExpressionLanguage();
// 		$s->start('a');
// 		$c = $el->compile('1 + 10', ['i' => 10]);
		
// 		for ($i=0; $i<10000; $i++) {
// 			$j = eval('return ' . str_replace('10', $i, $c) . ';');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
		
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
// 			$j = str_replace('?', $i, '? + Y');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
// 			$j = preg_replace('/^\?/', $i, '? + Y');
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
// 		$s = new Stopwatch();
// 		$s->start('a');
		
// 		for ($i=0; $i<100000; $i++) {
// 			$j = Regex::replace('/^\?/', $i, '? + Y')->result();
// 		}
		
// 		$event = $s->stop('a');
// 		echo $j . '  (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)<br>';
		
// 		dd();
		
// 		$this->clearDuplicateDocuments();
// 		$this->clearDuplicateVersions();
		
// 		dd(phpinfo());
// 		return $this->render('test/index.html.twig', [
// 			'test' => 'TestController',
// 		]);

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
