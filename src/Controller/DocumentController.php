<?php
namespace App\Controller;

use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Version;
use App\Entity\Document;
use App\Entity\User;
use App\Exception\InternalErrorException;
use App\Form\DocumentType;
use App\Form\SerieChangeType;
use App\Service\FieldService;
use App\Service\ProgramService;
use App\Service\DocumentService;
use App\Repository\UserRepository;
use App\Repository\ViewRepository;
use App\Repository\SerieRepository;
use App\Repository\StatusRepository;
use App\Repository\CompanyRepository;
use App\Repository\ProgramRepository;
use App\Repository\VersionRepository;
use App\Repository\DocumentRepository;
use App\Repository\MetadataRepository;
use App\Repository\CodificationRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Doctrine\Persistence\ManagerRegistry;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\FormError;

class DocumentController extends AbstractTurboController
{
	
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly ManagerRegistry $doctrine,
								private readonly DocumentService $documentService,
								private readonly FieldService $fieldService,
								private readonly ProgramService $programService,
								private readonly CodificationRepository $codificationRepository,
								private readonly CompanyRepository $companyRepository,
								private readonly DocumentRepository $documentRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly ProgramRepository $programRepository,
								private readonly SerieRepository $serieRepository,
								private readonly StatusRepository $statusRepository,
								private readonly VersionRepository $versionRepository,
								private readonly UserRepository $userRepository,
								private readonly ViewRepository $viewRepository,
								#[Autowire('%app.uploads_directory%')]
        						private readonly string $uploadsDirectory)
	{
	}
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}', name: 'document', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
	public function index(Project $project, string $type, Serie $serie = null) : Response
	{
		if ($this->isGranted('ROUTE_SERIE', $project) === false) {
			return $this->redirectToRoute('project');
		}

		if ($serie === null) {
			$company = null;
			if ($this->getUserCompany()->isMainContractor() === false) {
				return $this->redirectToRoute('project');
			}
		} else {
			$company = $serie->getCompany();
			if ($this->getUserCompany()->isMainContractor() === false && $this->getUserCompany() !== $serie->getCompany()) {
				return $this->redirectToRoute('project');
			}
		}
		return $this->render('document/index.html.twig', [
			'project' => $project,
			'current_serie' => $serie,
			'type' => $type,
			'current_company' => $company,
			'route_back' =>  $this->generateUrl('project', [
				'project' => $project->getId(),
			]),
		]);
	}
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}/fields', name: 'documentFields', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
	public function fields(Project $project, string $type, Serie $serie = null) : Response
	{
		$this->denyAccessUnlessGranted('ROUTE_SERIE', $project);
		
		if ($serie === null) {
			$company = null;
			$series = $this->serieRepository->getSeriesByTypeAsArray($project, $type);
			$fields = $this->fieldService->getFieldsForJs($project, $series);
		} else {
			$company = $serie->getCompany();
			$series = $this->serieRepository->getSeriesByCompanyAsArray($project, $company);
			$fields = $this->fieldService->getFieldsForJs($project, $series);
		}
		$progressPrograms = $this->programRepository->getEnabledProgressProgramsAsArray($project, $series);
		return new JsonResponse([
			'series' => $series,
			'fields' => $fields,
			'progress_programs' => $progressPrograms,
		]);
	}
	
	/**
	 * @deprecated version
	 */
	#[Route(path: '/project/{project}/serie/{type}/{serie}/table', name: 'documentTable', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
	public function table(Request $request, FlashBagInterface $flashBag, Project $project, string $type, Serie $serie = null) : Response
	{
		$this->denyAccessUnlessGranted('ROUTE_SERIE', $project);

		$page = max((int)$request->query->get('page') ?? 1, 1);
		$request->query->remove('page');
		if ($viewId = $request->query->get('view')) {
			if ($view = $this->viewRepository->getViewById($viewId)) {
				$request->query->replace($view->getValue());
				$request->query->set('view', $viewId);
			} else {
				$request->query->remove('view');
			}
		}
		if ($serie === null) {
			if ($this->getUserCompany()->isMainContractor() === false) {
				throw $this->createAccessDeniedException();
			}
			$series = $this->serieRepository->getSeriesByTypeAsArray($project, $type);
			$serieId = 0;
		} else {
			if ($this->getUserCompany()->isMainContractor() === false && $this->getUserCompany() !== $serie->getCompany()) {
				throw $this->createAccessDeniedException();
			}
			$series = [$serie];
			$serieId = $serie->getId();
		}
		$codifications = $this->codificationRepository->getCodifications($project);
		$fields = $this->fieldService->getFields($project);
		if ($request->query->all() == false) {
			if ($view = $this->viewRepository->getDefaultViewByProjectAndByUser($project, $this->getUser())) {
				$viewId = $view->getId();
				$request->query->replace($view->getValue());
				$request->query->set('view', $viewId);
			} else {
				$request->query->set('display', $this->getDefaultDisplay($fields));
			}
		}
		$versionsCount = $this->versionRepository->getVersionsCount($codifications, $fields, $series, $project, $request);
		$resultsPerPage = $request->query->get('results_per_page') ?? 50;
		if ($resultsPerPage == 0) { //display all
			$pageMax = 1;
		} else {
			$pageMax = max(ceil($versionsCount / $resultsPerPage), 1);
		}
		$request->query->set('results_per_page', $resultsPerPage);
		$request->query->set('page', min($page, $pageMax));
		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $project, $request);
		$serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);
		return new JsonResponse([
				'datas' => $serializer->normalize($versions),
				'page_max' => $pageMax,
				'query' => $request->query->all(),
				'serie' => $serieId,
				'flash' => $flashBag->all(),
			]
		);
	}
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}/export', name: 'documentExport', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
	public function export(Request $request, Project $project, string $type, Serie $serie = null) : Response
	{
		$this->denyAccessUnlessGranted('ROUTE_SERIE', $project);
		
		if ($viewId = $request->query->get('view')) {
			if ($view = $this->viewRepository->getViewById($viewId)) {
				$request->query->replace($view->getValue());
				$request->query->set('view', $viewId);
			} else {
				$request->query->remove('view');
			}
		}
		if ($serie === null) {
			if ($this->getUserCompany()->isMainContractor() === false) {
				throw $this->createAccessDeniedException();
			}
			$series = $this->serieRepository->getSeriesByTypeAsArray($project, $type);
		} else {
			if ($this->getUserCompany()->isMainContractor() === false && $this->getUserCompany() !== $serie->getCompany()) {
				throw $this->createAccessDeniedException();
			}
			$series = [$serie];
		}
		$codifications = $this->codificationRepository->getCodifications($project);
		$fields = $this->fieldService->getFields($project);
		if ($request->query->all() == false) {
			if ($view = $this->viewRepository->getDefaultViewByProjectAndByUser($project, $this->getUser())) {
				$viewId = $view->getId();
				$request->query->replace($view->getValue());
			} else {
				$request->query->set('display', $this->getDefaultDisplay($fields));
			}
		}
		$request->query->set('results_per_page', 0);
		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $project, $request);
		try {
			$this->programService->exportFromView($fields, $versions, $request);
		} catch (\Exception $e) {
			$this->addFlash('danger', $e->getMessage());
			$this->programService->unload();
			return $this->render('ajax/error.html.twig');
		}
		$filePath = $this->programService->getCache()->getParameter('file_path');
		$pathParts = pathinfo($filePath);
		$this->programService->unload();
		return $this->render('document/export.html.twig', [
			'file_path' => $this->uploadsDirectory . '/' . $pathParts['basename'],
		]);
	}
	
	#[Route(path: '/project/serie/document/{version}/detail', name: 'documentDetail', requirements: ['version' => '\d+'])]
	public function detail(Version $version) : Response
	{
		$document = $version->getDocument();
		$this->denyAccessUnlessGranted('DOCUMENT_SHOW_DETAIL', $document);

		return $this->render('pages/engineering/index/document/_detail.html.twig', [
			'current_version' => $version,
			'versions' => $this->versionRepository->getVersionsByDocument($document),
			'document' => $document,
			'serie' => $document->getSerie(),
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		series			array of serie ids that will be used for serie selector in the form if versions is empty
	 * 	+ array		versions		array of version ids that will be used for serie selector in the form
	 */
	#[Route(path: '/project/{project}/document/new', name: 'documentNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		
		$this->denyAccessUnlessGranted('DOCUMENT_NEW', $project);
		
		if ($request->query->has('versions')) {
			$series = $this->serieRepository->getSeriesByVersionIds($request->get('versions'));
		} else {
			$series = $this->serieRepository->getSeriesByIds($request->get('series'));
		}
		
		$document = new Document();
		$documents = [$document];

		$form = $this->createForm(DocumentType::class, $documents, [
			'project'	=> $project,
			'series'	=> $series,
		]);

		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($document);

			// return $this->render('pages/engineering/new/_pannel.html.twig', [
			// 	'form' => $form,
			// ]);

			//try block in case a duplicated codification detected through UniqueCodificationListener
			try {
				$entityManager->flush();
			} catch (\Exception $e) {
				$form->addError(new FormError($e->getMessage()));
				return $this->render('pages/engineering/new/_pannel.html.twig', [
					'form' => $form,
				]);
			}
			
			$this->addFlash('success', 'New document created');

			return $this->renderSuccess($request, 'versionNew', [
				'project'	=> $project->getId(),
				'versions'	=> $request->get('versions')
			]);
		} else {
			return $this->render('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	/**
	 * Query parameters :
	 * 	+ array		series			array of serie ids that will be used for serie selector in the form if versions is empty
	 * 	+ array		versions		array of version ids that will be used for serie selector in the form
	 */
	#[Route(path: '/project/{project}/serie/document/edit', name: 'documentEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		$series = $this->serieRepository->getSeriesByVersionIds($request->get('versions'));
		$documents = $this->documentRepository->getDocumentsByVersionsId($request->get('versions'));
		
		$serie = reset($series);

		$this->denyAccessUnlessGranted('DOCUMENT_EDIT', $serie);

		$form = $this->createForm(DocumentType::class, $documents, [
			'project'	=> $project,
			'series'	=> $series,
		]);

		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();

			//try block in case a duplicated codification detected through UniqueCodificationListener
			try {
				$entityManager->flush();
			} catch (\Exception $e) {
				$form->addError(new FormError($e->getMessage()));
				return $this->render('pages/engineering/new/_pannel.html.twig', [
					'form' => $form,
				]);
			}

			$this->addFlash('success', 'Documents updated');

			//fermeture modal à traiter
			return $this->renderSuccess($request, 'versionNew', [
				'project'	=> $project->getId(),
				'versions'	=> $request->get('versions')
			]);
			
		} else {
			return $this->render('pages/engineering/edit/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/move', name: 'documentMove')]
	public function move(Request $request) : Response
	{
		//todo: à remplacer
		//$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->render('ajax/error.html.twig');
		}
		$document = reset($documents);
		$currentSerie = $document->getSerie();
		$series = $this->serieRepository->getSeriesExcept($currentSerie);

		$this->denyAccessUnlessGranted('DOCUMENT_MOVE', $document);

		$form = $this->createForm(SerieChangeType::class, null, [
			'current_serie' => $currentSerie,
			'series' => $series,
		]);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			
			$newSerie = $form->get('serie')->getData();
			foreach ($documents as $document) {
				$document->setSerie($newSerie);
				$entityManager->persist($document);
			}
			
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('The document has been successfully moved'));
			return new Response();
		} else {
			$request->query->remove('id');
			return $this->render('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/delete', name: 'documentDelete', methods: ['GET', 'DELETE'])]
	public function delete(Request $request) : Response
	{
		//todo: à remplacer
		//$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->render('ajax/error.html.twig');
		}
		$document = reset($documents);

		$this->denyAccessUnlessGranted('DOCUMENT_DELETE', $document);

		$form = $this->createDeleteForm($document);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			
			foreach ($documents as $document) {
			   $entityManager->remove($document);
			}
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('deleted.document', ['count' => count($documents)]));
			return new Response();
		} else {
			return $this->render('ajax/delete.html.twig', [
				'entities' => $documents,
				'form' => $form,
			]);
		}
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
	
	private function isMultiple($form, string $id): bool
	{
		if ($form->has($id . '_multiple')) {
			if ($form->get($id . '_multiple')->getData() == 1) return true;
		}
		return false;
	}
}

?>
