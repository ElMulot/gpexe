<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\Automation;
use App\Form\AutomationType;
use App\Service\ProgramService;
use App\Repository\AutomationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
	
	/**
	 * @Route("/project/{project}/automation", name="automation", requirements={"project"="\d+"})
	 */
	public function index(Project $project): Response
	{
		return $this->renderForm('automation/index.html.twig', [
			'project' => $project,
			'automations' => $this->automationRepository->getAutomations($project),
		]);
	}
	
	/**
	 * @Route("/project/automation/{automation}/edit", name="automation_edit", requirements={"automation"="\d+"})
	 */
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
			return $this->renderForm('generic/form.html.twig', [
				'route_back' => $this->generateUrl('automation', [
					'project' => $automation->getProject()->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/automation/cron", name="automation_cron")
	 */
	public function cron(KernelInterface $kernel): Response
	{
		
		$application = new Application($kernel);
		$application->setAutoExit(false);
		
		$input = new ArrayInput([
			'command' => 'app:cron',
		]);
		
		$output = new BufferedOutput();
		$application->run($input, $output);
		
		return new Response($output->fetch());
	}
}
