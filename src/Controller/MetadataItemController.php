<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('List for the metadata') . ' : ' . $metadata->getName(),
			'route_back' =>  $this->generateUrl('metadata', [
				'project' => $metadata->getProject()->getId(),
			]),
			'class' => MetadataItem::class,
			'entities' => $metadataItemRepository->getMetadataItem($metadata),
		]);
	}

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
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadata->getId(),
				]),
				'form' => $view
			]);
		}
	}
	
	/**
	 * @ParamConverter("metadataItem", options={"mapping": {"metadata_item" : "id"}})
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
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadataItem->getMetadata()->getId(),
				]),
				'form' => $view
			]);
		}
	}
	
	/**
	 * @ParamConverter("metadataItem", options={"mapping": {"metadata_item" : "id"}})
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
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata_item', [
					'metadata' => $metadataItem->getMetadata()->getId(),
				]),
				'entities' => [$metadataItem],
			]);
		}
	}
}
?>