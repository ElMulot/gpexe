<?php

namespace App\Controller;

use App\Entity\CodificationChoice;
use App\Entity\Document;
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Metadata;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\User;
use App\Form\AccountType;
use App\Form\CodificationChoiceType;
use App\Form\DeleteType;
use App\Form\ProjectType;
use App\Form\Type\ChoiceVariousType;
use App\Form\Type\ComboBoxType;
use App\Form\Type\DateVariousType;
use App\Form\Type\TextVariousType;
use App\Helpers\Date;
use App\Service\DateService;
use Symfony\UX\Turbo\TurboBundle;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Mapping\PropertyMetadata;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class TestController extends AbstractTurboController
{
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly ManagerRegistry $doctrine,
								private readonly UserPasswordHasherInterface $passwordHasher,
                                private readonly string $publicDirectory,
								private readonly DateService $dateService,
								#[Autowire('%app.uploads_directory%')]
                                private readonly string $uploadsDirectory,
								#[Autowire('%kernel.default_locale%')]
								private readonly string $defaultLocale,
								private readonly ValidatorInterface $validatorInterface)
	{
	}
	
	#[Route(path: '/test', name: 'test')]
	public function index(Request $request) : Response
	{
		
		// $project = $this->doctrine->getRepository(Project::class)->findOneBy(['id' => 1]);
		// $company = $this->doctrine->getRepository(Company::class)->findOneBy(['id' => 1]);

		// $series = $this->doctrine->getRepository(Serie::class)->findBy(['id' => [3, 29]]);

		// $metadata = $this->doctrine->getRepository(Metadata::class)->findOneBy(['type' => 'list']);

		/**@var Serie $serie */
		// foreach ($series as $serie) {
			// dump($serie->getDocuments()->getValues());
			// foreach ($serie->getDocuments()->getValues() as $document) {
				// $document->getVersions()->getValues();
			// }
		// }

		// $this->dateService->formatAsDefault(new \DateTime());
		
		/**@var ClassMetadata */
		// $metadata = $this->validatorInterface->getMetadataFor(CodificationChoice::class);
		/**@var PropertyMetadata */
		// $propertyMetadata = $metadata->getPropertyMetadata('value')[0];

		// $form = $this->createFormBuilder(null, [
		// 		// 'csrf_protection' => false, 
		// 		// 'attr' => ['id' => 'form_test'],
		// 	])
		// 	// ->add('test', ComboBoxType::class, [
		// 	// 	'required'	=> true,
		// 	// 	'placeholder' => 'test',
		// 	// 	'choices' => $metadata->getMetadataChoices()->getValues(),
		// 	// 	'choice_label'	=> 'value',
		// 	// 	'data' => $metadata->getMetadataChoices()->getValues()[1],
		// 	// ])
		// 	->add('test', TextVariousType::class, [
		// 		'data' => ['test', 'test2'],
		// 		'required' => false,
		// 	])
		// 	// ->add('codification.ItemsValues', TextType::class, [
		// 		// 'constraints' => $propertyMetadata->getConstraints(),
		// 	// ])
		// 	->add('save', SubmitType::class, ['label' => 'Save'])
		// 	->getForm();
		
		// $form->handleRequest($request);		
		
		$test = '';
		dump($request->get('filter')['dd'] ?? 0);

		// if ($form->isSubmitted() && $form->isValid()) {
		// 	$test = $form->getData();
		// }
		return $this->render('test/index.html.twig', [
			// 'form' => $form,
			'test' => $test,
		]);
	}

	#[Route(path: '/test/turbo', name: 'turbo')]
	public function turbo() : Response
	{
		
		return $this->render('test/turbo.html.twig', [
		]);
	}

	#[Route(path: '/test/turbo/index', name: 'turbo_index')]
	public function turbo_index(Request $request) : Response
	{
		return $this->render('test/_index.html.twig', [
			'frameId' => $request->get('frame_id') ?? 'index',
			'text' => $request->get('text') ?? 'Hello world !',
		]);
	}

	#[Route(path: '/test/turbo/pannel', name: 'turbo_pannel')]
	public function turbo_pannel(Request $request) : Response
	{
		return $this->render('test/_pannel.html.twig', [
			'text' => $request->get('text') ?? 'Hello world !',
		]);
	}


	#[Route(path: '/test/turbo/no_stream', name: 'turbo_no_stream')]
	public function turbo_no_stream(Request $request) : Response
	{

		/**@var User $user */
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);
		
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			
			if ($user->getLocale() == 'fr_FR') {
				$this->addFlash('success', 'Data updated');
				return $this->renderSuccess($request, 'turbo_pannel', ['text' => 'Success']);
			} else {
				$this->addFlash('danger', 'Erreur !');
				return $this->renderError($request, 'turbo_pannel', ['text' => 'Error !']);
			}
			
		} else {
			return $this->render('test/_new.html.twig', [
				'form' => $form
			]);
		}

	}

	#[Route(path: '/test/turbo/with_stream', name: 'turbo_with_stream')]
	public function turbo_with_stream(Request $request) : Response
	{
		/**@var User $user */
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);
		
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			if ($user->getLocale() == 'fr_FR') {
				$this->addFlash('success', 'Data updated');
				return $this->renderSuccess($request, 'turbo_index', ['text' => 'Success']);
			} else {
				$this->addFlash('danger', 'Erreur !');
				return $this->renderError($request, 'turbo_index', ['text' => 'Error !']);
			}

		} else {
			$request->headers->set('Turbo-Stream-Replace', 'index');
			return $this->render('test/_new.html.twig', [
				'form' => $form
			]);
		}
	}


	#[Route(path: '/test/turbo/launch_modal', name: 'turbo_launch_modal')]
	public function turbo_launch_modal() : Response
	{
		return $this->render('test/_launch_modal.html.twig');
	}

	#[Route(path: '/test/turbo/modal', name: 'turbo_modal')]
	public function turbo_modal(Request $request) : Response
	{
		/**@var User $user */
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);

		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			if ($user->getLocale() == 'fr_FR') {
				$this->addFlash('success', 'Data updated');
				return $this->renderSuccess($request, 'turbo_index', ['text' => 'Success']);
			} else {
				$this->addFlash('danger', 'Erreur !');
				return $this->renderError($request, 'turbo_index', ['text' => 'Error !']);
			}

		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/test/turbo/modal2', name: 'turbo_modal_2')]
	public function turbo_modal_2(Request $request) : Response
	{
		/**@var User $user */
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);

		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {

			if ($user->getLocale() == 'fr_FR') {
				$this->addFlash('success', 'Data updated');
				return $this->renderSuccess($request, 'turbo_modal_3');
			} else {
				$this->addFlash('danger', 'Erreur !');
				return $this->renderError($request, 'turbo_modal_3');
			}

		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}

	#[Route(path: '/test/turbo/modal3', name: 'turbo_modal_3')]
	public function turbo_modal_3(Request $request) : Response
	{
		return $this->render('modal/md_modal.html.twig', [
		]);
	}


	private function clearDuplicateDocuments()
	{
		$entityManager = $this->doctrine->getManager();
		$nb = 0;
		
		foreach ($this->doctrine->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->doctrine->getRepository(Serie::class)->getHydratedSeries($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $serie1) {
					foreach ($serie1->getDocuments()->getValues() as $d1) {
						
						foreach ($series as $serie2) {
							foreach ($serie2->getDocuments()->getValues() as $d2) {
								
								if ($d1->getId() != $d2->getId() && $d1->getReference() == $d2->getReference()) {
									$serie2->removeDocument($d2);
									$entityManager->persist($serie2);
									$restart = true;
									$nb++;
									break 4;
								}
								
							}
						}
					}
				}
				
			} while ($restart);
		}
		
		$entityManager->flush();
		
		dump('documents dupliqués : ' . $nb);
	}
	
	private function clearDuplicateVersions()
	{
		$entityManager = $this->doctrine->getManager();
		$nb = 0;
		
		foreach ($this->doctrine->getRepository(Project::class)->getAllProjects() as $project) {
			
			$series = $this->doctrine->getRepository(Serie::class)->getHydratedSeries($project);
			
			do {
				
				$restart = false;
				
				foreach ($series as $serie) {
					foreach ($serie->getDocuments()->getValues() as $d1) {
						
						foreach ($d1->getVersions()->getValues() as $v1) {
														
							foreach ($d1->getVersions()->getValues() as $v2) {
								
								if ($v1->getId() != $v2->getId() && $v1->getName() == $v2->getName()) {
									$d1->removeVersion($v2);
									$entityManager->persist($d1);
									$restart = true;
									$nb++;
									break 4;
								}
							}
						}
					}
				}
				
			} while ($restart);
		}
		
		$entityManager->flush();
		
		dump('versions dupliquées : ' . $nb);
	}
}
