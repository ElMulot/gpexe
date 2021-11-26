<?php

namespace App\Controller;

use App\Entity\Company;
use App\Form\CompanyType;
use App\Repository\CompanyRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CompanyController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	/**
	 * @Route("/company", name="company")
	 */
	public function index(CompanyRepository $companyRepository): Response
	{
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('Company'),
			'route_back' => $this->generateUrl('project'),
			'class' => Company::class,
			'entities' => $companyRepository->getCompanies(),
		]);
	}
	
	/**
	 * @Route("/company/new", name="company_new")
	 */
	public function new(Request $request): Response
	{
		$company = new Company();
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('company');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'form' => $form,
			]);
		}
	}

	/**
	 * @Route("/company/{company}/edit", name="company_edit", requirements={"company"="\d+"})
	 */
	public function edit(Request $request, Company $company): Response
	{
		$form = $this->createForm(CompanyType::class, $company);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('company');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/company/{company}/delete", name="company_delete", methods={"GET", "DELETE"}, requirements={"company"="\d+"})
	 */
	public function delete(Request $request, Company $company): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($company);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('company');
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('company'),
				'entities' => [$company],
			]);
		}
		
		
	}
	
}
?>