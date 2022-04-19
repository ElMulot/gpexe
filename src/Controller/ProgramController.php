<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Program;
use App\Entity\Project;
use App\Form\ProgramType;
use App\Form\LauncherType;
use App\Service\FieldService;
use App\Service\ParseService;
use App\Service\ProgramService;
use App\Service\Code\ProgramCache;
use App\Repository\SerieRepository;
use App\Entity\Enum\ProgramTypeEnum;
use App\Repository\ProgramRepository;
use App\Repository\ProgressRepository;
use App\Repository\AutomationRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;


class ProgramController extends AbstractController
{
	
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine, private readonly AutomationRepository $automationRepository, private readonly ProgramRepository $programRepository, private readonly ProgressRepository $progressRepository, private readonly SerieRepository $serieRepository, private readonly ParseService $parseService, private readonly ProgramService $programService, private readonly FieldService $fieldService, Security $security)
	{
	}
	
	#[Route(path: '/project/{project}/program', name: 'program', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SHOW_PROGRAM', $project);

		return $this->renderForm('generic/list.html.twig', [
			'title' => $this->translator->trans('Programs for') . ' : ' . $project->getName(),
			'class' => Program::class,
			'entities' => $this->programRepository->getPrograms($project),
		]);
	}
	
	#[Route(path: '/project/program/{program}/dashboard', name: 'program_dashboard', requirements: ['program' => '\d+'])]
	public function dashboard(Request $request, FlashBagInterface $flashBag, Program $program) : Response
	{
		$project = $program->getProject();
		
		if ($this->isGranted('SHOW_PROGRAM', $project) === false && 
			($this->isGranted('SHOW_PROGRESS_PROGRAM', $project) === false || $program->isTypeProgress() === false)) {
			return $this->redirectToRoute('project');
		}

		$flashBag->clear();
		$this->programService->unload();
		switch ($program->getType()) {
				
				case ProgramTypeEnum::EXPORT:
				case ProgramTypeEnum::IMPORT:
				case ProgramTypeEnum::TASK:
					return $this->renderForm('program/dashboard.html.twig', [
						'program' => $program,
						'route_back' =>  $this->generateUrl('project', [
							'project' => $project->getId(),
						]),
					]);
					
				case ProgramTypeEnum::PROGRESS:
					return $this->renderForm('program/progress.html.twig', [
						'program' => $program,
						'route_back' =>  $this->generateUrl('project', [
							'project' => $project->getId(),
						]),
					]);
					
				default:
					$this->addFlash('danger', 'Programme invalide');
					return $this->redirectToRoute('project', [
						'project' => $project->getId(),
					]);
			}
	}
	
	#[Route(path: '/project/program/{program}/preload', name: 'program_preload', requirements: ['program' => '\d+'])]
	public function preload(Request $request, Program $program) : Response
	{
		$form = null;
		$project = $program->getProject();

		if ($this->isGranted('EDIT_PROGRAM', $project) === false && 
			($this->isGranted('SHOW_PROGRESS_PROGRAM') === false || $program->isTypeProgress() === false) &&
			($this->isGranted('SHOW_PROJECT', $project) === false || $program->isTypeProgress() === false || $this->isUserAttachedToSeries($request->query->get('series')) === false)) {
			return $this->redirectToRoute('project');
		}

		switch ($program->getType()) {
				
				case ProgramTypeEnum::EXPORT:														//launch export
					$form = $this->createForm(LauncherType::class, $program);
					break;
					
				case ProgramTypeEnum::IMPORT:
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
					
				case ProgramTypeEnum::TASK:															//launch task
					$form = $this->createForm(LauncherType::class, $program);
					break;
					
				case ProgramTypeEnum::PROGRESS:														//launch progress
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
					
					case ProgramTypeEnum::EXPORT:													//launch export
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
						
					case ProgramTypeEnum::IMPORT:													//check import
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
						
					case ProgramTypeEnum::TASK:														//launch task
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
	
	// if ($this->isGranted('ROLE_ADMIN') === false &&
	// 	($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false) &&
	// 	($this->isGranted('ROLE_USER') === false || $project->hasUser($this->getUser()) === false ||
	//  ($this->getUser()->getCompany()->isMainContractor() === false &&  $this->isUserAttachedToSeries() === false) || 
	//  $program->isTypeProgress() === false)) {

	#[Route(path: '/project/program/{program}/load', name: 'program_load', requirements: ['program' => '\d+'])]
	public function load(Request $request, Program $program) : Response
	{
		$project = $program->getProject();
		
		if ($this->isGranted('EDIT_PROGRAM', $project) === false && 
			($this->isGranted('SHOW_PROGRESS_PROGRAM') === false || $program->isTypeProgress() === false) &&
			($this->isGranted('SHOW_PROJECT', $project) === false || $program->isTypeProgress() === false || $this->isUserAttachedToSeries($request->query->get('series')) === false)) {
			return $this->redirectToRoute('project');
		}

		switch ($program->getType()) {
				
				case ProgramTypeEnum::EXPORT:																	//launch export
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
					
					
				case ProgramTypeEnum::IMPORT:
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
					
				case ProgramTypeEnum::TASK:																		//launch task
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
					
				case ProgramTypeEnum::PROGRESS:																	//launch progress
					try {
						$this->programService->load($program);
						$serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);
						
						/** @var array $series */
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
	
	#[Route(path: '/project/program/{program}/completed', name: 'program_completed', requirements: ['program' => '\d+'])]
	public function completed(Request $request, Program $program) : Response
	{
		$project = $program->getProject();

		if ($this->isGranted('SHOW_PROGRAM', $project) === false && 
			($this->isGranted('SHOW_PROGRESS_PROGRAM', $project) === false || $program->isTypeProgress() === false)) {
			return $this->redirectToRoute('project');
		}

		switch ($program->getType()) {
				
				case ProgramTypeEnum::EXPORT:
					$filePath = $this->programService->getCache()->getParameter('file_path');
					$pathParts = pathinfo($filePath);
					
					$this->programService->unload();
					return $this->renderForm('program/export.html.twig', [
						'program' => $program,
						'file_path' => $this->getParameter('uploads_directory') . '/' . $pathParts['basename'],
					]);
					
				case ProgramTypeEnum::IMPORT:
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
					
				case ProgramTypeEnum::TASK:
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
					return $this->redirectToRoute('project', [
						'project' => $project->getId(),
					]);
					
			}
	}
	
	#[Route(path: '/project/program/{program}/console', name: 'program_console', requirements: ['program' => '\d+'])]
	public function console(Request $request, Program $program) : Response
	{
		$project = $program->getProject();

		if ($this->isGranted('SHOW_PROGRAM', $project) === false && 
			($this->isGranted('SHOW_PROGRESS_PROGRAM', $project) === false || $program->isTypeProgress() === false)) {
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
	
	#[Route(path: '/project/{project}/program/new', name: 'program_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('EDIT_PROGRAM', $project);

		$form = null;
		$program = null;

		if ($request->request->has('program')) {														//validation du type de programme et affichage du formulaire principal
				
				if ($type = $request->request->get('program')['type'] ?? null) {
					
					$program = new Program();
					$program->setEnabled(true);
					
					switch ($type) {
						case ProgramTypeEnum::EXPORT:
							$program->setCode($this->parseService->getValidatedCode('type: export'));
							break;
						case ProgramTypeEnum::IMPORT:
							$program->setCode($this->parseService->getValidatedCode('type: import'));
							break;
						case ProgramTypeEnum::TASK:
							$program->setCode($this->parseService->getValidatedCode('type: task'));
							break;
						case ProgramTypeEnum::PROGRESS:
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
				
				$entityManager = $this->doctrine->getManager();
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
	
	#[Route(path: '/project/program/{program}/edit', name: 'program_edit', requirements: ['program' => '\d+'])]
	public function edit(Request $request, Program $program) : Response
	{
		$project = $program->getProject();

		$this->denyAccessUnlessGranted('EDIT_PROGRAM', $project);

		$fields = $this->fieldService->getFields($project);
		$form = $this->createForm(ProgramType::class, $program);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
				
				$program->setLastModifiedBy($this->getUser());
				
				$entityManager = $this->doctrine->getManager();
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
	
	#[Route(path: '/project/program/{program}/delete', name: 'program_delete', methods: ['GET', 'DELETE'], requirements: ['program' => '\d+'])]
	public function delete(Request $request, Program $program) : Response
	{
		$project = $program->getProject();
		
		$this->denyAccessUnlessGranted('DELETE_PROGRAM', $project);

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
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

	public function getUser(): User
	{
		return parent::getUser();
	}

	private function isUserAttachedToSeries($series): bool
	{
		return array_intersect(
			array_column(
				$this->serieRepository->getSeriesByIdAsArray(
					$this->getUser()->getCompany()->getSeries()->getValues()
				), 'id'
			), $series) == true;
	}
}
