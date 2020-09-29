<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Company;
use App\Form\SerieType;
use App\Repository\SerieRepository;
use App\Repository\MetadataRepository;

class SerieController extends AbstractController
{
	private $translator;
	
	private $serieRepository;
	
	private $metadataRepository;
	
	public function __construct(TranslatorInterface $translator, SerieRepository $serieRepository, MetadataRepository $metadataRepository)
	{
		$this->translator = $translator;
		$this->serieRepository = $serieRepository;
		$this->metadataRepository = $metadataRepository;
	}
	
	public function index(Project $project, Company $company): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		$series = $this->serieRepository->getSeries($project, $company);
		if (empty($series)) {
			return $this->redirectToRoute('project_view', [
				'project' => $project->getId(),
			]);
		} else {
			return $this->render('generic/list.html.twig', [
				'header' => $this->translator->trans('Series for') . ' : ' . $project->getName(),
				'route_back' => $this->generateUrl('serie_route', [
					'project' => $project->getId(),
					'company' => $company->getId()
				]),
				'class' => Serie::class,
				'entities' => $series,
			]);
		}
	}

	public function route(Project $project, Company $company): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		$series = $this->serieRepository->getSeries($project, $company);
		if (empty($series)) {
			return $this->redirectToRoute('serie_new', [
				'project' => $project->getId(),
				'company' => $company->getId(),
			]);
		} else {
			return $this->redirectToRoute('document', [
				'project' => $project->getId(),
				'type' => $series[0]->getType(),
				'serie' => $series[0]->getId(),
			]);
		}
	}
	
	public function routeByType(Project $project, string $type): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		return $this->redirectToRoute('document', [
			'project' => $project->getId(),
			'type' => $type,
		]);		
	}
	
	public function new(Request $request, Project $project, Company $company): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		$serie = new Serie();
		$serie->setProject($project);
		$serie->setCompany($company);
		$form = $this->createForm(SerieType::class, $serie);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->metadataRepository->getMetadatasForSerie($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'serie' => $document->getSerie()->getId(),
						]),
						'form' => $view,
					]);
				}
				
				$serie->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'New serie created');
			return $this->redirectToRoute('serie', [
				'project' => $project->getId(),
				'company' => $company->getId(),
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('serie', [
					'project' => $project->getId(),
					'company' => $company->getId(),
				]),
				'form' => $view,
			]);
		}
	}
	
	public function edit(Request $request, Serie $serie): Response
	{
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(SerieType::class, $serie);
		$form->handleRequest($request);
		
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->metadataRepository->getMetadatasForSerie($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'serie' => $serie->getId(),
						]),
						'form' => $view,
					]);
				}
				
				$serie->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();
			$this->addFlash('success', 'Serie updated');
			return $this->redirectToRoute('serie', [
				'project' => $project->getId(),
				'company' => $serie->getCompany()->getId(),
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('serie', [
					'project' => $project->getId(),
					'company' => $serie->getCompany()->getId(),
				]),
				'form' => $view,
			]);
		}
	}
	
	public function delete(Request $request, Serie $serie): Response
	{
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'Serie deleted');
			return $this->redirectToRoute('serie', [
				'project' => $serie->getProject()->getId(),
				'company' => $serie->getCompany()->getId(),
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('serie', [
					'project' => $serie->getProject()->getId(),
					'company' => $serie->getCompany()->getId(),
				]),
				'entities' => [$serie],
			]);
		}
	}
	
}
?>