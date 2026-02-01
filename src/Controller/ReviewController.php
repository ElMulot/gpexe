<?php

namespace App\Controller;

use App\Entity\Review;
use App\Entity\Company;
use App\Entity\User;
use App\Entity\Version;
use App\Form\ReviewType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReviewController extends AbstractController
{   
	
	private $doctrine;
	
	public function __construct(ManagerRegistry $doctrine)
	{
		$this->doctrine = $doctrine;
	}

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
		/** @var User $user */
		$user = $this->getUser();

		if ($user->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
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
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
	
	public function edit(Request $request, Review $review) :Response
	{
		$company = $review->getVisa()->getCompany();
		$version = $review->getVersion();
		/** @var User $user */
		$user = $this->getUser();
		
		if ($user->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $version->getDocument()->getSerie()->getProject(),
				'company' => $company,
			]);
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {
				
				$review->setUser($user);
				$review->setDate(new \DateTime());
				$entityManager = $this->doctrine->getManager();
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
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
	
	public function delete(Request $request, Review $review) :Response
	{
		/** @var User $user */
		$user = $this->getUser();
		$company = $review->getUser()->getCompany();
		$version = $review->getVersion();

		
		if ($user->getCompany() == $company || $this->isGranted('ROLE_ADMIN')) {
		
			if ($this->isCsrfTokenValid('delete', $request->get('_token'))) {
				$entityManager = $this->doctrine->getManager();
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
		} else {
			return $this->redirectToRoute('review' ,[
				'version' => $version,
				'company' => $company,
			]);
		}
	}
}
