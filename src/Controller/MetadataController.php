<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Metadata;
use App\Form\MetadataType;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\MetadataRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MetadataController extends AbstractController
{
	
	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine)
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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('metadata', ['project' => $project->getId()]),
			]);

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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('metadata', ['project' => $project->getId()]),
			]);

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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('metadata', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$metadata],
			]);
			
		}
	}
	
}
?>