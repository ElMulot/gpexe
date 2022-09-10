<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Codification;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Status;
use App\Repository\CodificationItemRepository;
use App\Repository\CompanyRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataItemRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;
use App\Repository\VisaRepository;
use Symfony\Component\Security\Core\Security;

class FieldService
{
	
	private $translator;
	
	private $security;
	
	private $companyRepository;
	
	private $codificationRepository;
	
	private $codificationItemRepository;
	
	private $metadataRepository;
	
	private $metadataItemRepository;
	
	private $statusRepository;
	
	private $userRepository;
	
	private $visaRepository;
	
	public function __construct(TranslatorInterface $translator, Security $security, CompanyRepository $companyRepository, CodificationRepository $codificationRepository, CodificationItemRepository $codificationItemRepository, MetadataRepository $metadataRepository, MetadataItemRepository $metadataItemRepository, StatusRepository $statusRepository, UserRepository $userRepository, VisaRepository $visaRepository)
	{
		$this->translator = $translator;
		$this->security = $security;
		$this->companyRepository = $companyRepository;
		$this->codificationRepository = $codificationRepository;
		$this->codificationItemRepository = $codificationItemRepository;
		$this->metadataRepository = $metadataRepository;
		$this->metadataItemRepository = $metadataItemRepository;
		$this->statusRepository = $statusRepository;
		$this->userRepository = $userRepository;
		$this->visaRepository = $visaRepository;
	}
	
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
		
