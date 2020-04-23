<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Form\VersionType;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use PhpParser\Node\Stmt\Foreach_;

class VersionController extends AbstractController
{
	
	private $documentRepository;
	
	private $versionRepository;
	
	public function __construct(DocumentRepository $documentRepository, VersionRepository $versionRepository)
	{
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
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
			$version->setInitialDate($form->get('date')->getData());
			$version->setDate($form->get('date')->getData());
			$version->setIsRequired($form->get('isRequired')->getData());
			$version->setWriter($form->get('writer')->getData());
			$version->setChecker($form->get('checker')->getData());
			$version->setApprover($form->get('approver')->getData());
			
			
			$metadatas = $project->getMetadatas()->getValues();
			
			foreach ($metadatas as $metadata) {
				
				$id = $metadata->getId();
				
				$value = $form->get('m_' . $id)->getData();
				
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
	
	private function isMultiple($form, string $propertyName): bool
	{
		if ($form->has($propertyName . '_multiple')) {
			if ($form->get($propertyName . '_multiple')->getData() == 1) return true;
		}
		return false;
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
			$versions = $this->versionRepository->getVersions($serie, $request);
			
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
				
				if ($this->isMultiple($form, 'date') == false) {
					$version->setDate($form->get('date')->getData());
				}
				
				if ($this->isMultiple($form, 'isRequired') == false) {
					$version->setIsRequired($form->get('isRequired')->getData());
				}
				
				$metadatas = $project->getMetadatas()->getValues();
				
				foreach ($metadatas as $metadata) {
					
					$id = $metadata->getId();
					
					if ($this->isMultiple($form, 'm_' . $id) == false) {
					
						$value = $form->get('m_' . $id)->getData();
						
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
	        $versions = $this->versionRepository->getVersions($serie, $request);
	        
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
	
}

?>
