<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\MetadataItem;
use App\Form\MetadataItemType;
use App\Repository\MetadataItemRepository;
use App\Entity\Metadata;

class MetadataItemController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(MetadataItemRepository $metadataItemRepository, Metadata $metadata): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'route_back' =>  $this->generateUrl('metadata', [
				'id' => $metadata->getId(),
			]),
			'class' => MetadataItem::class,
			'entities' => $metadataItemRepository->getMetadataItem($metadata),
		]);
	}

	public function new(Request $request, Metadata $metadata): Response
	{
		$metadataItem = new MetadataItem();
		$metadataItem->setMetadata($metadata);
		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('metadata_item', [
				'id' => $metadata->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'id' => $metadata->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, MetadataItem $metadataItem): Response
	{
		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata_item', [
				'id' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'id' => $metadataItem->getMetadata()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, MetadataItem $metadataItem): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata_item', [
				'id' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'id' => $metadataItem->getMetadata()->getId(),
				]),
				'entities' => [$metadataItem],
			]);
		}
	}
}
?>