<?php
namespace App\Controller;

use App\Entity\User;
use App\Entity\Project;
use App\Form\ProjectType;
use App\Entity\Enum\CompanyTypeEnum;
use App\Service\FileUploaderService;
use App\Repository\CompanyRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProjectRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractTurboController
{
	public function __construct(private readonly CompanyRepository $companyRepository,
								private readonly FileUploaderService $fileUploadService,
								private readonly ManagerRegistry $doctrine,
								private readonly ProgramRepository $programRepository,
								private readonly ProjectRepository $projectRepository)
	{
	}

	#[Route(path: '/project/all', name: 'projectsList')]
	public function projects() : Response
	{
		if ($this->isGranted('ROLE_ADMIN')) {
			$projects = $this->projectRepository->getAllProjects();
		} else {
			$projects = $this->projectRepository->getProjects($this->getUser());
			if (count($projects) == 1) {
				return $this->redirectToRoute('project', [
					'project' => reset($projects)->getId(),
				]);
			}
		}
		
		return $this->render('pages/main/projects.html.twig', [
			'projects' => $projects
		]);
	}

	#[Route(path: '/project/{project}', name: 'project', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		if ($this->isGranted('PROJECT_SHOW', $project) === false) {
			return $this->redirectToRoute('projectsList');
		}

		$programs = [];
		if ($this->isGranted('PROGRAM_SHOW', $project)) {
			$programs = $this->programRepository->getEnabledPrograms($project);
		} else if ($this->isGranted('PROGRAM_PROGRESS_SHOW', $project)) {
			$programs = $this->programRepository->getEnabledProgressPrograms($project);
		}

		if ($this->isGranted('ROLE_ADMIN')) {
			$routeBack = $this->generateUrl('projectsList');
		} else {
			$projects = $this->projectRepository->getProjects($this->getUser());
			if (count($projects) == 1) {
				$routeBack = $this->generateUrl('home');
			} else {
				$routeBack = $this->generateUrl('projectsList');
			}
		}
		
		return $this->render('pages/project/index.html.twig', [
			'project' => $project,
			'programs' => $programs,
			'route_back' => $routeBack,
		]);
	}

	#[Route(path: '/project/{project}/{belong}/pannel', name: 'projectPannel', requirements: ['project' => '\d+', 'belong' => 'sdr|mdr'])]
	public function pannel(Request $request, Project $project, string $belong, CompanyRepository $companyRepository) : Response
	{
		if ($this->isGranted('PROJECT_SHOW', $project) === false) {
			return $this->redirectToRoute('projectsList');
		}

		if ($this->getUserCompany()->isChecker() === true) {
			$user = null;
		} else {
			$user = $this->getUser();
		}

		switch ($belong) {
			case 'mdr':
				$companies = $companyRepository->getCompaniesByProject($project, [CompanyTypeEnum::MAIN_CONTRACTOR], $user);
				return $this->render('pages/project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			case 'sdr':
				$companies = $companyRepository->getCompaniesByProject($project, [CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER], $user);
				return $this->render('pages/project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			// default:
			// 	return $this->render('pages/project/index/_pannel_misc.html.twig', [
			// 		'project' => $project,
			// 	]);
		}
	}

	#[Route(path: '/project/new', name: 'projectNew')]
	#[IsGranted('ROLE_ADMIN')]
	public function new(Request $request) : Response
	{
		$project = new Project();
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			
			return $this->renderSuccess($request, 'projectsList');
		} else {
			return $this->render('pages/project/new.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/project/{project}/edit', name: 'projectEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{	
		if ($this->isGranted('PROJECT_EDIT', $project) === false) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(ProjectType::class, $project);
		
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			
			return $this->renderSuccess($request, 'projectsList');
		} else {
			return $this->render('pages/project/edit.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/project/{project}/delete', name: 'projectDelete', methods: ['GET', 'DELETE'], requirements: ['project' => '\d+'])]
	public function delete(Request $request, Project $project) : Response
	{
		if ($this->isGranted('PROJECT_DELETE', $project) === false) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createDeleteForm($project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'projectList');
		} else {
			return $this->render('generic/delete.html.twig', [
				'title' => 'Delete project',
				'entities' => [$project],
				'form' => $form,
			]);
		}
	}
}
?>