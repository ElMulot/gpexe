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
use App\Entity\Status;
use App\Entity\Review;
use App\Form\SelectType;
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
		
		$codifications = $this->codificationRepository->getCodifications($project);
		
		$codificationTable = [];
		foreach ($codifications as $codification) {
			if ($codification->isList()) {
				$codificationControls[] = [
					'full_id' 				=> $codification->getFullId(),
					'snake_case_full_id' 	=> $codification->getSnakeCaseFullId(),
					'title' 					=> $codification->getName(),
					'multiple'				=> true,
					'choices' 				=> $codification->getCodificationItems(),
				];
			}
		}
		
		$writers = ($serie)?$this->userRepository->getUsersByCompany($serie->getCompany()):$this->userRepository->getUsers();
		$checkers = $this->userRepository->getCheckers($project);
		
		$columns = [
			'document[reference]' => [
				'id' => 'document_reference',
				'title' => $this->translator->trans('Reference'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => false,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => $codificationControls,
					])
					->createView(),
			],
			'version[name]' => [
				'id' => 'version_name',
				'title' => $this->translator->trans('Version'),
				'type' => Metadata::TEXT,
				'display' => true,
				'sort' => true,
			],
			'document[name]' => [
				'id' => 'document_name',
				'title' => $this->translator->trans('Name'),
				'type' => Metadata::TEXT,
				'display' => true,
				'sort' => true,
			],
			'version[date]' => [
				'id' => 'version_date',
				'title' => $this->translator->trans('Date'),
				'type' => Metadata::DATE,
				'display' => true,
				'sort' => true,
			],
		    'version[initialDate]' => [
		    	'id' => 'version_initialDate',
		    	'title' => $this->translator->trans('Initial Date'),
		    	'type' => Metadata::DATE,
		    	'display' => true,
		    	'sort' => true,
		    ],
			'version[isRequired]' => [
				'id' => 'version_isRequired',
				'title' => $this->translator->trans('Is required'),
				'type' => Metadata::BOOLEAN,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'version[isRequired]',
								'snake_case_full_id' => 'version_isRequired',
								'title' => $this->translator->trans('Is required'),
								'multiple' => false,
								'choices' => [
									'Yes' => '1',
									'No' => '0',
								],
							],
						],
					])
					->createView(),
			],
			'version[writer]' => [
				'id' => 'version_writer',
				'title' => $this->translator->trans('Writer'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'version[writer]',
								'snake_case_full_id' => 'version_writer',
								'title' => $this->translator->trans('Writer'),
								'multiple' => true,
								'choices' => $writers,
							],
						],
					])
					->createView(),
			],
			'version[checker]' => [
				'id' => 'version_checker',
				'title' => $this->translator->trans('Checker'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'version[checker]',
								'snake_case_full_id' => 'version_checker',
								'title' => $this->translator->trans('Checker'),
								'multiple' => true,
								'choices' => $checkers,
							],
						],
					])
					->createView(),
			],
			'version[approver]' => [
				'id' => 'version_approver',
				'title' => $this->translator->trans('Approver'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'version[approver]',
								'snake_case_full_id' => 'version_approver',
								'title' => $this->translator->trans('Approver'),
								'multiple' => true,
								'choices' => $checkers,
							],
						],
					])
					->createView(),
			],
			'serie[name]' => [
				'id' => 'serie_name',
				'title' => $this->translator->trans('Serie name'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'serie[name]',
								'snake_case_full_id' => 'serie_name',
								'title' => $this->translator->trans('Serie name'),
								'multiple' => true,
								'choices' => $series,
							],
						],
					])
					->createView(),
			],
			'serie[company]' => [
				'id' => 'serie_company',
				'title' => $this->translator->trans('Company'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'serie[company]',
								'snake_case_full_id' => 'serie_company',
								'title' => $this->translator->trans('Company'),
								'multiple' => true,
								'choices' => $this->companyRepository->getCompaniesByProject($project),
							],
						],
					])
					->createView(),
			],
			'status[name]' => [
				'id' => 'status_name',
				'title' => $this->translator->trans('Status name'),
				'type' => Metadata::TEXT,
				'display' => true,
				'sort' => true,
			],
			'status[value]' => [
				'id' => 'status_value',
				'title' => $this->translator->trans('Status value'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'status[value]',
								'snake_case_full_id' => 'status_value',
								'title' => $this->translator->trans('Status value'),
								'multiple' => true,
								'choices' => $this->statusRepository->getStatuses($project),
							],
						],
					])
					->createView(),
			],
			'status[type]' => [
				'id' => 'status_type',
				'title' => $this->translator->trans('Status type'),
				'type' => Metadata::LIST,
				'display' => true,
				'sort' => true,
				'form' => $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'status[type]',
								'snake_case_full_id' => 'status_typee',
								'title' => $this->translator->trans('Status type'),
								'multiple' => true,
								'choices' => [
									$this->translator->trans('Information') => Status::INFORMATION,
									$this->translator->trans('Review') => Status::REVIEW,
									$this->translator->trans('Cancel') => Status::CANCEL,
									$this->translator->trans('As built') => Status::AS_BUILT,
								],
							],
						],
					])
					->createView(),
			],
		];
		
		foreach ($metadatas as $metadata) {
			
			switch ($metadata->getType()) {
				
				case Metadata::BOOLEAN:
					$columns[$metadata->getFullId()] = [
						'id' => $metadata->getSnakeCaseFullId(),
						'title' => $metadata->getName(),
						'type' => Metadata::BOOLEAN,
						'display' => true,
						'sort' => false,
						'form' => $this->createForm(SelectType::class, null, [
								'controls' => [
									[
										'full_id' => $metadata->getFullId(),
										'snake_case_full_id' => $metadata->getSnakeCaseFullId(),
										'title' => $metadata->getName(),
										'multiple' => false,
										'choices' => [
											'Yes' => '1',
											'No' => '0',
										],
									],
								],
							])
							->createView(),
					];
					break;
					
				case Metadata::LIST:
					$columns[$metadata->getFullId()] = [
						'id' => $metadata->getFullId(),
						'title' => $metadata->getName(),
						'type' => Metadata::LIST,
						'display' => true,
						'sort' => false,
						'form' => $this->createForm(SelectType::class, null, [
								'controls' => [
									[
										'full_id' => $metadata->getFullId(),
										'snake_case_full_id' => $metadata->getSnakeCaseFullId(),
										'title' => $metadata->getName(),
										'multiple' => true,
										'choices' => $metadata->getMetadataItems(),
									],
								],
							])
							->createView(),
					];
					break;
			}
		}
		
		foreach ($checkerCompanies as $company) {
			if (!$project->getVisasByCompany($company)->isEmpty()) {
				$columns['visa[' . $company->getId() . ']'] = [
					'id' => 'visa_' . $company->getId(),
					'title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
					'type' => Metadata::LIST,
					'display' => true,
					'sort' => false,
					'form' => $this->createForm(SelectType::class, null, [
							'controls' => [
								[
									'full_id' => 'visa[' . $company->getId() . ']',
									'snake_case_full_id' => 'visa_' . $company->getId(),
									'title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
									'multiple' => true,
									'choices' => $project->getVisasByCompany($company),
								],
							],
						])
						->createView(),
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
