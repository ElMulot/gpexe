<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Codification;
use App\Form\CodificationType;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\CodificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class CodificationController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}

	#[Route(path: '/project/{project}/codification', name: 'codification', requirements: ['project' => '\d+'])]
	public function index(CodificationRepository $codificationRepository, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('Codifications for') . ' : ' . $project->getName(),
			'class' => Codification::class,
			'entities' => $codificationRepository->getCodifications($project),
		]);
	}

	#[Route(path: '/project/{project}/codification/new', name: 'codification_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$codification = new Codification();
		$codification->setProject($project);
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($codification);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'codification', [
				'project' => $project->getId()
			]);

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}

	#[Route(path: '/project/codification/{codification}/edit', name: 'codification_edit', requirements: ['codification' => '\d+'])]
	public function edit(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();

		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);

		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'codification', [
				'project' => $project->getId()
			]);

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/codification/{codification}/delete', name: 'codification_delete', methods: ['GET', 'DELETE'], requirements: ['codification' => '\d+'])]
	public function delete(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();
		
		$this->denyAccessUnlessGranted('PROJECT_EDIT', $project);
		
		$form = $this->createDeleteForm($codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($codification);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'codification', [
				'project' => $project->getId()
			]);

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$codification],
				'form' => $form,
			]);

		}
	}
	
}
?>