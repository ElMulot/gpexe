<?php
namespace App\Controller;

use App\Entity\Company;
use App\Entity\Project;
use App\Form\ProjectType;
use App\Service\FileUploaderService;
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

	private $fileUploadService;
	
	public function __construct(CompanyRepository $companyRepository, ProjectRepository $projectRepository, ProgramRepository $programRepository, FileUploaderService $fileUploadService)
	{
		$this->companyRepository = $companyRepository;
		$this->projectRepository = $projectRepository;
		$this->programRepository = $programRepository;
		$this->fileUploadService = $fileUploadService;
	}

	/**
	 * @Route("/project/all", name="projects_list")
	 * redirigé vers project_view si un seul projet (sauf ROLE_ADMIN)
	 */
	public function projects(): Response
	{
		if ($this->isGranted('ROLE_ADMIN')) {
			
			$projects = $this->projectRepository->getAllProjects();
			
		} else {
			
			$projects = $this->projectRepository->getProjects($this->getUser());
			
			if (sizeof($projects) == 1) {
				return $this->redirectToRoute('project', [
					'project' => reset($projects)->getId(),
				]);
			}
			
		}
		
		return $this->renderForm('main/projects.html.twig', [
			'projects' => $projects
		]);
	}

	/**
	 * @Route("/project/{project}", name="project", requirements={"project"="\d+"})
	 */
	public function index(Request $request, Project $project, CompanyRepository $companyRepository): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		$programs = [];
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledPrograms($project);
		} else if ($this->isGranted('ROLE_USER') && $this->getUser()->getCompany()->isMainContractor()) {
			$programs = $this->programRepository->getEnabledProgressPrograms($project);
		}
			
		return $this->renderForm('project/index.html.twig', [
			'project' => $project,
			'programs' => $programs,
			'route_back' => $this->generateUrl('projects_list'),
		]);
	}

/**
	 * @Route("/project/{project}/{type}", name="project_pannel", requirements={"project"="\d+", "type"="sdr|mdr|misc"})
	 */
	public function pannel(Request $request, Project $project, string $type, CompanyRepository $companyRepository): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor() ||
			$this->isGranted('ROLE_EDIT_DOCUMENTS') && $project->hasUser($this->getUser())) {
			$user = null;
		} else {
			$user = $this->getUser();
		}

		switch ($type) {
			case 'sdr':
				$companies = $companyRepository->getCompaniesByProject($project, [Company::MAIN_CONTRACTOR], $user);
				return $this->renderForm('project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			case 'mdr':
				$companies = $companyRepository->getCompaniesByProject($project, [Company::SUB_CONTRACTOR, Company::SUPPLIER], $user);
				return $this->renderForm('project/index/_pannel.html.twig', [
					'project' => $project,
					'companies' => $companies,
				]);
			default:
				return $this->renderForm('project/index/_pannel_misc.html.twig', [
					'project' => $project,
				]);
		}

		
		

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
			$imageFile = $form->get('image')->getData();
			$imageFileName = $this->fileUploader->upload($imageFile);
			$project->setImage($imageFileName);
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
			$imageFile = $form->get('image')->getData();
			$imageFileName = $this->fileUploader->upload($imageFile);
			$project->setImage($imageFileName);
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