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
use App\Helpers\Date;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Input\ArrayInput;

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
