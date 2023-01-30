<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Company;
use App\Entity\Version;
use App\Entity\Document;
use App\Entity\Project;
use App\Exception\InternalErrorException;
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
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;


class VersionController extends AbstractTurboController
{
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine, private readonly CompanyRepository $companyRepository, private readonly DocumentRepository $documentRepository, private readonly VersionRepository $versionRepository, private readonly MetadataRepository $metadataRepository, private readonly StatusRepository $statusRepository, private readonly AjaxRedirectService $ajaxRedirectService, private readonly DocumentService $documentService, FieldService $fieldService)
	{
		$this->fieldService = $fieldService;
	}
	
	#[Route(path: '/project/serie/document/version/{version}/detail', name: 'version_detail', requirements: ['version' => '\d+'])]
	public function detail(Version $version) : Response
	{
		$document = $version->getDocument();
		$serie = $document->getSerie();
		$project = $serie->getProject();

		$this->denyAccessUnlessGranted('DOCUMENT_SHOW_DETAIL', $document);

		return $this->render('pages/engineering/index/version/_detail.html.twig', [
			'version' => $version,
			'document' => $document,
			'project' => $project,
			'checkers' => $this->companyRepository->getCheckerCompanies($project),
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id				array of version ids that will be used for document selector in the form
	 */
	#[Route(path: '/project/{project}/version/new', name: 'version_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		
		$this->denyAccessUnlessGranted('VERSION_NEW', $project);
		
		$version = new Version();

		try {
			$form = $this->createForm(VersionType::class, [$version], [
				'project' => $project,
				'ids' => $request->get('id'),
			]);
		} catch (InternalErrorException $e) {
			$this->addFlash('warning', $e->getMessage());
			//todo : review path
			return $this->renderError($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		}

		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {

			// return $this->redirectToRoute('version_new', [
			// 	'document' => $document->getId()
			// ]);
		} else {
			return $this->render('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);
		}


		// if ($document === null) {
		// 	$documents = $this->documentRepository->getDocumentsByRequest($request);
		// 	if ($documents == false) {
		// 		$this->addFlash('danger', 'None documents selected');
		// 		return $this->render('ajax/error.html.twig');
		// 	}
			
		// 	if (count($documents) > 1) {
		// 		$this->addFlash('danger', 'Only one reference must be selected');
		// 		return $this->render('ajax/error.html.twig');
		// 	}
		// 	$document = reset($documents);
		// }
		// $serie = $document->getSerie();
		// $project = $serie->getProject();

		// $this->denyAccessUnlessGranted('DOCUMENT_NEW', $serie);

		// $version = new Version();
		// $version->setDocument($document);
		// if ($lastVersion = $document->getLastVersion()) {
		// 	$version->setStatus($lastVersion->getStatus());
		// 	$version->setWriter($lastVersion->getWriter());
		// 	$version->setChecker($lastVersion->getChecker());
		// 	$version->setApprover($lastVersion->getApprover());
		// 	foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
		// 		if ($metadata->isBoolean() || $metadata->isList() || $metadata->isMandatory()) {
		// 			try {
		// 				$version->setMetadataValue($metadata, $lastVersion->getMetadataValue($metadata));
		// 			} catch (\Error $e) {
		// 				continue;
		// 			}
		// 		}
		// 	}
		// } else {
		// 	$version->setStatus($this->statusRepository->getDefaultStatus($project));
		// }
		// $form = $this->createForm(VersionType::class, $version, [
		// 	'serie' => $serie,
		// ]);
		// $form->handleRequest($request);
		// if ($form->isSubmitted() && $form->isValid()) {
			
		// 	$version->setRequired($form->get('isRequired')->getData());
		// 	if ($version->isRequired()) {
		// 		$version->setScheduledDate($form->get('date')->getData());
		// 	} else {
		// 		$version->setDeliveryDate($form->get('date')->getData());
		// 	}
		// 	$version->setStatus($form->get('status')->getData());
		// 	$version->setWriter($form->get('writer')->getData());
		// 	$version->setChecker($form->get('checker')->getData());
		// 	$version->setApprover($form->get('approver')->getData());
			
		// 	foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
				
		// 		$value = $form->get($metadata->getFullId())->getData();
				
		// 		if ($value === null && $metadata->isMandatory()) {
		// 			$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
		// 			return $this->render('ajax/form.html.twig', [
		// 				'form' => $form,
		// 			]);
		// 		}
				
		// 		try {
		// 			$version->setMetadataValue($metadata, $value);
		// 		} catch (\Error $e) {
		// 			if ($metadata->isMandatory() === true) {
		// 				$this->addFlash('danger', $e->getMessage());
		// 				return $this->render('ajax/form.html.twig', [
		// 					'form' => $form,
		// 				]);
		// 			}
		// 		}
		// 	}
			
		// 	$entityManager = $this->doctrine->getManager();
		// 	$entityManager->persist($version);
		// 	$entityManager->flush();
			
		// 	if ($request->query->has('modal')) {
		// 		return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => $version->getId()]), '#modal_detail');
		// 	} else {
		// 		$this->addFlash('success', 'New version created');
		// 		return new Response();
		// 	}
			
		// } else {
		// 	return $this->render('ajax/form.html.twig', [
		// 		'form' => $form,
		// 	]);
		// }
	}
	
	#[Route(path: '/project/serie/document/version/edit', name: 'version_edit')]
	public function edit(Request $request) : Response
	{
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			$this->addFlash('danger', 'None documents selected');
			return $this->render('ajax/error.html.twig');
		}
		$document = reset($documents);
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		//todo : à revoir
		$versions = $this->versionRepository->getVersions($request);
		if ($request->query->has('save')) {
			foreach ($versions as $version) {
				$version->setRequired(false);
			}
		}
		
		$this->denyAccessUnlessGranted('DOCUMENT_EDIT', $document);

		$form = $this->createForm(VersionType::class, $versions, [
			'serie' => $serie,
			'allow_extra_fields' => true,
		]);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			
			foreach ($versions as $version) {
				
				if ($form->has('name')) {
					$version->setName($form->get('name')->getData());
				}
				
				if ($this->isMultiple($form, 'isRequired') == false) {
					$version->setRequired($form->get('isRequired')->getData());
				}
				
				if ($this->isMultiple($form, 'date') == false) {
					if ($version->isRequired()) {
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
						if ($value === null && $metadata->isMandatory()) {
							$this->addFlash('danger', $this->translator->trans('notEmpty.field', ['field' => $metadata->getName()]));
							return $this->render('ajax/form.html.twig', [
								'form' => $form,
							]);
						}
						
						try {
							$version->setMetadataValue($metadata, $value);
						} catch (\Error $e) {
							if ($metadata->isMandatory() === true) {
								$this->addFlash('danger', $e->getMessage());
								return $this->render('ajax/form.html.twig', [
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
			return $this->render('ajax/form.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/delete', name: 'version_delete')]
	public function delete(Request $request) : Response
	{
		$documents = $this->documentRepository->getDocumentsByRequest($request);
		if ($documents == false) {
			return $this->redirectToRoute('project');
		}
		$document = reset($documents);
		
		//todo : à revoir
		$versions = $this->versionRepository->getVersions($request);

		$this->denyAccessUnlessGranted('DOCUMENT_DELETE', $document);

		$form = $this->createDeleteForm(reset($versions));
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			
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
			return $this->render('ajax/delete.html.twig', [
				'entities' => $versions,
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/{document}/version/{version}/{company}/quick_new', name: 'version_quick_new', requirements: ['document' => '\d+', 'version' => '\d+', 'company' => '\d+'])]
	public function quickNew(Request $request, Document $document, Version $version, Company $company) : Response
	{
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		if ($this->isGranted('DOCUMENT_NEW', $serie) === false) {
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
			$newVersion->setRequired(true);
			$newVersion->setStatus($version->getStatus());
			$newVersion->setWriter($version->getWriter());
			$newVersion->setChecker($version->getChecker());
			$newVersion->setApprover($version->getApprover());
			
			foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
				if ($metadata->isBoolean() || $metadata->isList() || $metadata->isMandatory()) {
					try {
						$newVersion->setMetadataValue($metadata, $version->getMetadataValue($metadata));
					} catch (\Error $e) {
						$this->addFlash('danger', $e->getMessage());
					}
				}
			}
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($newVersion);
			$entityManager->flush();
			
			return $this->ajaxRedirectService->get($this->generateUrl('document_detail', ['version' => $version->getId()]), '#modal_detail');
		} else {
			return $this->render('review/form.html.twig', [
				'company' => $company,
				'version' => $version,
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/{version}/quick_edit/{fieldId}', name: 'version_quick_edit', requirements: ['version' => '\d+', 'fieldId' => '\w+'])]
	public function quickEdit(Request $request, Version $version, string $fieldId) : Response
	{
		$document = $version->getDocument();
		$serie = $document->getSerie();
		$project = $serie->getProject();
		
		$this->denyAccessUnlessGranted('DOCUMENT_EDIT', $document);

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
						
						$entityManager = $this->doctrine->getManager();
						$entityManager->persist($version);
						$entityManager->flush();
						
						return $this->render('version/quick_edit.html.twig', [
							'property' => $version->getPropertyValue($field['codename']),
						]);
					} else {
						return $this->render('version/quick_edit.html.twig', [
							'form' => $form,
						]);
					}
					
				} else {
					return $this->render('version/quick_edit.html.twig', [
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
