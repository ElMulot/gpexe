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
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EngineeringController extends AbstractTurboController
{
	public function __construct(
								private readonly CodificationRepository $codificationRepository,
                                private readonly FieldService $fieldService,
								private readonly SerieRepository $serieRepository,
								private readonly VersionRepository $versionRepository,
								private readonly ViewRepository $viewRepository)
	{
	}
    
    #[Route(path: '/project/{project}/thead', name: 'engineering_thead', requirements: ['project' => '\d+'])]
	public function thead(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);

		$serieIds = $request->query->get('series');
        if (is_array($serieIds) === false) {
            $serieIds = [];
        }

		$fields = $this->fieldService->getFieldsForJs($project, $serieIds);

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
		dump($fields);
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->renderForm('pages/engineering/index/_thead.html.twig', [
			'fields' => $fields,
			'query' => $request->query->all(),
		]);
	}
	
    #[Route(path: '/project/{project}/tbody', name: 'engineering_tbody', requirements: ['project' => '\d+'])]
	public function tbody(Request $request, Project $project) : Response
	{
		$serieIds = $request->query->get('series');
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

		$view = null;
        if ($viewId = $request->query->get('view')) {
			$view = $this->viewRepository->getViewById($viewId);
		}
		
		if ($view === null) {
			$view = $this->getDefaultDisplay($fields);
		}
		
		$request->query->replace($view->getValue());

		$codifications = $this->codificationRepository->getCodifications($project);

		$versionsCount = $this->versionRepository->getVersionsCount($codifications, $fields, $series, $project, $request);
		
		$resultsPerPage = $request->query->get('results_per_page') ?? 50;
		if ($resultsPerPage == 0) { //display all
			$pageMax = 1;
		} else {
			$pageMax = max(ceil($versionsCount / $resultsPerPage), 1);
		}
		$request->query->set('results_per_page', $resultsPerPage);
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


		