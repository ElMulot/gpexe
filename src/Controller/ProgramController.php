<?php

namespace App\Controller;

use App\Entity\Program;
use App\Entity\Project;
use App\Form\ProgramType;
use App\Form\LauncherType;
use App\Service\FieldService;
use App\Service\ParseService;
use App\Service\ProgramService;
use App\Service\Code\ProgramCache;
use App\Repository\SerieRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProgressRepository;
use App\Repository\AutomationRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProgramController extends AbstractController
{
	
	private $translator;
	
	private $automationRepository;
	
	private $programRepository;
	
	private $progressRepository;
	
	private $serieRepository;
	
	private $parseService;
	
	private $programService;
	
	private $fieldService;
		
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, ProgramRepository $programRepository, ProgressRepository $progressRepository, SerieRepository $serieRepository, ParseService $parseService, ProgramService $programService, FieldService $fieldService, Security $security)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->programRepository = $programRepository;
		$this->progressRepository = $progressRepository;
		$this->serieRepository = $serieRepository;
		$this->parseService = $parseService;
		$this->programService = $programService;
		$this->fieldService = $fieldService;
	}
	
	/**
	 * @Route("/project/{project}/program", name="program", requirements={"project"="\d+"})
	 */
	public function index(Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
				return $this->redirectToRoute('project');
			}
			
			return $this->renderForm('generic/list.html.twig', [
				'header' => $this->translator->trans('Programs for') . ' : ' . $project->getName(),
				'route_back' =>  $this->generateUrl('project_view', [
					'project' => $project->getId(),
				]),
				'class' => Program::class,
				'entities' => $this->programRepository->getPrograms($project),
			]);
	}
	
	/**
	 * @Route("/project/program/{program}/dashboard", name="program_dashboard", requirements={"program"="\d+"})
	 */
	public function dashboard(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || $this->getUser()->getCompany()->isMainContractor() === false || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			$request->getSession()->getFlashBag()->clear();
			$this->programService->unload();
			
			switch ($program->getType()) {
				
				case Program::EXPORT:
				case Program::IMPORT:
				case Program::TASK:
					return $this->renderForm('program/dashboard.html.twig', [
						'program' => $program,
						'route_back' =>  $this->generateUrl('project_view', [
							'project' => $project->getId(),
						]),
					]);
					
				case Program::PROGRESS:
					return $this->renderForm('program/progress.html.twig', [
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
	
	/**
	 * @Route("/project/program/{program}/preload", name="program_preload", requirements={"program"="\d+"})
	 */
	public function preload(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			switch ($program->getType()) {
				
				case Program::EXPORT:														//launch export
					$form = $this->createForm(LauncherType::class, $program);
					break;
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist') == true) {	//launch import
						try {
							$this->programService->preload($program, $request);
							return $this->renderForm('program/preload.html.twig', [
								'program' => $program,
							]);
						} catch (\Error $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
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
					try {
						$this->programService->preload($program, $request);
						return $this->redirectToRoute('program_load', [
							'program' => $program->getId(),
							'series' => $request->query->get('series'),
						]);
					} catch (\Error $e) {
						$this->addFlash('danger', $e->getMessage());
						$this->programService->unload();
					}
					break;
					
				default:																	//error
					$this->addFlash('danger', 'Erreur : programme invalide');
					return $this->renderForm('program/error.html.twig');
					
			}
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				switch ($program->getType()) {
					
					case Program::EXPORT:													//launch export
						try {
							$this->programService->preload($program, $request);
							return $this->renderForm('program/preload.html.twig', [
								'program' => $program,
							]);
						} catch (\Exception $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
							$form = $this->createForm(LauncherType::class, $program);
						}
						break;
						
					case Program::IMPORT:													//check import
						$file = $form->get('file')->getData();
						try {
							$this->programService->preload($program, $request, $file);
							return $this->renderForm('program/preload.html.twig', [
								'program' => $program,
							]);
						} catch (\Exception $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
							$form = $this->createForm(LauncherType::class, $program);
						}
						break;
						
					case Program::TASK:														//launch task
						try {
							$this->programService->preload($program, $request);
							return $this->renderForm('program/preload.html.twig', [
								'program' => $program,
							]);
						} catch (\Exception $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
							$form = $this->createForm(LauncherType::class, $program);
						}
						break;
				}
			}
			
			return $this->renderForm('program/launcher.html.twig', [
				'form' => $form,
				'program' => $program,
			]);
			
	}
	
	/**
	 * @Route("/project/program/{program}/load", name="program_load", requirements={"program"="\d+"})
	 */
	public function load(Request $request, Program $program): Response
	{
		$project = $program->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
			($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false || (
				$this->getUser()->getCompany()->isMainContractor() === false && array_intersect(
					array_column(
						$this->serieRepository->getSeriesByIdAsArray(
							$this->getUser()->getCompany()->getSeries()->getValues()
						), 'id'
					), $request->query->get('series')) == false
				) || $program->isTypeProgress() === false)) {
				return $this->redirectToRoute('project');
			}
			
			switch ($program->getType()) {
				
				case Program::EXPORT:																	//launch export
					try {
						$this->programService->load($program);
						return $this->renderForm('program/load.html.twig', [
							'program' => $program,
						]);
					} catch (\Exception $e) {
						$this->addFlash('danger', $e->getMessage());
						$this->programService->unload();
						return $this->redirectToRoute('program_preload', [
							'program' => $program->getId(),
						]);
					}
					
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist') == true) {		//launch import
						
						try {
							$this->programService->load($program);
							return $this->renderForm('program/load.html.twig', [
								'program' => $program,
							]);
						} catch (\Exception $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
							return $this->redirectToRoute('program_preload', [
								'program' => $program->getId(),
							]);
						}
						
					} else {																			//check import
						
						try {
							$this->programService->load($program);
							return $this->renderForm('program/load.html.twig', [
								'program' => $program,
							]);
						} catch (\Exception $e) {
							$this->addFlash('danger', $e->getMessage());
							$this->programService->unload();
							return $this->redirectToRoute('program_preload', [
								'program' => $program->getId(),
							]);
						}
						
					}
					
				case Program::TASK:																		//launch task
					try {
						$this->programService->load($program);
						return $this->renderForm('program/load.html.twig', [
							'program' => $program,
						]);
					} catch (\Exception $e) {
						$this->addFlash('danger', $e->getMessage());
						$this->programService->unload();
						return $this->redirectToRoute('program_preload', [
							'program' => $program->getId(),
						]);
					}
					
				case Program::PROGRESS:																	//launch progress
					try {
						$this->programService->load($program);
						$serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);
						if ($series = $request->query->get('series')) {
							return new JsonResponse([
								'series' => $this->serieRepository->getSeriesByIdAsArray($series),
								'current_progress' => $this->programService->progress($program, $series),
								'current_progress' => [],
								'progress' => $serializer->normalize($this->progressRepository->getProgressAsArray($program, $series)),
							]);
						} else {
							return new JsonResponse([
								'series' => $this->serieRepository->getSeriesByProjectAsArray($project),
								'current_progress' => $this->programService->progress($program),
								'progress' => $serializer->normalize($this->progressRepository->getProgressAsArray($program)),
							]);
						}
					} catch (\Exception $e) {
						$this->addFlash('danger', $e->getMessage());
						$this->programService->unload();
						return $this->renderForm('program/error.html.twig');
					}
					
				default:
					
					$this->programService->unload();
					return $this->redirectToRoute('program_preload', [
						'program' => $program->getId(),
					]);
			}
	}
	
	/**
	 * @Route("/project/program/{program}/completed", name="program_completed", requirements={"program"="\d+"})
	 */
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
					return $this->renderForm('program/export.html.twig', [
						'program' => $program,
						'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
					]);
					
				case Program::IMPORT:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {					//launch import
						
						$this->programService->unload();
						return $this->renderForm('program/import.html.twig', [
							'program' => $program,
						]);
						
					} else {																	//check import
						
						$filePath = $this->programService->getCache()->getParameter('file_path');
						$pathParts = pathinfo($filePath);
						
						$this->programService->getCache()->setOption('ready_to_persist', true);
						return $this->renderForm('program/check.html.twig', [
							'program' => $program,
							'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
						]);
						
					}
					
				case Program::TASK:
					if ($this->programService->getCache()->getOption('ready_to_persist')) {					//launch task
						
						$this->programService->unload();
						return $this->renderForm('program/preload.html.twig', [
							'program' => $program,
						]);
						
					} else {																	//check task
						
						$this->programService->getCache()->setOption('ready_to_persist', true);
						return $this->renderForm('program/check.html.twig', [
							'program' => $program,
						]);
						
					}
					
					$this->programService->unload();
					return $this->renderForm('program/preload.html.twig', [
						'program' => $program,
					]);
					
				default:
					$this->addFlash('danger', 'Programme invalide');
					return $this->redirectToRoute('project_view', [
						'project' => $project->getId(),
					]);
					
			}
	}
	
	/**
	 * @Route("/project/program/{program}/console", name="program_console", requirements={"program"="\d+"})
	 */
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
				try {
					$this->programService->execute($program);
					$redirect = $this->programService->getCache()->getStatus();
				} catch (\Exception $e) {
					$this->addFlash('danger', $e->getMessage());
					$redirect = ProgramCache::PRELOAD;
				}
				break;
				
			case ProgramCache::COMPLETED:
				$redirect = ProgramCache::COMPLETED;
				break;
				
			default:
				$redirect = ProgramCache::PRELOAD;
		}
		
		return $this->renderForm('program/console.html.twig', [
			'program' => $program,
			'redirect' => $redirect,
		]);
			
	}
	
	/**
	 * @Route("/project/{project}/program/new", name="program_new", requirements={"project"="\d+"})
	 */
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
							return $this->renderForm('generic/form.html.twig', [
								'form' => $form
							]);
					}
					
					$form = $this->createForm(ProgramType::class, $program);
					
					$fields = $this->fieldService->getFields($project);
					
					return $this->renderForm('program/form.html.twig', [
						'route_back' =>  $this->generateUrl('program', [
							'project' => $project->getId(),
						]),
						'form' => $form,
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
				$program->setLastModifiedBy($this->getUser());
				
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
				return $this->renderForm('generic/form.html.twig', [
					'form' => $form
				]);
			}
	}
	
	/**
	 * @Route("/project/program/{program}/edit", name="program_edit", requirements={"program"="\d+"})
	 */
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
					return $this->renderForm('program/form.html.twig', [
						'route_back' =>  $this->generateUrl('program', [
							'project' => $project->getId(),
						]),
						'form' => $form,
						'fields' => $fields,
					]);
				} else {
					return $this->redirectToRoute('program', [
						'project' => $project->getId()
					]);
				}
			} else {
				return $this->renderForm('program/form.html.twig', [
					'route_back' =>  $this->generateUrl('program', [
						'project' => $project->getId(),
					]),
					'form' => $form,
					'fields' => $fields,
				]);
			}
	}
	
	/**
	 * @Route("/project/program/{program}/delete", name="program_delete", methods={"GET", "DELETE"}, requirements={"program"="\d+"})
	 */
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
				$entityManager->flush();
				
				$this->addFlash('success', 'Programme supprimé');
				return $this->redirectToRoute('program', [
					'project' => $project->getId()
				]);
			} else {
				return $this->renderForm('generic/delete.html.twig', [
					'route_back' =>  $this->generateUrl('program', [
						'project' => $project->getId(),
					]),
					'entities' => [$program],
				]);
			}
			
			
	}
}
