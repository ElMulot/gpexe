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

	/**
	 * Query parameters :
	 * 	+ string		document_reference
	 * 	+ string		version_name
	 * 	+ string		document_name
	 * 	+ string		version_initial_scheduled_date
	 * 	+ string		version_scheduled_date
	 * 	+ string		version_delivery_date
	 * 	+ string		version_date
	 * 	+ string		version_is_required					"0" or "1"
	 * 	+ string		version_writer						as array of writer ids
	 * 	+ array			version_checker						as array of checker ids
	 * 	+ array			version_approver					as array of approver ids
	 * 	+ array			serie								as array of serie ids
	 * 	+ array			serie_company						as array of company ids
	 * 	+ array			status_value						as array of status ids
	 * 	+ array			status_type							as array of StatusTypeEnum ids
	 * 	+ string|array	codification_{id}					as array of codificationChoice if list, otherwise string of codificationElement
	 * 	+ string|array	metadata_{id}						as array of metadataChoice if list, otherwise string of metadataElement
	 * 	+ array			visa_{id}							as array of visa ids
	 * 	+ string		version_first						"0" or "1"
	 * 	+ string		version_first_scheduled				"0" or "1"
	 * 	+ string		version_first_delivered				"0" or "1"
	 * 	+ string		version_last						"0" or "1"
	 * 	+ string		version_last_scheduled				"0" or "1"
	 * 	+ string		version_last_delivered				"0" or "1"
	 * 	+ array			display								user defined display
	 * 	+ int			results_per_page					user defined results per page
	 *  + string		sort_desc							user defined sorted desc
	 *  + string		sort_asc							user defined sorted asc
	 */
    #[Route(path: '/project/{project}/thead', name: 'engineeringThead', requirements: ['project' => '\d+'])]
	public function thead(Request $request, Project $project) : Response
	{
		
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);

		$serieIds = $request->query->all('series');
        if (is_array($serieIds) === false) {
            $serieIds = [];
        }

		$fields = $this->fieldService->getFieldsForJs($project, $serieIds);

		if ($request->query->has('display') === false) {
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

			//save selected serie before overwrite filters parameter
			$serie = $request->get('filters')['serie'] ?? [];
			
			$request->query->replace($view->getValue());
			if ($serie) {
				$request->query->set('filters', ($request->get('filters') ?? []) + ['serie' => $serie]);
			}
		}
		
		$request->query->set('series', $serieIds);
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		
		return $this->render('pages/engineering/index/_thead.html.twig', [
			'fields' => $fields,
			'query' => $request->query->all(),
		]);
	}
	
    #[Route(path: '/project/{project}/tbody', name: 'engineeringTbody', requirements: ['project' => '\d+'])]
	public function tbody(Request $request, Project $project) : Response
	{	
		if ($request->query->has('filter') === false) {
			$request->query->set('filter', []);
		}
		
		$serieIds = $request->get('filter')['serie'] ?? [];
		$series = $this->serieRepository->getSeriesByIds($serieIds);

		foreach ($series as $key => $serie) {
			if ($this->isGranted('ENGINEERING_SHOW', $serie) === false) {
				unset($series[$key]);
			}
		}

		$request->query->set('filter', $request->query->all('filter') + ['serie' => array_map(fn($serie) => $serie->getId(), $series)]);
		
		$page = max((int)$request->query->get('page') ?? 1, 1);
		$request->query->remove('page');

		$fields = $this->fieldService->getFields($project);
		
		$codifications = $this->codificationRepository->getCodifications($project);

		$versionsCount = $this->versionRepository->getVersionsCount($codifications, $fields, $project, $request);

		$resultsPerPage = $request->query->get('results_per_page') ?? $this->maxResultsPerPage;
		if ($resultsPerPage == 0) { //display all
			$pageMax = 1;
		} else {
			$pageMax = max(ceil($versionsCount / $resultsPerPage), 1);
		}
		$request->query->set('results_per_page', $resultsPerPage);
		$request->query->set('page', min($page, $pageMax));

		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $project, $request);
		// $serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);

		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);

		return $this->render('pages/engineering/index/_tbody.html.twig', [
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
	 * 	+ array		versions		array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/new', name: 'engineeringNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		return $this->render('pages/engineering/_new.html.twig', [
			'project' => $project,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		versions		array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/edit', name: 'engineeringEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		return $this->render('pages/engineering/_edit.html.twig', [
			'project' => $project,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		versions		array of version ids
	 */
    #[Route(path: '/project/{project}/engineering/delete', name: 'engineeringDelete', requirements: ['project' => '\d+'])]
	public function delete(Request $request, Project $project) : Response
	{
		$versionIds = $request->get('id');
		$versions = $this->versionRepository->getVersionsByIds($versionIds);
		$documents = $this->documentRepository->getDocumentsByVersionsId($versionIds);

		return $this->render('pages/engineering/_delete.html.twig', [
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
			'version_is_required' => $fields['version.required']['default_width'],
			'status_value' => $fields['status.value']['default_width'],
		];
	}
}