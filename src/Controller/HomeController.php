<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\User;
use App\Helpers\Date;
use App\Service\FieldService;
use Symfony\Component\Yaml\Yaml;
use App\Repository\StatusRepository;
use App\Repository\ProjectRepository;
use App\Repository\VersionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class HomeController extends AbstractTurboController
{
	
	public function __construct(private readonly FieldService $fieldService,
								private readonly ProjectRepository $projectRepository,
								private readonly StatusRepository $statusRepository,
								private readonly VersionRepository $versionRepository,
								#[Autowire('%kernel.project_dir%')]
        						private string $kernelProjectDir)
	{
	}
	
	#[Route(path: '/', name: 'home')]
	public function index() : Response
	{
		return $this->render('pages/main/home.html.twig', [
			'projects' => $this->projectRepository->getProjects($this->getUser()),
		]);
	}

	#[Route(path: '/project/{project}/alert', name: 'alert', requirements: ['project' => '\d+'])]
	public function alert(Project $project) : Response
	{
		$fields = $this->fieldService->getFields($project);
		$company = $this->getUserCompany();
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
			'max_results_per_page' => 50,
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
				'max_results_per_page' => 50,
				'page' => 1,
			];
		} else {
			$checkSettings = [];
		}
		return $this->render('pages/main/home/_alert.html.twig', [
			'project' => $project,
			'prod_alerts' => $this->versionRepository->getProdAlerts($project, $this->getUser()),
			'check_alerts' => $this->versionRepository->getCheckAlerts($project, $this->getUser()),
			'prod_settings' => $prodSettings,
			'check_settings' => $checkSettings,
		]);
	}
	
	#[Route(path: '/about', name: 'about')]
	public function about() : Response
	{
		return $this->render('pages/main/about.html.twig', [
			'items' => Yaml::parseFile($this->kernelProjectDir . '/config/ressources/about.yaml'),
		]);
	}
	
}
?>