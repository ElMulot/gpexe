<?php
namespace App\Controller;

use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Form\CodificationItemType;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\CodificationItemRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CodificationItemController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}

	/**
	 * @Route("/project/codification/{codification}/item", name="codification_item", requirements={"codification"="\d+"})
	 */
	public function index(CodificationItemRepository $codificationItemRepository, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('List for the code') . ' : ' . $codification->getName(),
			'route_back' =>  $this->generateUrl('codification', [
				'project' => $codification->getProject()->getId(),
			]),
			'parent_id' => $codification->getProject()->getId(),
			'class' => CodificationItem::class,
			'entities' => $codificationItemRepository->getCodificationItem($codification),
		]);
	}

	/**
	 * @Route("/project/codification/{codification}/item/new", name="codification_item_new", requirements={"codification"="\d+"})
	 */
	public function new(Request $request, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$codificationItem = new CodificationItem();
		$codificationItem->setCodification($codification);
		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('codification_item', [
				'codification' => $codification->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification_item', [
					'codification' => $codification->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/project/codification/item/{id}/edit", name="codification_item_edit", requirements={"id"="\d+"})
	 */
	public function edit(Request $request, CodificationItem $codificationItem): Response
	{
		$project = $codificationItem->getCodification()->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('codification_item', [
				'codification' => $codificationItem->getCodification()->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification_item', [
					'codification' => $codificationItem->getCodification()->getId(),
				]),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/project/codification/item/{id}/delete", name="codification_item_delete", methods={"GET", "DELETE"}, requirements={"id"="\d+"})
	 */
	public function delete(Request $request, CodificationItem $codificationItem): Response
	{
		$project = $codificationItem->getCodification()->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('codification_item', [
				'codification_item' => $codificationItem->getCodification()->getId()
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('codification_item', [
					'codification_item' => $codificationItem->getCodification()->getId(),
				]),
				'entities' => [$codificationItem],
			]);
		}
	}
}
?>