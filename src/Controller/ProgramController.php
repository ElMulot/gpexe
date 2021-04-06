<?php

namespace App\Controller;

use App\Entity\Automation;
use App\Entity\Program;
use App\Entity\Project;
use App\Form\LauncherType;
use App\Form\ProgramType;
use App\Repository\AutomationRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProgressRepository;
use App\Repository\SerieRepository;
use App\Service\Code\ProgramCache;
use App\Service\FieldService;
use App\Service\ParseService;
use App\Service\ProgramService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;


class ProgramController extends AbstractController
{
	private $flashBag;
	
	private $translator;
		
	private $automationRepository;
	
	private $programRepository;
	
	private $progressRepository;
	
	private $serieRepository;
	
	private $parseService;
	
	private $programService;
	
	private $fieldService;
		
	public function __construct(SessionInterface $session, TranslatorInterface $translator, AutomationRepository $automationRepository, ProgramRepository $programRepository, ProgressRepository $progressRepository, SerieRepository $serieRepository, ParseService $parseService, ProgramService $programService, FieldService $fieldService, Security $security)
	{
		$this->flashBag = $session->getFlashBag();
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->programRepository = $programRepository;
		$this->progressRepository = $progressRepository;
		$this->serieRepository = $serieRepository;
		$this->parseService = $parseService;
		$this->programService = $programService;
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
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || $this->getUser()->getCompany()->isMainContractor() === false || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			$this->container->get('session')->getFlashBag()->clear();
			$this->programService->unload();
			
			switch ($program->getType()) {
				
				case Program::EXPORT:
				case Program::IMPORT:
				case Program::TASK:
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
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || $this->getUser()->getCompany()->isMainContractor() === false || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			switch ($program->getType()) {
				
				case Program::EXPORT:														//launch export
					$form = $this->createForm(LauncherType::class, $program);
					break;
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {	//launch import
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
					
				case Program::TASK:															//launch task
					$form = $this->createForm(LauncherType::class, $program);
					break;
					
				case Program::PROGRESS:														//launch progress
					if ($this->programService->preload($program, $request)) {
						return $this->redirectToRoute('program_load', [
							'program' => $program->getId(),
						]);
					} else {
						$this->addFlash('danger', 'Erreur interne');
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
						
					case Program::TASK:														//launch task
						if ($this->programService->preload($program, $request)) {
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
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || $this->getUser()->getCompany()->isMainContractor() === false || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			switch ($program->getType()) {
				
				case Program::EXPORT:														//launch export
					if ($this->programService->load($program) === false) {
						$this->programService->unload();
						return $this->redirectToRoute('program_preload', [
							'program' => $program->getId(),
						]);
					}
					return $this->render('program/load.html.twig', [
						'program' => $program,
					]);
					
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {				//launch import
						$this->programService->load($program);
						return $this->render('program/load.html.twig', [
							'program' => $program,
						]);
					} else {																			//check import
						if ($this->programService->load($program) === false) {
							$this->programService->unload();
							return $this->redirectToRoute('program_preload', [
								'program' => $program->getId(),
							]);
						}
						
						return $this->render('program/load.html.twig', [
							'program' => $program,
						]);
					}
					
				case Program::TASK:																		//launch task
					if ($this->programService->load($program) === false) {
						$this->programService->unload();
						return $this->redirectToRoute('program_preload', [
							'program' => $program->getId(),
						]);
					}
					return $this->render('program/load.html.twig', [
						'program' => $program,
					]);
					
				case Program::PROGRESS:																	//launch progress
					if ($this->programService->load($program) === false) {
						$this->addFlash('danger', 'Erreur interne');
						return $this->render('program/error.html.twig');
					}
					
					$serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);
					
					return new JsonResponse([
						'series' => $this->serieRepository->getSeriesByProjectAsArray($project),
						'current_progress' => $this->programService->progress($program),
						'progress' => $serializer->normalize($this->progressRepository->getProgressAsArray($program)),
					]);
					
				default:
					$this->programService->unload();
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
			
			switch ($program->getType()) {
				
				case Program::EXPORT:
					$filePath = $this->programService->getCache()->getParameter('file_path');
					$pathParts = pathinfo($filePath);
					
					$this->programService->unload();
					return $this->render('program/export.html.twig', [
						'program' => $program,
						'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
					]);
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {					//launch import
						
						$this->programService->unload();
						return $this->render('program/import.html.twig', [
							'program' => $program,
						]);
					} else {																	//check import
						$filePath = $this->programService->getCache()->getParameter('file_path');
						$pathParts = pathinfo($filePath);
						
						$this->programService->getCache()->setOption('ready_to_persist', true);
						return $this->render('program/check.html.twig', [
							'program' => $program,
							'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
						]);
					}
					
				case Program::TASK:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {					//launch task
						
						$this->programService->unload();
						return $this->render('program/preload.html.twig', [
							'program' => $program,
						]);
					} else {																	//check task
						$this->programService->getCache()->setOption('ready_to_persist', true);
						return $this->render('program/check.html.twig', [
							'program' => $program,
						]);
					}
					
					$this->programService->unload();
					return $this->render('program/preload.html.twig', [
						'program' => $program,
					]);
					
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
		
		switch ($this->programService->getCache()->getStatus()) {
			case ProgramCache::LOAD:
				$redirect = ProgramCache::LOAD;
				break;
				
			case ProgramCache::NEW_BATCH:
				$success = $this->programService->execute($program);
				if ($success) {
					$redirect = $this->programService->getCache()->getStatus();
				} else {
					$this->addFlash('danger', 'Erreur interne');
					$redirect = ProgramCache::PRELOAD;
				}
				break;
				
			case ProgramCache::COMPLETED:
				$redirect = ProgramCache::COMPLETED;
				break;
				
			default:
				$redirect = ProgramCache::PRELOAD;
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
			
			if ($request->request->has('program')) {														//validation du type de programme et affichage du formulaire principal
				
				if ($type = $request->request->get('program')['type'] ?? null) {
					
					$program = new Program();
					$program->setEnabled(true);
					
					switch ($type) {
						case Program::EXPORT:
							$program->setCode($this->parseService->getValidatedCode('type: export'));
							break;
						case Program::IMPORT:
							$program->setCode($this->parseService->getValidatedCode('type: import'));
							break;
						case Program::TASK:
							$program->setCode($this->parseService->getValidatedCode('type: task'));
							break;
						case Program::PROGRESS:
							$program->setCode($this->parseService->getValidatedCode('type: progress'));
							break;
						default:
							$form = $this->createForm(ProgramType::class, null);
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
					
				} elseif ($request->request->get('program')['name']) {				//validation du formulaire principal
					
					$program = new Program();
					$form = $this->createForm(ProgramType::class, $program);
					
				}
				
			} else {																//affichage du type de programme
				
				$form = $this->createForm(ProgramType::class, null);
				
			}
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				$program->setProject($project);
				$program->setEnabled(true);
				$program->setCreatedBy($this->getUser());
				
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->persist($program);
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
				
// 				//delete automation
// 				if ($program->getType() === Program::PROGRESS) {
// 					if ($automation = $this->automationRepository->getAutomationByRouteAndByParameters(ProgramService::class . '::automation', ['program' => $program->getId()])) {
// 						$entityManager->remove($automation);
// 					}
// 				}
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
