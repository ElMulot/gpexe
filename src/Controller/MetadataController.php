<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Metadata;
use App\Form\MetadataType;
use App\Repository\MetadataRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class MetadataController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}
	
	#[Route(path: '/project/{project}/metadata', name: 'metadata', requirements: ['project' => '\d+'])]
	public function index(MetadataRepository $metadataRepository, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		return $this->renderForm('generic/list.html.twig', [
			'title' => $this->translator->trans('Metadatas for') . ' : ' . $project->getName(),
			'class' => Metadata::class,
			'entities' => $metadataRepository->getMetadatas($project),
		]);
	}

	#[Route(path: '/project/{project}/metadata/new', name: 'metadata_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$metadata = new Metadata();
		$metadata->setProject($project);
		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'metadata', ['project' => $project->getId()]);

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/metadata/{metadata}/edit', name: 'metadata_edit', requirements: ['metadata' => '\d+'])]
	public function edit(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'metadata', ['project' => $project->getId()]);

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/metadata/{metadata}/delete', name: 'metadata_delete', methods: ['GET', 'DELETE'], requirements: ['metadata' => '\d+'])]
	public function delete(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'metadata', ['project' => $project->getId()]);

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$metadata],
			]);
			
		}
	}
	
}
?>