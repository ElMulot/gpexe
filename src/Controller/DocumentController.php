<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use App\Entity\Codification;
use App\Entity\CodificationValue;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Review;
use App\Form\DocumentType;
use App\Form\ReviewType;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;

class DocumentController extends AbstractController
{
	private $encoder;
	
	private $translator;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	public function __construct(TranslatorInterface $translator, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository)
	{
		$this->encoder = new JsonEncoder();
		$this->translator = $translator;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->serieRepository = $serieRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
	}
	
	public function index(Request $request, Serie $serie): Response
	{
		$project = $serie->getProject();
		$series = $this->serieRepository->getSeries($project, $serie->getCompany());
		$codifications = $this->codificationRepository->getCodifications($project);
		$metadatas = $this->metadataRepository->getMetadatas($project);
		
		$columns = [
			'reference' => ['name' => $this->translator->trans('Reference'),	'display' => true],
			'version' 	=> ['name' => $this->translator->trans('Version'), 		'display' => true],
			'name' 		=> ['name' => $this->translator->trans('Name'), 		'display' => true],
			'date'		=> ['name' => $this->translator->trans('Date'), 		'display' => true],
			'writer' 	=> ['name' => $this->translator->trans('Writer'), 		'display' => true],
			'checker' 	=> ['name' => $this->translator->trans('Checker'), 		'display' => true],
			'approver' 	=> ['name' => $this->translator->trans('Approver'), 	'display' => true],
		];
		
		foreach ($metadatas as $metadata) {
			$columns[$metadata->getId()] = ['name' => $metadata->getName(), 'display' => true];
		}
		
		
		if ($request->query->has('hide')) {
			$hiddenColumns = $request->query->get('hide');
		} else {
			$hiddenColumns = [];
		}
		foreach ($columns as $key => $column) {
			if (in_array($key, $hiddenColumns)) {
				$columns[$key]['display'] = false;
			}
		}
		
		$versions = $this->versionRepository->getVersions($serie, $request);
		$page_max = ceil(count($versions)/1);
		
		return $this->render('document/index.html.twig', [
			'codifications' => $codifications,
			'metadatas' => $metadatas,
			'current_serie' => $serie,
			'series' => $series,
			'versions' => $versions,
			'columns' => $columns,
			'page_max' => $page_max,
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $serie->getProject()->getId(),
			]),
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
			
			$codifications = $project->getCodifications()->getValues();

			foreach ($codifications as $codification) {
				$value = $form->get('c_' . $codification->getId())->getData();
				$document->setCodificationValue($codification, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($document);
			$entityManager->flush();

			return $this->redirectToRoute('version_new', [
				'id' => $document->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', [
					'id' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
	}
	
	public function edit(Request $request, Document $document=null): Response
	{
		
		if (!$document) { //cas d'une édition depuis la vue principale
			
			$documents = $this->documentRepository->getDocumentsByRequest($request);
			if (!$documents) {
				return $this->redirectToRoute('project');
			}
			
			if (count($documents) > 1) {
				$this->addFlash('danger', 'Only one reference must be selected');
				return $this->redirectToRoute('document', [
					'id' => $documents[0]->getSerie()->getId()
				]);
			}
			
			$document = $documents[0];
			
		}
		
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		$form = $this->createForm(DocumentType::class, $document, [
			'project' => $project
		]);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$codifications = $project->getCodifications()->getValues();
			
			foreach ($codifications as $codification) {
				$value = $form->get('c_' .  $codification->getId())->getData();
				$document->setCodificationValue($codification, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($document);
			$entityManager->flush();
			
			return $this->redirectToRoute('document', [
			    'id' => $serie->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', [
					'id' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
	}
	
	public function delete(Request $request, Document $document=null): Response
	{
	    
	    if (!$document) { //cas d'une suppression depuis la vue principale
	        
	        $documents = $this->documentRepository->getDocumentsByRequest($request);
	        
	        if (!$documents) {
	            return $this->redirectToRoute('project');
	        }
	        
	        $document = $documents[0];
	        
	    }
	    
	    $serie = $document->getSerie();
	    
	    if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
	        $entityManager = $this->getDoctrine()->getManager();
	        
	        foreach ($documents as $document) {
	           $entityManager->remove($document);
	        }
	        $entityManager->flush();
	        
	        $this->addFlash('success', 'deleted.document');
	        $this->addFlash('_count', count($documents));
	        return $this->redirectToRoute('document', [
	            'id' => $serie->getId()
	        ]);
	    } else {
	        return $this->render('generic/delete.html.twig', [
	            'route_back' =>  $this->generateUrl('document', [
	                'id' => $serie->getId(),
	            ]),
	            'entities' => $documents,
	        ]);
	    }
	    
	}
	
}

?>
