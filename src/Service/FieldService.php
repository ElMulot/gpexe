<?php

namespace App\Service;

use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Metadata;
use App\Repository\MetadataRepository;
use App\Repository\CompanyRepository;

class FieldService
{
	
	private $translator;
	
	private $companyRepository;
	
	private $metadataRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, MetadataRepository $metadataRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->metadataRepository = $metadataRepository;
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
				$fields['visa.' . $company->getId()] = [
					'id' => 'visa_' . $company->getId(),
					'field' => 'visa[' . $company->getId() . ']',
					'title' => $this->translator->trans('Visa') . ' ' . $company->getName(),
					'type' => Metadata::LIST,
					'sort' => false,
				];
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