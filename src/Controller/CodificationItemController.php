<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\CodificationItem;
use App\Form\CodificationItemType;
use App\Repository\CodificationItemRepository;
use App\Entity\Codification;

class CodificationItemController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(CodificationItemRepository $codificationItemRepository, Codification $codification): Response
	{
		return $this->render('generic/list.html.twig', [
			'page_title' => $this->translator->trans('List for the code') . ' : ' . $codification->getName(),
			'route_back' => 'codification',
			'parent_id' => $codification->getProject()->getId(),
			'class' => CodificationItem::class,
			'entities' => $codificationItemRepository->getCodificationItem($codification),
		]);
	}

	public function new(Request $request, Codification $codification): Response
	{
		$codificationItem = new CodificationItem();
		$codificationItem->setCodification($codification);
		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($codificationItem);
			dump($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('codification_item', [
				'id' => $codification->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'page_title' => 'New codification list',
				'route_back' =>  $this->generateUrl('codification_item', [
					'id' => $codification->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, CodificationItem $codificationItem): Response
	{
		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('codification_item', [
				'id' => $codificationItem->getCodification()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'page_title' => 'Edit codification list',
				'route_back' =>  $this->generateUrl('codification_item', [
					'id' => $codificationItem->getCodification()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, CodificationItem $codificationItem): Response
	{
		if ($this->isCsrfTokenValid('delete' . $codificationItem->getId(), $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('codification_item', [
				'id' => $codificationItem->getCodification()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'page_title' => 'Delete codification list',
				'route_back' =>  $this->generateUrl('codification_item', [
					'id' => $codificationItem->getCodification()->getId(),
				]),
				'entity' => $codificationItem
			]);
		}
	}
}
?>