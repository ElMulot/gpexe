<?php
namespace App\Controller;

use App\Entity\Status;
use App\Entity\Project;
use App\Form\StatusType;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\StatusRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StatusController extends AbstractController
{

	public function __construct(private readonly TranslatorInterface $translator,private readonly ManagerRegistry $doctrine)
	{
	}
	
	#[Route(path: '/project/{project}/status', name: 'status', requirements: ['project' => '\d+'])]
	public function index(StatusRepository $statusRepository, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('STATUS_SHOW', $project);

		return $this->renderForm('generic/list.html.twig', [
			'title' => $this->translator->trans('Statuses for') . ' : ' . $project->getName(),
			'class' => Status::class,
			'entities' => $statusRepository->getStatuses($project),
		]);
	}

	#[Route(path: '/project/{project}/status/new', name: 'status_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('STATUS_NEW', $project);

		$status = new Status();
		$status->setProject($project);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			
			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('status', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/status/{status}/edit', name: 'status_edit', requirements: ['status' => '\d+'])]
	public function edit(Request $request, Status $status) : Response
	{
		$project = $status->getProject();

		$this->denyAccessUnlessGranted('STATUS_EDIT', $project);

		$form = $this->createForm(StatusType::class, $status);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($status);
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			
			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('status', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/status/{status}/delete', name: 'status_delete', methods: ['GET', 'DELETE'], requirements: ['status' => '\d+'])]
	public function delete(Request $request, Status $status) : Response
	{
		$project = $status->getProject();
		
		$this->denyAccessUnlessGranted('STATUS_DELETE', $project);
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($status);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('status', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$status],
			]);

		}
	}
	
}
?>