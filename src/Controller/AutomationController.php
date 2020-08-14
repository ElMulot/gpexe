<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use App\Entity\Project;
use App\Entity\Automation;
use App\Entity\Serie;
use App\Form\AutomationType;
use App\Form\LauncherExportType;
use App\Form\LauncherHiddenType;
use App\Form\LauncherImportType;
use App\Repository\AutomationRepository;
use App\Service\AutomationService;
use App\Service\FieldService;


class AutomationController extends AbstractController
{
	private $translator;
	
	private $automationRepository;
	
	private $automationService;
	
	private $fieldService;
	
	private $cache;
	
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, AutomationService $automationService, FieldService $fieldService)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->automationService = $automationService;
		$this->fieldService = $fieldService;
		$this->cache = new FilesystemAdapter();
	}
	
	public function index(Project $project): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Automations for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $project->getId(),
			]),
			'class' => Automation::class,
			'entities' => $this->automationRepository->getAutomations($project),
		]);
	}
	
	public function dashboard(Automation $automation): Response
	{
		
		if ($automation->isValid()) {
			return $this->render('automation/dashboard.html.twig', [
				'automation' => $automation,
				'route_back' =>  $this->generateUrl('project_view', [
					'id' => $automation->getProject()->getId(),
				]),
			]);
		} else {
			$this->addFlash('danger', 'Invalid automation');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
		}
	}
	
	public function launch(Request $request, Automation $automation): Response
	{
		
		if ($request->query->has('file_name')) {									//launch import
			
			$fileName = $request->query->get('file_name');
			$request->query->set('check_only', false);
			
			$this->automationService->setCache($automation, $request);
			
			$countProcessedItem = $this->cache->getItem('automation.count_processed');
			
			return $this->render('automation/launcher.html.twig', [
				'automation' => $automation,
			]);
			
		} elseif ($automation->isTypeImport()) {									//check import
			$form = $this->createForm(LauncherImportType::class, $automation); 
		} elseif ($automation->isTypeExport()) {									//launch export
			$form = $this->createForm(LauncherExportType::class, $automation);
		} else {
			$this->addFlash('danger', 'Programme invalide.');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
		}
		
		//$firstRow = $request->query->get('first_row') ?? 0;
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			if ($automation->isTypeImport()) { 										//check import
				
				$file = $form->get('file')->getData();
				
				if ($file === null) {
					$this->addFlash('danger', 'Aucun fichier sélectionné');
					return $this->render('automation/launcher.html.twig', [
						'automation' => $automation,
					]);
				}
				
				$fileName = $this->automationService->load($automation, $file, $request);
				
				if ($fileName === false) {
					$this->addFlash('danger', 'Erreur à l\'ouverture du fichier');
					$view = $form->createView();
					return $this->render('automation/launcher.html.twig', [
						'form' => $form->createView(),
					]);
				}
				
				$request->query->set('check_only', true);
				$request->query->set('file_name', $fileName);
				
				return $this->render('automation/launcher.html.twig', [
					'automation' => $automation,
				]);
				
			} else {																//launch export
			
				$file = $form->get('file_name')->getData();
				
				$fileName = $this->automationService->load($automation, $file, $request);
				
				if ($fileName === false) {
					$this->addFlash('danger', 'Erreur à l\'ouverture du fichier');
					$view = $form->createView();
					return $this->render('automation/launcher.html.twig', [
						'form' => $form->createView(),
					]);
				}
				
				$request->query->set('file_name', $fileName);
				
				return $this->render('automation/launcher.html.twig', [
					'automation' => $automation,
				]);
			}
			
			/*
			if ($fileName) {
				
				return $this->render('automation/launcher.html.twig', [
					'form' => $form->createView(),
				]);
				
			} else  {
				
				return $this->render('automation/launcher.html.twig', [
					'automation' => $automation,
				]);
				
			}
			*/
		} else {
			
			return $this->render('automation/launcher.html.twig', [
				'form' => $form->createView(),
			]);
			
		}
	}
	
	public function completed(Request $request, Automation $automation): Response
	{
		if ($request->query->has('file_name')) {
			
			$fileName = $request->query->get('file_name');
			
		} else {
			
			$this->addFlash('danger', 'Erreur interne.');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
			
		}
		
		if ($request->query->has('check_only')) {
			
			$checkOnly = $request->query->get('check_only');
			
		} else {
			
			$this->addFlash('danger', 'Erreur interne.');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
			
		}
		
		if ($automation->isTypeImport() && $checkOnly) {								//check import
			
			return $this->render('automation/check.html.twig', [
				'automation' => $automation,
				'upload_url' => $this->getParameter('uploads_directory') . '/' . $fileName,
			]);
			
		} elseif ($automation->isTypeImport()) {										//launch import
			
			return $this->render('automation/import.html.twig', [
				'automation' => $automation,
			]);
			
		} elseif ($automation->isTypeExport()) {										//launch export
			
			//$this->addFlash('success', 'Fin de l\'export.');
			return $this->render('automation/export.html.twig', [
				'automation' => $automation,
				'upload_url' => $this->getParameter('uploads_directory') . '/' . $fileName,
			]);
			
		} else {
			
			$this->addFlash('danger', 'Programme invalide.');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
			
		}
	}
	
	public function console(Request $request, Automation $automation): Response
	{
		
		$fileName = false;
		$redirect = '';
		
		if ($request->query->has('check_only')) {
			
			$checkOnly = $request->query->get('check_only');
			
		} else {
			
			$checkOnly = true;
			
		}
		
		if ($request->query->has('file_name')) {
			
			$file = $this->getParameter('kernel.project_dir') . '/public' . $this->getParameter('uploads_directory') . '/' . $request->query->get('file_name');
			
			if ($automation->isTypeImport()) {
				$fileName = $this->automationService->import($automation, $file, $checkOnly);
			} elseif ($automation->isTypeExport())  {
				$fileName = $this->automationService->export($automation, $file);
			}
			
			if ($fileName === false) {
				$this->addFlash('danger', 'Erreur interne');
				$redirect = 'launch';
			} else {
				$newBatchItem = $this->cache->getItem('automation.new_batch');
				if ($newBatchItem->get() === false) {
					$redirect = 'completed';
				} else {
					$redirect = 'console';
				}
			}
			
		} else {
			$redirect = 'launch';
		}
		
		return $this->render('automation/console.html.twig', [
			'automation' => $automation,
			'redirect' => $redirect,
		]);
		
	}
	
	public function new(Request $request, Project $project): Response
	{
		$automation = new Automation();
		$automation->setProject($project);
		$automation->setEnabled(true);
		$automation->setCreatedBy($this->getUser());
		
		$fields = $this->fieldService->getFieldsList($project);
		$form = $this->createForm(AutomationType::class, $automation);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			
			if ($request->request->get('submit') == 'save') {
				return $this->redirectToRoute('automation_edit', [
					'id' => $automation->getId(),
				]);
			} else {
				return $this->redirectToRoute('automation', [
					'id' => $project->getId()
				]);
			}
		} else {
			$view = $form->createView();
			return $this->render('automation/form.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'id' => $project->getId(),
				]),
				'form' => $view,
				'fields' => $fields,
			]);
		}
	}
	
	public function edit(Request $request, Automation $automation): Response
	{
		$fields = $this->fieldService->getFieldsList($automation->getProject());
		$form = $this->createForm(AutomationType::class, $automation);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$automation->setLastModifiedBy($this->getUser());
			
			$entityManager = $this->getDoctrine()->getManager();
			
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			
			if ($request->request->get('submit') == 'save') {
				$view = $form->createView();
				return $this->render('automation/form.html.twig', [
					'route_back' =>  $this->generateUrl('automation', [
						'id' => $automation->getProject()->getId(),
					]),
					'form' => $view,
					'fields' => $fields,
				]);
			} else {
				return $this->redirectToRoute('automation', [
					'id' => $automation->getProject()->getId()
				]);
			}
		} else {
			$view = $form->createView();
			return $this->render('automation/form.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'id' => $automation->getProject()->getId(),
				]),
				'form' => $view,
				'fields' => $fields,
			]);
		}
	}
	
	public function delete(Request $request, Automation $automation): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($automation);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('automation', [
				'id' => $automation->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('automation', [
					'id' => $automation->getProject()->getId(),
				]),
				'entities' => [$automation],
			]);
		}
		
		
	}
}
