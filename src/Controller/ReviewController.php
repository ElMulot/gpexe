<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Review;
use App\Entity\Company;
use App\Entity\Project;
use App\Entity\Version;
use App\Form\ReviewType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

//todo : à mettre à jour complètement
class ReviewController extends AbstractTurboController
{   
	
	public function __construct(private readonly ManagerRegistry $doctrine)
	{
	}

	#[Route(path: '/project/serie/document/version/{version}/{company}/review/detail', name: 'review_detail', requirements: ['version' => '\d+', 'company' => '\d+'])]
	public function detail(Request $request, Version $version, Company $company) : Response
	{
		$serie = $version->getDocument()->getSerie();
		$this->denyAccessUnlessGranted('REVIEW_SHOW', $serie);
		
		$review = $version->getReviewByCompany($company);
		return $this->renderForm('pages/engineering/index/review/_detail.html.twig', [
			'review' => $review,
			'version' => $version,
			'company' => $company,
		]);
	}
	
	#[Route(path: '/project/serie/document/version/{version}/{company}/review/new', name: 'review_new', requirements: ['version' => '\d+', 'company' => '\d+'])]
	public function new(Request $request, Version $version, Company $company) : Response
	{
		$document = $version->getDocument();
		$project = $document->getSerie()->getProject();
		if ($this->isGranted('REVIEW_NEW', $project)) {
			if ($version->getReviewByCompany($company) !== null) {
				return $this->redirectToRoute('review_detail' ,[
					'version' => $version->getId(),
					'company' => $company->getId(),
				]);
			}
			
			$review = new Review();
			$form = $this->createForm(ReviewType::class, $review, [
				'project' => $project,
				'company' => $company,
			]);
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {

				$review->setUser($this->getUser());
				$review->setVersion($version);
				$entityManager = $this->doctrine->getManager();
				$entityManager->persist($review);
				// $entityManager->flush();
				
				// if ($review->getVisa()->getRevisionRequired()) {
				// 	return $this->redirectToRoute('version_quick_new', [
				// 		'document' => $document->getId(),
				// 		'version' => $version->getId(),
				// 		'company' => $company->getId(),
				// 	]);
					
				// } else {
					

					return $this->renderForm('pages/engineering/index/review/_new.html.twig', [
						'company' => $company,
						'version' => $version,
						'form' => $form,
					]);


					// return $this->renderSuccess($request, 'review_detail', [
					// 	'version' => $version->getId(),
					// 	'company' => $company->getId(),
					// ]);
				// }
			} else {
				return $this->renderForm('pages/engineering/index/review/_new.html.twig', [
					'company' => $company,
					'version' => $version,
					'form' => $form,
				]);
			}
		} else {
			dump('ok');
			return $this->redirectToRoute('review_detail' ,[
				'version' => $version->getId(),
				'company' => $company->getId(),
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/review/{review}/edit', name: 'review_edit', requirements: ['review' => '\d+'])]
	public function edit(Request $request, Review $review) : Response
	{
		$reviews = $this->doctrine->getRepository(Review::class)->findBy(['version' => 2610]);

		$review = $reviews[0];
		$company = $review->getVisa()->getCompany();
		$version = $review->getVersion();
		$project = $version->getDocument()->getSerie()->getProject();
		
		if ($this->isGranted('REVIEW_EDIT', $project) === true) {
			$form = $this->createForm(ReviewType::class, $reviews, [
				'project' => $project,
				'company' => $company,
			]);
			
			$form->handleRequest($request);
			
			if ($form->isSubmitted() && $form->isValid()) {

				dump($reviews);

				$review->setUser($this->getUser());
				$review->setDate(new \DateTime());
				$entityManager = $this->doctrine->getManager();
				
				// $entityManager->flush();
				
				// return $this->redirectToRoute('review_detail' ,[
				// 	'version' => $version->getId(),
				// 	'company' => $company->getId(),
				// ]);


				return $this->renderForm('pages/engineering/index/review/_new.html.twig', [
					'company' => $company,
					'version' => $version,
					'form' => $form,
				]);	
				
			} else {
				return $this->renderForm('pages/engineering/index/review/_edit.html.twig', [
					'review' => $review,
					'company' => $company,
					'version' => $version,
					'form' => $form,
				]);
			}
		} else {
			return $this->redirectToRoute('review_detail', [
				'version' => $version->getId(),
				'company' => $company->getId(),
			]);
		}
	}
	
	#[Route(path: '/project/serie/document/version/review/{review}/delete', name: 'review_delete', methods: ['GET', 'DELETE'], requirements: ['review' => '\d+'])]
	public function delete(Request $request, Review $review) : Response
	{
		$company = $review->getUser()->getCompany();
		$version = $review->getVersion();
		$project = $version->getDocument()->getSerie()->getProject();

		if ($this->isGranted('REVIEW_DELETE', $project)) {
		
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
			return $this->redirectToRoute('review_detail' ,[
				'version' => $version->getId(),
				'company' => $company->getId(),
			]);
		}
	}
}
