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
	
	//---------------------------
	// Usage of fields properties
	//---------------------------
	//
	// id: 				Engineering::thead (twig), VersionRepository			used in display[], sortAsc, sortDesc
	// key:				Engineering::thead (twig), VersionRepository			used in other query parameters 
	// codename: 		
	// title:			Engineering::thead (twig)
	// type:			Engineering::thead (twig), VersionRepository
	// parent:			VersionRepository
	// default_width:	Engineering::thead (twig)
	// display:			Engineering::thead (twig)
	// permissions:		
	// choices:			Engineering::thead (twig)
	
	//todo : indenter
	public function getFields($project): array
	{
		
		$permissionWrite = ($this->security->isGranted('DOCUMENT_EDIT', $project));
		
		$fields = [
			'document.reference' => [
				'id' 			=>'document_reference',
				'key' 			=>'document_reference',
				'codename'		=> 'document.reference',
				'title'			=> $this->translator->trans('Reference'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'document',
				'default_width'	=> 15,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'version.name' => [
				'id'			=>'version_name',
				'key'			=>'version_name',
				'codename'		=> 'version.name',
				'title'			=> $this->translator->trans('Version'),
				'type'			=> MetadataTypeEnum::TEXT,
				'parent'		=> 'version',
				'default_width'	=> 4,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'document.name' => [
				'id'			=>'document_name',
				'key'			=>'document_name',
				'codename'		=> 'document.name',
				'title'			=> $this->translator->trans('Name'),
				'type'			=> MetadataTypeEnum::TEXT,
				'parent'		=> 'document',
				'default_width'	=> 30,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'version.initialScheduledDate' => [
				'id'			=>'version_initial_scheduled_date',
				'key'			=>'version_initial_scheduled_date',
				'codename'		=> 'version.initialScheduledDate',
				'title'			=> $this->translator->trans('Initial scheduled date'),
				'type'			=> MetadataTypeEnum::DATE,
				'parent'		=> 'version',
				'default_width'	=> 8,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'version.scheduledDate' => [
				'id'			=>'version_scheduled_date',
				'key'			=>'version_scheduled_date',
				'codename'		=> 'version.scheduledDate',
				'title'			=> $this->translator->trans('Scheduled date'),
				'type'			=> MetadataTypeEnum::DATE,
				'parent'		=> 'version',
				'default_width'	=> 8,
				'mandatory'		=> false,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'version.deliveryDate' => [
				'id'			=>'version_delivery_date',
				'key'			=>'version_delivery_date',
				'codename'		=> 'version.deliveryDate',
				'title'			=> $this->translator->trans('Delivery date'),
				'type'			=> MetadataTypeEnum::DATE,
				'parent'		=> 'version',
				'default_width'	=> 8,
				'mandatory'		=> false,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'version.date' => [
				'id'			=>'version_date',
				'key'			=>'version_date',
				'codename'		=> 'version.date',
				'title'			=> $this->translator->trans('Date'),
				'type'			=> MetadataTypeEnum::DATE,
				'parent'		=> 'version',
				'default_width'	=> 8,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'version.required' => [
				'id'			=>'version_is_required',
				'key'			=>'version_is_required',
				'codename'		=> 'version.required',
				'title'			=> $this->translator->trans('Required'),
				'type'			=> MetadataTypeEnum::BOOL,
				'parent'		=> 'version',
				'default_width'	=> 8,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'version.writer' => [
				'id'			=>'writer_name',
				'key'			=>'writers',
				'codename'		=> 'version.writer',
				'title'			=> $this->translator->trans('Writer'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'version',
				'default_width'	=> 10,
				'mandatory'		=> false,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'version.checker' => [
				'id'			=>'checker_name',
				'key'			=>'checkers',
				'codename'		=> 'version.checker',
				'title'			=> $this->translator->trans('Checker'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'version',
				'default_width'	=> 10,
				'mandatory'		=> false,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'version.approver' => [
				'id'			=>'approver_name',
				'key'			=>'approvers',
				'codename'		=> 'version.approver',
				'title'			=> $this->translator->trans('Approver'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'version',
				'default_width'	=> 10,
				'mandatory'		=> false,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'serie' => [
				'id'			=>'serie_name',
				'key'			=>'series',
				'codename'		=> 'serie',
				'title'			=> $this->translator->trans('Serie'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'serie',
				'default_width'	=> 10,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'serie.company' => [
				'id'			=>'company_name',
				'key'			=>'companies',
				'codename'		=> 'serie.company',
				'title'			=> $this->translator->trans('Company'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'serie',
				'default_width'	=> 10,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'status.value' => [
				'id'			=>'status_value',
				'key'			=>'status_value',
				'codename'		=> 'status.value',
				'title'			=> $this->translator->trans('Status value'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'status',
				'default_width'	=> 10,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			],
			'status.type' => [
				'id'			=>'status_type',
				'key'			=>'status_type',
				'codename'		=> 'status.type',
				'title'			=> $this->translator->trans('Status type'),
				'type'			=> MetadataTypeEnum::LIST,
				'parent'		=> 'status',
				'default_width'	=> 10,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
			'document.versionsCount' => [
				'id'			=>'',
				'key'			=>'',
				'codename'		=> 'document.versionsCount',
				'title'			=> '',
				'type'			=> MetadataTypeEnum::TEXT,
				'parent'		=> 'document',
				'default_width'	=> 0,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> false,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> false,
				],
			],
		];
		
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			$fields[$codification->getFullCodename()] = [
				'id'			=> $codification->getFullId(),
				'key'			=> $codification->getFullId(),
				'codename'		=> $codification->getFullCodename(),
				'title'			=> $codification->getName(),
				'type'			=> $codification->getType(),
				'parent'		=> 'codification',
				'default_width'	=> 10,
				'mandatory'		=> true,
				'display'		=> [
					'thead'			=> $codification->isFixed() === false,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> ($codification->isRegex() || $codification->isList()),
					'write'			=> false,
				],
			];
		}
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			$fields[$metadata->getFullCodename()] = [
				'id'			=> $metadata->getFullId(),
				'key'			=> $metadata->getFullId(),
				'codename'		=> $metadata->getFullCodename(),
				'title'			=> $metadata->getName(),
				'type'			=> $metadata->getType(),
				'parent'		=> $metadata->getParent()->value,
				'default_width'	=> 10,
				'mandatory'		=> $metadata->isMandatory(),
				'display'		=> [
					'thead'			=> true,
					'filter'		=> false,
					'program'		=> true,
				],
				'permissions'	=> [
					'read'			=> true,
					'write'			=> $permissionWrite,
				],
			];
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $company) {
			if ($project->getVisasByCompany($company)->isEmpty() === false) {
				$fields['visa.' . $company->getCodename() . '.value'] = [
					'id'			=> 'visa_' . $company->getId(),
					'key'			=> 'visa_' . $company->getId(),
					'codename'		=> 'visa.' . $company->getCodename() . '.value',
					'title'			=> $this->translator->trans('Visa') . ' ' . $company->getName(),
					'type'			=> MetadataTypeEnum::LIST,
					'parent'		=> 'visa',
					'default_width'	=> 10,
					'mandatory'		=> false,
					'display'		=> [
						'thead'			=> true,
						'filter'		=> false,
						'program'		=> true,
					],
					'permissions'	=> [
						'read'			=> true,
						'write'		=> ($this->getUser() !== null && $this->getUser()->getCompany() == $company || ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.username'] = [
					'id'			=> '',
					'key'			=> '',
					'codename'		=> 'visa.' . $company->getCodename() . '.username',
					'title'			=> '',
					'type'			=> MetadataTypeEnum::LIST,
					'parent'		=> 'visa',
					'default_width'	=> 0,
					'mandatory'		=> false,
					'display'		=> [
						'thead'			=> false,
						'filter'		=> false,
						'program'		=> true,
					],
					'permissions'	=> [
						'read'			=> true,
						'write'			=> ($this->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
				
				$fields['visa.' . $company->getCodename() . '.date'] = [
					'id'			=> '',
					'key'			=> '',
					'codename'		=> 'visa.' . $company->getCodename() . '.date',
					'title'			=> '',
					'type'			=> MetadataTypeEnum::LIST,
					'parent'		=> 'visa',
					'default_width'	=> 0,
					'mandatory'		=> false,
					'display'		=> [
						'thead'			=> false,
						'filter'		=> false,
						'program'		=> true,
					],
					'permissions'	=> [
						'read'			=> true,
						'write'			=> ($this->getUser() !== null && ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser())) || $this->security->isGranted('ROLE_ADMIN')),
					],
				];
			}
		}
		
		$fields += [
			'version.first' => [
				'id'				=> 'version_first',
				'key'				=> 'version_first',
				'codename'			=> 'version.first',
				'title'				=> $this->translator->trans('First'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
			'version.firstScheduled' => [
				'id'				=>'version_first_scheduled',
				'key'				=> 'version_first',
				'codename'			=> 'version.firstScheduled',
				'title'				=> $this->translator->trans('First scheduled'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
			'version.firstDelivered' => [
				'id'				=>'version_first_delivered',
				'key'				=>'version_first_delivered',
				'codename'			=> 'version.firstDelivered',
				'title'				=> $this->translator->trans('First delivered'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
			'version.lastScheduled' => [
				'id'				=>'version_last_scheduled',
				'key'				=>'version_last_scheduled',
				'codename'			=> 'version.lastScheduled',
				'title'				=> $this->translator->trans('Last scheduled'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
			'version.lastDelivered' => [
				'id'				=>'version_last_delivered',
				'key'				=>'version_last_delivered',
				'codename' 			=> 'version.lastDelivered',
				'title'				=> $this->translator->trans('Last delivered'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
			'version.last' => [
				'id'				=>'version_last',
				'key'				=>'version_last',
				'codename'			=> 'version.last',
				'title'				=> $this->translator->trans('Last'),
				'parent'			=> 'version',
				'display'			=> [
					'thead'				=> false,
					'filter'			=> true,
					'program'			=> true,
				],
				'permissions'		=> [
					'read'				=> true,
					'write'				=> false,
				],
			],
		];
		
		return $fields;
	}
	
	/**
	 * Undocumented function
	 *
	 * @param Project $project
	 * @param Serie[] $series
	 * @return array
	 */
	public function getFieldsForJs(Project $project, array $series): array
	{
		$fields = $this->getFields($project);
		$writers = $this->userRepository->getUsersBySeriesAsArray($series);
		$checkers = $this->userRepository->getCheckersArray($project);
		
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			
			switch ($codification->getType()) {
				
				case CodificationTypeEnum::LIST:
					$fields[$codification->getFullCodename()]['choices'] = [];
					foreach ($this->codificationChoiceRepository->getCodificationChoice($codification) as $codificationChoice) {
						$fields[$codification->getFullCodename()]['choices'][] = [
							'id' => $codificationChoice->getId(),
							'name' => $codificationChoice->getValue(),
						];
					}
					break;
			}
		}
		
		$fields['version.writer']['choices'] = $writers;

		$fields['version.checker']['choices'] = $checkers;

		$fields['version.approver']['choices'] = $checkers;
		
		$fields['serie']['choices'] = $series;
		
		$fields['serie.company']['choices'] = $this->companyRepository->getCompaniesByProjectAsArray($project);
		
		$fields['status.value']['choices'] = $this->statusRepository->getStatusesAsArray($project);
		
		$fields['status.type']['choices'] = array_map(fn(StatusTypeEnum $e) => ['id' => $e->name, 'name' => $e->value] , StatusTypeEnum::cases());
		
		foreach ($this->metadataRepository->getMetadatas($project) as $metadata) {
			if ($metadata->isList() === true) {
				$fields[$metadata->getFullCodename()]['choices'] = [];
				foreach ($this->metadataChoiceRepository->getMetadataChoice($metadata) as $metadataChoice) {
					$fields[$metadata->getFullCodename()]['choices'][] = [
						'id' => $metadataChoice->getId(),
						'name' => $metadataChoice->getValue(),
					];
				}
			}
		}
		
		foreach ($this->companyRepository->getCheckerCompanies($project) as $checkerCompany) {
			if ($project->getVisasByCompany($checkerCompany)->isEmpty() === false) {
				$fields['visa.' . $checkerCompany->getCodename() . '.value']['choices'] = $this->visaRepository->getVisasByCompanyAsArray($project, $checkerCompany);
			}
		}
		
		return $fields;
		
	}

	private function getUser(): User
	{
		return $this->security->getUser();
	}
}
