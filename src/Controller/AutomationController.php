<?php

namespace App\Controller;

use App\Entity\Automation;
use App\Entity\Program;
use App\Entity\Project;
use App\Form\AutomationType;
use App\Repository\AutomationRepository;
use App\Service\ProgramService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Repository\ProgramRepository;

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
		$entityManager = $this->getDoctrine()->getManager();
		$automations = $this->automationRepository->getAutomationsToRun();
		
		foreach ($automations as $automation) {
			switch ($automation->getRoute()) {
				case ProgramService::class . '::automation':
					
					$program = $this->getDoctrine()->getRepository(Program::class)->find($automation->getParameters()['program'] ?? 0);					
					if ($program === null) {
						continue;
					}
					
					if (call_user_func_array(array($this->programService, 'automation'), [$program])) {
						$automation->setNextRun($automation->getLastRun()->add(new \DateInterval('P' . $program->getParsedCode('option')['frequency'] . 'D')));
						$automation->setLastRun(new \DateTime('now'));
						$entityManager->persist($automation);
					}
					break;
			}
		}
		
		$entityManager->flush();
		return new Response();
	}
}
