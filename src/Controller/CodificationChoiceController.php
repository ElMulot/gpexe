<?php
namespace App\Controller;

use App\Entity\Codification;
use App\Entity\CodificationChoice;
use App\Form\CodificationChoiceType;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\CodificationChoiceRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Doctrine\Persistence\ManagerRegistry;

//todo : à mettre à jour complètement
class CodificationChoiceController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}

	#[Route(path: '/project/codification/{codification}/item', name: 'codificationChoice', requirements: ['codification' => '\d+'])]
	public function index(CodificationChoiceRepository $codificationChoiceRepository, Codification $codification) : Response
	{
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('List for the code') . ' : ' . $codification->getName(),
			'class' => CodificationChoice::class,
			'entities' => $codificationChoiceRepository->getCodificationChoice($codification),
			'dismiss_url'	=> $this->generateUrl('metadata', [
				'project'	=> $project->getId(),
			]),
		]);
	}

	#[Route(path: '/project/codification/{codification}/item/new', name: 'codificationChoiceNew', requirements: ['codification' => '\d+'])]
	public function new(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$codificationChoice = new CodificationChoice();
		$codificationChoice->setCodification($codification);
		
		$form = $this->createForm(CodificationChoiceType::class, $codificationChoice);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($codificationChoice);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			
			return $this->renderSuccess($request, 'codificationChoice', [
				'codification' => $codification->getId()
			]);

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/project/codification/item/{codificationChoice}/edit', name: 'codificationChoiceEdit', requirements: ['codificationChoice' => '\d+'])]
	public function edit(Request $request, CodificationChoice $codificationChoice) : Response
	{
		$codification = $codificationChoice->getCodification();
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(CodificationChoiceType::class, $codificationChoice);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'codificationChoice', [
				'codification' => $codification->getId()
			]);

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}
	
	#[Route(path: '/project/codification/item/{codificationChoice}/delete', name: 'codificationChoiceDelete', methods: ['GET', 'DELETE'], requirements: ['codificationChoice' => '\d+'])]
	public function delete(Request $request, CodificationChoice $codificationChoice) : Response
	{
		$codification = $codificationChoice->getCodification();
		$project = $codification->getProject();
		
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createDeleteForm($codificationChoice);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($codificationChoice);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'codificationChoice', [
				'codification' => $codification->getId()
			]);

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$codificationChoice],
				'form' => $form,
			]);
			
		}
	}
}
?>