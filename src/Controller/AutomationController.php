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
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;

class AutomationController extends AbstractController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine, private readonly AutomationRepository $automationRepository, private readonly ProgramService $programService)
	{
	}
	
	#[Route(path: '/project/{project}/automation', name: 'automation', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		return $this->renderForm('automation/index.html.twig', [
			'project' => $project,
			'automations' => $this->automationRepository->getAutomations($project),
		]);
	}
	
	#[Route(path: '/project/automation/{automation}/edit', name: 'automation_edit', requirements: ['automation' => '\d+'])]
	public function edit(Request $request, Automation $automation) : Response
	{
		$form = $this->createForm(AutomationType::class, $automation);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('automation', ['project' => $automation->getProject()->getId()]),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}
	
	#[Route(path: '/automation/cron', name: 'automation_cron')]
	public function cron(KernelInterface $kernel) : Response
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
