<?php
namespace App\Controller;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Form\MetadataChoiceType;
use App\Repository\MetadataChoiceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Doctrine\Persistence\ManagerRegistry;

//todo : à mettre à jour complètement
class MetadataChoiceController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}
	
	#[Route(path: '/project/metadata/{metadata}/item', name: 'metadataChoice', requirements: ['metadata' => '\d+'])]
	public function index(MetadataChoiceRepository $metadataChoiceRepository, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		return $this->render('generic/list.html.twig', [
			'title'			=> $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'class'			=> MetadataChoice::class,
			'entities'		=> $metadataChoiceRepository->getMetadataChoice($metadata),
			'dismiss_url'	=> $this->generateUrl('metadata', [
				'project'	=> $project->getId(),
			]),
		]);
	}

	#[Route(path: '/project/metadata/{metadata}/item/new', name: 'metadataChoiceNew', requirements: ['metadata' => '\d+'])]
	public function new(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$metadataChoice = new MetadataChoice();
		$metadataChoice->setMetadata($metadata);

		$form = $this->createForm(MetadataChoiceType::class, $metadataChoice);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadataChoice);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			
			return $this->renderSuccess($request, 'metadataChoice', [
				'metadata' => $metadata->getId()
			]);
			
		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadataChoice}/edit', name: 'metadataChoiceEdit', requirements: ['metadataChoice' => '\d+'])]
	public function edit(Request $request, MetadataChoice $metadataChoice) : Response
	{
		$metadata = $metadataChoice->getMetadata();
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(MetadataChoiceType::class, $metadataChoice);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'metadataChoice', [
				'metadata' => $metadata->getId()
			]);

		} else {
			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadataChoice}/delete', name: 'metadataChoiceDelete', methods: ['GET', 'DELETE'], requirements: ['metadataChoice' => '\d+'])]
	public function delete(Request $request, MetadataChoice $metadataChoice) : Response
	{
		$metadata = $metadataChoice->getMetadata();
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createDeleteForm($metadataChoice);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadataChoice);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			
			return $this->renderSuccess($request, 'metadataChoice', [
				'metadata' => $metadata->getId()
			]);

		} else {
			return $this->render('generic/delete.html.twig', [
				'entities' => [$metadataChoice],
				'form' => $form,
			]);
		}
	}
}
?>