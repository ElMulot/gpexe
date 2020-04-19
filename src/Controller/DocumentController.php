<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Codification;
use App\Entity\CodificationValue;
use App\Form\DocumentType;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;

class DocumentController extends AbstractController
{
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	public function __construct(CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository)
	{
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
		
		$display = ['Checkbox o', 'Checkbox pas o', 'Date o', 'Date pas o', 'Liste o', 'Liste pas o', 'Text o', 'Text pas o'];
		foreach ($metadatas as $key => $metadata) {
			if (!in_array($metadata->getName(), $display)) {
				unset($metadatas[$key]);
			}
		}
		
		$versions = $this->versionRepository->getVersions($serie, $request);
		
		return $this->render('document/index.html.twig', [
			'codifications' => $codifications,
			'metadatas' => $metadatas,
			'current_serie' => $serie,
			'series' => $series,
			'versions' => $versions,
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $serie->getProject()->getId(),
			]),
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
				'page_title' => 'New document',
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
					
				if ($value === null && $codification->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $codification->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'page_title' => 'Edit Version',
						'route_back' =>  $this->generateUrl('document', [
							'id' => $document->getSerie()->getId(),
						]),
						'form' => $view,
					]);
				}
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
				'page_title' => 'New document',
				'route_back' =>  $this->generateUrl('document', [
					'id' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
		
		
		
		
		
		
		
		
		
		
		
		
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
				
				switch ($codification->getType()) {
					
					case Codification::FIXED:
						break;
						
					case Codification::LIST:
						$value = $form->get('c_' . $codification->getId())->getData();
						if ($value)
							$document->addCodificationItem($value);
							break;
							
					case Codification::REGEX:
						$value = $form->get('c_' . $codification->getId())->getData();
						if ($value) {
							$codificationValue = new CodificationValue();
							$codificationValue->setValue($value);
							$codificationValue->setCodification($codification);
							$codificationValue->setDocument($document);
							$document->addCodificationValue($codificationValue);
						}
						break;
				}
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
				'page_title' => 'New document',
				'route_back' =>  $this->generateUrl('document', [
					'id' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
	}
}

?>
