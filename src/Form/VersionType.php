<?php
namespace App\Form;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\User;
use App\Repository\CompanyRepository;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Url;

class VersionType extends AbstractType
{
	
	private $builder;
	
	private $companyRepository;
	
	private $metadataRepository;
	
	private $userRepository;
		
	public function __construct(CompanyRepository $companyRepository, MetadataRepository $metadataRepository, UserRepository $userRepository)
	{
		$this->companyRepository = $companyRepository;
		$this->metadataRepository = $metadataRepository;
		$this->userRepository = $userRepository;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$this->builder = $builder;
		$versions = is_array($builder->getData())?$builder->getData():[$builder->getData()];
		$serie = $options['serie'];
		$project = $serie->getProject();
		
		if (count($versions) == 1) {
			$this->builder->add('name', TextType::class, [
				'data' => reset($versions)->getName(),
			]);
		}
		
		$this->buildField('Required', 'isRequired', 'version.isRequired', Metadata::BOOLEAN, $versions);
		
		$this->buildField('Date', 'date', 'version.date', Metadata::DATE, $versions);
		
		$options = [
			'class' 	=> Status::class,
			'choices' 	=> $project->getStatuses(),
		];
		$this->buildField('Status', 'status', 'status.value', Metadata::LIST, $versions, $options);
		
		foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
			switch ($metadata->getType()) {
				case Metadata::LIST:
					$options = [
						'required'	=> $metadata->getIsMandatory(),
						'class' 	=> MetadataItem::class,
						'choices' 	=> $metadata->getMetadataItems(),
					];
					$this->buildField($metadata->getName(), $metadata->getFullId(), $metadata->getFullCodename(), $metadata->getType(), $versions, $options);
					break;
				default:
					$options = [
						'required'	=> $metadata->getIsMandatory(),
					];
					$this->buildField($metadata->getName(), $metadata->getFullId(), $metadata->getFullCodename(), $metadata->getType(), $versions, $options);
					break;
			}
		}
		
		$options = [
			'required' 	=> false,
			'class' 	=> User::class,
			'choices' 	=> $serie->getCompany()->getUsers(),
		];
		$this->buildField('Writer', 'writer', 'version.writer', Metadata::LIST, $versions, $options);
		
		$options = [
			'required' 	=> false,
			'class' 	=> User::class,
			'choices' 	=> $this->userRepository->getCheckers($project),
		];
		$this->buildField('Checker', 'checker', 'version.checker', Metadata::LIST, $versions, $options);
		$this->buildField('Approver', 'approver', 'version.approver', Metadata::LIST, $versions, $options);
	}
	
	private function checkMultiple(array $versions, string $codename): bool
	{
		
		if ($versions) {
			foreach ($versions as $version) {
				if (isset($value)) {
					if ($value != $version->getPropertyValueToString($codename)) {
						return true;
					}
				} else {
					$value = $version->getPropertyValueToString($codename);
				}
			}
		}
		
		return false;
	}
	
	private function buildField(string $label, string $id, string $codename, int $type, array $versions=null, $options=[])
	{
		
		$multiple = false;
		
		if (count($versions) > 1) {
			$multiple = $this->checkMultiple($versions, $codename);
		}
		
		$version = reset($versions) ?? null;
		
		switch ($type) {
			
			case Metadata::BOOLEAN:
				
				$data = false;
				if ($version && $multiple === false) {
					if ($version->getPropertyValue($codename)) {
						$data = true;
					}
				}
				
				$this->builder->add($id, ChoiceType::class, $options + [
					'label' => $label,
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
				if ($version && $multiple === false) {
					$data = $version->getPropertyValue($codename);
				}
				
				$this->builder->add($id, TextareaType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				break;
				
			case Metadata::DATE:
				
				$data = null;
				
				if ($version && $multiple === false) {
					if ($data = $version->getPropertyValue($codename)) {
						if ($data instanceof MetadataValue) $data = new \DateTime($data->getValue());
					}
					
					if ($data === null && ($options['required'] ?? true)) {
						$data = new \DateTime('now');
					}
				}
				
				$this->builder->add($id, DateType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'widget' => 'single_text',
					'format' => 'dd-MM-yyyy',
					'html5' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				
				break;
				
			case Metadata::LINK:
				
				$data = null;
				if ($version && $multiple === false) {
					$data = $version->getPropertyValue($codename);
				}
				
				$this->builder->add($id, TextType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
					'constraints' 	=> [new Url(
						[
							'relativeProtocol' => true,
						]
					)],
				]);
				break;
				
			case Metadata::LIST:
				$data = null;
				if ($version && $multiple === false) {
					$data = $version->getPropertyValue($codename);
				}
				
				$this->builder->add($id, EntityType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
						'data-required' => $options['required'] ?? true,
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
	
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'serie' => null,
		]);
		
		$resolver->setAllowedTypes('serie', Serie::class);
	}
}
