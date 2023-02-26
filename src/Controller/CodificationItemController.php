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
use Doctrine\Persistence\ManagerRegistry;

//todo : à mettre à jour complètement
class CodificationItemController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}

	#[Route(path: '/project/codification/{codification}/item', name: 'codificationItem', requirements: ['codification' => '\d+'])]
	public function index(CodificationItemRepository $codificationItemRepository, Codification $codification) : Response
	{
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('List for the code') . ' : ' . $codification->getName(),
			'class' => CodificationItem::class,
			'entities' => $codificationItemRepository->getCodificationItem($codification),
		]);
	}

	#[Route(path: '/project/codification/{codification}/item/new', name: 'codificationItemNew', requirements: ['codification' => '\d+'])]
	public function new(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$codificationItem = new CodificationItem();
		$codificationItem->setCodification($codification);
		
		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			
			return $this->renderSuccess($request, 'codificationItem', [
				'codification' => $codification->getId()
			]);

		} else {
			return $this->render('generic/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/codification/item/{codificationItem}/edit', name: 'codificationItemEdit', requirements: ['codificationItem' => '\d+'])]
	public function edit(Request $request, CodificationItem $codificationItem) : Response
	{
		$codification = $codificationItem->getCodification();
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(CodificationItemType::class, $codificationItem);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'codificationItem', [
				'codification' => $codification->getId()
			]);

		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/codification/item/{codificationItem}/delete', name: 'codificationItemDelete', methods: ['GET', 'DELETE'], requirements: ['codificationItem' => '\d+'])]
	public function delete(Request $request, CodificationItem $codificationItem) : Response
	{
		$codification = $codificationItem->getCodification();
		$project = $codification->getProject();
		
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createDeleteForm($codificationItem);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($codificationItem);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'codificationItem', [
				'codification' => $codification->getId()
			]);

		} else {
			return $this->render('generic/delete.html.twig', [
				'entities' => [$codificationItem],
				'form' => $form,
			]);
		}
	}
}
?>