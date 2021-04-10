<?php
namespace App\Controller;

use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Version;
use App\Form\DocumentType;
use App\Form\SerieChangeType;
use App\Repository\CodificationRepository;
use App\Repository\CompanyRepository;
use App\Repository\DocumentRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;
use App\Repository\VersionRepository;
use App\Repository\VueRepository;
use App\Service\DocumentService;
use App\Service\FieldService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class DocumentController extends AbstractController
{
	
	private $translator;
	
	private $documentService;
	
	private $fieldService;
	
	private $companyRepository;
	
	private $userRepository;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	private $vueRepository;
	
	public function __construct(TranslatorInterface $translator, DocumentService $documentService, FieldService $fieldService, CompanyRepository $companyRepository, UserRepository $userRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, VueRepository $vueRepository)
	{
		$this->translator = $translator;
		$this->documentService = $documentService;
		$this->fieldService = $fieldService;
		$this->companyRepository = $companyRepository;
		$this->userRepository = $userRepository;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
		$this->serieRepository = $serieRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->vueRepository = $vueRepository;
	}
	
	public function index(Project $project, string $type, Serie $serie = null): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($serie === null) {
			$company = null;
			if ($this->getUser()->getCompany()->isMainContractor() === false) {
				return $this->redirectToRoute('project');
			}
		} else {
			$company = $serie->getCompany();
			if ($this->getUser()->getCompany()->isMainContractor() === false && $this->getUser()->getCompany() !== $serie->getCompany()) {
				return $this->redirectToRoute('project');
			}
		}
		
		return $this->render('document/index.html.twig', [
			'project' => $project,
			'currentSerie' => $serie,
			'type' => $type,
			'currentCompany' => $company,
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
		]);
	}
	
	public function fields(Project $project, string $type, Serie $serie = null): Response
	{
		if ($serie === null) {
			$company = null;
			$series = $this->serieRepository->getSeriesByTypeAsArray($project, $type);
			$fields = $this->fieldService->getFieldsForJs($project, $series);
		} else {
			$company = $serie->getCompany();
			$series = $this->serieRepository->getSeriesByCompanyAsArray($project, $company);
			$fields = $this->fieldService->getFieldsForJs($project, $series);
		}
		return new JsonResponse([
			'series' => $series,
			'fields' => $fields,
		]);
	}
	
	public function table(Request $request, Project $project, string $type, Serie $serie = null): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$page = max((int)$request->query->get('page') ?? 1, 1);
		$request->query->remove('page');
		
		if ($vueId = $request->query->get('vue')) {
			if ($vue = $this->vueRepository->getVueById($vueId)) {
				$request->query->replace($vue->getValue());
				$request->query->set('vue', $vueId);
			} else {
				$request->query->remove('vue');
			}
		}
		
		if ($serie === null) {
			if ($this->getUser()->getCompany()->isMainContractor() === false) {
				throw $this->createAccessDeniedException();
			}
			$series = $this->serieRepository->getSeriesByTypeAsArray($project, $type);
			$serieId = 0;
		} else {
			if ($this->getUser()->getCompany()->isMainContractor() === false && $this->getUser()->getCompany() !== $serie->getCompany()) {
				throw $this->createAccessDeniedException();
			}
			$series = [$serie];
			$serieId = $serie->getId();
		}
		
		$codifications = $this->codificationRepository->getCodifications($project);
		$fields = $this->fieldService->getFields($project);
		
		if ($request->query->all() == false) {
			if ($vue = $this->vueRepository->getDefaultVueByProjectAndByUser($project, $this->getUser())) {
				$vueId = $vue->getId();
				$request->query->replace($vue->getValue());
				$request->query->set('vue', $vueId);
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
		
		$versions = $this->versionRepository->getVersionsAsArray($codifications, $fields, $series, $project, $request);
		
		$serializer = new Serializer([new DateTimeNormalizer(['datetime_format' => 'd-m-Y'])]);
		
		return new JsonResponse([
				'datas' => $serializer->normalize($versions),
				'pageMax' => $pageMax,
				'query' => $request->query->all(),
				'serie' => $serieId,
				'flash' =>$this->get('session')->getFlashBag()->all(),
			]
		);
	}
	
	public function detail(Version $version): Response
	{
		$document = $version->getDocument();
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && 
			$this->getUser()->getCompany()->isMainContractor() === false &&
			$this->getUser()->getCompany() !== $serie->getCompany()) {
			throw $this->createAccessDeniedException();
		}
		
	    return $this->render('document/detail.html.twig', [
	        'current_version' => $version,
	    	'versions' => $this->versionRepository->getVersionsByDocument($document),
	    	'document' => $document,
	    ]);
	}

	public function new(Request $request, Serie $serie): Response
	{
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}

		$document = new Document();
		$document->setSerie($serie);
		
		$form = $this->createForm(DocumentType::class, $document, [
			'serie' => $serie
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			$this->documentService->removeOrphans();
			$entityManager->flush();
			
			foreach ($this->codificationRepository->getCodifications($project) as $codification) {
				
				if ($codification->isFixed()) {
					continue;
				}
				
				$value = $form->get($codification->getFullId())->getData();
				
				if ($value === null && $codification->getIsMandatory()) {
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $codification->getName()]));
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				try {
					$document->setCodificationValue($codification, $value);
				} catch (\Error $e) {
					$this->addFlash('danger', $e->getMessage());
				}
			}
			
			if ($this->documentService->validateReference($document) === false) {
				$this->addFlash('danger', $this->translator->trans('alreadyExist.reference', ['reference' => $document->getReference()]));
				$view = $form->createView();
				return $this->render('ajax/form.html.twig', [
					'form' => $view,
				]);
			}
						
			foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
				$value = $form->get($metadata->getFullId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				try {
					$document->setMetadataValue($metadata, $value);
				} catch (\Error $e) {
					$this->addFlash('danger', $e->getMessage());
				}
			}
			
			$entityManager->persist($document);
			$entityManager->flush();
			
			return $this->redirectToRoute('version_new', [
				'document' => $document->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('ajax/form.html.twig', [
				'form' => $view,
			]);
		}
	}
	
	public function edit(Request $request): Response
	{			
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->render('ajax/error.html.twig');
		}
		
		$document = reset($documents);
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(DocumentType::class, $documents, [
			'serie' => $serie,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
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
						
						if ($value === null && $codification->getIsMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $codification->getName()]));
							$view = $form->createView();
							return $this->render('ajax/form.html.twig', [
								'form' => $view,
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
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				if ($form->has('name')) {
					$document->setName($form->get('name')->getData());
				}
				
				foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
					
					if ($this->isMultiple($form, $metadata->getFullId()) == false) {
						
						$value = $form->get($metadata->getFullId())->getData();
						
						if ($value === null && $metadata->getIsMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
							$view = $form->createView();
							return $this->render('ajax/form.html.twig', [
								'form' => $view,
							]);
						}
						
						try {
							$document->setMetadataValue($metadata, $value);
						} catch (\Error $e) {
							$this->addFlash('danger', $e->getMessage());
						}
					}
				}
				
				$entityManager->persist($document);
			}
			
			//check if any modified documents hasn't the same codification
			if (array_unique($references) != $references) {
				$this->addFlash('danger', $this->translator->trans('The same codification has been setting up to more than one document'));
				$view = $form->createView();
				return $this->render('ajax/form.html.twig', [
					'form' => $view,
				]);
			}
			
			$entityManager->flush();
			
			$request->query->remove('id');
			$this->addFlash('success', $this->translator->trans('Document updated'));
			return new Response();
		} else {
			$view = $form->createView();
			$request->query->remove('id');
			return $this->render('ajax/form.html.twig', [
				'form' => $view
			]);
		}
	}
	
	public function move(Request $request): Response
	{
		
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->render('ajax/error.html.twig');
		}
		
		$document = reset($documents);
		$currentSerie = $document->getSerie();
		$project = $currentSerie->getProject();
		$series = $this->serieRepository->getSeriesExcept($currentSerie);
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(SerieChangeType::class, null, [
			'current_serie' => $currentSerie,
			'series' => $series,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			
			$newSerie = $form->get('serie')->getData();
			foreach ($documents as $document) {
				$document->setSerie($newSerie);
				$entityManager->persist($document);
			}
			
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('The document has been successfully moved'));
			return new Response();
		} else {
			$view = $form->createView();
			$request->query->remove('id');
			return $this->render('ajax/form.html.twig', [
				'form' => $view
			]);
		}
		
	}
	
	public function delete(Request $request): Response
	{
		
        $documents = $this->documentRepository->getDocumentsByRequest($request);
        
        if ($documents == false) {
        	$this->addFlash('danger', $this->translator->trans('None documents selected'));
        	return $this->render('ajax/error.html.twig');
        }
        
        $document = reset($documents);
        $project = $document->getSerie()->getProject();
        
        if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
        	throw $this->createAccessDeniedException();
        }
        
	    if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
	        $entityManager = $this->getDoctrine()->getManager();
	        
	        foreach ($documents as $document) {
	           $entityManager->remove($document);
	        }
	        $entityManager->flush();
	        
	        $this->addFlash('success', $this->translator->trans('deleted.document', ['count' => count($documents)]));
	        return new Response();
	    } else {
	        return $this->render('ajax/delete.html.twig', [
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
