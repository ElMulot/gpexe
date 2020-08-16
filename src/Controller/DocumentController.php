<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Form\DocumentType;
use App\Service\DocumentService;
use App\Service\FieldService;
use App\Repository\CompanyRepository;
use App\Repository\UserRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;
use App\Repository\SerieRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use App\Repository\VueRepository;

class DocumentController extends AbstractController
{
	const MAX_RECORDS = 5;
		
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
		$vues = $this->vueRepository->getVues($project, $this->getUser());
		
		if ($serie === null) {
			$company = null;
			$series = $this->serieRepository->getSeriesByType($project, $type);
			$fields = $this->fieldService->getFieldsWithForms($project, $series);
		} else {
			$company = $serie->getCompany();
			$series = $this->serieRepository->getSeries($project, $company);
			$fields = $this->fieldService->getFieldsWithForms($project, $series);
		}
		
		return $this->render('document/index.html.twig', [
			'project' => $project,
			'serie' => $serie,
			'type' => $type,
			'company' => $company,
			'series' => $series,
			'vues' => $vues,
			'fields' => $fields,
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $project->getId(),
			]),
		]);
	}
	
	public function table(Request $request, Project $project, string $type, Serie $serie = null): Response
	{
		
		if ($vueId = $request->query->get('vue')) {
			if ($vue = $this->vueRepository->getVueById($vueId)) {
				$request->query->replace($vue->getValue());
				$request->query->set('vue', $vueId);
			} else {
				$request->query->remove('vue');
			}
		}
		
		if ($request->query->all() == false) {
 			if ($vue = $this->vueRepository->getDefaultVue($project, $this->getUser())) {
 				$vueId = $vue->getId();
 				$request->query->replace($vue->getValue());
 				$request->query->set('vue', $vueId);
 			} else {
 				$request->query->set('display', $this->getDefaultDisplay());
			}
		}
		
		$request->query->set('page', $request->query->get('page') ?? 1);
		
		if ($serie === null) {
			$series = $this->serieRepository->getSeriesByType($project, $type);
		} else {
			$series = [$serie];
		}
		
		$versionsCount = $this->versionRepository->getVersionsCount($series, $request);
		$versions = $this->versionRepository->getVersionsArray($project, $series, $request);
		
		return new JsonResponse([
			'versions' => $versions,
			'query' => $request->query->all(),
			'pageMax' => ceil($versionsCount/self::MAX_RECORDS),
			'flash' =>$this->get('session')->getFlashBag()->all(),
		]);
		
	}
	
	public function detail(Version $version): Response
	{
		$document = $version->getDocument();
		$project = $document->getSerie()->getProject();
		
	    return $this->render('document/detail.html.twig', [
	        'current_version' => $version,
	    	'versions' => $this->versionRepository->getVersionsByDocument($document),
	    	'document' => $document,
	    ]);
	}

	public function new(Request $request, Serie $serie): Response
	{
		$document = new Document();
		$document->setSerie($serie);
		$project = $serie->getProject();

		$form = $this->createForm(DocumentType::class, $document, [
			'project' => $project
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->codificationRepository->getCodifications($project) as $codification) {
				
				$value = $form->get($codification->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $codification->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				$document->setCodificationValue($codification, $value);
			}
			
			if ($this->documentService->validateReference($document) === false) {
				$this->addFlash('danger', 'The reference  \'' . $document->getReference() . '\' already exist');
				$view = $form->createView();
				return $this->render('ajax/form.html.twig', [
					'form' => $view,
				]);
			}
			
			foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				$document->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($document);
			$entityManager->flush();

			return $this->redirectToRoute('version_new', [
				'id' => $document->getId()
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
			$this->addFlash('danger', 'None documents selected');
			return $this->render('ajax/error.html.twig');
		}
		
		$document = $documents[0];
		
		if (count($documents) > 1) {
			$this->addFlash('danger', 'Only one reference must be selected');
			return $this->render('ajax/error.html.twig');
		}
		
		$project = $document->getSerie()->getProject();
		
		$form = $this->createForm(DocumentType::class, $document, [
			'project' => $project
		]);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			foreach ($this->codificationRepository->getCodifications($project) as $codification) {
				$value = $form->get($codification->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $codification->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				$document->setCodificationValue($codification, $value);
			}
			
			foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
				$value = $form->get($metadata->getCodeName())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				$document->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($document);
			$entityManager->flush();
			
			$request->query->remove('id');
			$this->addFlash('success', 'Document updated');
			return new Response();
		} else {
			$view = $form->createView();
			$request->query->remove('id');
			return $this->render('ajax/form.html.twig', [
				'form' => $view
			]);
		}
	}
	
	public function delete(Request $request, Document $document=null): Response
	{
	    	        
        $documents = $this->documentRepository->getDocumentsByRequest($request);
        
        if ($documents == false) {
        	$this->addFlash('danger', 'None documents selected');
        	return $this->render('ajax/error.html.twig');
        }
        
        $document = $documents[0];
        
	    if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
	        $entityManager = $this->getDoctrine()->getManager();
	        
	        foreach ($documents as $document) {
	           $entityManager->remove($document);
	        }
	        $entityManager->flush();
	        
	        $this->addFlash('success', 'deleted.document');
	        $this->addFlash('_count', count($documents));
	        
	        return new Response();
	    } else {
	        return $this->render('ajax/delete.html.twig', [
	            'entities' => $documents,
	        ]);
	    }
	    
	}
	
	private function getDefaultDisplay() {
		
		return [
			'document_reference' => '20',
			'version_name' => '10',
			'document_name' => '50',
			'version_scheduled_date' => '10',
			'version_delivery_date' => '10',
			'version_is_required' => '10',
			'status_value' => '10',
		];
	}
	
}

?>
