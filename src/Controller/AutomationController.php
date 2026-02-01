<?php

namespace App\Controller;

use App\Entity\Automation;
use App\Entity\Project;
use App\Form\AutomationType;
use App\Repository\AutomationRepository;
use App\Service\ProgramService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class AutomationController extends AbstractController
{
	
	private $automationRepository;

	private $doctrine;
	
	private $translator;

	public function __construct(AutomationRepository $automationRepository, ManagerRegistry $doctrine, TranslatorInterface $translator)
	{
		$this->automationRepository = $automationRepository;	
		$this->doctrine = $doctrine;
		$this->translator = $translator;
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
			
			$entityManager = $this->doctrine->getManager();
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
