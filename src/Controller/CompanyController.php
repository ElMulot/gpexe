<?php

namespace App\Controller;

use App\Entity\Company;
use App\Form\CompanyType;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CompanyController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine)
	{
	}
	
	#[Route(path: '/company', name: 'company')]
	public function index(CompanyRepository $companyRepository) : Response
	{
		return $this->render('generic/list.html.twig', [
			'class' => Company::class,
			'entities' => $companyRepository->getCompanies(),
		]);
	}
	
	#[Route(path: '/company/new', name: 'companyNew')]
	public function new(Request $request) : Response
	{
		$company = new Company();
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'company');

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}

	#[Route(path: '/company/{company}/edit', name: 'companyEdit', requirements: ['company' => '\d+'])]
	public function edit(Request $request, Company $company) : Response
	{
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'company');

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/company/{company}/delete', name: 'companyDelete', methods: ['GET', 'DELETE'], requirements: ['company' => '\d+'])]
	public function delete(Request $request, Company $company) : Response
	{
		$form = $this->createDeleteForm($company);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'company');

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$company],
				'form' => $form,
			]);

		}
	}
	
}
?>