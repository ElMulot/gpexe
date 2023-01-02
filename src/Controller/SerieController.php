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
use App\Exception\InternalErrorException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Form\Exception\InvalidArgumentException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class SerieController extends AbstractTurboController
{
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly MetadataRepository $metadataRepository,
								private readonly SerieRepository $serieRepository,
								private readonly TranslatorInterface $translator)
	{
	}
	
	/**
	 * Query parameters :
	 * 	+ array		id				array of serie ids that could be displayed
	 * 	+ int		selected		serie id to display
	 */
	#[Route(path: '/project/{project}/serie', name: 'serie', requirements: ['project' => '\d+'])]
	public function index(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_SHOW', $project);
		
		$serieIds = $request->get('id');
		$selectedSerieId = $request->get('selected');
		
		$series = $this->serieRepository->getSeriesByIds($serieIds);

		if ($selectedSerieId === null) {
			$selectedSerie = false;
		} else {
			$selectedSerie = match(count($series)) {
				0		=>  false,
				1		=> current($series),
				default	=> array_reduce($series->getValues(), fn($carry, $item) => ($item->getId() == $selectedSerieId)?$item:$carry),
			};
		}
		
		return $this->renderForm('pages/engineering/index/nav/_serie.html.twig', [
			'title' => $this->translator->trans('Series for') . ' : ' . $project->getName(),
			'class' => Serie::class,
			'series' => $series,
			'selected_serie' => $selectedSerie,
			'project' => $project,
		]);
	}

	#[Route(path: '/project/{project}/series/{company}', name: 'series_list_by_company', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function seriesByCompany(Project $project, Company $company) : Response
	{

		$series = $this->serieRepository->getSeriesByCompany($project, $company);

		if (empty($series) === true) {
			if ($this->isGranted('SERIE_NEW', $project) === false) {
				return $this->redirectToRoute('project', [
					'project' => $project,
				]);
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
		switch ($belong) {
			case SerieBelongingEnum::ALL:
				$this->denyAccessUnlessGranted('SHOW_ALL', $project);
				$series = $this->serieRepository->getSeriesByProject($project);
				break;
			case SerieBelongingEnum::MDR:
				$this->denyAccessUnlessGranted('SHOW_MDR', $project);
				$series = $this->serieRepository->getMdrSeriesByProject($project);
				break;
			case SerieBelongingEnum::SDR:
				$this->denyAccessUnlessGranted('SHOW_SDR', $project);
				$series = $this->serieRepository->getSdrSeriesByProject($project);
				break;
			default:
				throw new \LogicException('logic.codeNotReached');
		}

		
		if (empty($series) === true) {
			return $this->redirectToRoute('project', [
				'project' => $project,
			]);
		}

		return $this->renderForm('pages/engineering/index.html.twig', [
			'series' => $series,
			'project' => $project,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of serie ids that could be displayed
	 */
	#[Route(path: '/project/{project}/series/select', name: 'serie_select', requirements: ['project' => '\d+'])]
	public function select(Request $request, Project $project) : Response
	{
		$serieIds = $request->get('id');
		
		$series = $this->serieRepository->getSeriesByIds($serieIds);
		
		foreach ($series as $serie) {
			$this->denyAccessUnlessGranted('ENGINEERING_SHOW', $serie);
		}

		return $this->renderForm('pages/engineering/index/_select.html.twig', [
			'series' => $series,
			'project' => $project,
		]);

	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of serie ids that will be used for company selector in the form
	 */
	#[Route(path: '/project/{project}/serie/new', name: 'serie_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_NEW', $project);

		$serie = new Serie();
		$serie->setProject($project);

		try {
			$form = $this->createForm(SerieType::class, $serie, [
				'project' => $project,
				'ids' => $request->get('id'),
			]);
		} catch (InternalErrorException $e) {
			$this->addFlash('warning', $e->getMessage());
			return $this->renderError($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		}
		
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->metadataRepository->getMetadatasForSerie($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
					return $this->renderForm('generic/new.html.twig', [
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

			return $this->renderSuccess($request, 'serie', [
				'project' => $project->getId(),
				'id' => $request->get('id') + [$serie->getId()],
				'selected' => [$serie->getId()]
			]);
		} else {
			return $this->renderForm('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/{serie}/edit', name: 'serie_edit', requirements: ['serie' => '\d+'])]
	public function edit(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();
		
		$this->denyAccessUnlessGranted('SERIE_EDIT', $project);

		try {
			$form = $this->createForm(SerieType::class, $serie, [
				'project' => $project
			]);
		} catch (InvalidArgumentException $e) {
			$this->addFlash('warning', $e->getMessage());
			return $this->renderError($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		}

		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$project = $serie->getProject();

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
						return $this->renderForm('generic/edit.html.twig', [
							'form' => $form,
						]);
					}
				}
			}
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();

			$this->addFlash('success', 'Serie updated');

			return $this->renderSuccess($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id'), 'selected' => $request->get('selected')]);
		} else {
			return $this->renderForm('pages/engineering/edit/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	/**
	 * Query parameters :
	 * 	+ array		id				array of serie ids that could be displayed
	 */
	#[Route(path: '/project/serie/{serie}/delete', name: 'serie_delete', methods: ['GET', 'DELETE'], requirements: ['serie' => '\d+'])]
	public function delete(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();
		
		$this->denyAccessUnlessGranted('SERIE_DELETE', $project);

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'Serie deleted');

			return $this->renderSuccess($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$serie],
			]);
		}
	}
	
}
?>