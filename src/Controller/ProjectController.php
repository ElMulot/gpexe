<?php
namespace App\Controller;

use App\Entity\User;
use App\Entity\Project;
use App\Form\ProjectType;
use Symfony\UX\Turbo\TurboBundle;
use App\Entity\Enum\CompanyTypeEnum;
use App\Service\FileUploaderService;
use App\Repository\CompanyRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProjectRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectController extends AbstractController
{
	public function __construct(private readonly ManagerRegistry $doctrine, private readonly CompanyRepository $companyRepository, private readonly ProjectRepository $projectRepository, private readonly ProgramRepository $programRepository, private readonly FileUploaderService $fileUploadService)
	{
	}

	#[Route(path: '/project/all', name: 'projects_list')]
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
		
		return $this->renderForm('pages/main/projects.html.twig', [
			'projects' => $projects
		]);
	}

	#[Route(path: '/project/{project}', name: 'project', requirements: ['project' => '\d+'])]
	public function index(Request $request, Project $project, CompanyRepository $companyRepository) : Response
	{
		if ($this->isGranted('PROJECT_SHOW', $project) === false) {
			return $this->redirectToRoute('projects_list');
		}

		$programs = [];
		if ($this->isGranted('PROGRAM_SHOW', $project)) {
			$programs = $this->programRepository->getEnabledPrograms($project);
		} else if ($this->isGranted('PROGRAM_PROGRESS_SHOW', $project)) {
			$programs = $this->programRepository->getEnabledProgressPrograms($project);
		}

		if ($this->isGranted('ROLE_ADMIN')) {
			$routeBack = $this->generateUrl('projects_list');
		} else {
			$projects = $this->projectRepository->getProjects($this->getUser());
			if (count($projects) == 1) {
				$routeBack = $this->generateUrl('home');
			} else {
				$routeBack = $this->generateUrl('projects_list');
			}
		}
		
		return $this->renderForm('pages/project/index.html.twig', [
			'project' => $project,
			'programs' => $programs,
			'route_back' => $routeBack,
		]);
	}

	#[Route(path: '/project/{project}/{belong}/pannel', name: 'project_pannel', requirements: ['project' => '\d+', 'belong' => 'sdr|mdr'])]
	public function pannel(Request $request, Project $project, string $belong, CompanyRepository $companyRepository) : Response
	{
		if ($this->isGranted('PROJECT_SHOW', $project) === false) {
			return $this->redirectToRoute('projects_list');
		}

		if ($this->getUser()->getCompany()->isMainContractor() || $this->getUser()->getCompany()->isChecker()) {
			$user = null;
		} else {
			$user = $this->getUser();
		}

		switch ($belong) {
			case 'mdr':
				$companies = $companyRepository->getCompaniesByProject($project, [CompanyTypeEnum::MAIN_CONTRACTOR], $user);
				return $this->renderForm('pages/project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			case 'sdr':
				$companies = $companyRepository->getCompaniesByProject($project, [CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER], $user);
				return $this->renderForm('pages/project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			// default:
			// 	return $this->renderForm('pages/project/index/_pannel_misc.html.twig', [
			// 		'project' => $project,
			// 	]);
		}
	}

	#[Route(path: '/project/new', name: 'project_new')]
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
			
			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'target' => 'projects',
				'redirect' => $this->generateUrl('projects_list'),
			]);
		} else {
			return $this->renderForm('pages/project/new.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/project/{project}/edit', name: 'project_edit', requirements: ['project' => '\d+'])]
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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'target' => 'projects',
				'redirect' => $this->generateUrl('projects_list'),
			]);
		} else {
			return $this->renderForm('pages/project/edit.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/project/{project}/delete', name: 'project_delete', methods: ['GET', 'DELETE'], requirements: ['project' => '\d+'])]
	public function delete(Request $request, Project $project) : Response
	{
		if ($this->isGranted('PROJECT_DELETE', $project) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'target' => 'projects',
				'redirect' => $this->generateUrl('projects_list'),
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'title' => 'Delete project',
				'entities' => [$project],
			]);
		}
	}

	protected function getUser(): User
	{
		return parent::getUser();
	}
}
?>