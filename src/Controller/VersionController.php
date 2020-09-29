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
use App\Repository\StatusRepository;

class VersionController extends AbstractController
{
	private $translator;
	
	private $companyRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
	}
	
	public function detail(Version $version): Response
	{
		$document = $version->getDocument();
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			$this->createAccessDeniedException();
		}
		if ($this->getUser()->getCompany()->isMainContractor() === false && $this->getUser()->getCompany() !== $serie->getCompany()) {
			$this->createAccessDeniedException();
		}
		
		return $this->render('version/detail.html.twig', [
			'version' => $version,
			'document' => $document,
			'project' => $project,
			'checkers' => $this->companyRepository->getCheckerCompanies($project),
		]);
	}
	
	public function new(Request $request): Response
	{
		$version = new Version();
		
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		
		if ($documents == false) {
			$this->addFlash('danger', 'None documents selected');
			return $this->render('ajax/error.html.twig');
		}
	
		$document = $documents[0];
		
		if (count($documents) > 1) {
			$this->addFlash('danger', 'You must select only document');
			return $this->render('ajax/error.html.twig');
		}
		
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$status = $this->statusRepository->getDefaultStatus($project);
		
		$version->setDocument($document);
		$version->setStatus($status);
		
		$form = $this->createForm(VersionType::class, $version, [
			'serie' => $serie,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$version->setIsRequired($form->get('isRequired')->getData());
			if ($version->getIsRequired()) {
				$version->setScheduledDate($form->get('date')->getData());
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
					return $this->render('ajax/form.html.twig', [
						'form' => $view,
					]);
				}
				
				$version->setMetadataValue($metadata, $value);
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($version);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return new Response();
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
		$serie = $document->getSerie();
		$versions = $this->versionRepository->getVersions($request);
		
		if ($request->query->has('save')) {
			foreach ($versions as $version) {
				$version->setIsRequired(false);
			}
		}
		
		$project = $serie->getProject();	
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(VersionType::class, null, [
			'serie' => $serie,
			'versions' => $versions,
			'allow_extra_fields' => true,
		]);
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->getDoctrine()->getManager();
			
			foreach ($versions as $version) {
				
				if ($form->has('name')) {
					$version->setName($form->get('name')->getData());
				}
				
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
							return $this->render('ajax/form.html.twig', [
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
			return new Response();
		} else {
			$view = $form->createView();
			return $this->render('ajax/form.html.twig', [
				'form' => $view,
			]);
		}
	}
	
	public function delete(Request $request): Response
	{
	        
        $documents = $this->documentRepository->getDocumentsByRequest($request);
        
        if ($documents == false) {
            return $this->redirectToRoute('project');
        }
        
        $document = $documents[0];
        $project = $document->getSerie()->getProject();
        $versions = $this->versionRepository->getVersions($request);
	    
        if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
        	throw $this->createAccessDeniedException();
        }
        
	    if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
	        $entityManager = $this->getDoctrine()->getManager();
	        
	        foreach ($versions as $version) {
	            $entityManager->remove($version);
	        }
	        $entityManager->flush();
	        
	        $this->addFlash('success', 'deleted.version');
	        $this->addFlash('_count', count($versions));
	        
	        return new Response();
	    } else {
	        return $this->render('ajax/delete.html.twig', [
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
