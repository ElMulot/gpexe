<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Codification;
use App\Entity\CodificationValue;
use App\Entity\Metadata;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Status;
use App\Entity\Review;
use App\Entity\Vue;
use App\Form\SelectType;
use App\Form\DocumentType;
use App\Form\ReviewType;
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
	const MAX_RECORDS = 50;
		
	private $translator;
	
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
	
	public function __construct(TranslatorInterface $translator, FieldService $fieldService, CompanyRepository $companyRepository, UserRepository $userRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, VueRepository $vueRepository)
	{
		$this->translator = $translator;
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
	
	public function index(Serie $serie = null): Response
	{
		$project = $serie->getProject();
		$company = $serie->getCompany();
		$series = $this->serieRepository->getSeries($project, $company);
		$vues = $this->vueRepository->getVues($project, $this->getUser());
		$writers = ($serie)?$this->userRepository->getUsersByCompany($company):$this->userRepository->getUsers();
		$checkers = $this->userRepository->getCheckers($project);
		
		$codificationTable = [];
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			if ($codification->isList()) {
				$codificationControls[] = [
					'full_id' 				=> $codification->getFullDomName(),
					'snake_case_full_id' 	=> $codification->getFullDomId(),
					'title' 				=> $codification->getName(),
					'multiple'				=> true,
					'choices' 				=> $codification->getCodificationItems(),
					'choice_label' 			=> 'value',
				];
			}
		}
		
		$fields = $this->fieldService->getFields($project);
		
		$fields['document.reference']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => $codificationControls,
			])
			->createView();
		
		$fields['version.isRequired']['form'] = $this->createForm(SelectType::class, null, [
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
			->createView();
			
		$fields['version.writer']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'version[writer]',
						'snake_case_full_id' => 'version_writer',
						'title' => $this->translator->trans('Writer'),
						'multiple' => true,
						'choices' => $writers,
						'choice_label' => 'name',
					],
				],
			])
			->createView();
		
		$fields['version.checker']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'version[checker]',
						'snake_case_full_id' => 'version_checker',
						'title' => $this->translator->trans('Checker'),
						'multiple' => true,
						'choices' => $checkers,
						'choice_label' => 'name',
					],
				],
			])
			->createView();
		
		$fields['version.approver']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'version[approver]',
						'snake_case_full_id' => 'version_approver',
						'title' => $this->translator->trans('Approver'),
						'multiple' => true,
						'choices' => $checkers,
						'choice_label' => 'name',
					],
				],
			])
			->createView();
		
		$fields['serie.name']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'serie[name]',
						'snake_case_full_id' => 'serie_name',
						'title' => $this->translator->trans('Serie name'),
						'multiple' => true,
						'choices' => $series,
						'choice_label' => 'name',
					],
				],
			])
			->createView();
		
		$fields['serie.company']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'serie[company]',
						'snake_case_full_id' => 'serie_company',
						'title' => $this->translator->trans('Company'),
						'multiple' => true,
						'choices' => $this->companyRepository->getCompaniesByProject($project),
						'choice_label' => 'name',
					],
				],
			])
			->createView();
		
		$fields['status.value']['form'] = $this->createForm(SelectType::class, null, [
				'controls' => [
					[
						'full_id' => 'status[value]',
						'snake_case_full_id' => 'status_value',
						'title' => $this->translator->trans('Status value'),
						'multiple' => true,
						'choices' => $this->statusRepository->getStatuses($project),
						'choice_label' => 'value',
					],
				],
			])
			->createView();
		
		$fields['status.type']['form'] = $this->createForm(SelectType::class, null, [
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
			->createView();
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			
			switch ($metadata->getType()) {
				
				case Metadata::BOOLEAN:
					$fields[$metadata->getFullCodename()]['form'] = $this->createForm(SelectType::class, null, [
							'controls' => [
								[
									'full_id' => $metadata->getFullDomName(),
									'snake_case_full_id' => $metadata->getFullDomId(),
									'title' => $metadata->getName(),
									'multiple' => false,
									'choices' => [
										'Yes' => '1',
										'No' => '0',
									],
								],
							],
						])
						->createView();
					
					break;
					
				case Metadata::LIST:
					$fields[$metadata->getFullCodename()]['form'] = $this->createForm(SelectType::class, null, [
							'controls' => [
								[
									'full_id' => $metadata->getFullDomName(),
									'snake_case_full_id' => $metadata->getFullDomId(),
									'title' => $metadata->getName(),
									'multiple' => true,
									'choices' => $metadata->getMetadataItems(),
									'choice_label' => 'value',
								],
							],
						])
						->createView();
					
					break;
			}
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $checkerCompany) {
			if (!$project->getVisasByCompany($checkerCompany)->isEmpty()) {
				$fields['visa.' . $checkerCompany->getId()]['form'] = $this->createForm(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => 'visa[' . $checkerCompany->getId() . ']',
								'snake_case_full_id' => 'visa_' . $checkerCompany->getId(),
								'title' => $this->translator->trans('Visa') . ' ' . $checkerCompany->getName(),
								'multiple' => true,
								'choices' => $project->getVisasByCompany($checkerCompany),
								'choice_label' => 'name',
							],
						],
					])
					->createView();
			}
		}
		
		return $this->render('document/index.html.twig', [
			'project' => $project,
			'company' => $company,
			'series' => $series,
			'vues' => $vues,
			'fields' => $fields,
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $serie->getProject()->getId(),
			]),
		]);
	}
	
	public function table(Request $request, SerializerInterface $serializer, Serie $serie): Response
	{
		
		$project = $serie->getProject();
		
		$page = $request->query->get('page') ?? 1;
		
		if ($vueId = $request->query->get('vue')) {
			if ($vue = $this->vueRepository->getVueById($vueId)) {
				$request->query->replace($vue->getValue());
				$request->query->set('vue', $vueId);
			} else {
				$request->query->remove('vue');
			}
		}
		
		if (!$request->query->all()) {
			if ($vue = $this->vueRepository->getDefaultVue($project, $this->getUser())) {
				$vueId = $vue->getId();
				$request->query->replace($vue->getValue());
				$request->query->set('vue', $vueId);
			}
		}
		
		$request->query->set('page', $page);
		
		$versions = $this->versionRepository->getVersionsArray($this->fieldService->getFields($project), $serie, $request);
		$page_max = ceil(count($versions)/self::MAX_RECORDS);
		
		return new JsonResponse([
			'versions' => $versions,
			'query' => $request->query->all(),
			'pageMax' => $page_max,
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
				$value = $form->get($metadata->getCodeName())->getData();
				
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
				$value = $form->get($codification->getCodeName())->getData();
				
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
				$value = $form->get($metadata->getCodeName())->getData();
				
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
			return $this->redirectToRoute('document', $request->query->all() + [
				'id' => $serie->getId(),
			]);
		} else {
			$view = $form->createView();
			$request->query->remove('id');
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', $request->query->all() + [
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
