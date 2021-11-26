<?php
namespace App\Controller;

use App\Entity\Project;
use App\Form\ProjectType;
use App\Repository\CompanyRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectController extends AbstractController
{
	
	private $companyRepository;
	
	private $projectRepository;
	
	private $programRepository;
	
	public function __construct(CompanyRepository $companyRepository, ProjectRepository $projectRepository, ProgramRepository $programRepository)
	{
		$this->companyRepository = $companyRepository;
		$this->projectRepository = $projectRepository;
		$this->programRepository = $programRepository;
	}

	/**
	 * @Route("/project", name="project")
	 * redirigé vers project_view si un seul projet (sauf ROLE_ADMIN)
	 */
	public function index(): Response
	{
		if ($this->isGranted('ROLE_ADMIN')) {
			
			$projects = $this->projectRepository->getAllProjects();
			
		} else {
			
			$projects = $this->projectRepository->getProjects($this->getUser());
			
			if (sizeof($projects) == 1) {
				return $this->redirectToRoute('project_view', [
					'project' => reset($projects)->getId(),
				]);
			}
			
		}
		
		return $this->renderForm('project/index.html.twig', [
			'projects' => $projects
		]);
	}

	/**
	 * @Route("/project/{project}", name="project_view", requirements={"project"="\d+"})
	 */
	public function view(Request $request, Project $project, CompanyRepository $companyRepository): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor() ||
			$this->isGranted('ROLE_EDIT_DOCUMENTS') && $project->hasUser($this->getUser())) {
			
			$mainContractors = $companyRepository->getMainContractors($project);
			$subContractors= $companyRepository->getSubContractors($project);
			
		} else {
			
			$mainContractors = $companyRepository->getMainContractors($project, $this->getUser());
			$subContractors= $companyRepository->getSubContractors($project, $this->getUser());
			
		}
		
		$programs = [];
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledPrograms($project);
		} else if ($this->isGranted('ROLE_USER') && $this->getUser()->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledProgressPrograms($project);
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false) {
			$projects = $this->projectRepository->getProjects($this->getUser());
			
			if (sizeof($projects) == 1) {
				return $this->renderForm('project/view.html.twig', [
					'project' => $project,
					'main_contractors' => $mainContractors,
					'sub_contractors' => $subContractors,
					'programs' => $programs,
					'route_back' => $this->generateUrl('home'),
				]);
			}
		}
			
		return $this->renderForm('project/view.html.twig', [
			'project' => $project,
			'main_contractors' => $mainContractors,
			'sub_contractors' => $subContractors,
			'programs' => $programs,
			'route_back' => $this->generateUrl('project'),
		]);
	}

	/**
	 * @Route("/project/new", name="project_new")
	 */
	public function new(Request $request): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		$project = new Project();
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('project');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/{project}/edit", name="project_edit", requirements={"project"="\d+"})
	 */
	public function edit(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('project');
		} else {
			return $this->renderForm('project/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/{project}/delete", name="project_delete", methods={"GET", "DELETE"}, requirements={"project"="\d+"})
	 */
	public function delete(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('project');
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'entities' => [$project],
			]);
		}  
	}
	
}
?>