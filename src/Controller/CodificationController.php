<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Codification;
use App\Form\CodificationType;
use App\Repository\CodificationRepository;
use Attribute;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;

class CodificationController extends AbstractController
{

	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine)
	{
	}

	#[Route(path: '/project/{project}/codification', name: 'codification', requirements: ['project' => '\d+'])]
	public function index(CodificationRepository $codificationRepository, Project $project) : Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}

		return $this->renderForm('generic/list.html.twig', [
			'title' => $this->translator->trans('Codifications for') . ' : ' . $project->getName(),
			'class' => Codification::class,
			'entities' => $codificationRepository->getCodifications($project),
		]);
	}

	#[Route(path: '/project/{project}/codification/new', name: 'codification_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		$codification = new Codification();
		$codification->setProject($project);
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($codification);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('codification', ['project' => $project->getId()]),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}

	#[Route(path: '/project/codification/{codification}/edit', name: 'codification_edit', requirements: ['codification' => '\d+'])]
	public function edit(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('codification', ['project' => $project->getId()]),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/codification/{codification}/delete', name: 'codification_delete', methods: ['GET', 'DELETE'], requirements: ['codification' => '\d+'])]
	public function delete(Request $request, Codification $codification) : Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($codification);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('codification', ['project' => $project->getId()]),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$codification],
			]);

		}
	}
	
}
?>