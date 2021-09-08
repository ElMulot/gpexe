<?php

namespace App\Form;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Visa;
use App\Helpers\Date;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use App\Repository\VisaRepository;
use Spatie\Regex\Regex;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;

class QuickVersionType extends AbstractType
{
	
	private $security;
	
	private $metadataRepository;
	
	private $userRepository;
	
	private $visaRepository;
	
	private $builder;
	
	public function __construct(Security $security, MetadataRepository $metadataRepository, UserRepository $userRepository, VisaRepository $visaRepository)
	{
		$this->security = $security;
		$this->metadataRepository = $metadataRepository;
		$this->userRepository = $userRepository;
		$this->visaRepository = $visaRepository;
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
					$options = [
						'class' 	=> Status::class,
						'choices' 	=> $project->getStatuses(),
					];
					break;
					
				case (($result = Regex::match('/metadata_(\d+)/', $field['id']))->hasMatch()):
				    
					foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
						if ($metadata->getId() == $result->group(1)) {
							switch ($metadata->getType()) {
								case Metadata::LIST:
									$options = [
										'required'	=> $metadata->getIsMandatory(),
										'class' 	=> MetadataItem::class,
										'choices' 	=> $metadata->getMetadataItems(),
									];
									break;
								default:
									$options = [
										'required'	=> $metadata->getIsMandatory(),
									];
									break;
							}
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
							if ($this->security->getUser()->getCompany() == $visa->getCompany() || ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN')) {
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
				
				case Metadata::BOOLEAN:
					$builder->add($field['id'], ChoiceType::class, $options + [
						'choices' => [
							'Yes' => true,
							'No' => false,
						],
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
					
				case Metadata::TEXT:
				case Metadata::LINK:
					$builder->add($field['id'], TextareaType::class, $options + [
						'mapped' => false,
						'data' => $version->getPropertyValue($field['codename']),
					]);
					break;
					
				case Metadata::DATE:
					$builder->add($field['id'], DateType::class, $options + [
						'widget' => 'single_text',
						'format' => 'dd-MM-yyyy',
						'html5' => false,
						'mapped' => false,
						'data' => Date::fromFormat($version->getPropertyValue($field['codename'])),
					]);
					break;
					
				case Metadata::LIST:
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
