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
	 * Set the list of avialable series:
	 * 	+ if query parameter company is defined, the series list will be the series associated to this company
	 * 	+ otherwise, the series list will be all the series allowed to be displayed for the current user
	 * 
	 * Query parameters :
	 * 	+ all the query parameters indicated in EngineeringController::engineering
	 */
	#[Route(path: '/project/{project}/serie', name: 'serie', requirements: ['project' => '\d+'])]
	public function index(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_SHOW', $project);

		if ($request->query->has('companies') === true) {
			$series = $this->serieRepository->getSeriesByProjectAndByCompanyIds($project, $request->query->all('companies'));
		} else {
			$series = $this->serieRepository->getAvialableSeriesByProjectAndByUser($project, $this->getUser());
		}
		
		foreach ($series as $key => $serie) {
			if ($this->isGranted('ENGINEERING_SHOW', $serie) === false) {
				unset($series[$key]);
			}
		}

		return $this->render('pages/engineering/index/nav/_serie.html.twig', [
			'title' => $this->translator->trans('Series for') . ' : ' . $project->getName(),
			'class' => Serie::class,
			'series' => $series,
			'project' => $project,
		]);
	}

	/**
	 * Display a window to select the serie(s) to display
	 * 
	 * Query parameters :
	 * 	+ array		id						serie ids to display
	 * 	+ all the query parameters indicated in EngineeringController::engineering
	 */
	#[Route(path: '/project/{project}/series/select', name: 'serieSelect', requirements: ['project' => '\d+'])]
	public function select(Request $request, Project $project) : Response
	{
		
		$series = $this->serieRepository->getSeriesByIds($request->query->all('id'));

		$request->query->remove('series');
		$request->query->remove('id');

		return $this->render('pages/engineering/index/_select.html.twig', [
			'series' => $series,
			'project' => $project,
		]);

	}

	/**
	 * Query parameters :
	 * 	+ array		versions		array of version ids that will be used for company selector in the form
	 * 	+ array		series			array of serie ids that will be used for company selector in the form if versions is empty
	 */
	#[Route(path: '/project/{project}/serie/new', name: 'serieNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_NEW', $project);
		
		if ($request->query->has('versions')) {
			$companies = $this->companyRepository->getCompaniesByVersionIds($request->query->all('versions'));
		} else {
			$companies = $this->companyRepository->getCompaniesBySerieIds($request->query->all('series'));
		}

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
			foreach ($series as $serie) {
				$entityManager->persist($serie);
			}
			
			$entityManager->flush();
			
			$this->addFlash('success', 'New serie created');

			return $this->renderSuccess($request, 'documentNew', [
				'project'	=> $project->getId(),
			] + $request->query->all());

		} else {
			
			return $this->render('pages/engineering/new/_pannel.html.twig', [
				'form' => $form,
			]);

		}
	}

	/**
	 * Query parameters :
	 * 	+ array		versions		array of version ids that will be used for company selector in the form
	 */
	#[Route(path: '/project/{project}/serie/edit', name: 'serieEdit', requirements: ['project' => '\d+'])]
	public function edit(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('SERIE_EDIT', $project);

		$companies = $this->companyRepository->getCompaniesByVersionIds($request->query->all('versions'));
		$series = $this->serieRepository->getSeriesByVersionIds($request->query->all('series'));

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