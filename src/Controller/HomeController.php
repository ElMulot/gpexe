<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Project;
use App\Service\FieldService;
use App\Repository\ProjectRepository;
use App\Repository\StatusRepository;
use App\Repository\VersionRepository;

class HomeController extends AbstractController
{
	
	private $translator;
	
	private $projectRepository;
	
	private $versionRepository;
	
	private $statusRepository;
	
	private $fieldService;
	
	public function __construct(TranslatorInterface $translator, FieldService $fieldService, ProjectRepository $projectRepository, VersionRepository $versionRepository, StatusRepository $statusRepository)
	{
		$this->translator = $translator;
		$this->fieldService = $fieldService;
		$this->projectRepository = $projectRepository;
		$this->versionRepository = $versionRepository;
		$this->statusRepository = $statusRepository;
	}
	
	public function index(): Response
	{
		$projects = $this->projectRepository->getProjects($this->getUser());
		
		return $this->render('home/index.html.twig', [
			'projects' => $this->projectRepository->getProjects($this->getUser()),
		]);

	}
	
	public function alert(Project $project): Response
	{
		$fields = $this->fieldService->getFields($project);
		$company = $this->getUser()->getCompany();
		
		$prodSettings = [
			'display' => [
				'document_reference' => $fields['document.reference']['default_width'],
				'version_name' => $fields['version.name']['default_width'],
				'document_name' => $fields['document.name']['default_width'],
				'status_value' => $fields['status.value']['default_width'],
				'version_writer' => $fields['version.writer']['default_width'],
				'version_checker' => $fields['version.checker']['default_width'],
				'version_date' => $fields['version.date']['default_width'],
			],
			'filter' => [
				'version_is_required' => 1,
				'status_value' => $this->statusRepository->getNonCancelledStatuses($project),
				'version_writer' => [$this->getUser()->getId()],
				'version_first_scheduled' => 1,
			],
			'highlight' => 'version_date',
		    'sortAsc' => 'version_date',
			'results_per_page' => 50,
			'page' => 1,
		];
		
		if ($project->getVisasByCompany($company)->isEmpty() === false) {
			$checkSettings = [
				'display' => [
					'document_reference' => $fields['document.reference']['default_width'],
					'version_name' => $fields['version.name']['default_width'],
					'document_name' => $fields['document.name']['default_width'],
					'status_value' => $fields['status.value']['default_width'],
					'version_checker' => $fields['version.checker']['default_width'],
					'version_date' => $fields['version.date']['default_width'],
					'visa_' . $company->getId() => $fields['visa.' . $company->getCodename() . '.value']['default_width'],
				],
				'filter' => [
					'version_is_required' => 0,
					'status_value' => $this->statusRepository->getNonCancelledStatuses($project),
					'version_checker' => [$this->getUser()->getId()],
					'version_last_delivered' => 1,
				    'visa_' . $company->getId() => [0],
				],
			    'sortAsc' => 'version_date',
			    'results_per_page' => 50,
				'page' => 1,
			];
		} else {
			$checkSettings = [];
		}
		
		return $this->render('home/alert.html.twig', [
			'project' => $project,
			'prod_alerts' => $this->versionRepository->getProdAlerts($project, $this->getUser()),
			'check_alerts' => $this->versionRepository->getCheckAlerts($project, $this->getUser()),
			'prod_settings' => $prodSettings,
			'check_settings' => $checkSettings,
		]);
		
	}
	
	public function about(): Response
	{
		return $this->render('home/about.html.twig', [
			'items' => Yaml::parseFile($this->getParameter('kernel.project_dir') . '/config/ressources/about.yaml'),
		]);
	}
	
}
?>