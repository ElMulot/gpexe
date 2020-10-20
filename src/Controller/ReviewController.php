<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Review;
use App\Entity\Version;
use App\Entity\Company;
use App\Form\ReviewType;

class ReviewController extends AbstractController
{   
	
	public function index(Request $request, Version $version, Company $company) :Response
	{
		$review = $version->getReviewByCompany($company);
		
		return $this->render('review/index.html.twig', [
			'review' => $review,
			'version' => $version,
			'company' => $company,
		]);
	}
	
	public function new(Request $request, Version $version, Company $company) :Response
	{
		if ($this->getUser()->getCompany() == $company) {
			$document = $version->getDocument();
			$review = new Review();
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $document->getSerie()->getProject(),
				'company' => $company,
			]);
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				$review->setUser($this->getUser());
				$review->setVersion($version);
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->persist($review);
				$entityManager->flush();
				
				if ($review->getVisa()->getRevisionRequired()) {
					return $this->redirectToRoute('version_quick_new', [
						'document' => $document->getId(),
						'version' => $version->getId(),
						'company' => $company->getId(),
					]);
					
				} else {
					return $this->render('review/index.html.twig', [
						'review' => $review,
						'company' => $company,
						'version' => $version,
					]);
				}
			} else {
				$view = $form->createView();
				return $this->render('review/form.html.twig', [
					'company' => $company,
					'version' => $version,
					'form' => $view,
				]);
			}
		} else {
			return $this->render('review/index.html.twig', [
				'review' => $review,
				'company' => $company,
				'version' => $version,
			]);
		}
	}
	
	public function edit(Request $request, Review $review) :Response
	{
		$company = $review->getUser()->getCompany();
		$version = $review->getVersion();
		
		if ($this->getUser()->getCompany() == $company) {
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $version->getDocument()->getSerie()->getProject(),
				'company' => $company,
			]);
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				$review->setUser($this->getUser());
				$review->setDate(new \DateTime);
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->flush();
				
				return $this->render('review/index.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
				]);
				
			} else {
				$view = $form->createView();
				return $this->render('review/form.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
					'form' => $view,
				]);
			}
		} else {
			return $this->render('review/index.html.twig', [
				'review' => $review,
				'company' => $company,
				'version' => $version,
			]);
		}
	}
	
	public function delete(Request $request, Review $review) :Response
	{
		$company = $review->getUser()->getCompany();
		$version = $review->getVersion();
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($review);
			$entityManager->flush();
			
			return $this->render('review/index.html.twig', [
				'review' => null,
				'company' => $company,
				'version' => $version,
			]);
		} else {
			return $this->render('review/delete.html.twig', [
				'review' => $review,
				'company' => $company,
				'version' => $version,
			]);
		}
	}
}
