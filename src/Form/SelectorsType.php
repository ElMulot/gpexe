<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Company;
use App\Entity\User;
use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\Visa;
use App\Repository\CompanyRepository;
use App\Repository\UserRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;

class SelectorsType extends AbstractType
{	
	private $translator;
	
	private $companyRepository;
	
	private $userRepository;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, UserRepository $userRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->userRepository = $userRepository;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
	}
	
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$request = $builder->getData();
    	
    	$metadatas = $options['metadatas'];
    	$series = $options['series'];
    	$checkerCompanies = $options['checkerCompanies'];
    	$project = $options['project'];
    	$columns = $options['columns'];
    	$current_serie = $options['current_serie'];
    	
    	$codifications = $this->codificationRepository->getCodifications($project);
    	$checkers = $this->userRepository->getCheckers($project);
    	
    	foreach ($codifications as $codification) {
    		
    		if ($codification->isList() && $columns['document[reference]']['display']) {
	    		$builder->add($codification->getSnakeCaseFullId(), EntityType::class, [
	    			'class' => CodificationItem::class,
	    			'choices' => $codification->getCodificationItems(),
	    			'label' => false,
	    			'mapped' => false,
	    			'multiple' => true,
	    			'required' => false,
	    			'attr' => [
	    				'name' => $codification->getFullId() . '[]',
	    				'selected_values' => $request->query->get('codification')[$codification->getId()] ?? [],
	    				'data-title' => $codification->getName(),
	    				'data-target' => 'document_reference',
	    				'data-full-header' => false,
	    			],
	    		]);
    		}
    	}
    	
    	if ($columns['version[isRequired]']['display']) {
	    	$builder->add('version_isRequired', ChoiceType::class, [
	    		'choices' => [
	    			'Yes' => '1',
	    			'No' => '0',
	    		],
	    		'label' => false,
	    		'mapped' => false,
	    		'multiple' => false,
	    		'required' => false,
	    		'attr' => [
	    			'name' => 'version[isRequired]',
	    			'selected_values' => $request->query->get('version')['isRequired'] ?? null,
	    			'data-title' => $this->translator->trans('Required'),
	    			'data-target' => 'version_isRequired',
	    			'data-full-header' => false,
	    		],
	    	]);
    	}
    	
    	if ($columns['version[writer]']['display']) {
    		$builder->add('version_writer', EntityType::class, [
	    		'class' => User::class,
    			'choices' => ($current_serie)?$this->userRepository->getUsersByCompany($current_serie->getCompany()):$this->userRepository->getUsers(),
	    		'label' => false,
	    		'mapped' => false,
    			'multiple' => true,
	    		'required' => false,
	    		'attr' => [
	    			'name' => 'version[writer][]',
	    			'selected_values' => $request->query->get('version')['writer'] ?? [],
	    			'data-title' => $this->translator->trans('Writer'),
	    			'data-target' => 'version_writer',
	    			'data-full-header' => true,
	    		],
    		]);
    	}
    	
    	if ($columns['version[checker]']['display']) {
    		$builder->add('version_checker', EntityType::class, [
    			'class' => User::class,
    			'choices' => $checkers,
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'version[checker][]',
    				'selected_values' => $request->query->get('version')['checker'] ?? [],
    				'data-title' => $this->translator->trans('Checker'),
    				'data-target' => 'version_checker',
    				'data-full-header' => true,
    			],
    		]);
    	}
    		
    	if ($columns['version[approver]']['display']) {
    		$builder->add('version_approver', EntityType::class, [
    			'class' => User::class,
    			'choices' => $checkers,
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'version[approver][]',
    				'selected_values' => $request->query->get('version')['approver'] ?? [],
    				'data-title' => $this->translator->trans('Approver'),
    				'data-target' => 'version_approver',
    				'data-full-header' => true,
    			],
    		]);
    	}
    	
    	if ($columns['serie[name]']['display']) {
    		$builder->add('serie_name', EntityType::class, [
    			'class' => Serie::class,
    			'choices' => $series,
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'serie[name][]',
    				'selected_values' => $request->query->get('serie')['name'] ?? [],
    				'data-title' => $this->translator->trans('Serie name'),
    				'data-target' => 'serie_name',
    				'data-full-header' => true,
    			],
    		]);
    	}
    	
    	if ($columns['serie[company]']['display']) {
    		$builder->add('serie_company', EntityType::class, [
    			'class' => Company::class,
    			'choices' => $this->companyRepository->getCompaniesByProject($project),
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'serie[company][]',
    				'selected_values' => $request->query->get('serie')['company'] ?? [],
    				'data-title' => $this->translator->trans('Company'),
    				'data-target' => 'serie_company',
    				'data-full-header' => true,
    			],
    		]);
    	}
    	
    	if ($columns['status[value]']['display']) {
    		$builder->add('status_value', EntityType::class, [
    			'class' => Status::class,
    			'choices' => $this->statusRepository->getStatuses($project),
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'status[value][]',
    				'selected_values' => $request->query->get('status')['value'] ?? [],
    				'data-title' => $this->translator->trans('Status value'),
    				'data-target' => 'status_value',
    				'data-full-header' => true,
    			],
    		]);
    	}
    	
    	if ($columns['status[type]']['display']) {
    		$builder->add('status_type', ChoiceType::class, [
    			'choices' => [
    				$this->translator->trans('Information') => Status::INFORMATION,
    				$this->translator->trans('Review') => Status::REVIEW,
    				$this->translator->trans('Cancel') => Status::CANCEL,
    				$this->translator->trans('As built') => Status::AS_BUILT,
    			],
    			'label' => false,
    			'mapped' => false,
    			'multiple' => true,
    			'required' => false,
    			'attr' => [
    				'name' => 'status[type][]',
    				'selected_values' => $request->query->get('status')['type'] ?? null,
    				'data-title' => $this->translator->trans('Status type'),
    				'data-target' => 'status_type',
    				'data-full-header' => false,
    			],
    		]);
    	}
    	
    	foreach ($metadatas as $metadata) {
    		
    		if ($columns[$metadata->getFullId()]['display']) {
    			
    			switch ($metadata->getType()) {
    				case Metadata::BOOLEAN:
    					$builder->add($metadata->getSnakeCaseFullId(), ChoiceType::class, [
	    					'choices' => [
		    					'Yes' => '1',
		    					'No' => '0',
	    					],
	    					'label' => false,
	    					'mapped' => false,
	    					'multiple' => false,
	    					'required' => false,
	    					'attr' => [
		    					'name' => $metadata->getFullId(),
		    					'selected_values' => $request->query->get($metadata->getParentName())[$metadata->getId()] ?? null,
		    					'data-title' => $metadata->getName(),
		    					'data-target' => $metadata->getSnakeCaseFullId(),
		    					'data-full-header' => false,
		    				],
    					]);
    					break;
    				
    				case Metadata::LIST:
    					$builder->add($metadata->getSnakeCaseFullId(), EntityType::class, [
	    					'class' => MetadataItem::class,
	    					'choices' => $metadata->getMetadataItems(),
	    					'label' => false,
	    					'mapped' => false,
	    					'multiple' => true,
	    					'required' => false,
	    					'choice_value' => 'value',
	    					'attr' => [
		    					'name' => $metadata->getFullId() . '[]',
		    					'selected_values' => $request->query->get($metadata->getParentName())[$metadata->getId()] ?? [],
		    					'data-title' => $metadata->getName(),
		    					'data-target' => $metadata->getSnakeCaseFullId(),
		    					'data-full-header' => true,
	    					],
    					]);
    					break;
    			}
    		}
    	}
    	
    	foreach ($checkerCompanies as $company) {
    		if (!$project->getVisasByCompany($company)->isEmpty()) {
	    		if ($columns['visa[' . $company->getId() . ']']['display']) {
	    			$builder->add('visa_' . $company->getId(), EntityType::class, [
	    				'class' => Visa::class,
	    				'choices' => $project->getVisasByCompany($company),
	    				'label' => false,
	    				'mapped' => false,
	    				'multiple' => false,
	    				'required' => false,
	    				'attr' => [
	    					'name' => 'visa[' . $company->getId() . ']',
	    					'selected_values' => $request->query->get('visa')[$company->getId()] ?? null,
	    					'data-title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
	    					'data-target' => 'visa_' . $company->getId(),
	    					'data-full-header' => false,
	    				],
	    			]);
	    		}
    		}
    	}
    	
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
        	'csrf_protection' => false,
        	'current_serie' => null,
        ]);
        $resolver->setRequired(['metadatas', 'series', 'checkerCompanies', 'project', 'columns']);
    }
}

?>