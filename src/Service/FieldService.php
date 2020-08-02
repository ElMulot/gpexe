<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Form\FormFactoryInterface;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Status;
use App\Form\SelectType;
use App\Repository\CompanyRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;

class FieldService
{
	
	private $translator;
	
	private $formFactory;
	
	private $companyRepository;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	private $userRepository;
	
	public function __construct(TranslatorInterface $translator, FormFactoryInterface $formFactory, CompanyRepository $companyRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository, UserRepository $userRepository)
	{
		$this->translator = $translator;
		$this->formFactory = $formFactory;
		$this->companyRepository = $companyRepository;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
		$this->userRepository = $userRepository;
	}

	public function getFields($project): array
	{
		$fields = [
			'document.reference' => [
				'id' => 'document_reference',
				'title' => $this->translator->trans('Reference'),
				'type' => Metadata::LIST,
				'sort' => false,
			],
			'version.name' => [
				'id' => 'version_name',
				'title' => $this->translator->trans('Version'),
				'type' => Metadata::TEXT,
				'sort' => true,
			],
			'document.name' => [
				'id' => 'document_name',
				'title' => $this->translator->trans('Name'),
				'type' => Metadata::TEXT,
				'sort' => true,
			],
			'version.initialScheduledDate' => [
				'id' => 'version_initial_scheduled_date',
				'title' => $this->translator->trans('Initial scheduled date'),
				'type' => Metadata::DATE,
				'sort' => true,
			],
			'version.scheduledDate' => [
				'id' => 'version_scheduled_date',
				'title' => $this->translator->trans('Scheduled Date'),
				'type' => Metadata::DATE,
				'sort' => true,
			],
			'version.deliveryDate' => [
				'id' => 'version_delivery_date',
				'title' => $this->translator->trans('Delivery Date'),
				'type' => Metadata::DATE,
				'sort' => true,
			],
			'version.isRequired' => [
				'id' => 'version_is_required',
				'title' => $this->translator->trans('Is required'),
				'type' => Metadata::BOOLEAN,
				'sort' => false,
			],
			'version.writer' => [
				'id' => 'version_writer',
				'title' => $this->translator->trans('Writer'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'version.checker' => [
				'id' => 'version_checker',
				'title' => $this->translator->trans('Checker'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'version.approver' => [
				'id' => 'version_approver',
				'title' => $this->translator->trans('Approver'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'serie.name' => [
				'id' => 'serie_name',
				'title' => $this->translator->trans('Serie name'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'serie.company' => [
				'id' => 'serie_company',
				'title' => $this->translator->trans('Company'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'status.name' => [
				'id' => 'status_name',
				'title' => $this->translator->trans('Status name'),
				'type' => Metadata::TEXT,
				'sort' => true,
			],
			'status.value' => [
				'id' => 'status_value',
				'title' => $this->translator->trans('Status value'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
			'status.type' => [
				'id' => 'status_type',
				'title' => $this->translator->trans('Status type'),
				'type' => Metadata::LIST,
				'sort' => true,
			],
		];
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			$fields[$metadata->getFullCodename()] = [
				'id' => $metadata->getFullDomId(),
				'title' => $metadata->getName(),
				'type' =>$metadata->getType(),
				'sort' => false,
			];
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $company) {
			if (!$project->getVisasByCompany($company)->isEmpty()) {
				$fields['visa.' . $company->getCodename()] = [
					'id' => 'visa_' . $company->getCodename(),
					'field' => 'visa[' . $company->getCodename() . ']',
					'title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
					'type' => Metadata::LIST,
					'sort' => false,
				];
			}
		}
		
		return $fields;
	}
	
	public function getFieldsWithForms(Project $project, array $series): array
	{
		$fields = $this->getFields($project);
		$writers = $this->userRepository->getUsersBySeries($series);
		$checkers = $this->userRepository->getCheckers($project);
		
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			if ($codification->isList()) {
				$codificationControls[] = [
					'full_id' 				=> $codification->getFullDomName(),
					'snake_case_full_id' 	=> $codification->getFullDomId(),
					'title' 				=> $codification->getName(),
					'multiple'				=> true,
					'choices' 				=> $codification->getCodificationItems(),
					'choice_label' 			=> 'value',
				];
			}
		}
		
		$fields['document.reference']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => $codificationControls,
		])
			->getForm()
			->createView()
		;
		
		$fields['version.isRequired']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'version[isRequired]',
					'snake_case_full_id' => 'version_isRequired',
					'title' => $this->translator->trans('Is required'),
					'multiple' => false,
					'choices' => [
						'Yes' => '1',
						'No' => '0',
					],
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['version.writer']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'version[writer]',
					'snake_case_full_id' => 'version_writer',
					'title' => $this->translator->trans('Writer'),
					'multiple' => true,
					'choices' => $writers,
					'choice_label' => 'name',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['version.checker']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'version[checker]',
					'snake_case_full_id' => 'version_checker',
					'title' => $this->translator->trans('Checker'),
					'multiple' => true,
					'choices' => $checkers,
					'choice_label' => 'name',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['version.approver']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'version[approver]',
					'snake_case_full_id' => 'version_approver',
					'title' => $this->translator->trans('Approver'),
					'multiple' => true,
					'choices' => $checkers,
					'choice_label' => 'name',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['serie.name']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'serie[name]',
					'snake_case_full_id' => 'serie_name',
					'title' => $this->translator->trans('Serie name'),
					'multiple' => true,
					'choices' => $series,
					'choice_label' => 'name',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['serie.company']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'serie[company]',
					'snake_case_full_id' => 'serie_company',
					'title' => $this->translator->trans('Company'),
					'multiple' => true,
					'choices' => $this->companyRepository->getCompaniesByProject($project),
					'choice_label' => 'name',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['status.value']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'status[value]',
					'snake_case_full_id' => 'status_value',
					'title' => $this->translator->trans('Status value'),
					'multiple' => true,
					'choices' => $this->statusRepository->getStatuses($project),
					'choice_label' => 'value',
				],
			],
		])
			->getForm()
			->createView()
		;
		
		$fields['status.type']['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
			'controls' => [
				[
					'full_id' => 'status[type]',
					'snake_case_full_id' => 'status_typee',
					'title' => $this->translator->trans('Status type'),
					'multiple' => true,
					'choices' => [
						$this->translator->trans('Information') => Status::INFORMATION,
						$this->translator->trans('Review') => Status::REVIEW,
						$this->translator->trans('Cancel') => Status::CANCEL,
						$this->translator->trans('As built') => Status::AS_BUILT,
					],
				],
			],
		])
			->getForm()
			->createView()
		;
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			
			switch ($metadata->getType()) {
				
				case Metadata::BOOLEAN:
					$fields[$metadata->getFullCodename()]['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => $metadata->getFullDomName(),
								'snake_case_full_id' => $metadata->getFullDomId(),
								'title' => $metadata->getName(),
								'multiple' => false,
								'choices' => [
									'Yes' => '1',
									'No' => '0',
								],
							],
						],
					])
						->getForm()
						->createView()
					;
					
					break;
					
				case Metadata::LIST:
					$fields[$metadata->getFullCodename()]['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
						'controls' => [
							[
								'full_id' => $metadata->getFullDomName(),
								'snake_case_full_id' => $metadata->getFullDomId(),
								'title' => $metadata->getName(),
								'multiple' => true,
								'choices' => $metadata->getMetadataItems(),
								'choice_label' => 'value',
								],
							],
						])
							->getForm()
							->createView()
						;
					
					break;
			}
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $checkerCompany) {
			if (!$project->getVisasByCompany($checkerCompany)->isEmpty()) {
				$fields['visa.' . $checkerCompany->getCodename()]['form'] = $this->formFactory->createBuilder(SelectType::class, null, [
					'controls' => [
						[
							'full_id' => 'visa[' . $checkerCompany->getCodename() . ']',
							'snake_case_full_id' => 'visa_' . $checkerCompany->getCodename(),
							'title' => $this->translator->trans('Visa') . ' ' . $checkerCompany->getName(),
							'multiple' => true,
							'choices' => $project->getVisasByCompany($checkerCompany),
							'choice_label' => 'name',
						],
					],
				])
					->getForm()
					->createView()
				;
			}
		}
		
		return $fields;
		
	}
	
	public function getFieldsList($project): array
	{
		return array_keys($this->getFields($project));
	}
}

?>