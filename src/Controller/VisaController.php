<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Visa;
use App\Form\VisaType;
use App\Repository\CompanyRepository;
use App\Repository\VisaRepository;
use App\Entity\Project;

class VisaController extends AbstractController
{

	private $translator;
	
	private $companyRepository;
	
	private $visaRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, VisaRepository $visaRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->visaRepository = $visaRepository;
	}
	
	public function index(Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Visas for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Visa::class,
			'entities' => $this->visaRepository->getVisas($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$visa = new Visa();
		$visa->setProject($project);
		$checkerCompanies = $this->companyRepository->getCheckerCompanies($project);
		$form = $this->createForm(VisaType::class, $visa, [
			'choices' => $checkerCompanies,
		]);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($visa);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('visa', [
				'project' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('visa', [
					'project' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Visa $visa): Response
	{
		$project = $visa->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$checkerCompanies = $this->companyRepository->getCheckerCompanies($visa->getProject());
		$form = $this->createForm(VisaType::class, $visa, [
			'choices' => $checkerCompanies,
		]);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('visa', [
				'project' => $visa->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('visa', [
					'project' => $visa->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Visa $visa): Response
	{
		$project = $visa->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($visa);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('visa', [
				'project' => $visa->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('visa', [
					'project' => $visa->getProject()->getId(),
				]),
				'entities' => [$visa],
			]);
		}
		
		
	}
	
}
?>