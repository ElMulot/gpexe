<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Project;
use App\Entity\User;
use App\Repository\CompanyRepository;
use App\Repository\ProjectRepository;
use App\Repository\ProgramRepository;
use App\Form\ProjectType;

class ProjectController extends AbstractController
{
	private $projectRepository;
	
	private $programRepository;
	
	private $doctrine;
	
	public function __construct(ManagerRegistry $doctrine, ProjectRepository $projectRepository, ProgramRepository $programRepository)
	{
		$this->doctrine = $doctrine;
		$this->projectRepository = $projectRepository;
		$this->programRepository = $programRepository;
		
	}

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
		
		return $this->render('project/index.html.twig', [
			'projects' => $projects
		]);
	}

	public function view(Request $request, Project $project, CompanyRepository $companyRepository): Response
	{
		/** @var User $user */
		$user = $this->getUser();

		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($user) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor() ||
			$this->isGranted('ROLE_EDIT_DOCUMENTS') && $project->hasUser($user)) {
			
			$mainContractors = $companyRepository->getMainContractors($project);
			$subContractors= $companyRepository->getSubContractors($project);
			
		} else {
			
			$mainContractors = $companyRepository->getMainContractors($project, $user);
			$subContractors= $companyRepository->getSubContractors($project, $user);
			
		}
		
		$programs = [];
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledPrograms($project);
		} else if ($this->isGranted('ROLE_USER') && $user->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledProgressPrograms($project);
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false) {
			$projects = $this->projectRepository->getProjects($user);
			
			if (sizeof($projects) == 1) {
				return $this->render('project/view.html.twig', [
					'project' => $project,
					'main_contractors' => $mainContractors,
					'sub_contractors' => $subContractors,
					'programs' => $programs,
					'route_back' => $this->generateUrl('home'),
				]);
			}
		}
			
		return $this->render('project/view.html.twig', [
			'project' => $project,
			'main_contractors' => $mainContractors,
			'sub_contractors' => $subContractors,
			'programs' => $programs,
			'route_back' => $this->generateUrl('project'),
		]);
	}

	public function new(Request $request): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		$project = new Project();
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('project');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('project');
		} else {
			$view = $form->createView();
			return $this->render('project/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('project');
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'entities' => [$project],
			]);
		}  
	}
	
}
?>