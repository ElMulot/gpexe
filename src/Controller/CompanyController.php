<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Company;
use App\Repository\CompanyRepository;
use App\Form\CompanyType;

class CompanyController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
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
			$entityManager = $this->getDoctrine()->getManager();
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
			$entityManager = $this->getDoctrine()->getManager();
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
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
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