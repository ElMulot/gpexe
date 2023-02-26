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
	
	#[Route(path: '/project/metadata/{metadata}/item', name: 'metadataItem', requirements: ['metadata' => '\d+'])]
	public function index(MetadataItemRepository $metadataItemRepository, Metadata $metadata) : Response
	{
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		return $this->render('generic/list.html.twig', [
			'title'			=> $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'class'			=> MetadataItem::class,
			'entities'		=> $metadataItemRepository->getMetadataItem($metadata),
			'route_back'	=> $this->generateUrl('metadata', [
				'project'	=> $project->getId(),
			]),
		]);
	}

	#[Route(path: '/project/metadata/{metadata}/item/new', name: 'metadataItemNew', requirements: ['metadata' => '\d+'])]
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
			
			return $this->renderSuccess($request, 'metadataItem', [
				'metadata' => $metadata->getId()
			]);
			
		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadataItem}/edit', name: 'metadataItemEdit', requirements: ['metadataItem' => '\d+'])]
	public function edit(Request $request, MetadataItem $metadataItem) : Response
	{
		$metadata = $metadataItem->getMetadata();
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'metadataItem', [
				'metadata' => $metadata->getId()
			]);

		} else {
			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/metadata/item/{metadataItem}/delete', name: 'metadataItemDelete', methods: ['GET', 'DELETE'], requirements: ['metadataItem' => '\d+'])]
	public function delete(Request $request, MetadataItem $metadataItem) : Response
	{
		$metadata = $metadataItem->getMetadata();
		$project = $metadata->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createDeleteForm($metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			
			return $this->renderSuccess($request, 'metadataItem', [
				'metadata' => $metadata->getId()
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