	    $permissionWrite = ($this->security->getUser() !== null && ($this->security->isGranted('ROLE_EDIT_DOCUMENTS') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN'));
	    
	    $fields = [
			'document.reference' => [
				'id' =>'document_reference',
				'codename' => 'document.reference',
				'title' => $this->translator->trans('Reference'),
				'type' => Metadata::LIST,
				'parent' => 'document',
				'default_width' => 15,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::TEXT,
				'parent' => 'version',
				'default_width' => 4,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::TEXT,
				'parent' => 'document',
				'default_width' => 30,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => false,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => false,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::DATE,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'version.isRequired' => [
				'id' =>'version_is_required',
				'codename' => 'version.isRequired',
				'title' => $this->translator->trans('Required'),
				'type' => Metadata::BOOLEAN,
				'parent' => 'version',
				'default_width' => 8,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'version',
				'default_width' => 10,
				'mandatory' => false,
				'display' => [
					'header' => true,
					'selector' => false,
					'program' => true,
				],
				'permissions' => [
					'read' => true,
					'write' => $permissionWrite,
				],
			],
			'serie.name' => [
				'id' =>'serie_name',
				'codename' => 'serie.name',
				'title' => $this->translator->trans('Serie name'),
				'type' => Metadata::LIST,
				'parent' => 'serie',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'serie',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'status',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::LIST,
				'parent' => 'status',
				'default_width' => 10,
				'mandatory' => true,
				'display' => [
					'header' => true,
					'selector' => false,
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
				'type' => Metadata::TEXT,
				'parent' => 'document',
				'default_width' => 0,
				'mandatory' => true,
				'display' => [
					'header' => false,
					'selector' => false,
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
				'mandatory' => $codification->getIsMandatory(),
				'display' => [
					'header' => true,
					'selector' => false,
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
				'parent' => $metadata->getParentName(),
				'default_width' => 10,
				'mandatory' => $metadata->getIsMandatory(),
				'display' => [
					'header' => true,
					'selector' => false,
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
					'type' => Metadata::LIST,
					'parent' => 'visa',
					'default_width' => 10,
					'mandatory' => false,
					'display' => [
						'header' => true,
						'selector' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->security->getUser() !== null && $this->security->getUser()->getCompany() == $company || ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.username'] = [
					'id' =>'',
					'codename' => 'visa.' . $company->getCodename() . '.username',
					'title' => '',
					'type' => Metadata::LIST,
					'parent' => 'visa',
					'default_width' => 0,
					'mandatory' => false,
					'display' => [
						'header' => false,
						'selector' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->security->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.date'] = [
					'id' =>'',
					'codename' => 'visa.' . $company->getCodename() . '.date',
					'title' => '',
					'type' => Metadata::LIST,
					'parent' => 'visa',
					'default_width' => 0,
					'mandatory' => false,
					'display' => [
						'header' => false,
						'selector' => false,
						'program' => true,
					],
					'permissions' => [
						'read' => true,
						'write' => ($this->security->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
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
					'header' => false,
					'selector' => true,
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
					'header' => false,
					'selector' => true,
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
					'header' => false,
					'selector' => true,
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
					'header' => false,
					'selector' => true,
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
					'header' => false,
					'selector' => true,
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
					'header' => false,
					'selector' => true,
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
	
	public function getFieldsForJs(Project $project, array $series): array
	{
		$fields = $this->getFields($project);
		$writers = $this->userRepository->getUsersArrayBySeries($series);
		$checkers = $this->userRepository->getCheckersArrayBySeries($project);
		
		$element = [];
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			
			$element = [
				'id' 		=> $codification->getFullId(),
				'title' 		=> $codification->getName(),
				'sort'			=> false,
			];
			
			switch ($codification->getType()) {
				
				case Codification::LIST:
					$choices = [];
					foreach ($this->codificationItemRepository->getCodificationItem($codification) as $codificationItem) {
						$choices[$codificationItem->getId()] = $codificationItem->getValue();
					}
					$element['filter'] = [
						'type'			=> Metadata::LIST,
						'choices' 		=> $choices,
					];
					break;
					
				case Codification::REGEX:
					$element['filter'] = [
						'type'			=> Metadata::TEXT,
					];
					break;
					
			}
			$fields['document.reference']['elements'][] = $element;
		}
		
		$fields['version.name']['elements'][] = [
			'id' 		=> 'version_name',
			'title' 	=> $this->translator->trans('Version'),
		];
		
		$fields['document.name']['elements'][] = [
			'id' 		=> 'document_name',
			'title' 	=> $this->translator->trans('Name'),
			'sort'		=> true,
			'filter' 	=> [		
				'type'		=> Metadata::TEXT,
			],
		];
		
		$fields['version.initialScheduledDate']['elements'][] = [
			'id' 		=> 'version_initial_scheduled_date',
			'title' 	=> $this->translator->trans('Initial scheduled date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::DATE,
			],
		];
		
		$fields['version.scheduledDate']['elements'][] = [
			'id' 		=> 'version_scheduled_date',
			'title' 	=> $this->translator->trans('Scheduled date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::DATE,
			]
		];
		
		$fields['version.deliveryDate']['elements'][] = [
			'id' 		=> 'version_delivery_date',
			'title' 	=> $this->translator->trans('Delivery date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::DATE,
			]
		];
		
		$fields['version.date']['elements'][] = [
			'id' 		=> 'version_date',
			'title' 	=> $this->translator->trans('Date'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::DATE,
			]
		];
		
		$fields['version.isRequired']['elements'][] = [
			'id' 		=> 'version_is_required',
			'title' 	=> $this->translator->trans('Required'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::BOOLEAN,
			]
		];
		
		$fields['version.writer']['elements'][] = [
			'id' 		=> 'version_writer',
			'title' 	=> $this->translator->trans('Writer'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $writers,
			]
		];
		
		$fields['version.checker']['elements'][] = [
			'id' 		=> 'version_checker',
			'title' 	=> $this->translator->trans('Checker'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $checkers,
			]
		];
		
		$fields['version.approver']['elements'][] = [
			'id' 		=> 'version_approver',
			'title' 	=> $this->translator->trans('Approver'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $checkers,
			]
		];
		
		$fields['serie.name']['elements'][] = [
			'id' 		=> 'serie_name',
			'title' 	=> $this->translator->trans('Serie name'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $series,
			]
		];
		
		$fields['serie.company']['elements'][] = [
			'id' 		=> 'serie_company',
			'title' 	=> $this->translator->trans('Company'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $this->companyRepository->getCompaniesByProjectAsArray($project),
			]
		];
		
		$fields['status.value']['elements'][] = [
			'id' 		=> 'status_value',
			'title' 	=> $this->translator->trans('Status value'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' 	=> $this->statusRepository->getStatusesAsArray($project),
			]
		];
		
		$fields['status.type']['elements'][] = [
			'id' 		=> 'status_type',
			'title' 	=> $this->translator->trans('Status type'),
			'sort'		=> true,
			'filter'	=> [
				'type'		=> Metadata::LIST,
				'choices' => [
					Status::INFORMATION	=> $this->translator->trans('Information'),
					Status::REVIEW		=> $this->translator->trans('Review'),
					Status::CANCEL		=> $this->translator->trans('Cancel'),
					Status::AS_BUILT	=> $this->translator->trans('As built'),
				],
			]
		];
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			
			switch ($metadata->getType()) {

				case Metadata::BOOLEAN:
				case Metadata::TEXT:
				case Metadata::DATE:
					$fields[$metadata->getFullCodename()]['elements'][] = [
						'id' 		=> $metadata->getFullId(),
						'title' 	=> $metadata->getName(),
						'sort'		=> true,
						'filter'	=> [
							'type'		=> $metadata->getType(),
						]
					];
					break;
					
				case Metadata::LIST:
					$fields[$metadata->getFullCodename()]['elements'][] = [
						'id' 		=> $metadata->getFullId(),
						'title' 	=> $metadata->getName(),
						'sort'		=> true,
						'filter'	=> [
							'type'		=> Metadata::LIST,
							'choices' 	=> $this->metadataItemRepository->getMetadataItemAsArray($metadata),
						]
					];
					break;
			}
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $checkerCompany) {
			if ($project->getVisasByCompany($checkerCompany)->isEmpty() === false) {
				$fields['visa.' . $checkerCompany->getCodename() . '.value']['elements'][] = [
					'id' 		=> 'visa_' . $checkerCompany->getId(),
					'title' 	=> $this->translator->trans('Visa') . ' ' . $checkerCompany->getName(),
					'sort'		=> true,
					'filter'	=> [
						'type'		=> Metadata::LIST,
						'choices' 	=> $this->visaRepository->getVisasByCompanyAsArray($project, $checkerCompany),
					]
				];
			}
		}
		
		return $fields;
		
	}
}

?>