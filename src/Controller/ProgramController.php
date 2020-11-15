<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Project;
use App\Entity\Automation;
use App\Entity\Program;
use App\Entity\Progress;
use App\Form\ProgramType;
use App\Form\LauncherType;
use App\Repository\AutomationRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProgressRepository;
use App\Repository\SerieRepository;
use App\Service\ParseService;
use App\Service\ProgramService;
use App\Service\CacheService;
use App\Service\FieldService;
use Symfony\Component\Security\Core\Authorization\Voter\AuthenticatedVoter;
use Symfony\Component\Validator\Mapping\AutoMappingStrategy;
use Symfony\Component\HttpFoundation\JsonResponse;


class ProgramController extends AbstractController
{
	private $translator;
	
	private $automationRepository;
	
	private $programRepository;
	
	private $progressRepository;
	
	private $serieRepository;
	
	private $parseService;
	
	private $programService;
	
	private $cacheService;
	
	private $fieldService;
	
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, ProgramRepository $programRepository, ProgressRepository $progressRepository, SerieRepository $serieRepository, ParseService $parseService, ProgramService $programService, CacheService $cacheService, FieldService $fieldService)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->programRepository = $programRepository;
		$this->progressRepository = $progressRepository;
		$this->serieRepository = $serieRepository;
		$this->parseService = $parseService;
		$this->programService = $programService;
		$this->cacheService = $cacheService;
		$this->fieldService = $fieldService;
	}
	
	public function index(Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Programs for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Program::class,
			'entities' => $this->programRepository->getPrograms($project),
		]);
	}
	
	public function dashboard(Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$this->container->get('session')->getFlashBag()->clear();
		
		switch ($program->getType()) {
			
			case Program::EXPORT:
			case Program::IMPORT:
				$this->programService->unload($program);
				return $this->render('program/dashboard.html.twig', [
					'program' => $program,
					'route_back' =>  $this->generateUrl('project_view', [
						'project' => $project->getId(),
					]),
				]);
				
			case Program::PROGRESS:
				return $this->render('program/progress.html.twig', [
					'program' => $program,
					'route_back' =>  $this->generateUrl('project_view', [
						'project' => $project->getId(),
					]),
				]);
				
			default:
				$this->addFlash('danger', 'Programme invalide');
				return $this->redirectToRoute('project_view', [
					'project' => $project->getId(),
				]);
		}
	}
	
	public function preload(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
			
		switch ($program->getType()) {
			
			case Program::EXPORT:													//launch export
				$form = $this->createForm(LauncherType::class, $program);
				break;
				
			case Program::IMPORT:
				if ($this->cacheService->get('program.ready_to_persist')) {			//launch import
					if ($this->programService->preload($program, $request)) {
						return $this->render('program/preload.html.twig', [
							'program' => $program,
						]);
					} else {
						$this->addFlash('danger', 'Erreur interne');
						$form = $this->createForm(LauncherType::class, $program);
					}
				} else {																//check import
					$form = $this->createForm(LauncherType::class, $program);
				}
				break;
				
			default:																	//error
				$this->addFlash('danger', 'Programme invalide');
				return $this->render('program/error.html.twig');
				
		}
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			switch ($program->getType()) {
				
				case Program::EXPORT:													//launch export
					if ($this->programService->preload($program, $request)) {
						return $this->render('program/preload.html.twig', [
							'program' => $program,
						]);
					} else {
						$this->addFlash('danger', 'Erreur interne');
					}
					break;
				
				case Program::IMPORT:													//check import
					$file = $form->get('file')->getData();
					if ($file === null) {
						$this->addFlash('danger', 'Aucun fichier sélectionné');
					} elseif ($this->programService->preload($program, $request, $file)) {
						return $this->render('program/preload.html.twig', [
							'program' => $program,
						]);
					} else {
						$this->addFlash('danger', 'Erreur interne');
					}
					break;
			}
		}
			
		return $this->render('program/launcher.html.twig', [
			'form' => $form->createView(),
			'program' => $program,
		]);
			
	}
	
	public function load(Program $program): Response
	{
		
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		switch ($program->getType()) {
			
			case Program::EXPORT:													//launch export
				if ($this->programService->load($program) === false) {
					$this->programService->unload($program);
					return $this->redirectToRoute('program_preload', [
						'program' => $program->getId(),
					]);
				}
				return $this->render('program/load.html.twig', [
					'program' => $program,
				]);
				
			
			case Program::IMPORT:
				if ($this->cacheService->get('program.ready_to_persist')) {			//launch import
					$this->programService->load($program);
					return $this->render('program/load.html.twig', [
						'program' => $program,
					]);
				} else {																//check import
					if ($this->programService->load($program) === false) {
						$this->programService->unload($program);
						return $this->redirectToRoute('program_preload', [
							'program' => $program->getId(),
						]);
					}
					
					return $this->render('program/load.html.twig', [
						'program' => $program,
					]);
				}
			
			case Program::PROGRESS:
				if ($this->programService->load($program) === false) {
					$this->addFlash('danger', 'Erreur interne');
					return $this->render('program/error.html.twig');
				}
				return new JsonResponse([
					'series' => $this->serieRepository->getSeriesArray($project),
					'current_progress' => $this->programService->progress($program),
					'progress' => $this->progressRepository->getProgressArray($program),
				]);
				
			default:
				$this->programService->unload($program);
				return $this->redirectToRoute('program_preload', [
					'program' => $program->getId(),
				]);
		}
	}
	
	public function completed(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		switch ($program->getType()) {
			
			case Program::EXPORT:
				$filePath = $this->cacheService->get('program.file_path');
				$this->programService->unload($program);
				return $this->render('program/export.html.twig', [
					'program' => $program,
					'file_path' => $filePath,
				]);
			
			case Program::IMPORT:
				if ($this->cacheService->get('program.ready_to_persist')) {				//launch import
					
					$this->programService->unload($program);
					return $this->render('program/import.html.twig', [
						'program' => $program,
					]);
				} else {																	//check import
					$filePath = $this->cacheService->get('program.file_path');
					$pathParts = pathinfo($filePath);
					
					$this->cacheService->set('program.ready_to_persist', true);
					return $this->render('program/check.html.twig', [
						'program' => $program,
						'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
					]);
				}
				
			default:
				$this->addFlash('danger', 'Programme invalide');
				return $this->redirectToRoute('project_view', [
					'project' => $project->getId(),
				]);
				
		}
	}
	
	public function console(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		switch ($this->cacheService->get('program.state')) {
			case 'new_batch':
				if ($program->isTypeImport()) {
					$success = $this->programService->import($program);
				} elseif ($program->isTypeExport())  {
					$success = $this->programService->export($program);
				}
				
				if ($success) {
					$redirect = $this->cacheService->get('program.state');
				} else {
					$this->addFlash('danger', 'Erreur interne');
					$redirect = 'preload';
				}
				break;
			
			case 'load':
				$redirect = 'load';
				break;
				
			default:
				$redirect = 'preload';
		}
		
		return $this->render('program/console.html.twig', [
			'program' => $program,
			'redirect' => $redirect,
		]);
		
	}
	
	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$program = new Program();
		$form = $this->createForm(ProgramType::class, $program, [
			'page' => ($request->request->get('submit') === null)?1:2,
		]);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			if ($form->has('type')) {
				
				$program = new Program();
				$program->setEnabled(true);
				
				switch ($form->get('type')->getData()) {
					case Program::EXPORT:
						$program->setCode($this->parseService->getValidatedCode('type: export'));
						break;
					case Program::IMPORT:
						$program->setCode($this->parseService->getValidatedCode('type: import'));
						break;
					case Program::PROGRESS:
						$program->setCode($this->parseService->getValidatedCode('type: progress'));
						break;
					default:
						$view = $form->createView();
						return $this->render('generic/form.html.twig', [
							'form' => $view
						]);
					}
					
					$form = $this->createForm(ProgramType::class, $program);
					
					$view = $form->createView();
					$fields = $this->fieldService->getFields($project);
					
					return $this->render('program/form.html.twig', [
						'route_back' =>  $this->generateUrl('program', [
							'project' => $project->getId(),
						]),
						'form' => $view,
						'fields' => $fields,
					]);
					
				} else {
					
					$program->setProject($project);
					$program->setEnabled(true);
					$program->setCreatedBy($this->getUser());
					
					$entityManager = $this->getDoctrine()->getManager();
					$entityManager->persist($program);
					
					//create automation
					if ($program->getType() === Program::PROGRESS) {
						$options = $program->getParsedCode('options');
						$nextRun = (new \DateTime('now'))->add(new \DateInterval('P' . $options['frequency'] . 'D'));
						$automation = new Automation;
						$automation->setEnabled($program->getEnabled());
						$automation->setNextRun($nextRun);
						$automation->setRoute(ProgramService::class . '::automation');
						$automation->setParameters(['program' => $program->getId()]);
						$automation->setProject($project);
						$entityManager->persist($automation);
					}
					
					$entityManager->flush();
					
					$this->addFlash('success', 'Nouveau programme créé');
					
					if ($request->request->get('submit') == 'save') {
						return $this->redirectToRoute('program_edit', [
							'program' => $program->getId(),
						]);
					} else {
						return $this->redirectToRoute('program', [
							'project' => $project->getId()
						]);
					}
				}
			
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'form' => $view
			]);
		}
	}
	
	public function edit(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$fields = $this->fieldService->getFields($project);
		$form = $this->createForm(ProgramType::class, $program);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$program->setLastModifiedBy($this->getUser());
			
			$entityManager = $this->getDoctrine()->getManager();
			
			//update automation
			if ($program->getType() === Program::PROGRESS) {
				$options = $program->getParsedCode('option');
				$nextRun = (new \DateTime('now'))->add(new \DateInterval('P' . $options['frequency'] . 'D'));
				
				if ($automation = $this->automationRepository->getAutomationByRouteAndByParameters(ProgramService::class . '::automation', ['program' => $program->getId()])) {
					$automation->setEnabled($program->getEnabled());
					$automation->setNextRun($nextRun);
					$entityManager->persist($automation);
				} else {
					$automation = new Automation;
					$automation->setEnabled($program->getEnabled());
					$automation->setNextRun($nextRun);
					$automation->setRoute(ProgramService::class . '::automation');
					$automation->setParameters(['program' => $program->getId()]);
					$automation->setProject($project);
					$entityManager->persist($automation);
				}
			}
			
			$entityManager->flush();
			$this->addFlash('success', 'Programme mis à jour');
			
			if ($request->request->get('submit') == 'save') {
				$view = $form->createView();
				return $this->render('program/form.html.twig', [
					'route_back' =>  $this->generateUrl('program', [
						'project' => $project->getId(),
					]),
					'form' => $view,
					'fields' => $fields,
				]);
			} else {
				return $this->redirectToRoute('program', [
					'project' => $project->getId()
				]);
			}
		} else {
			$view = $form->createView();
			return $this->render('program/form.html.twig', [
				'route_back' =>  $this->generateUrl('program', [
					'project' => $project->getId(),
				]),
				'form' => $view,
				'fields' => $fields,
			]);
		}
	}
	
	public function delete(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($program);
			
			//delete automation
			if ($program->getType() === Program::PROGRESS) {				
				if ($automation = $this->automationRepository->getAutomationByRouteAndByParameters(ProgramService::class . '::automation', ['program' => $program->getId()])) {
					$entityManager->remove($automation);
				}
			}
			$entityManager->flush();
			
			$this->addFlash('success', 'Programme supprimé');
			return $this->redirectToRoute('program', [
				'project' => $project->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('program', [
					'project' => $project->getId(),
				]),
				'entities' => [$program],
			]);
		}
		
		
	}
}
