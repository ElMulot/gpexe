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
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly ManagerRegistry $doctrine,
								private readonly CompanyRepository $companyRepository,
								private readonly DocumentRepository $documentRepository,
								private readonly VersionRepository $versionRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly StatusRepository $statusRepository,
								private readonly AjaxRedirectService $ajaxRedirectService,
								private readonly DocumentService $documentService,
								private readonly FieldService $fieldService)
	{
	}
	
	#[Route(path: '/project/serie/document/version/{version}/detail', name: 'versionDetail', requirements: ['version' => '\d+'])]
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
	 * 	+ array		versions		array of version ids that will be used for document selector in the form
	 * 	+ array		series			array of serie ids (not used)
	 */
	#[Route(path: '/project/{project}/version/new', name: 'versionNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VERSION_NEW', $project);
		
		$documents = $this->documentRepository->getDocumentsByVersionsId($request->query->all('versions'));
		
		$version = new Version();
		$versions = [$version];
		
		$form = $this->createForm(VersionType::class, $versions, [
			'project'	=> $project,
			'documents'	=> $documents,
		]);

		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			foreach ($versions as $version) {
				$entityManager->persist($version);
			}
			
			$entityManager->flush();

			$this->addFlash('success', 'New version created');

			//fermeture modal à traiter
			return $this->renderSuccess($request, 'versionNew', [
				'project'	=> $project->getId(),
				'versions'	=> $request->get('versions')
			]);

		} else {

			return $this->render('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);
			
		}
	}

	/**
	 * Query parameters :
	 * 	+ array		versions		array of version ids that will be used for document selector in the form
	 */
	#[Route(path: '/project/{project}/serie/document/version/edit', name: 'versionEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		$documents = $this->documentRepository->getDocumentsByVersionsId($request->query->all('versions'));
		$versions = $this->versionRepository->getVersionsByIds($request->query->all('versions'));

		$document = reset($documents);
		$this->denyAccessUnlessGranted('DOCUMENT_EDIT', $document);
		
		$form = $this->createForm(VersionType::class, $versions, [
			'project'	=> $project,
			'documents'	=> $documents,
		]);

		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Versions updated');

			//fermeture modal à traiter
			return $this->renderSuccess($request, 'versionNew', [
				'project'	=> $project->getId(),
				'versions'	=> $request->get('versions')
			]);
			
		} else {

			return $this->render('pages/engineering/edit/_pannel.html.twig', [
				'form' => $form,
			]);
			
		}
	}
	
	#[Route(path: '/project/serie/document/version/delete', name: 'versionDelete')]
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
			
			// $this->documentService->removeOrphans();
			$entityManager->flush();
			
			if ($request->query->has('modal') && $document->getVersions()->count() > 0) {
				return $this->ajaxRedirectService->get($this->generateUrl('documentDetail', ['version' => $document->getLastVersion()->getId()]), '#modal_detail');
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
	
	#[Route(path: '/project/serie/document/{document}/version/{version}/{company}/quick_new', name: 'versionQuickNew', requirements: ['document' => '\d+', 'version' => '\d+', 'company' => '\d+'])]
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
			
			return $this->ajaxRedirectService->get($this->generateUrl('documentDetail', ['version' => $version->getId()]), '#modal_detail');
		} else {
			return $this->render('review/form.html.twig', [
				'company' => $company,
				'version' => $version,
				'form' => $form,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/{version}/quick_edit/{fieldId}', name: 'versionQuickEdit', requirements: ['version' => '\d+', 'fieldId' => '\w+'])]
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
