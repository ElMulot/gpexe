<?php

namespace App\Controller;

use App\Entity\Company;
use App\Form\CompanyType;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CompanyController extends AbstractController
{
	
	private $doctrine;

	private $translator;
	
	public function __construct(ManagerRegistry $doctrine, TranslatorInterface $translator)
	{
		$this->doctrine = $doctrine;
		$this->translator = $translator;
	}
	
	public function index(CompanyRepository $companyRepository): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Company'),
			'route_back' => $this->generateUrl('project'),
			'class' => Company::class,
			'entities' => $companyRepository->getCompanies(),
		]);
	}
	
	public function new(Request $request): Response
	{
		$company = new Company();
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('company');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'form' => $view,
			]);
		}
	}
	
	public function edit(Request $request, Company $company): Response
	{
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('company');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'form' => $view,
			]);
		}
	}
	
	public function delete(Request $request, Company $company): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('company');
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'entities' => [$company],
			]);
		}
		
		
	}
	
}
?>