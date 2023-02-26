<?php
namespace App\Controller;

use App\Entity\Enum\MetadataTypeEnum;
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

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('Metadatas for') . ' : ' . $project->getName(),
			'class' => Metadata::class,
			'entities' => $metadataRepository->getMetadatas($project),
		]);
	}

	#[Route(path: '/project/{project}/metadata/new/{type}', name: 'metadataNew', requirements: ['project' => '\d+', 'type' => 'bool|text|regex|date|link|list'])]
	public function new(Request $request, Project $project, string $type = null) : Response
	{
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		if ($type === null) {
			return $this->render('pages/project/metadata/type.html.twig', [
				'project' => $project,
			]);
		}

		$metadata = new Metadata();
		$metadata->setProject($project);
		$metadata->setType($type);

		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'metadata', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/metadata/{metadata}/edit', name: 'metadataEdit', requirements: ['metadata' => '\d+'])]
	public function edit(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadata);
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'metadata', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/metadata/{metadata}/delete', name: 'metadataDelete', methods: ['GET', 'DELETE'], requirements: ['metadata' => '\d+'])]
	public function delete(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		$form = $this->createDeleteForm($metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'metadata', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$metadata],
				'form' => $form,
			]);
			
		}
	}
	
}
?>