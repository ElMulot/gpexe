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
		return $this->renderForm('document/index.html.twig', [
			'project' => $project,
			'current_serie' => $serie,
			'type' => $type,
			'current_company' => $company,
			'route_back' =>  $this->generateUrl('project', [
				'project' => $project->getId(),
			]),
		]);
	}
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}/fields', name: 'document_fields', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
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
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}/table', name: 'document_table', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
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
		$maxResultsPerQuery = $request->query->get('max_results_per_page') ?? 50;
		if ($maxResultsPerQuery == 0) { //display all
			$pageMax = 1;
		} else {
			$pageMax = max(ceil($versionsCount / $maxResultsPerQuery), 1);
		}
		$request->query->set('max_results_per_page', $maxResultsPerQuery);
		$request->query->set('page', min($page, $pageMax));
		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $series, $project, $request);
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
	
	#[Route(path: '/project/{project}/serie/{type}/{serie}/export', name: 'document_export', requirements: ['project' => '\d+', 'type' => 'sdr|mdr|all', 'serie' => '\d+'], defaults: ['serie' => 0])]
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
		$request->query->set('max_results_per_page', 0);
		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $series, $project, $request);
		try {
			$this->programService->exportFromView($fields, $versions, $request);
		} catch (\Exception $e) {
			$this->addFlash('danger', $e->getMessage());
			$this->programService->unload();
			return $this->renderForm('ajax/error.html.twig');
		}
		$filePath = $this->programService->getCache()->getParameter('file_path');
		$pathParts = pathinfo($filePath);
		$this->programService->unload();
		return $this->renderForm('document/export.html.twig', [
			'file_path' => $this->uploadsDirectory . '/' . $pathParts['basename'],
		]);
	}
	
	#[Route(path: '/project/serie/document/{version}/detail', name: 'document_detail', requirements: ['version' => '\d+'])]
	public function detail(Version $version) : Response
	{
		$document = $version->getDocument();
		$this->denyAccessUnlessGranted('DOCUMENT_SHOW_DETAIL', $document);

		return $this->renderForm('pages/engineering/index/document/_detail.html.twig', [
			'current_version' => $version,
			'versions' => $this->versionRepository->getVersionsByDocument($document),
			'document' => $document,
			'serie' => $document->getSerie(),
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of document ids that will be used for serie selector in the form
	 */
	#[Route(path: '/project/{project}/document/new', name: 'document_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		
		$this->denyAccessUnlessGranted('DOCUMENT_NEW', $project);

		$document = new Document();
		
		try {
			$form = $this->createForm(DocumentType::class, [$document], [
				'project' => $project,
				'ids' => $request->get('id'),
			]);
		} catch (InternalErrorException $e) {
			$this->addFlash('warning', $e->getMessage());
			//todo : review path
			return $this->renderError($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		}

		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$this->documentService->removeOrphans();
			$entityManager->flush();
			
			// foreach ($this->codificationRepository->getCodifications($project) as $codification) {
				
			// 	if ($codification->isFixed()) {
			// 		continue;
			// 	}
				
			// 	$value = $form->get($codification->getFullId())->getData();
				
			// 	if ($value === null && $codification->isMandatory()) {
			// 		$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $codification->getName()]));
			// 		return $this->renderForm('ajax/form.html.twig', [
			// 			'form' => $form,
			// 		]);
			// 	}
				
			// 	try {
			// 		$document->setCodificationValue($codification, $value);
			// 	} catch (\Error $e) {
			// 		$this->addFlash('danger', $e->getMessage());
			// 	}
			// }
			
			// if ($this->documentService->validateReference($document) === false) {
			// 	$this->addFlash('danger', $this->translator->trans('alreadyExist.reference', ['reference' => $document->getReference()]));
			// 	return $this->renderForm('ajax/form.html.twig', [
			// 		'form' => $form,
			// 	]);
			// }
			
			// foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
			// 	$value = $form->get($metadata->getFullId())->getData();
				
			// 	if ($value === null && $metadata->isMandatory()) {
			// 		$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
			// 		return $this->renderForm('ajax/form.html.twig', [
			// 			'form' => $form,
			// 		]);
			// 	}
				
			// 	try {
			// 		$document->setMetadataValue($metadata, $value);
			// 	} catch (\Error $e) {
			// 		if ($metadata->isMandatory() === true) {
			// 			$this->addFlash('danger', $e->getMessage());
			// 			return $this->renderForm('ajax/form.html.twig', [
			// 				'form' => $form,
			// 			]);
			// 		}
			// 	}
			// }
			
			// $entityManager->persist($document);
			// $entityManager->flush();
			
			return $this->redirectToRoute('version_new', [
				'document' => $document->getId()
			]);
		} else {
			return $this->renderForm('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/edit', name: 'document_edit')]
	public function edit(Request $request) : Response
	{
		//todo: à remplacer
		//$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->renderForm('ajax/error.html.twig');
		}
		
		$document = reset($documents);
		$serie = $document->getSerie();
		$project = $serie->getProject();

		$this->denyAccessUnlessGranted('DOCUMENT_EDIT', $serie);

		$form = $this->createForm(DocumentType::class, $documents, [
			'serie' => $serie,
		]);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$this->documentService->removeOrphans();
			$entityManager->flush();
			
			$references = [];
			
			foreach ($documents as $document) {
				
				foreach ($this->codificationRepository->getCodifications($project) as $codification) {
					
					if ($codification->isFixed()) {
						continue;
					}
					
					if ($this->isMultiple($form, $codification->getFullId()) == false) {
						
						$value = $form->get($codification->getFullId())->getData();
						
						if ($value === null && $codification->isMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $codification->getName()]));
							return $this->renderForm('ajax/form.html.twig', [
								'form' => $form,
							]);
						}
						
						try {
							$document->setCodificationValue($codification, $value);
						} catch (\Error $e) {
							$this->addFlash('danger', $e->getMessage());
						}
					}
				}
				
				$references[] = $document->getReference();
				
				if ($this->documentService->validateReference($document) === false) {
					$this->addFlash('danger', $this->translator->trans('alreadyExist.reference', ['reference' => $document->getReference()]));
					return $this->renderForm('ajax/form.html.twig', [
						'form' => $form,
					]);
				}
				
				if ($form->has('name')) {
					$document->setName($form->get('name')->getData());
				}
				
				foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
					
					if ($this->isMultiple($form, $metadata->getFullId()) == false) {
						
						$value = $form->get($metadata->getFullId())->getData();
						
						if ($value === null && $metadata->isMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
							return $this->renderForm('ajax/form.html.twig', [
								'form' => $form,
							]);
						}
						
						try {
							$document->setMetadataValue($metadata, $value);
						} catch (\Error $e) {
							if ($metadata->isMandatory() === true) {
								$this->addFlash('danger', $e->getMessage());
								return $this->renderForm('ajax/form.html.twig', [
									'form' => $form,
								]);
							}
						}
					}
				}
				
				$entityManager->persist($document);
			}
			
			//check if any modified documents hasn't the same codification
			if (array_unique($references) != $references) {
				$this->addFlash('danger', $this->translator->trans('The same codification has been setting up to more than one document'));
				return $this->renderForm('ajax/form.html.twig', [
					'form' => $form,
				]);
			}
			
			$entityManager->flush();
			
			$request->query->remove('id');
			$this->addFlash('success', $this->translator->trans('Document updated'));
			return new Response();
		} else {
			$request->query->remove('id');
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/move', name: 'document_move')]
	public function move(Request $request) : Response
	{
		//todo: à remplacer
		//$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->renderForm('ajax/error.html.twig');
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
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/delete', name: 'document_delete', methods: ['GET', 'DELETE'])]
	public function delete(Request $request) : Response
	{
		//todo: à remplacer
		//$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->renderForm('ajax/error.html.twig');
		}
		$document = reset($documents);

		$this->denyAccessUnlessGranted('DOCUMENT_DELETE', $document);

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			
			foreach ($documents as $document) {
			   $entityManager->remove($document);
			}
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('deleted.document', ['count' => count($documents)]));
			return new Response();
		} else {
			return $this->renderForm('ajax/delete.html.twig', [
				'entities' => $documents,
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
			'version_is_required' => $fields['version.isRequired']['default_width'],
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
