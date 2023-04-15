<?php

namespace App\Controller;

use App\Entity\View;
use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Project;
use App\Form\SerieType;
use App\Repository\SerieRepository;
use App\Repository\MetadataRepository;
use App\Entity\Enum\SerieBelongingEnum;
use App\Exception\InternalErrorException;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Routing\Requirement\EnumRequirement;

class SerieController extends AbstractTurboController
{
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly CompanyRepository $companyRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly SerieRepository $serieRepository,
								private readonly TranslatorInterface $translator)
	{
	}
	
	/**
	 * Query parameters :
	 * 	+ all the query parameters indicated in EngineeringController::thead
	 */
	#[Route(path: '/project/{project}/serie', name: 'serie', requirements: ['project' => '\d+'])]
	public function index(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_SHOW', $project);
		
		$serieIds = $request->get('id');
		$series = $this->serieRepository->getAvialableSeriesByProjectAndByUserAsArray($project, $this->getUser());
		
		$serie = $request->get('filters')['serie'] ?? $serieIds;
		$request->query->set('filters', ($request->get('filters') ?? []) + ['serie' => $serie]);
		
		return $this->render('pages/engineering/index/nav/_serie.html.twig', [
			'title' => $this->translator->trans('Series for') . ' : ' . $project->getName(),
			'class' => Serie::class,
			'series' => $series,
			'project' => $project,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		display					user defined display
	 * 	+ array		filters					user defined filter
	 * 	+ int		results_per_page		user defined results per page
	 *  + string	sort_desc				user defined sorted desc
	 *  + string	sort_asc				user defined sorted asc
	 */
	#[Route(path: '/project/{project}/series/{company}', name: 'seriesListByCompany', requirements: ['project' => '\d+', 'company' => '\d+'])]
	public function seriesByCompany(Project $project, Company $company) : Response
	{

		$series = $this->serieRepository->getSeriesByCompany($project, $company);

		if (empty($series) === true) {
			if ($this->isGranted('SERIE_NEW', $project) === false) {
				return $this->redirectToRoute('project', [
					'project' => $project,
				]);
			}
		} else {
			$this->denyAccessUnlessGranted('ENGINEERING_SHOW', reset($series));
		}

		return $this->render('pages/engineering/index.html.twig', [
			'series' => $series,
			'project' => $project,
			'company' => $company,
		]);
	}
	
	/**
	 * Query parameters :
	 * 	+ array		display					user defined display
	 * 	+ array		filters					user defined filter
	 * 	+ int		results_per_page		user defined results per page
	 *  + string	sort_desc				user defined sorted desc
	 *  + string	sort_asc				user defined sorted asc
	 */
	#[Route(path: '/project/{project}/series/{belong}', name: 'seriesListByBelonging', requirements: ['project' => '\d+', 'belong' => new EnumRequirement(SerieBelongingEnum::class)])]
	public function seriesByBelonging(Project $project, string $belong) : Response
	{	
		switch ($belong) {
			case SerieBelongingEnum::ALL:
				$this->denyAccessUnlessGranted('SHOW_ALL', $project);
				$series = $this->serieRepository->getSeriesByProject($project);
				break;
			case SerieBelongingEnum::MDR:
				$this->denyAccessUnlessGranted('SHOW_MDR', $project);
				$series = $this->serieRepository->getMdrSeriesByProject($project);
				break;
			case SerieBelongingEnum::SDR:
				$this->denyAccessUnlessGranted('SHOW_SDR', $project);
				$series = $this->serieRepository->getSdrSeriesByProject($project);
				break;
			default:
				throw new \LogicException('logic.codeNotReached');
		}

		
		if (empty($series) === true) {
			return $this->redirectToRoute('project', [
				'project' => $project,
			]);
		}

		return $this->render('pages/engineering/index.html.twig', [
			'series' => $series,
			'project' => $project,
		]);
	}

	/**
	 * Query parameters :
	 * 	+ array		id						array of serie ids that could be displayed
	 * 	+ array		display					user defined display
	 * 	+ array		filters					user defined filter
	 * 	+ int		results_per_page		user defined results per page
	 *  + string	sort_desc				user defined sorted desc
	 *  + string	sort_asc				user defined sorted asc
	 */
	#[Route(path: '/project/{project}/series/select', name: 'serieSelect', requirements: ['project' => '\d+'])]
	public function select(Request $request, Project $project) : Response
	{
		$serieIds = $request->get('id');
		
		$series = $this->serieRepository->getSeriesByIds($serieIds);
		
		foreach ($series as $serie) {
			$this->denyAccessUnlessGranted('ENGINEERING_SHOW', $serie);
		}

		return $this->render('pages/engineering/index/_select.html.twig', [
			'series' => $series,
			'project' => $project,
		]);

	}

	/**
	 * Query parameters :
	 * 	+ array		series			array of serie ids that will be used for company selector in the form
	 * 	+ array		versions		array of version ids (not used for serie creation)
	 */
	#[Route(path: '/project/{project}/serie/new', name: 'serieNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project, Company $company = null) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_NEW', $project);
		
		$companies = $this->companyRepository->getCompaniesBySerieIds($request->get('series'));
		
		$serie = new Serie();
		$serie->setProject($project);
		$series = [$serie];
		
		$form = $this->createForm(SerieType::class, $series, [
			'project'	=> $project,
			'companies'	=> $companies,
		]);
		
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'New serie created');

			return $this->renderSuccess($request, 'documentNew', [
				'project'	=> $project->getId(),
				'series'	=> $request->get('series'),
				'versions'	=> $request->get('versions')
			]);

		} else {
			
			return $this->render('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);

		}
	}

	/**
	 * Query parameters :
	 * 	+ array		series			array of serie ids that will be edited and used for company selector in the form
	 * 	+ array		versions		array of version ids (not used for serie edition)
	 */
	#[Route(path: '/project/{project}/serie/edit', name: 'serieEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_EDIT', $project);

		$companies = $this->companyRepository->getCompaniesBySerieIds($request->get('series'));
		$series = $this->serieRepository->getSeriesByIds($request->get('series'));

		$form = $this->createForm(SerieType::class, $series, [
			'project'	=> $project,
			'companies'	=> $companies,
		]);

		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Series updated');

			//fermeture modal à traiter
			return $this->renderSuccess($request, 'versionNew', [
				'project'	=> $project->getId(),
				'versions'	=> $request->get('versions')
			]);

		} else {
			return $this->render('pages/engineering/edit/_pannel.html.twig', [
				'form' => $form,
			]);
		}
	}
	
	/**
	 * Query parameters :
	 * 	+ array		id				array of serie ids that could be displayed
	 */
	#[Route(path: '/project/serie/{serie}/delete', name: 'serieDelete', methods: ['GET', 'DELETE'], requirements: ['serie' => '\d+'])]
	public function delete(Request $request, Serie $serie) : Response
	{
		$project = $serie->getProject();
		
		$this->denyAccessUnlessGranted('SERIE_DELETE', $project);

		$form = $this->createDeleteForm($serie);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($serie);
			$entityManager->flush();
			
			$this->addFlash('success', 'Serie deleted');

			return $this->renderSuccess($request, 'serie', ['project' => $project->getId(), 'id' => $request->get('id')]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'entities' => [$serie],
				'form' => $form,
			]);
		}
	}
	
}
?>