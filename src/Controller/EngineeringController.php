<?php

namespace App\Controller;

use App\Entity\View;
use App\Entity\Project;
use App\Service\FieldService;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\ViewRepository;
use App\Repository\SerieRepository;
use App\Repository\VersionRepository;
use App\Repository\CodificationRepository;
use App\Repository\DocumentRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class EngineeringController extends AbstractTurboController
{
	public function __construct(
								private readonly FieldService $fieldService,
								private readonly CodificationRepository $codificationRepository,
								private readonly DocumentRepository $documentRepository,
								private readonly SerieRepository $serieRepository,
								private readonly VersionRepository $versionRepository,
								private readonly ViewRepository $viewRepository,
								#[Autowire('%app.config.max_results_per_page%')]
        						private int $maxResultsPerPage)
	{
	}
    
    #[Route(path: '/project/{project}/thead', name: 'engineering_thead', requirements: ['project' => '\d+'])]
	public function thead(Request $request, Project $project) : Response
	{
		
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);

		$serieIds = $request->query->all('series');
        if (is_array($serieIds) === false) {
            $serieIds = [];
        }

		$fields = $this->fieldService->getFieldsForJs($project, $serieIds);

		if ($request->query->all('display') == false) {
			$view = null;
			if ($viewId = $request->query->get('view')) {
				$view = $this->viewRepository->getViewById($viewId);
			}
			if ($view === null) {
				$view = $this->viewRepository->getDefaultViewByProjectAndByUser($project, $this->getUser());
			}
			if ($view === null) {
				$view = $this->getDefaultDisplay($fields);
			}
			
			$request->query->replace($view->getValue());
		}
		
		$request->query->set('series', $serieIds);
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->renderForm('pages/engineering/index/_thead.html.twig', [
			'fields' => $fields,
			'query' => $request->query->all(),
		]);
	}
	
    #[Route(path: '/project/{project}/tbody', name: 'engineering_tbody', requirements: ['project' => '\d+'])]
	public function tbody(Request $request, Project $project) : Response
	{
		$serieIds = $request->query->all('series');
        if (is_array($serieIds) === false) {
            $serieIds = [];
        }
		
		$series = $this->serieRepository->getSeriesByIds($serieIds);

		foreach ($series as $serie) {
			if ($this->isGranted('ENGINEERING_SHOW', $serie) === false) {
				$series->removeElement($serie);
			}
		}

		$page = max((int)$request->query->get('page') ?? 1, 1);
		$request->query->remove('page');

		$fields = $this->fieldService->getFields($project);
		
		$codifications = $this->codificationRepository->getCodifications($project);

		$versionsCount = $this->versionRepository->getVersionsCount($codifications, $fields, $series, $project, $request);

		$maxResultsPerPage = $request->query->get('max_results_per_page') ?? $this->maxResultsPerPage;
		if ($maxResultsPerPage == 0) { //display all
			$pageMax = 1;
		} else {
			$pageMax = max(ceil($versionsCount / $maxResultsPerPage), 1);
		}
		$request->query->set('max_results_per_page', $maxResultsPerPage);
		$request->query->set('page', min($page, $pageMax));

		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $series, $project, $request);
		// $serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);

		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);

		return $this->renderForm('pages/engineering/index/_tbody.html.twig', [
			// 'datas' => $serializer->normalize($versions),
			'fields' => $fields,
			'items' => $versions,
			'page_max' => $pageMax,
			'query' => $request->query->all(),
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		series			array of serie ids
	 * 	+ array		id				array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/new', name: 'engineering_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		if ($request->query->has('id')) {		
			$versionIds = $request->get('id');
			$documents = $this->documentRepository->getDocumentsByVersionsId($versionIds);
			$series = $this->serieRepository->getSeriesByVersionIds($versionIds);
		} else {
			$series = $this->serieRepository->getSeriesByIds($request->get('series'));
			$documents = [];
		}
		
		return $this->renderForm('pages/engineering/_new.html.twig', [
			'project' => $project,
			'series' => $series,
			'documents' => $documents,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/edit', name: 'engineering_edit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		$versionIds = $request->get('id');
		$versions = $this->versionRepository->getVersionsByIds($versionIds);
		$documents = $this->documentRepository->getDocumentsByVersionsId($versionIds);
		$series = $this->serieRepository->getSeriesByVersionIds($versionIds);

		return $this->renderForm('pages/engineering/_edit.html.twig', [
			'series' => $series,
			'documents' => $documents,
			'versions' => $versions,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/delete', name: 'engineering_delete', requirements: ['project' => '\d+'])]
	public function delete(Request $request, Project $project) : Response
	{
		$versionIds = $request->get('id');
		$versions = $this->versionRepository->getVersionsByIds($versionIds);
		$documents = $this->documentRepository->getDocumentsByVersionsId($versionIds);

		return $this->renderForm('pages/engineering/_delete.html.twig', [
			'documents' => $documents,
			'versions' => $versions,
		]);
	}

	private function getDefaultDisplay(array $fields): array
	{
		
		return [
			'document_reference' => $fields['document.reference']['default_width'],
			'version_name' => $fields['version.name']['default_width'],
			'document_name' => $fields['document.name']['default_width'],
			'version_scheduled_date' => $fields['version.scheduledDate']['default_width'],
			'version_delivery_date' => $fields['version.deliveryDate']['default_width'],
			'version_is_required' => $fields['version.isRequired']['default_width'],
			'status_value' => $fields['status.value']['default_width'],
		];
	}
}