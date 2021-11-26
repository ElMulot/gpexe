<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Codification;
use App\Form\CodificationType;
use App\Repository\CodificationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CodificationController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}

	/**
	 * @Route("/project/{project}/codification", name="codification", requirements={"project"="\d+"})
	 */
	public function index(CodificationRepository $codificationRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('Codification for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Codification::class,
			'entities' => $codificationRepository->getCodifications($project),
		]);
	}

	/**
	 * @Route("/project/{project}/codification/new", name="codification_new", requirements={"project"="\d+"})
	 */
	public function new(Request $request, Project $project): Response
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
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($codification);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('codification', [
				'project' => $project->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $project->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/codification/{codification}/edit", name="codification_edit", requirements={"codification"="\d+"})
	 */
	public function edit(Request $request, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('codification', [
				'project' => $codification->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $codification->getProject()->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/codification/{codification}/delete", name="codification_delete", methods={"GET", "DELETE"}, requirements={"codification"="\d+"})
	 */
	public function delete(Request $request, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($codification);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('codification', [
				'project' => $codification->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $codification->getProject()->getId(),
				]),
				'entities' => [$codification],
			]);
		}
 
	}
	
}
?>