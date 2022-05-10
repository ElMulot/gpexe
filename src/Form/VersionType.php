<?php
namespace App\Form;

use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\User;
use App\Repository\CompanyRepository;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use App\Service\PropertyService;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;

class VersionType extends AbstractType
{
	
	private $builder;
		
	public function __construct(private readonly CompanyRepository $companyRepository, private readonly MetadataRepository $metadataRepository, private readonly UserRepository $userRepository, private readonly PropertyService $propertyService)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$this->builder = $builder;
		$versions = is_array($builder->getData())?$builder->getData():[$builder->getData()];
		$serie = $options['serie'];
		$project = $serie->getProject();
		
		if (count($versions) == 1) {
			$this->builder->add('name', TextType::class, [
				'label' 		=> 'Version',
				'data' 			=> reset($versions)->getName(),
			]);
		}
		
		$this->buildField('Required', 'isRequired', 'version.isRequired', MetadataTypeEnum::BOOL, $versions);
		
		$this->buildField('Date', 'date', 'version.date', MetadataTypeEnum::DATE, $versions);
		
		$options = [
			'class' 		=> Status::class,
			'choices' 		=> $project->getStatuses(),
		];
		$this->buildField('Status', 'status', 'status.value', MetadataTypeEnum::LIST, $versions, $options);
		
		foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
			switch ($metadata->getType()) {
				case MetadataTypeEnum::LIST:
					$options = [
						'required'		=> $metadata->getIsMandatory(),
						'class' 		=> MetadataItem::class,
						'choices' 		=> $metadata->getMetadataItems(),
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
		$this->buildField('Writer', 'writer', 'version.writer', MetadataTypeEnum::LIST, $versions, $options);
		
		$options = [
			'required' 	=> false,
			'class' 	=> User::class,
			'choices' 	=> $this->userRepository->getCheckers($project),
		];
		$this->buildField('Checker', 'checker', 'version.checker', MetadataTypeEnum::LIST, $versions, $options);
		$this->buildField('Approver', 'approver', 'version.approver', MetadataTypeEnum::LIST, $versions, $options);
	}
	
	private function checkMultiple(array $versions, string $codename): bool
	{
		
		if ($versions) {
			$value = null;
			foreach ($versions as $version) {
				if ($value !== null) {
					if ($value != $this->propertyService->toString($version->getPropertyValue($codename))) {
						return true;
					}
				} else {
					$value = $this->propertyService->toString($version->getPropertyValue($codename));
				}
			}
		}
		
		return false;
		
	}
	
	private function buildField(string $label, string $id, string $codename, int $type, array $versions=null, $options=[])
	{
	   	
		if (($options['required'] ?? true) === true && $type != MetadataTypeEnum::BOOL) {
			$options['constraints'] = [new NotBlank()];
		}
		
		$multiple = false;
		
		if (count((array) $versions) > 1) {
			$multiple = $this->checkMultiple($versions, $codename);
		}
		
		if ($multiple === true) {
			$options['constraints'] = [];
		}
		
		$version = reset($versions) ?? null;
		
		switch ($type) {
			
			case MetadataTypeEnum::BOOL:
				
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
				
			case MetadataTypeEnum::TEXT:
				
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
				
			case MetadataTypeEnum::DATE:
				
				$data = null;
				
				if ($version && $multiple === false) {
					if ($data = $version->getPropertyValue($codename)) {
						if ($data instanceof MetadataValue) $data = new \DateTime($data->getValue());
					}
					
					if ($data === null && ($options['required'] ?? true)) {
						$data = new \DateTime();
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
				
			case MetadataTypeEnum::LINK:
				
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
				
			case MetadataTypeEnum::LIST:
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
