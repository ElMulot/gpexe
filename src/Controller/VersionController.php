<?php

namespace App\Controller;

use App\Entity\Company;
use App\Entity\Version;
use App\Entity\Document;
use App\Form\VersionType;
use App\Service\FieldService;
use App\Form\QuickVersionType;
use App\Service\DocumentService;
use App\Repository\StatusRepository;
use App\Service\AjaxRedirectService;
use App\Repository\CompanyRepository;
use App\Repository\VersionRepository;
use App\Repository\DocumentRepository;
use App\Repository\MetadataRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VersionController extends AbstractController
{
	private $translator;
	
	private $companyRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	private $ajaxRedirectService;
	
	private $documentService;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository, AjaxRedirectService $ajaxRedirectService, DocumentService $documentService, FieldService $fieldService)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
		$this->ajaxRedirectService = $ajaxRedirectService;
		$this->documentService = $documentService;
		$this->fieldService = $fieldService;
	}
	
	/**
	 * @Route("/project/serie/document/version/{version}/detail", name="version_detail", requirements={"version"="\d+"})
	 */
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
		
		return $this->renderForm('version/detail.html.twig', [
			'version' => $version,
			'document' => $document,
			'project' => $project,
			'checkers' => $this->companyRepository->getCheckerCompanies($project),
		]);
	}
	
	/**
	 * @Route("/project/serie/document/{document}/version/new", name="version_new", requirements={"document"="\d+"}, defaults={"document"=0})
	 */
	public function new(Request $request, Document $document = null): Response
	{
		
		if ($document === null) {
			$documents = $this->documentRepository->getDocumentsByRequest($request);
			if ($documents == false) {
				$this->addFlash('danger', $this->translator->trans('None documents selected'));
				return $this->renderForm('ajax/error.html.twig');
			}
			
			if (count($documents) > 1) {
				$this->addFlash('danger', $this->translator->trans('Only one reference must be selected'));
				return $this->renderForm('ajax/error.html.twig');
			}
			$document = reset($documents);
		}
		
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$version = new Version();
		$version->setDocument($document);
		if ($lastVersion = $document->getLastVersion()) {
			$version->setStatus($lastVersion->getStatus());
			$version->setWriter($lastVersion->getWriter());
			$version->setChecker($lastVersion->getChecker());
			$version->setApprover($lastVersion->getApprover());
			foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
				if ($metadata->isBoolean() || $metadata->isList() || $metadata->getIsMandatory()) {
					try {
						$version->setMetadataValue($metadata, $lastVersion->getMetadataValue($metadata));
					} catch (\Error $e) {
						continue;
					}
				}
			}
		} else {
			$version->setStatus($this->statusRepository->getDefaultStatus($project));
		}
		
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
				
				$value = $form->get($metadata->getFullId())->getData();
				
				if ($value === null && $metadata->getIsMandatory()) {
					$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
					return $this->renderForm('ajax/form.html.twig', [
						'form' => $form,
					]);
				}
				
				try {
					$version->setMetadataValue($metadata, $value);
				} catch (\Error $e) {
					if ($metadata->getIsMandatory() === true) {
						$this->addFlash('danger', $e->getMessage());
						return $this->renderForm('ajax/form.html.twig', [
							'form' => $form,
						]);
					}
				}
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($version);
			$entityManager->flush();
			
			if ($request->query->has('modal')) {
				return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => $version->getId()]), '#modal_detail');
			} else {
				$this->addFlash('success', $this->translator->trans('New version created'));
				return new Response();
			}
			
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/project/serie/document/version/edit", name="version_edit")
	 */
	public function edit(Request $request): Response
	{
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', $this->translator->trans('None documents selected'));
			return $this->renderForm('ajax/error.html.twig');
		}
		
		$document = reset($documents);
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		$versions = $this->versionRepository->getVersions($request);
		
		if ($request->query->has('save')) {
			foreach ($versions as $version) {
				$version->setIsRequired(false);
			}
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(VersionType::class, $versions, [
			'serie' => $serie,
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
					
					if ($this->isMultiple($form, $metadata->getFullId()) == false) {
						
						$value = $form->get($metadata->getFullId())->getData();
						if ($value === null && $metadata->getIsMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
							return $this->renderForm('ajax/form.html.twig', [
								'form' => $form,
							]);
						}
						
						try {
							$version->setMetadataValue($metadata, $value);
						} catch (\Error $e) {
							if ($metadata->getIsMandatory() === true) {
								$this->addFlash('danger', $e->getMessage());
								return $this->renderForm('ajax/form.html.twig', [
									'form' => $form,
								]);
							}
						}
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
			
			if ($request->query->has('modal')) {
				return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => reset($versions)->getId()]), '#modal_detail');
			} else {
				$this->addFlash('success', $this->translator->trans('updated.version', ['count' => count($versions)]));
				return new Response();
			}
			
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/project/serie/document/version/delete", name="version_delete")
	 */
	public function delete(Request $request): Response
	{
		
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		
		if ($documents == false) {
			return $this->redirectToRoute('project');
		}
		
		$document = reset($documents);
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
			
			$this->documentService->removeOrphans();
			$entityManager->flush();
			
			if ($request->query->has('modal') && $document->getVersions()->count() > 0) {
				return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => $document->getLastVersion()->getId()]), '#modal_detail');
			} else {
				$this->addFlash('success', $this->translator->trans('deleted.version', ['count' => count($versions)]));
				return new Response();
			}
			
		} else {
			return $this->renderForm('ajax/delete.html.twig', [
				'entities' => $versions,
			]);
		}
		
	}
	
	/**
	 * @Route("/project/serie/document/{document}/version/{version}/{company}/quick_new", name="version_quick_new", requirements={"document"="\d+", "version"="\d+", "company"="\d+"})
	 */
	public function quickNew(Request $request, Document $document, Version $version, Company $company): Response
	{
		
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('review', [
				'version' => $version,
				'company' => $company,
			]);
		}
		
		$newVersion = new Version();
		$newVersion->setDocument($document);
		
		$form = $this->createForm(QuickVersionType::class, $newVersion);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$newVersion->setScheduledDate(new \DateTime('now + ' . $project->getNewVersionTime() . ' days'));
			$newVersion->setIsRequired(true);
			$newVersion->setStatus($version->getStatus());
			$newVersion->setWriter($version->getWriter());
			$newVersion->setChecker($version->getChecker());
			$newVersion->setApprover($version->getApprover());
			
			foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
				if ($metadata->isBoolean() || $metadata->isList() || $metadata->getIsMandatory()) {
					try {
						$newVersion->setMetadataValue($metadata, $version->getMetadataValue($metadata));
					} catch (\Error $e) {
						$this->addFlash('danger', $e->getMessage());
					}
				}
			}
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($newVersion);
			$entityManager->flush();
			
			return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => $version->getId()]), '#modal_detail');
		} else {
			return $this->renderForm('review/form.html.twig', [
				'company' => $company,
				'version' => $version,
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/project/serie/document/version/{version}/quick_edit/{fieldId}", name="version_quick_edit", requirements={"version"="\d+", "fieldId"="\w+"})
	 */
	public function quickEdit(Request $request, Version $version, string $fieldId): Response
	{
		$document = $version->getDocument();
		$serie = $document->getSerie();
		$project = $serie->getProject();
				
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			throw $this->createAccessDeniedException();
		}
		
		$fields = $this->fieldService->getFields($project);
		
		foreach ($fields as $field) {
			
			if ($field['id'] == $fieldId) {
				
				if ($field['display']['header'] && $field['permissions']['write']) {
					
					$form = $this->createForm(QuickVersionType::class, $version, [
						'field' => $field,
					]);
					
					$form->handleRequest($request);
					
					if ($form->isSubmitted() && $form->isValid()) {
						
						try {
							$version->setPropertyValue($field['codename'], $form->get($field['id'])->getData());
						} catch (\Error $e) {
							$this->addFlash('danger', $e->getMessage());
						}
						
						$entityManager = $this->getDoctrine()->getManager();
						$entityManager->persist($version);
						$entityManager->flush();
						
						return $this->renderForm('version/quick_edit.html.twig', [
							'property' => $version->getPropertyValue($field['codename']),
						]);
					} else {
						return $this->renderForm('version/quick_edit.html.twig', [
							'form' => $form,
						]);
					}
					
				} else {
					return $this->renderForm('version/quick_edit.html.twig', [
						'property' => $version->getPropertyValue($field['codename']),
					]);
				}
			}
		}
		
		return new Response('');
		
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
