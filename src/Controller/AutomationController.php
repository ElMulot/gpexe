<?php

namespace App\Controller;

use App\Entity\Automation;
use App\Entity\Codification;
use App\Entity\Document;
use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Entity\Program;
use App\Entity\Progress;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Version;
use App\Form\AutomationType;
use App\Repository\AutomationRepository;
use App\Service\ProgramService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Repository\ProgramRepository;
use App\Entity\CodificationValue;

class AutomationController extends AbstractController
{
	
	private $translator;
	
	private $automationRepository;
	
	private $programService;
	
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, ProgramService $programService)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->programService = $programService;
	}
	
	public function index(Project $project): Response
	{
		return $this->render('automation/index.html.twig', [
			'project' => $project,
			'automations' => $this->automationRepository->getAutomations($project),
		]);
	}
	
	public function edit(Request $request, Automation $automation): Response
	{
		$form = $this->createForm(AutomationType::class, $automation);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('automation', [
				'project' => $automation->getProject()->getId(),
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' => $this->generateUrl('automation', [
					'project' => $automation->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}
	
	public function cron(): Response
	{
		
		$this->getDoctrine()->getRepository(MetadataValue::class)->deleteMetadataValueOrphans();		
		$this->getDoctrine()->getRepository(CodificationValue::class)->deleteCodificationValueOrphans();
		
		$entityManager = $this->getDoctrine()->getManager();
		
		$nb_c = 0;
		$nb_ms = 0;
		$nb_md = 0;
		$nb_mv = 0;
		
		set_time_limit(0);
		
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			foreach ($this->getDoctrine()->getRepository(Codification::class)->getCodifications($project) as $codification) {
				
				if ($codification->isRegex()) {
					
					do {
						
						$restart = false;
						
						foreach ($codification->getCodificationValues()->getValues() as $cv1) {
							
							foreach ($this->getDoctrine()->getRepository(Document::class)->getDocumentsByProject($project) as $document) {
									
								foreach ($document->getCodificationValues()->getValues() as $cv2) {
									
									if ($cv1->getId() != $cv2->getId() && $cv1->getCodification()->getId() == $cv2->getCodification()->getId() && $cv1->getValue() == $cv2->getValue()) {
										$document->removeCodificationValue($cv2);
										$codification->removeCodificationValue($cv2);
										$document->addCodificationValue($cv1);
										$entityManager->persist($document);
										$restart = true;
										$nb_c++;
										break 3;
									}
								}
							}
						}
					} while ($restart);
					
				}
				
			}
		}
		
		
		/*
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			foreach ($this->getDoctrine()->getRepository(Metadata::class)->getMetadatas($project) as $metadata) {
				
				if ($metadata->isList() === false && $metadata->parentIsSerie()) {
					
					do {
						
						$restart = false;
						
						foreach ($metadata->getMetadataValues()->getValues() as $cv1) {
							
							foreach ($this->getDoctrine()->getRepository(Serie::class)->getSeries($project) as $serie) {
									
								foreach ($serie->getMetadataValues()->getValues() as $cv2) {
									
									if ($cv1->getId() != $cv2->getId() && $cv1->getMetadata()->getId() == $cv2->getMetadata()->getId() && $cv1->getValue() == $cv2->getValue()) {
										$serie->removeMetadataValue($cv2);
										$serie->removeMetadataValue($cv2);
										$serie->addMetadataValue($cv1);
										$entityManager->persist($serie);
										$restart = true;
										$nb_ms++;
										break 3;
									}
								}
							}
						}
					} while ($restart);
					
				}
				
			}
		}
		
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			foreach ($this->getDoctrine()->getRepository(Metadata::class)->getMetadatas($project) as $metadata) {
				
				if ($metadata->isList() === false && $metadata->parentIsDocument()) {
					
					do {
						
						$restart = false;
						
						foreach ($metadata->getMetadataValues()->getValues() as $cv1) {
							
							foreach ($this->getDoctrine()->getRepository(Document::class)->getDocumentsByProject($project) as $document) {
								
								foreach ($document->getMetadataValues()->getValues() as $cv2) {
									
									if ($cv1->getId() != $cv2->getId() && $cv1->getMetadata()->getId() == $cv2->getMetadata()->getId() && $cv1->getValue() == $cv2->getValue()) {
										$document->removeMetadataValue($cv2);
										$metadata->removeMetadataValue($cv2);
										$document->addMetadataValue($cv1);
										$entityManager->persist($document);
										$restart = true;
										$nb_md++;
										break 3;
									}
								}
							}
						}
					} while ($restart);
					
				}
				
			}
		}
		
		foreach ($this->getDoctrine()->getRepository(Project::class)->getAllProjects() as $project) {
			
			foreach ($this->getDoctrine()->getRepository(Metadata::class)->getMetadatas($project) as $metadata) {
				
				if ($metadata->isList() === false && $metadata->parentIsVersion()) {
					
					do {
						
						$restart = false;
						
						foreach ($metadata->getMetadataValues()->getValues() as $cv1) {
							
							foreach ($this->getDoctrine()->getRepository(Version::class)->getVersionsByProject($project) as $version) {
								
								foreach ($version->getMetadataValues()->getValues() as $cv2) {
									
									if ($cv1->getId() != $cv2->getId() && $cv1->getMetadata()->getId() == $cv2->getMetadata()->getId() && $cv1->getValue() == $cv2->getValue()) {
										dump($cv1, $cv2);
										$version->removeMetadataValue($cv2);
										$metadata->removeMetadataValue($cv2);
										$version->addMetadataValue($cv1);
										$entityManager->persist($version);
										$restart = true;
										$nb_mv++;
										break 3;
									}
								}
							}
						}
					} while ($restart);
					
				}
				
			}
		}
		*/
		
		$automations = $this->automationRepository->getAutomationsToRun();
		
		foreach ($automations as $automation) {
			switch ($automation->getRoute()) {
				case ProgramService::class . '::automation':
					
					$program = $this->getDoctrine()->getRepository(Program::class)->find($automation->getParameters()['program'] ?? 0);					
					if ($program === null) {
						continue;
					}
					
					$this->getDoctrine()->getRepository(Progress::class)->deleteProgressByProgramAndByDate($program, $automation->getNextRun());
					
					$interval = new \DateInterval('P' . $program->getParsedCode('option')['frequency'] . 'D');
					
					if (call_user_func_array(array($this->programService, 'automation'), [$program])) {
						
						$automation->setLastRun(new \DateTime('now'));
						$nextRun = clone $automation->getNextRun();
						while ($nextRun < (new \DateTime('now'))->add($interval)) {
							$automation->setNextRun($nextRun->add($interval));
						}
						$entityManager->persist($automation);
					}
					break;
			}
		}
		
		$entityManager->flush();
		dd('nb_c:' . $nb_c . "\nnb_ms:" . $nb_ms . "\nnb_md:" . $nb_md . "\nnb_mv:" . $nb_mv);
		return new Response();
	}
}
