<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Form\VersionType;
use App\Repository\CompanyRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use App\Repository\MetadataRepository;

class VersionController extends AbstractController
{
	private $translator;
	
	private $companyRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	private $metadataRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, MetadataRepository $metadataRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->metadataRepository = $metadataRepository;
	}
	
	public function detail(Version $version): Response
	{
		$document = $version->getDocument();
		$project = $document->getSerie()->getProject();
		
		return $this->render('version/detail.html.twig', [
			'version' => $version,
			'document' => $document,
			'project' => $project,
			'checkers' => $this->companyRepository->getCheckerCompanies($project),
		]);
	}
	
	public function new(Request $request, Document $document=null): Response
	{
		$version = new Version();

		if (!$document) { //cas d'une création depuis la vue principale
			
			$documents = $this->documentRepository->getDocumentsByRequest($request);
			
			if ($documents === null) {
				return $this->redirectToRoute('project');
			}
			
			if (count($documents) > 1) {
				$this->addFlash('danger', 'You must select only document');
				return $this->redirectToRoute('document', [
					'id' => $document->getSerie()->getId()
				]);
			}
			
			$document = $documents[0];
			
		}
		
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		$version->setDocument($document);
		$version->setDate(new \DateTime('now'));
		
		
		$form = $this->createForm(VersionType::class, $version, [
			'serie' => $serie,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$version->setIsRequired($form->get('isRequired')->getData());
			if ($version->getIsRequired()) {
				$version->setInitialScheduledDate($form->get('date')->getData());
			} else {
				$version->setDeliveryDate($form->get('date')->getData());
			}
			$version->setStatus($form->get('status')->getData());
			$version->setWriter($form->get('writer')->getData());
			$version->setChecker($form->get('checker')->getData());
			$version->setApprover($form->get('approver')->getData());
			
			foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
				
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
				
				$version->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($version);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('document', [
				'id' => $document->getSerie()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', [
					'id' => $document->getSerie()->getId(),
				]),
				'form' => $view,
			]);
		}
	}
	
	public function edit(Request $request, Version $version=null): Response
	{
		
		if (!$version) { //cas d'une édition depuis la vue principale
			
			$documents = $this->documentRepository->getDocumentsByRequest($request);
			if (!$documents) {
				return $this->redirectToRoute('project');
			}
			
			$document = $documents[0];
			$serie = $document->getSerie();
			$versions = $this->versionRepository->getVersions($request);
			
		} else {
			
			$document = $version->getDocument();
			$serie = $document->getSerie();
			$versions[] = $version;
		}
		
		$project = $serie->getProject();	
		
		$form = $this->createForm(VersionType::class, null, [
			'serie' => $serie,
			'versions' => $versions,
			'allow_extra_fields' => true,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			
			foreach ($versions as $version) {
				
				if ($this->isMultiple($form, 'isRequired') == false) {
					$version->setIsRequired($form->get('isRequired')->getData());
				}
				
				if ($this->isMultiple($form, 'date') == false) {
					if ($version->getIsRequired()) {
						$version->setScheduledDate($form->get('date')->getData());
					} else {
						$version->setDeliveryDate($form->get('date')->getData());
					}
				}
				
				if ($this->isMultiple($form, 'status') == false) {
					$version->setStatus($form->get('status')->getData());
				}
				
				foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
					
					if ($this->isMultiple($form, $metadata->getCodeName()) == false) {
					
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
						
						$version->setMetadataValue($metadata, $value);
					}
				}
				
				if ($this->isMultiple($form, 'writer') == false) {
					$version->setWriter($form->get('writer')->getData());
				}
				
				if ($this->isMultiple($form, 'checker') == false) {
					$version->setChecker($form->get('checker')->getData());
				}
				
				if ($this->isMultiple($form, 'approver') == false) {
					$version->setApprover($form->get('approver')->getData());
				}
				
				$entityManager->persist($version);
			}
			
			$entityManager->flush();
			
			$this->addFlash('success', (count($versions) == 1)?'Entry updated':'Entries updated');
			return $this->redirectToRoute('document', [
				'id' => $serie->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', [
					'id' => $serie->getId(),
				]),
				'form' => $view,
			]);
		}
	}
	
	public function delete(Request $request, Version $version=null): Response
	{
	    
	    if (!$version) { //cas d'une édition depuis la vue principale
	        
	        $documents = $this->documentRepository->getDocumentsByRequest($request);
	        
	        if (!$documents) {
	            return $this->redirectToRoute('project');
	        }
	        
	        $document = $documents[0];
	        $serie = $document->getSerie();
	        $versions = $this->versionRepository->getVersions($request);
	        
	    } else {
	        
	        $document = $version->getDocument();
	        $serie = $document->getSerie();
	        $versions[] = $version;
	    }
	    
	    if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
	        $entityManager = $this->getDoctrine()->getManager();
	        
	        foreach ($versions as $version) {
	            $entityManager->remove($version);
	        }
	        $entityManager->flush();
	        
	        $this->addFlash('success', 'deleted.version');
	        $this->addFlash('_count', count($versions));
	        return $this->redirectToRoute('document', [
	            'id' => $serie->getId()
	        ]);
	    } else {
	        return $this->render('generic/delete.html.twig', [
	            'route_back' =>  $this->generateUrl('document', [
	                'id' => $serie->getId(),
	            ]),
	            'entities' => $versions,
	        ]);
	    }
	    
	}
	
	private function isMultiple($form, string $propertyName): bool
	{
		if ($form->has($propertyName . '_multiple')) {
			if ($form->get($propertyName . '_multiple')->getData() == 1) return true;
		}
		return false;
	}
	
}

?>
