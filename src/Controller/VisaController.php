<?php
namespace App\Controller;

use App\Entity\Visa;
use App\Form\VisaType;
use App\Entity\Project;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\VisaRepository;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VisaController extends AbstractController
{

	public function __construct(private readonly TranslatorInterface $translator, private readonly ManagerRegistry $doctrine, private readonly CompanyRepository $companyRepository, private readonly VisaRepository $visaRepository)
	{
	}
	
	#[Route(path: '/project/{project}/visa', name: 'visa', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VISA_SHOW', $project);

		return $this->renderForm('generic/list.html.twig', [
			'title' => $this->translator->trans('Visas for') . ' : ' . $project->getName(),
			'class' => Visa::class,
			'entities' => $this->visaRepository->getVisas($project),
		]);
	}

	#[Route(path: '/project/{project}/visa/new', name: 'visa_new', requirements: ['project' => '\d+'])]
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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('visa', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/visa/{visa}/edit', name: 'visa_edit', requirements: ['visa' => '\d+'])]
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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('visa', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}

	#[Route(path: '/project/visa/{visa}/delete', name: 'visa_delete', methods: ['GET', 'DELETE'], requirements: ['visa' => '\d+'])]
	public function delete(Request $request, Visa $visa) : Response
	{
		$project = $visa->getProject();

		$this->denyAccessUnlessGranted('VISA_DELETE', $project);
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($visa);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('visa', ['project' => $project->getId()]),
			]);

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$visa],
			]);

		}
	}
	
}
?>