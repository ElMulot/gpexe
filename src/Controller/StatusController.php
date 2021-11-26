<?php
namespace App\Controller;

use App\Entity\Status;
use App\Entity\Project;
use App\Form\StatusType;
use App\Repository\StatusRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StatusController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	/**
	 * @Route("/project/{project}/status", name="status", requirements={"project"="\d+"})
	 */
	public function index(StatusRepository $statusRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('Statuses for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Status::class,
			'entities' => $statusRepository->getStatuses($project),
		]);
	}

	/**
	 * @Route("/project/{project}/status/new", name="status_new", requirements={"project"="\d+"})
	 */
	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$status = new Status();
		$status->setProject($project);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('status', [
				'project' => $project->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $project->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/status/{status}/edit", name="status_edit", requirements={"status"="\d+"})
	 */
	public function edit(Request $request, Status $status): Response
	{
		$project = $status->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(StatusType::class, $status);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			
			return $this->redirectToRoute('status', [
				'project' => $status->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $status->getProject()->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/status/{status}/delete", name="status_delete", methods={"GET", "DELETE"}, requirements={"status"="\d+"})
	 */
	public function delete(Request $request, Status $status): Response
	{
		$project = $status->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($status);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('status', [
				'project' => $status->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $status->getProject()->getId(),
				]),
				'entities' => [$status],
			]);
		}
		
		
	}
	
}
?>