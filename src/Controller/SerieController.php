<?php

namespace App\Controller;

use App\Entity\View;
use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Project;
use App\Form\SerieType;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\SerieRepository;
use App\Repository\MetadataRepository;
use App\Entity\Enum\SerieBelongingEnum;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class SerieController extends AbstractController
{
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine, private readonly SerieRepository $serieRepository, private readonly MetadataRepository $metadataRepository)
	{
	}
	
	#[Route(path: '/project/{project}/{company}/serie', name: 'serie', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function index(Project $project, Company $company) : Response
	{
		if ($this->isGranted('PROJECT_SHOW', $project) === false) {
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

	#[Route(path: '/project/{project}/series/{company}', name: 'series_list_by_company', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function seriesByCompany(Project $project, Company $company) : Response
	{

		$series = $this->serieRepository->getSeriesByCompany($project, $company);

		if (empty($series) === true) {
			if ($this->isGranted('SERIE_NEW', $project) === false) {
				return $this->redirectToRoute('project');
			}
		} else {
			$this->denyAccessUnlessGranted('ENGINEERING_SHOW', reset($series));
		}

		return $this->renderForm('pages/engineering/index.html.twig', [
			'series' => $series,
			'project' => $project,
			'company' => $company,
		]);
	}
	
	#[Route(path: '/project/{project}/series/{belong}', name: 'series_list_by_belonging', requirements: ['project' => '\d+', 'belong' => 'all|mdr|sdr'])]
	public function seriesByBelonging(Project $project, string $belong) : Response
	{	
		$series = match($belong) {
			SerieBelongingEnum::MDR => $this->serieRepository->getMdrSeriesByProject($project),
			SerieBelongingEnum::SDR => $this->serieRepository->getSdrSeriesByProject($project),
			default => $this->serieRepository->getSeriesByProject($project),
		};
		
		if (empty($series) === true) {
			return $this->redirectToRoute('projects_list');
		} else {
			$this->denyAccessUnlessGranted('ENGINEERING_SHOW', reset($series));
		}

		return $this->renderForm('pages/engineering/index.html.twig', [
			'series' => $series,
			'project' => $project,
		]);
	}

	#[Route(path: '/project/{project}/series/{company}/select', name: 'serie_select', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function select(Project $project, Company $company) : Response
	{
		$series = $this->serieRepository->getSeriesByCompany($project, $company);
		
		$this->denyAccessUnlessGranted('ENGINEERING_SHOW', reset($series));

		return $this->renderForm('pages/engineering/index/_select.html.twig', [
			'series' => $series,
			'project' => $project,
			'company' => $company,
		]);

	}


	#[Route(path: '/project/{project}/serie/pannel', name: 'serie_pannel', requirements: ['project' => '\d+'])]
	public function pannel(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);
		
		$seriesIds = $request->get('id');
		$selectedSerieId = $request->get('selected');
		
		$series = $this->serieRepository->getSeriesByIds($seriesIds) ?? [];

		if ($selectedSerieId === null) {
			$selectedSeries = $series;
		} else {
			$selectedSeries = match(count($series)) {
				0		=>  $series,
				1		=> [current($series)],
				default	=> array_filter($series, fn($item) => $item->getId() == $selectedSerieId),
			};
		}

		return $this->renderForm('pages/engineering/index/_serie.html.twig', [
			'series' => $series,
			'selected_series' => $selectedSeries,
			'project' => $project,
		]);
	}

	
	#[Route(path: '/project/{project}/{company}/serie/new', name: 'serie_new', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function new(Request $request, Project $project, Company $company) : Response
	{
		if ($this->isGranted('SERIE_NEW', $project) === false) {
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
			return $this->renderForm('generic/new.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/{serie}/edit', name: 'serie_edit', requirements: ['serie' => '\d+'])]
	public function edit(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();

		if ($this->isGranted('SERIE_EDIT', $serie) === false) {
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

		if ($this->isGranted('SERIE_DELETE', $serie) === false) {
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