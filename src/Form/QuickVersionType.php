<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Visa;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class QuickVersionType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$version = $builder->getData();
		
		if ($version->getId() === null) {			//quick new
		
			$builder->add('name', TextType::class, [
				'label' => 'New version',
				'label_attr' => ['class' => 'col-form-label col-5'],
				'row_attr' => ['class' => 'row'],
			]);
		
		} else {									//quick edit
			
			$document = $version->getDocument();
			$serie = $document->getSerie();
			$project = $serie->getProject();
			
			$fields = $this->documentSerivce->getFields($project);
			
			foreach ($fields as $field) {
				
				if ($field['id'] == $options['field'] && $field['display']['table'] && $field['permissions']['write']) {
					
					$options = [];
					
					switch ($field['id']) {
						
						case 'status_value':
							$options = [
								'class' 	=> Status::class,
								'choices' 	=> $project->getStatuses(),
							];
							break;
						
						case (preg_match('/metadata_(\d+)/', $field['id'], $matches) === 1):
							
							foreach ($this->metadataRepository->getMetadatasForVersion($project) as $metadata) {
								if ($metadata->getId() == $result[1]) {
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
							
						case (preg_match('/visa_(\d+)/', $field['id'], $matches) === 1):
							
							foreach ($this->getDocument()->getSerie()->getProject()->getVisas()->getValues() as $visa) {
								if ($visa->getCompany()->getCodename() == $matches[1]) {
									if ($this->security->getUser()->getCompany() == $visa->getCompany() || ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->security->getUser())) || $this->security->isGranted('ROLE_ADMIN')) {
										$options = [
											'required'	=> false,
											'class' => Visa::class,
											'choices' => $this->visaRepository->getVisasByCompany($project, $visa->getCompany()),
										];
									}
									break;
								}
							}
							break;
					}
					
					
					switch ($field['type']) {
						
						case Metadata::BOOLEAN:
							$builder->add($field['id'], ChoiceType::class, $options + [
								'choices' => [
									'Yes' => true,
									'No' => false,
								],
								'data' => $version->getPropertyValue($field['codename']),
							]);
							break;
							
						case Metadata::TEXT:
							$builder->add($field['id'], TextareaType::class, $options + [
								'data' => $version->getPropertyValue($field['codename']),
							]);
							break;
							
						case Metadata::DATE:
							$builder->add($field['id'], DateType::class, $options + [
								'widget' => 'single_text',
								'format' => 'dd-MM-yyyy',
								'html5' => false,
								'data' => $version->getPropertyValue($field['codename']),
							]);
							break;
							
						case Metadata::LIST:
							$builder->add($field['id'], EntityType::class, $options + [
								'data' => $version->getPropertyValue($field['codename']),
							]);
							break;
					}
				}
			}
			
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Version::class,
			'field' => '',
			'new' => false,
		]);
		
		$resolver->setAllowedTypes('field', 'string');
		$resolver->setAllowedTypes('new', 'bool');
	}
}

?>
