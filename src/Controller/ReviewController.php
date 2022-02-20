<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Review;
use App\Entity\Company;
use App\Entity\Version;
use App\Form\ReviewType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ReviewController extends AbstractController
{   
	
	public function __construct(private readonly ManagerRegistry $doctrine)
	{
	}

	#[Route(path: '/project/serie/document/version/{version}/{company}/review', name: 'review', requirements: ['version' => '\d+', 'company' => '\d+'])]
	public function index(Request $request, Version $version, Company $company) : Response
	{
		$review = $version->getReviewByCompany($company);
		return $this->renderForm('review/index.html.twig', [
			'review' => $review,
			'version' => $version,
			'company' => $company,
		]);
	}
	
	#[Route(path: '/project/serie/document/version/{version}/{company}/review/new', name: 'review_new', requirements: ['version' => '\d+', 'company' => '\d+'])]
	public function new(Request $request, Version $version, Company $company) : Response
	{
		if ($this->getUser()->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
			$document = $version->getDocument();
			
			if ($version->getReviewByCompany($company) !== null) {
				return $this->redirectToRoute('review' ,[
					'version' => $version,
					'company' => $company,
				]);
			}
			
			$review = new Review();
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $document->getSerie()->getProject(),
				'company' => $company,
			]);
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				$review->setUser($this->getUser());
				$review->setVersion($version);
				$entityManager = $this->doctrine->getManager();
				$entityManager->persist($review);
				$entityManager->flush();
				
				if ($review->getVisa()->getRevisionRequired()) {
					return $this->redirectToRoute('version_quick_new', [
						'document' => $document->getId(),
						'version' => $version->getId(),
						'company' => $company->getId(),
					]);
					
				} else {
					return $this->renderForm('review/index.html.twig', [
						'review' => $review,
						'company' => $company,
						'version' => $version,
					]);
				}
			} else {
				return $this->renderForm('review/form.html.twig', [
					'company' => $company,
					'version' => $version,
					'form' => $form,
				]);
			}
		} else {
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/review/{review}/edit', name: 'review_edit', requirements: ['review' => '\d+'])]
	public function edit(Request $request, Review $review) : Response
	{
		$company = $review->getVisa()->getCompany();
		$version = $review->getVersion();
		if ($this->getUser()->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $version->getDocument()->getSerie()->getProject(),
				'company' => $company,
			]);
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				$review->setUser($this->getUser());
				$review->setDate(new \DateTime());
				$entityManager = $this->doctrine->getManager();
				$entityManager->flush();
				
				return $this->renderForm('review/index.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
				]);
				
			} else {
				return $this->renderForm('review/form.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
					'form' => $form,
				]);
			}
		} else {
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/review/{review}/delete', name: 'review_delete', methods: ['GET', 'DELETE'], requirements: ['review' => '\d+'])]
	public function delete(Request $request, Review $review) : Response
	{
		$company = $review->getUser()->getCompany();
		$version = $review->getVersion();
		if ($this->getUser()->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
		
			if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
				$entityManager = $this->doctrine->getManager();
				$entityManager->remove($review);
				$entityManager->flush();
				
				return $this->renderForm('review/index.html.twig', [
					'review' => null,
					'company' => $company,
					'version' => $version,
				]);
			} else {
				return $this->renderForm('review/delete.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
				]);
			}
		} else {
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
	
	public function getUser(): User
	{
		return parent::getUser();
	}
}
