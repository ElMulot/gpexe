<?php
namespace App\Controller;

use App\Entity\Visa;
use App\Form\VisaType;
use App\Entity\Project;
use App\Repository\VisaRepository;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class VisaController extends AbstractTurboController
{

	public function __construct(private readonly CompanyRepository $companyRepository,
								private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator,
								private readonly VisaRepository $visaRepository)
	{
	}
	
	#[Route(path: '/project/{project}/visa', name: 'visa', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VISA_SHOW', $project);

		return $this->render('generic/list.html.twig', [
			'title' => $this->translator->trans('Visas for') . ' : ' . $project->getName(),
			'class' => Visa::class,
			'entities' => $this->visaRepository->getVisas($project),
		]);
	}

	#[Route(path: '/project/{project}/visa/new', name: 'visaNew', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VISA_NEW', $project);
		
		$visa = new Visa();
		$visa->setProject($project);
		$checkerCompanies = $this->companyRepository->getCheckerCompanies($project);
		$form = $this->createForm(VisaType::class, $visa, [
			'choices' => $checkerCompanies,
		]);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($visa);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'visa', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/visa/{visa}/edit', name: 'visaEdit', requirements: ['visa' => '\d+'])]
	public function edit(Request $request, Visa $visa) : Response
	{
		$project = $visa->getProject();
		
		$this->denyAccessUnlessGranted('VISA_EDIT', $project);
		
		$checkerCompanies = $this->companyRepository->getCheckerCompanies($visa->getProject());
		$form = $this->createForm(VisaType::class, $visa, [
			'choices' => $checkerCompanies,
		]);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'visa', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/visa/{visa}/delete', name: 'visaDelete', methods: ['GET', 'DELETE'], requirements: ['visa' => '\d+'])]
	public function delete(Request $request, Visa $visa) : Response
	{
		$project = $visa->getProject();

		$this->denyAccessUnlessGranted('VISA_DELETE', $project);
		
		$form = $this->createDeleteForm($visa);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($visa);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'visa', [
				'project' => $project->getId(),
			]);

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$visa],
				'form' => $form,
			]);

		}
	}
	
}
?>