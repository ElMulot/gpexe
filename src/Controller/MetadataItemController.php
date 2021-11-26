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
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MetadataItemController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	/**
	 * @Route("/project/metadata/{metadata}/item", name="metadata_item", requirements={"metadata"="\d+"})
	 */
	public function index(MetadataItemRepository $metadataItemRepository, Metadata $metadata): Response
	{
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'route_back' =>  $this->generateUrl('metadata', [
				'project' => $metadata->getProject()->getId(),
			]),
			'class' => MetadataItem::class,
			'entities' => $metadataItemRepository->getMetadataItem($metadata),
		]);
	}

	/**
	 * @Route("/project/metadata/{metadata}/item/new", name="metadata_item_new", requirements={"metadata"="\d+"})
	 */
	public function new(Request $request, Metadata $metadata): Response
	{
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
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
				'metadata' => $metadata->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadata->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/project/metadata/item/{id}/edit", name="metadata_item_edit", requirements={"id"="\d+"})
	 */
	public function edit(Request $request, MetadataItem $metadataItem): Response
	{
		$project = $metadataItem->getMetadata()->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(MetadataItemType::class, $metadataItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata_item', [
				'metadata' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadataItem->getMetadata()->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/project/metadata/item/{id}/delete", name="metadata_item_delete", methods={"GET", "DELETE"}, requirements={"id"="\d+"})
	 */
	public function delete(Request $request, MetadataItem $metadataItem): Response
	{
		$project = $metadataItem->getMetadata()->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($metadataItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata_item', [
				'metadata' => $metadataItem->getMetadata()->getId()
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadataItem->getMetadata()->getId(),
				]),
				'entities' => [$metadataItem],
			]);
		}
	}
}
?>