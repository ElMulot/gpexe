<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use App\Entity\Version;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\User;
use App\Repository\MetadataRepository;
use App\Repository\CompanyRepository;
use App\Repository\UserRepository;

class VersionType extends AbstractType
{
	
	private $builder;
	
	private $metadataRepository;
	
	private $companyRepository;
	
	private $userRepository;
	
	public function __construct(MetadataRepository $metadataRepository, CompanyRepository $companyRepository, UserRepository $userRepository)
	{
		$this->metadataRepository = $metadataRepository;
		$this->companyRepository = $companyRepository;
		$this->userRepository = $userRepository;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$this->builder = $builder;
		
		if ($options['versions']) {
			$versions = $options['versions'];
		} else {
			$versions[0] = $this->buider->getData();
			$this->builder->add('name');
		}
		$serie = $versions[0]->getDocument()->getSerie();
		$project = $serie->getProject();
		
		$this->buildRow('date', 'date', 'version[date]', Metadata::DATE, true, $versions);
		
		$this->buildRow('isRequired', 'isRequired', 'version[isRequired]', Metadata::BOOLEAN, false, $versions);
		
		$this->buildRow('status', 'status', 'status[value]', Metadata::LIST, true, $versions, $project->getStatuses());
		
		foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
			if ($metadata->getType() == Metadata::LIST) {		
				$this->buildRow($metadata->getName(), $metadata->getCodename(), $metadata->getFullCodename(), $metadata->getType(), $metadata->getIsMandatory(), $versions, $metadata->getMetadataItems());
			} else {
				$this->buildRow($metadata->getName(), $metadata->getCodename(), $metadata->getFullCodename(), $metadata->getType(), $metadata->getIsMandatory(), $versions);
			}
		}
		
		$this->buildRow('writer', 'writer', 'version[writer]', Metadata::LIST, false, $versions, $serie->getCompany()->getUsers());
		
		$choices = $this->userRepository->getCheckers($project);
		
		$this->buildRow('checker', 'checker', 'version[checker]', Metadata::LIST, false, $versions, $choices);
		$this->buildRow('approver', 'approver', 'version[approver]', Metadata::LIST, false, $versions, $choices);
		
	}
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Version::class,
			'serie' => null,
			'versions' => null,
		]);
	}
	
	private function checkMultiple(array $versions, string $label): bool
	{
		
		if ($versions) {
			foreach ($versions as $version) {
				if (isset($value)) {
					if ($value != $version->getPropertyValueToString($label)) {
						return true;
					}
				} else {
					$value = $version->getPropertyValueToString($label);
				}
			}
		}
		
		return false;
	}
	
	private function buildRow(string $name, string $id, string $label, int $type, bool $required, array $versions=null, $choices=null)
	{
		
		$multiple = false;
		
		if (count($versions) > 1) {
			$multiple = $this->checkMultiple($versions, $name);
			$version = $versions[0];
		} else {
			$version = $versions[0];
		}
		
		switch ($type) {
			
			case Metadata::BOOLEAN:
				
				$data = false;
				if (!$multiple && $version) {
					if ($version->getPropertyValue($label)) {
						$data = true;
					}
				}
				
				$this->builder->add($id, ChoiceType::class, [
					'label' => $name,
					'choices' => [
						'Yes' => true,
						'No' => false,
					],
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple
					],
				]);
				break;
				
			case Metadata::TEXT:
				
				$data = null;
				if (!$multiple && $version) {
					$data = $version->getPropertyValue($label);
				}
				
				$this->builder->add($id, TextareaType::class, [
					'label' => $name,
					'mapped' => false,
					'data' => $data,
					'required' => $required,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				break;
				
			case Metadata::DATE:
				
				$data = null;
				if ($required) $data = new \DateTime('now');
				if (!$multiple && $version) {
					if ($data = $version->getPropertyValue($label)) {
						if ($data instanceof MetadataValue) $data = new \DateTime($data->getValue());
					}
				}
				
				$this->builder->add($id, DateType::class, [
					'label' => $name,
					'mapped' => false,
					'widget' => 'single_text',
					'format' => 'dd-MM-yyyy',
					'html5' => false,
					'data' => $data,
					'required' => $required,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				
				break;
				
			case Metadata::LINK:
				
				$data = null;
				if (!$multiple && $version) {
					$data = $version->getPropertyValue($label);
				}
				
				$this->builder->add($id, TextType::class, [
					'label' => $name,
					'mapped' => false,
					'data' => $data,
					'required' => $required,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				break;
				
			case Metadata::LIST:
				
				$data = null;
				if (!$multiple && $version) {
					$data = $version->getPropertyValue($label);
				}
				
				$this->builder->add($id, EntityType::class, [
					'class' => get_class($choices[0]),
					'choices' => $choices,
					'label' => $name,
					'mapped' => false,
					'data' => $data,
					'required' => $required,
					'attr' => [
						'data-multiple' => $multiple,
						'data-required' => $required,
					],
				]);
				break;
				
			default:
				return false;
		}
		
		$this->builder->add($id.'_multiple', HiddenType::class, [
			'required' => false,
			'mapped' => false,
			'data' => $multiple,
		]);
		
		return true;
	}
}
