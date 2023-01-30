<?php
namespace App\Controller;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Form\MetadataItemType;
use App\Repository\MetadataItemRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Doctrine\Persistence\ManagerRegistry;

//todo : à mettre à jour complètement
class MetadataItemController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}
	
	#[Route(path: '/project/metadata/{metadata}/item', name: 'metadata_item', requirements: ['metadata' => '\d+'])]
	public function index(MetadataItemRepository $metadataItemRepository, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'route_back' =>  $this->generateUrl('metadata', [
				'project' => $metadata->getProject()->getId(),
			]),
			'class' => MetadataItem::class,
			'entities' => $metadataItemRepository->getMetadataItem($metadata),
		]);
	}

	#[Route(path: '/project/metadata/{metadata}/item/new', name: 'metadata_item_new', requirements: ['metadata' => '\d+'])]
	public function new(Request $request, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$metadataItem = new MetadataItem();
		$metadataItem->setMetadata($metadata);
		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('metadata_item', [
				'metadata' => $metadata->getId()
			]);
		} else {
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadata->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadata_item}/edit', name: 'metadata_item_edit', requirements: ['metadata_item' => '\d+'])]
	public function edit(Request $request, MetadataItem $metadataItem) : Response
	{
		$project = $metadataItem->getMetadata()->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata_item', [
				'metadata' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadataItem->getMetadata()->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadata_item}/delete', name: 'metadata_item_delete', methods: ['GET', 'DELETE'], requirements: ['metadata_item' => '\d+'])]
	public function delete(Request $request, MetadataItem $metadataItem) : Response
	{
		$project = $metadataItem->getMetadata()->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createDeleteForm($metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata_item', [
				'metadata' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'entities' => [$metadataItem],
				'form' => $form,
			]);
		}
	}
}
?>