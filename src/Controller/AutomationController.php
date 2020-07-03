<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Project;
use App\Entity\Automation;
use App\Entity\Serie;
use App\Form\AutomationType;
use App\Form\LauncherExportType;
use App\Form\LauncherImportType;
use App\Repository\AutomationRepository;
use App\Service\AutomationService;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AutomationController extends AbstractController
{
	private TranslatorInterface $translator;
	
	private AutomationRepository $automationRepository;
	
	private AutomationService $automationService;
	
	public function __construct(TranslatorInterface $translator, AutomationRepository $automationRepository, AutomationService $automationService)
	{
		$this->translator = $translator;
		$this->automationRepository = $automationRepository;
		$this->automationService = $automationService;
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
		
		if ($automation->isTypeImport()) {
			if ($request->request->has('hidden_file')) {
				$form = $this->createForm(LauncherImportType::class, $automation, [
					'hidden_file' => $request->request->get('hidden_file'),
				]);
			} else {
				$form = $this->createForm(LauncherImportType::class, $automation);
			}
		} elseif ($automation->isTypeExport()) {
			$form = $this->createForm(LauncherExportType::class, $automation);
		} else {
			$this->addFlash('danger', 'Invalid automation');
			return $this->redirectToRoute('project_view', [
				'id' => $automation->getProject()->getId(),
			]);
		}
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			if ($automation->isTypeImport() && $form->has('file')) { //check import
				
				$file = $form->get('file')->getData();
				
				if ($file === null) {
					$this->addFlash('danger', 'Error while opening file');
					$view = $form->createView();
					return $this->render('automation/launcher.html.twig', [
						'form' => $form->createView(),
					]);
				}
				
				$form = $this->createForm(LauncherImportType::class, $automation, [
					'hidden_file' => $file,
				]);
				
				$fileName = $this->automationService->import($file, $automation, true);
				return $this->render('automation/check.html.twig', [
					'form' => $form->createView(),
					'upload_url' => $this->getParameter('uploads_directory') . '/' . $fileName,
				]);
					
			} elseif ($automation->isTypeImport() && $form->has('hidden_file')) { //launch import
					
				$file = $form->get('hidden_file')->getData();
				
				if (!$file) {
					$this->addFlash('danger', 'Error while opening file');
					$view = $form->createView();
					return $this->render('automation/launcher.html.twig', [
						'form' => $form->createView(),
					]);
				}
				
				$this->automationService->import($file, $automation, false);
				return $this->render('automation/import.html.twig', [
					'form' => $form->createView(),
				]);
				
			} elseif ($automation->isTypeExport()) { //export
				
				$fileName = $this->automationService->export($automation);
				return $this->render('automation/export.html.twig', [
					'form' => $form->createView(),
					'upload_url' => $this->getParameter('uploads_directory') . '/' . $fileName,
				]);
				
			} else { //error
				
				$this->addFlash('danger', 'Invalid automation');
				return $this->render('automation/launcher.html.twig', [
					'form' => $form->createView(),
				]);
				
			}
		} else {
			
			if ($automation->isTypeImport()) {
				$this->addFlash('info', 'Select a file');
			} else {
				$this->addFlash('info', 'Ready to launch');
			}
			return $this->render('automation/launcher.html.twig', [
				'route_back' =>  $this->generateUrl('project_view', [
					'id' => $automation->getProject()->getId(),
				]),
				'form' => $form->createView(),
			]);
			
		}
	}
	
	public function console(): Response
	{
		return $this->render('automation/console.html.twig');
	}
	
	public function new(Request $request, Project $project): Response
	{
		$automation = new Automation();
		
		$form = $this->createForm(AutomationType::class, $automation);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$automation->setProject($project);
			$automation->setEnabled(true);
			$automation->setCreatedBy($this->getUser());
			
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
				'form' => $view
			]);
		}
	}
	
	public function edit(Request $request, Automation $automation): Response
	{
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
					'form' => $view
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
				'form' => $view
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
