<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Project;
use App\Entity\Automation;
use App\Form\AutomationType;
use App\Form\LauncherExportType;
use App\Form\LauncherImportType;
use App\Repository\AutomationRepository;
use App\Service\AutomationService;
use App\Service\ImportExportService;
use App\Service\CacheService;
use App\Service\FieldService;


class AutomationController extends AbstractController
{
	private $translator;
	
	private $automationRepository;
	
	private $automationService;
	
	private $importExportService;
	
	private $cacheService;
	
	private $fieldService;
	
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, AutomationService $automationService, ImportExportService $importExportService, CacheService $cacheService, FieldService $fieldService)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->automationService = $automationService;
		$this->importExportService = $importExportService;
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
			'header' => $this->translator->trans('Automations for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Automation::class,
			'entities' => $this->automationRepository->getAutomations($project),
		]);
	}
	
	public function dashboard(Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$this->container->get('session')->getFlashBag()->clear();
		
		if ($automation->isValid()) {
			$this->importExportService->unload($automation);
			return $this->render('automation/dashboard.html.twig', [
				'automation' => $automation,
				'route_back' =>  $this->generateUrl('project_view', [
					'project' => $project->getId(),
				]),
			]);
		} else {
			$this->addFlash('danger', 'Programme invalide');
			return $this->redirectToRoute('project_view', [
				'project' => $project->getId(),
			]);
		}
	}
	
	public function preload(Request $request, Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
			
		if ($automation->isTypeImport()) {
			
			if ($this->cacheService->get('automation.ready_to_persist')) {			//launch import
				if ($this->importExportService->preload($automation, $request)) {
					return $this->render('automation/preload.html.twig', [
						'automation' => $automation,
					]);
				} else {
					$this->addFlash('danger', 'Erreur interne');
					$form = $this->createForm(LauncherImportType::class, $automation);
				}
			} else {																//check import
				$form = $this->createForm(LauncherImportType::class, $automation);
			}
		} elseif ($automation->isTypeExport()) {									//launch export
			$form = $this->createForm(LauncherExportType::class, $automation);
		} else {
			$this->addFlash('danger', 'Programme invalide');
			return $this->redirectToRoute('project_view', [
				'project' => $project->getId(),
			]);
		}
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			if ($automation->isTypeImport()) { 										//check import
				
				$file = $form->get('file')->getData();
				
				if ($file === null) {
					$this->addFlash('danger', 'Aucun fichier sélectionné');
				} elseif ($this->importExportService->preload($automation, $request, $file)) {
					return $this->render('automation/preload.html.twig', [
						'automation' => $automation,
					]);
				} else {
					$this->addFlash('danger', 'Erreur interne');
				}
				
			} else {																//launch export
				
				if ($this->importExportService->preload($automation, $request)) {				
					return $this->render('automation/preload.html.twig', [
						'automation' => $automation,
					]);
				} else {
					$this->addFlash('danger', 'Erreur interne');
				}
			}
			
		}
			
		$this->importExportService->unload($automation);
		return $this->render('automation/launcher.html.twig', [
			'form' => $form->createView(),
			'automation' => $automation,
		]);
			
	}
	
	public function load(Automation $automation): Response
	{
		
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($automation->isTypeImport()) {											
			
			if ($this->cacheService->get('automation.ready_to_persist')) {			//launch import
				$this->importExportService->load($automation);
				return $this->render('automation/load.html.twig', [
					'automation' => $automation,
				]);
			} else {														//check import
				if ($this->importExportService->load($automation) === false) {
					$this->importExportService->unload($automation);
					return $this->redirectToRoute('automation_preload', [
						'automation' => $automation->getId(),
					]);
				}
				
				return $this->render('automation/load.html.twig', [
					'automation' => $automation,
				]);
			}
		} elseif ($automation->isTypeExport()) {									//launch export
			if ($this->importExportService->load($automation) === false) {
				$this->importExportService->unload($automation);
				return $this->redirectToRoute('automation_preload', [
					'automation' => $automation->getId(),
				]);
			}
			
			return $this->render('automation/load.html.twig', [
				'automation' => $automation,
			]);
		} else {
			$this->importExportService->unload($automation);
			return $this->redirectToRoute('automation_preload', [
				'automation' => $automation->getId(),
			]);
		}
	}
	
	public function completed(Request $request, Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($automation->isTypeImport()) {
			
			if ($this->cacheService->get('automation.ready_to_persist')) {				//launch import
				
				$this->importExportService->unload($automation);
				return $this->render('automation/import.html.twig', [
					'automation' => $automation,
				]);
			} else {																	//check import
				
				$filePath = $this->cacheService->get('automation.file_path');
				$this->cacheService->set('automation.ready_to_persist', true);
				return $this->render('automation/check.html.twig', [
					'automation' => $automation,
					'file_path' => $filePath,
				]);
				
			}
			
		} elseif ($automation->isTypeExport()) {										//launch export
			
			$filePath = $this->cacheService->get('automation.file_path');
			$this->importExportService->unload($automation);
			return $this->render('automation/export.html.twig', [
				'automation' => $automation,
				'file_path' => $filePath,
			]);
			
		} else {
			
			$this->addFlash('danger', 'Programme invalide');
			return $this->redirectToRoute('project_view', [
				'project' => $project->getId(),
			]);
			
		}
	}
	
	public function console(Request $request, Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		switch ($this->cacheService->get('automation.state')) {
			case 'new_batch':
				if ($automation->isTypeImport()) {
					$success = $this->importExportService->import($automation);
				} elseif ($automation->isTypeExport())  {
					$success = $this->importExportService->export($automation);
				}
				
				if ($success) {
					$redirect = $this->cacheService->get('automation.state');
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
		
		return $this->render('automation/console.html.twig', [
			'automation' => $automation,
			'redirect' => $redirect,
		]);
		
	}
	
	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$automation = new Automation();
		$automation->setProject($project);
		$automation->setEnabled(true);
		$automation->setCreatedBy($this->getUser());
		
		$fields = $this->fieldService->getFields($project);
		$form = $this->createForm(AutomationType::class, $automation);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'Nouveau programme créé');
			
			if ($request->request->get('submit') == 'save') {
				return $this->redirectToRoute('automation_edit', [
					'automation' => $automation->getId(),
				]);
			} else {
				return $this->redirectToRoute('automation', [
					'project' => $project->getId()
				]);
			}
		} else {
			$view = $form->createView();
			return $this->render('automation/form.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'project' => $project->getId(),
				]),
				'form' => $view,
				'fields' => $fields,
			]);
		}
	}
	
	public function edit(Request $request, Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$fields = $this->fieldService->getFields($project);
		$form = $this->createForm(AutomationType::class, $automation);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$automation->setLastModifiedBy($this->getUser());
			
			$entityManager = $this->getDoctrine()->getManager();
			
			$entityManager->flush();
			$this->addFlash('success', 'Programme mis à jour');
			
			if ($request->request->get('submit') == 'save') {
				$view = $form->createView();
				return $this->render('automation/form.html.twig', [
					'route_back' =>  $this->generateUrl('automation', [
						'project' => $project->getId(),
					]),
					'form' => $view,
					'fields' => $fields,
				]);
			} else {
				return $this->redirectToRoute('automation', [
					'project' => $project->getId()
				]);
			}
		} else {
			$view = $form->createView();
			return $this->render('automation/form.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'project' => $project->getId(),
				]),
				'form' => $view,
				'fields' => $fields,
			]);
		}
	}
	
	public function delete(Request $request, Automation $automation): Response
	{
		$project = $automation->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'Programme supprimé');
			return $this->redirectToRoute('automation', [
				'project' => $project->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'project' => $project->getId(),
				]),
				'entities' => [$automation],
			]);
		}
		
		
	}
}
