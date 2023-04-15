<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\StatusTypeEnum;
use App\Entity\Project;
use App\Entity\User;
use App\Repository\CodificationChoiceRepository;
use App\Repository\CompanyRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataChoiceRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;
use App\Repository\VisaRepository;
use Symfony\Bundle\SecurityBundle\Security;

class FieldService
{
	
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly Security $security,
								private readonly CompanyRepository $companyRepository,
								private readonly CodificationRepository $codificationRepository,
								private readonly CodificationChoiceRepository $codificationChoiceRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly MetadataChoiceRepository $metadataChoiceRepository,
								private readonly SerieRepository $serieRepository,
								private readonly StatusRepository $statusRepository,
								private readonly UserRepository $userRepository,
								private readonly VisaRepository $visaRepository)
	{
	}
	
	//todo : à remettre à jour. Title est-il utilisé ?
	//---------------------------
	// Usage of fields properties
	//---------------------------
	//
	// id: 				document_table (versionRepository, js)
	// codename: 		program
	// title:			document_table (js)
	// type:			document_table (versionRepository, js)
	// parent:			document_table (versionRepository)
	// default_width:	alert
	// display:			document_table
	// permissions:		document_table
	// elements:		document_table (js)
	
	public function getFields($project): array
	{
		
		$permissionWrite = ($this->security->isGranted('DOCUMENT_EDIT', $project));
		
		$fields = [
			'document.reference' => [
				'id' =>'document_reference',
				'codename' => 'document.reference',
				'title' => $this->translator->trans('Reference'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'document',
				'default_width' => 15,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.name' => [
				'id' =>'version_name',
				'codename' => 'version.name',
				'title' => $this->translator->trans('Version'),
				'type' => MetadataTypeEnum::TEXT,
				'parent' => 'version',
				'default_width' => 4,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'document.name' => [
				'id' =>'document_name',
				'codename' => 'document.name',
				'title' => $this->translator->trans('Name'),
				'type' => MetadataTypeEnum::TEXT,
				'parent' => 'document',
				'default_width' => 30,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.initialScheduledDate' => [
				'id' =>'version_initial_scheduled_date',
				'codename' => 'version.initialScheduledDate',
				'title' => $this->translator->trans('Initial scheduled date'),
				'type' => MetadataTypeEnum::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.scheduledDate' => [
				'id' =>'version_scheduled_date',
				'codename' => 'version.scheduledDate',
				'title' => $this->translator->trans('Scheduled date'),
				'type' => MetadataTypeEnum::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => false,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.deliveryDate' => [
				'id' =>'version_delivery_date',
				'codename' => 'version.deliveryDate',
				'title' => $this->translator->trans('Delivery date'),
				'type' => MetadataTypeEnum::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => false,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.date' => [
				'id' =>'version_date',
				'codename' => 'version.date',
				'title' => $this->translator->trans('Date'),
				'type' => MetadataTypeEnum::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.required' => [
				'id' =>'version_is_required',
				'codename' => 'version.required',
				'title' => $this->translator->trans('Required'),
				'type' => MetadataTypeEnum::BOOL,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.writer' => [
				'id' =>'version_writer',
				'codename' => 'version.writer',
				'title' => $this->translator->trans('Writer'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.checker' => [
				'id' =>'version_checker',
				'codename' => 'version.checker',
				'title' => $this->translator->trans('Checker'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.approver' => [
				'id' =>'version_approver',
				'codename' => 'version.approver',
				'title' => $this->translator->trans('Approver'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'serie' => [
				'id' =>'serie',
				'codename' => 'serie',
				'title' => $this->translator->trans('Serie'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'serie',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'serie.company' => [
				'id' =>'serie_company',
				'codename' => 'serie.company',
				'title' => $this->translator->trans('Company'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'serie',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'status.value' => [
				'id' =>'status_value',
				'codename' => 'status.value',
				'title' => $this->translator->trans('Status value'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'status',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'status.type' => [
				'id' =>'status_type',
				'codename' => 'status.type',
				'title' => $this->translator->trans('Status type'),
				'type' => MetadataTypeEnum::LIST,
				'parent' => 'status',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'document.versionsCount' => [
				'id' =>'',
				'codename' => 'document.versionsCount',
				'title' => '',
				'type' => MetadataTypeEnum::TEXT,
				'parent' => 'document',
				'default_width' => 0,
				'mandatory' => true,
				'display' => [
					'thead' => false,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
		];
		
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			$fields[$codification->getFullCodename()] = [
				'id' =>$codification->getFullId(),
				'codename' => $codification->getFullCodename(),
				'title' => $codification->getName(),
				'type' => $codification->getType(),
				'parent' => 'codification',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'thead' => $codification->isFixed() === false,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => ($codification->isRegex() || $codification->isList()),
					'write' => false,
				],
			];
		}
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			$fields[$metadata->getFullCodename()] = [
				'id' =>$metadata->getFullId(),
				'codename' => $metadata->getFullCodename(),
				'title' => $metadata->getName(),
				'type' => $metadata->getType(),
				'parent' => $metadata->getParent()->value,
				'default_width' => 10,
				'mandatory' => $metadata->isMandatory(),
				'display' => [
					'thead' => true,
					'filter' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			];
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $company) {
			if ($project->getVisasByCompany($company)->isEmpty() === false) {
				$fields['visa.' . $company->getCodename() . '.value'] = [
					'id' =>'visa_' . $company->getId(),
					'codename' => 'visa.' . $company->getCodename() . '.value',
					'title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
					'type' => MetadataTypeEnum::LIST,
					'parent' => 'visa',
					'default_width' => 10,
					'mandatory' => false,
					'display' => [
						'thead' => true,
						'filter' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->getUser() !== null && $this->getUser()->getCompany() == $company || ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.username'] = [
					'id' =>'',
					'codename' => 'visa.' . $company->getCodename() . '.username',
					'title' => '',
					'type' => MetadataTypeEnum::LIST,
					'parent' => 'visa',
					'default_width' => 0,
					'mandatory' => false,
					'display' => [
						'thead' => false,
						'filter' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.date'] = [
					'id' =>'',
					'codename' => 'visa.' . $company->getCodename() . '.date',
					'title' => '',
					'type' => MetadataTypeEnum::LIST,
					'parent' => 'visa',
					'default_width' => 0,
					'mandatory' => false,
					'display' => [
						'thead' => false,
						'filter' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
			}
		}
		
		$fields += [
			'version.first' => [
				'id' =>'version_first',
				'codename' => 'version.first',
				'title' => $this->translator->trans('First'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.firstScheduled' => [
				'id' =>'version_first_scheduled',
				'codename' => 'version.firstScheduled',
				'title' => $this->translator->trans('First scheduled'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.firstDelivered' => [
				'id' =>'version_first_delivered',
				'codename' => 'version.firstDelivered',
				'title' => $this->translator->trans('First delivered'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.lastScheduled' => [
				'id' =>'version_last_scheduled',
				'codename' => 'version.lastScheduled',
				'title' => $this->translator->trans('Last scheduled'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.lastDelivered' => [
				'id' =>'version_last_delivered',
				'codename' => 'version.lastDelivered',
				'title' => $this->translator->trans('Last delivered'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
			'version.last' => [
				'id' =>'version_last',
				'codename' => 'version.last',
				'title' => $this->translator->trans('Last'),
				'parent' => 'version',
				'display' => [
					'thead' => false,
					'filter' => true,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => false,
				],
			],
		];
		
		return $fields;
	}
	
	public function getFieldsForJs(Project $project, array $serieIds): array
	{
		$fields = $this->getFields($project);
		$writers = $this->userRepository->getUsersArrayBySerieIds($serieIds);
		$checkers = $this->userRepository->getCheckersArray($project);
		
		$element = [];
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			
			$element = [
				'id' 			=> $codification->getFullId(),
				'title' 		=> $codification->getName(),
				'sort'			=> false,
			];
			
			switch ($codification->getType()) {
				
				case CodificationTypeEnum::LIST:
					$choices = [];
					foreach ($this->codificationChoiceRepository->getCodificationChoice($codification) as $codificationChoice) {
						$choices[] = [
							'id' => $codificationChoice->getId(),
							'name' => $codificationChoice->getValue(),
						];
					}
					$element['filter'] = [
						'type'			=> MetadataTypeEnum::LIST,
						'choices' 		=> $choices,
					];
					break;
					
				case CodificationTypeEnum::REGEX:
					$element['filter'] = [
						'type'			=> MetadataTypeEnum::TEXT,
					];
					break;
					
			}
			$fields[$codification->getFullCodename()]['element'] = $element;
		}
		
		$fields['version.name']['element'] = [
			'id' 		=> 'version_name',
			'title' 	=> $this->translator->trans('Révision'),
		];
		
		$fields['document.name']['element'] = [
			'id' 		=> 'document_name',
			'title' 	=> $this->translator->trans('Name'),
			'sort'		=> true,
			'filter' 	=> [		
				'type'		=> MetadataTypeEnum::TEXT,
			],
		];
		
		$fields['version.initialScheduledDate']['element'] = [
			'id' 		=> 'version_initial_scheduled_date',
			'title' 	=> $this->translator->trans('Initial scheduled date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::DATE,
			],
		];
		
		$fields['version.scheduledDate']['element'] = [
			'id' 		=> 'version_scheduled_date',
			'title' 	=> $this->translator->trans('Scheduled date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::DATE,
			]
		];
		
		$fields['version.deliveryDate']['element'] = [
			'id' 		=> 'version_delivery_date',
			'title' 	=> $this->translator->trans('Delivery date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::DATE,
			]
		];
		
		$fields['version.date']['element'] = [
			'id' 		=> 'version_date',
			'title' 	=> $this->translator->trans('Date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::DATE,
			]
		];
		
		$fields['version.required']['element'] = [
			'id' 		=> 'version_is_required',
			'title' 	=> $this->translator->trans('Required'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::BOOL,
			]
		];
		
		$fields['version.writer']['element'] = [
			'id' 		=> 'version_writer',
			'title' 	=> $this->translator->trans('Writer'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $writers,
			]
		];
		
		$fields['version.checker']['element'] = [
			'id' 		=> 'version_checker',
			'title' 	=> $this->translator->trans('Checker'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $checkers,
			]
		];
		
		$fields['version.approver']['element'] = [
			'id' 		=> 'version_approver',
			'title' 	=> $this->translator->trans('Approver'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $checkers,
			]
		];
		
		$fields['serie']['element'] = [
			'id' 		=> 'serie',
			'title' 	=> $this->translator->trans('Serie'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $this->serieRepository->getSeriesByIdsAsArray($serieIds),
			]
		];
		
		$fields['serie.company']['element'] = [
			'id' 		=> 'serie_company',
			'title' 	=> $this->translator->trans('Company'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $this->companyRepository->getCompaniesByProjectAsArray($project),
			]
		];
		
		$fields['status.value']['element'] = [
			'id' 		=> 'status_value',
			'title' 	=> $this->translator->trans('Status value'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> $this->statusRepository->getStatusesAsArray($project),
			]
		];
		
		$fields['status.type']['element'] = [
			'id' 		=> 'status_type',
			'title' 	=> $this->translator->trans('Status type'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> MetadataTypeEnum::LIST,
				'choices' 	=> array_map(fn(StatusTypeEnum $e) => ['id' => $e->name, 'name' => $e->value] , StatusTypeEnum::cases())
			]
		];
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			
			switch ($metadata->getType()) {

				case MetadataTypeEnum::BOOL:
				case MetadataTypeEnum::TEXT:
				case MetadataTypeEnum::REGEX:
				case MetadataTypeEnum::DATE:
					$element = [
						'id' 		=> $metadata->getFullId(),
						'title' 	=> $metadata->getName(),
						'sort'		=> true,
						'filter'	=> [
							'type'		=> $metadata->getType(),
						]
					];
				case MetadataTypeEnum::LIST:
					$choices = [];
					foreach ($this->metadataChoiceRepository->getMetadataChoice($metadata) as $metadataChoice) {
						$choices[] = [
							'id' => $metadataChoice->getId(),
							'name' => $metadataChoice->getValue(),
						];
					}
					$element = [
						'id' 		=> $metadata->getFullId(),
						'title' 	=> $metadata->getName(),
						'sort'		=> true,
						'filter'	=> [
							'type'		=> MetadataTypeEnum::LIST,
							'choices' 	=> $choices,
						]
					];
			};
			$fields[$metadata->getFullCodename()]['element'] = $element;
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $checkerCompany) {
			if ($project->getVisasByCompany($checkerCompany)->isEmpty() === false) {
				$fields['visa.' . $checkerCompany->getCodename() . '.value']['element'] = [
					'id' 		=> 'visa_' . $checkerCompany->getId(),
					'title' 	=> $this->translator->trans('Visa') . ' ' . $checkerCompany->getName(),
					'sort'		=> true,
					'filter'	=> [
						'type'		=> MetadataTypeEnum::LIST,
						'choices' 	=> $this->visaRepository->getVisasByCompanyAsArray($project, $checkerCompany),
					]
				];
			}
		}
		
		return $fields;
		
	}

	private function getUser(): User
	{
		return $this->security->getUser();
	}
}

?>