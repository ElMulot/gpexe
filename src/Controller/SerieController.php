<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Project;
use App\Form\SerieType;
use App\Repository\SerieRepository;
use App\Repository\MetadataRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;


class SerieController extends AbstractController
{
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine, private readonly SerieRepository $serieRepository, private readonly MetadataRepository $metadataRepository)
	{
	}
	
	#[Route(path: '/project/{project}/{company}/serie', name: 'serie', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function index(Project $project, Company $company) : Response
	{
		if ($this->isGranted('SHOW_SERIE', $project) === false) {
			return $this->redirectToRoute('project');
		}

		$series = $this->serieRepository->getSeriesByCompany($project, $company);
		if (empty($series)) {
			return $this->redirectToRoute('project', [
				'project' => $project->getId(),
			]);
		} else {
			return $this->renderForm('generic/list.html.twig', [
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

	#[Route(path: '/project/{project}/{company}', name: 'serie_route', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function route(Project $project, Company $company) : Response
	{
		if ($this->isGranted('ROUTE_SERIE', $project) === false) {
			return $this->redirectToRoute('project');
		}

		$series = $this->serieRepository->getSeriesByCompanyAsArray($project, $company);
		if (empty($series)) {
			return $this->redirectToRoute('serie_new', [
				'project' => $project->getId(),
				'company' => $company->getId(),
			]);
		} elseif (count($series) === 1) {
			return $this->redirectToRoute('document', [
				'project' => $project->getId(),
				'type' => reset($series)['type'],
				'serie' => reset($series)['id'],
			]);
		} else {

		}
	}
	
	#[Route(path: '/project/{project}/{type}', name: 'serie_route_by_type', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all'])]
	public function routeByType(Project $project, string $type) : Response
	{
		if ($this->isGranted('ROUTE_SERIE', $project) === false) {
			return $this->redirectToRoute('project');
		}

		return $this->redirectToRoute('document', [
			'project' => $project->getId(),
			'type' => $type,
		]);
	}
	
	#[Route(path: '/project/{project}/{company}/serie/new', name: 'serie_new', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function new(Request $request, Project $project, Company $company) : Response
	{
		if ($this->isGranted('NEW_SERIE', $project) === false) {
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
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
					return $this->renderForm('ajax/form.html.twig', [
						'form' => $form,
					]);
				}
				
				try {
					$serie->setMetadataValue($metadata, $value);
				} catch (\Error $e) {
					if ($metadata->getIsMandatory() === true) {
						$this->addFlash('danger', $e->getMessage());
						return $this->renderForm('ajax/form.html.twig', [
							'form' => $form,
						]);
					}
				}
			}
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'New serie created');
			return $this->redirectToRoute('serie', [
				'project' => $project->getId(),
				'company' => $company->getId(),
			]);
		} else {
			$request->headers['Turbo-Frame'] = 'modal_xl';
			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/{serie}/edit', name: 'serie_edit', requirements: ['serie' => '\d+'])]
	public function edit(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();

		if ($this->isGranted('EDIT_SERIE', $serie) === false) {
			return $this->redirectToRoute('project');
		}

		$form = $this->createForm(SerieType::class, $serie);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->metadataRepository->getMetadatasForSerie($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
					return $this->renderForm('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'serie' => $serie->getId(),
						]),
						'form' => $form,
					]);
				}
				
				try {
					$serie->setMetadataValue($metadata, $value);
				} catch (\Error $e) {
					if ($metadata->getIsMandatory() === true) {
						$this->addFlash('danger', $e->getMessage());
						return $this->renderForm('ajax/form.html.twig', [
							'form' => $form,
						]);
					}
				}
			}
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();
			$this->addFlash('success', 'Serie updated');
			return $this->redirectToRoute('serie', [
				'project' => $project->getId(),
				'company' => $serie->getCompany()->getId(),
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('serie', [
					'project' => $project->getId(),
					'company' => $serie->getCompany()->getId(),
				]),
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/{serie}/delete', name: 'serie_delete', methods: ['GET', 'DELETE'], requirements: ['serie' => '\d+'])]
	public function delete(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();

		if ($this->isGranted('DELETE_SERIE', $serie) === false) {
			return $this->redirectToRoute('project');
		}

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'Serie deleted');
			return $this->redirectToRoute('serie', [
				'project' => $serie->getProject()->getId(),
				'company' => $serie->getCompany()->getId(),
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
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