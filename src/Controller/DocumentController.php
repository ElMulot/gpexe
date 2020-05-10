<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Codification;
use App\Entity\CodificationValue;
use App\Entity\Metadata;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Review;
use App\Form\SelectorsType;
use App\Form\DocumentType;
use App\Form\ReviewType;
use App\Repository\CompanyRepository;
use App\Repository\UserRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;
use App\Repository\SerieRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;

class DocumentController extends AbstractController
{
	const MAX_RECORDS = 50;
		
	private $translator;
	
	private $companyRepository;
	
	private $userRepository;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, UserRepository $userRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->userRepository = $userRepository;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
		$this->serieRepository = $serieRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
	}
	
	public function index(Request $request, Serie $serie): Response
	{
		$project = $serie->getProject();
		$metadatas = $this->metadataRepository->getMetadatas($project);
		$checkerCompanies = $this->companyRepository->getCheckerCompanies($project);
		$series = $this->serieRepository->getSeries($project, $serie->getCompany());
		
		$columns = [
			'document[reference]' => [
				'name' => $this->translator->trans('Reference'),
				'type' => Metadata::LIST,
				'id' => 'document_reference',
				'display' => true,
			],
			'version[name]' => [
				'name' => $this->translator->trans('Version'),
				'type' => Metadata::TEXT,
				'id' => 'version_name',
				'display' => true,
			],
			'document[name]' => [
				'name' => $this->translator->trans('Name'),
				'type' => Metadata::TEXT,
				'id' => 'document_name',
				'display' => true,
			],
			'version[date]' => [
				'name' => $this->translator->trans('Date'),
				'type' => Metadata::DATE,
				'id' => 'version_date',
				'display' => true,
			],
		    'version[initialDate]' => [
		    	'name' => $this->translator->trans('Initial Date'),
		    	'type' => Metadata::DATE,
		    	'id' => 'version_initialDate',
		    	'display' => true,
		    ],
			'version[isRequired]' => [
				'name' => $this->translator->trans('Is required'),
				'type' => Metadata::BOOLEAN,
				'id' => 'version_isRequired',
				'display' => true,
			],
			'version[writer]' => [
				'name' => $this->translator->trans('Writer'),
				'type' => Metadata::LIST,
				'id' => 'version_writer',
				'display' => true,
			],
			'version[checker]' => [
				'name' => $this->translator->trans('Checker'),
				'type' => Metadata::LIST,
				'id' => 'version_checker',
				'display' => true,
			],
			'version[approver]' => [
				'name' => $this->translator->trans('Approver'),
				'type' => Metadata::LIST,
				'id' => 'version_approver',
				'display' => true,
			],
			'serie[name]' => [
				'name' => $this->translator->trans('Serie name'),
				'type' => Metadata::LIST,
				'id' => 'serie_name',
				'display' => true,
			],
			'serie[company]' => [
				'name' => $this->translator->trans('Company'),
				'type' => Metadata::LIST,
				'id' => 'serie_company',
				'display' => true,
			],
			'status[name]' => [
				'name' => $this->translator->trans('Status name'),
				'type' => Metadata::TEXT,
				'id' => 'status_name',
				'display' => true,
			],
			'status[value]' => [
				'name' => $this->translator->trans('Status value'),
				'type' => Metadata::LIST,
				'id' => 'status_value',
				'display' => true,
			],
			'status[type]' => [
				'name' => $this->translator->trans('Status type'),
				'type' => Metadata::LIST,
				'id' => 'status_type',
				'display' => true,
			],
		];
		
		foreach ($metadatas as $metadata) {
			$columns[$metadata->getFullId()] = [
				'name' => $metadata->getName(),
				'type' => $metadata->getType(),
				'id' => $metadata->getSnakeCaseFullId(),
				'display' => true,
			];
		}
		
		foreach ($checkerCompanies as $company) {
			if (!$project->getVisasByCompany($company)->isEmpty()) {
				$columns['visa[' . $company->getId() . ']'] = [
					'name' => $company->getName(),
					'type' => Metadata::LIST,
					'id' => 'visa_' . $company->getId(),
					'display' => true,
				];
			}
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
		
		$form = $this->createForm(SelectorsType::class, $request, [
			'metadatas' => $metadatas,
			'series' => $series,
			'checkerCompanies' => $checkerCompanies,
			'current_serie' => $serie,
			'project' => $project,
			'columns' => $columns,
		]);
		$view = $form->createView();
		
		$versions = $this->versionRepository->getVersions($serie, $request);
		$page_max = ceil(count($versions)/self::MAX_RECORDS);
		
		return $this->render('document/index.html.twig', [
			'current_serie' => $serie,
			'series' => $series,
			'versions' => $versions,
			'columns' => $columns,
			'page_max' => $page_max,
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $serie->getProject()->getId(),
			]),
			'form' => $view,
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
				$value = $form->get('c_' . $codification->getId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $codification->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'id' => $document->getSerie()->getId(),
						]),
						'form' => $view,
					]);
				}
				
				$document->setCodificationValue($codification, $value);
			}
			
			foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
				$value = $form->get('m_' . $metadata->getId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'id' => $document->getSerie()->getId(),
						]),
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
			
			foreach ($this->codificationRepository->getCodifications($project) as $codification) {
				$value = $form->get('c_' .  $codification->getId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $codification->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'id' => $serie->getId(),
						]),
						'form' => $view,
					]);
				}
				
				$document->setCodificationValue($codification, $value);
			}
			
			foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
				$value = $form->get('m_' . $metadata->getId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', 'The field  \'' . $metadata->getName() . '\' must not be empty');
					$view = $form->createView();
					return $this->render('generic/form.html.twig', [
						'route_back' =>  $this->generateUrl('document', [
							'id' => $serie->getId(),
						]),
						'form' => $view,
					]);
				}
				
				$document->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($document);
			$entityManager->flush();
			
			$request->query->remove('id');
			return $this->redirectToRoute('document', array_merge([
				'id' => $serie->getId(),
			],
			$request->query->all())
			);
		} else {
			$view = $form->createView();
			$request->query->remove('id');
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', array_merge([
					'id' => $serie->getId(),
				],
				$request->query->all())),
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
