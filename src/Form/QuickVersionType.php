<?php

namespace App\Form;

use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Visa;
use App\Helpers\Date;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use App\Repository\VisaRepository;
use App\Service\PropertyService;
use Spatie\Regex\Regex;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bundle\SecurityBundle\Security;

class QuickVersionType extends AbstractType
{
	
	private $builder;
	
	public function __construct(private readonly Security $security, private readonly PropertyService $propertyService, private readonly MetadataRepository $metadataRepository, private readonly UserRepository $userRepository, private readonly VisaRepository $visaRepository)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$this->builder = $builder;
		$version = $builder->getData();
		
		if ($version->getId() === null) {			//quick new
		
			$builder->add('name', TextType::class, [
				'label' => 'New version',
				'label_attr' => ['class' => 'col-form-label col-5'],
				'row_attr' => ['class' => 'row'],
			]);
		
		} else {									//quick edit
			
			$serie = $version->getDocument()->getSerie();
			$project = $serie->getProject();
			$field = $options['field'];
			
			$options = [];
			
			switch ($field['id']) {
				
				case 'status_value':
					break;
					
				case (($result = Regex::match('/metadata_(\d+)/', $field['id']))->hasMatch()):
					
					foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
						if ($metadata->getId() == $result->group(1)) {
							$options = match ($metadata->getType()) {
								MetadataTypeEnum::LIST => [
										'required'	=> $metadata->isMandatory(),
										'class' 	=> MetadataChoice::class,
										'choices' 	=> $metadata->getMetadataChoices(),
									],
								default => [
										'required'	=> $metadata->isMandatory(),
									],
							};
						}
					}
					break;
					
				case 'version_writer':
					$options = [
						'required' 	=> false,
						'class' 	=> User::class,
						'choices' 	=> $serie->getCompany()->getUsers(),
					];
					break;
					
				case 'version_checker':
				case 'version_approver':
					$options = [
						'required' 	=> false,
						'class' 	=> User::class,
						'choices' 	=> $this->userRepository->getCheckers($project),
					];
					break;
					
				case (($result = Regex::match('/visa_(\d+)/', $field['id']))->hasMatch()):
					
					foreach ($version->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
						
						if ($visa->getCompany()->getId() == $result->group(1)) {
							/** @var User $user */
							$user = $this->security->getUser();
							if ($this->security->isGranted('VISA_EDIT', $visa)) {
								$options = [
									'required'	=> false,
									'class'		=> Visa::class,
									'choices' 	=> $this->visaRepository->getVisasByCompany($project, $visa->getCompany()),
								];
							}
							break;
						}
					}
					break;
			}
			
			
			switch ($field['type']) {
				
				
				case ($field['codename'] == 'document.name' || $field['codename'] == 'version.name'):
					$builder->add($field['id'], TextType::class, $options + [
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
				
				case MetadataTypeEnum::BOOL:
					$builder->add($field['id'], ChoiceType::class, $options + [
						'choices' => [
							'Yes' => true,
							'No' => false,
						],
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
					
				case MetadataTypeEnum::TEXT:
				case MetadataTypeEnum::REGEX:
				case MetadataTypeEnum::LINK:
					$builder->add($field['id'], TextareaType::class, $options + [
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
					
				case MetadataTypeEnum::DATE:
					$builder->add($field['id'], DateType::class, $options + [
						'widget' => 'single_text',
						'format' => 'dd-MM-yyyy',
						'html5' => false,
						'mapped' => false,
						'data' => Date::fromFormat($this->propertyService->toString($version->getPropertyValue($field['codename']))),
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					$builder->add($field['id'], EntityType::class, $options + [
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
			}
		}
	}
		
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Version::class,
			'field' => [],
		]);
		
		$resolver->setAllowedTypes('field', 'array');
	}
}

?>
