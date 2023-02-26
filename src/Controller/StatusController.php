<?php
namespace App\Controller;

use App\Entity\Status;
use App\Entity\Project;
use App\Form\StatusType;
use App\Repository\StatusRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class StatusController extends AbstractTurboController
{

	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator)
	{
	}
	
	#[Route(path: '/project/{project}/status', name: 'status', requirements: ['project' => '\d+'])]
	public function index(StatusRepository $statusRepository, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('STATUS_SHOW', $project);

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('Statuses for') . ' : ' . $project->getName(),
			'class' => Status::class,
			'entities' => $statusRepository->getStatuses($project),
		]);
	}

	#[Route(path: '/project/{project}/status/new', name: 'statusNew', requirements: ['project' => '\d+'])]
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
			return $this->renderSuccess($request, 'status', ['project' => $project->getId()]);

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/status/{status}/edit', name: 'statusEdit', requirements: ['status' => '\d+'])]
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
			
			return $this->renderSuccess($request, 'status', ['project' => $project->getId()]);

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/status/{status}/delete', name: 'statusDelete', methods: ['GET', 'DELETE'], requirements: ['status' => '\d+'])]
	public function delete(Request $request, Status $status) : Response
	{
		$project = $status->getProject();
		
		$this->denyAccessUnlessGranted('STATUS_DELETE', $project);
		
		$form = $this->createDeleteForm($status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			
			try {
				$entityManager->remove($status);
			} catch (\Exception $e) {
				$this->addFlash('danger', $e->getMessage());
				return $this->renderError($request, 'status', ['project' => $project->getId()]);
			}
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->renderSuccess($request, 'status', ['project' => $project->getId()]);

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$status],
				'form' => $form,
			]);

		}
	}
	
}
?>