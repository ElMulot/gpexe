<?php

namespace App\Form;

use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Serie;
use App\Repository\MetadataRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class SerieType extends AbstractType
{
	
	private $builder;
	
	public function __construct(private readonly MetadataRepository $metadataRepository)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		
		$builder->add('name');
		
		$project = $builder->getData()->getProject();
		foreach ($this->metadataRepository->getMetadatasForSerie($project) as $metadata) {
			
			$data = $builder->getData()->getMetadataValue($metadata);
			
			switch ($metadata->getType()) {
				
				case MetadataTypeEnum::BOOLEAN:
					
					$builder->add($metadata->getCodeName(), ChoiceType::class, [
						'label' => $metadata->getName(),
						'choices' => [
							'Yes' => true,
							'No' => false,
						],
						'mapped' => false,
						'data' => $data,
					]);
					break;
					
				case MetadataTypeEnum::DATE:
					
					if ($data instanceof MetadataValue) {
						$data = new \DateTime($data->getValue());
					} elseif ($metadata->getIsMandatory()) {
						$data = new \DateTime();
					}
					
					$builder->add($metadata->getCodeName(), DateType::class, [
						'label'			=> $metadata->getName(),
						'mapped'		=> false,
						'widget'		=> 'single_text',
						'format'		=> 'dd-MM-yyyy',
						'html5'			=> false,
						'data'			=> $data,
						'required'		=> $metadata->getIsMandatory(),
						'contraints'	=> ($metadata->getIsMandatory())?[new NotBlank()]:[],
					]);
					
					break;
					
				case MetadataTypeEnum::TEXT:
					
					$builder->add($metadata->getCodeName(), TextareaType::class, [
						'label'			=> $metadata->getName(),
						'mapped'		=> false,
						'data'			=> $data,
						'required'		=> $metadata->getIsMandatory(),
						'contraints'	=> ($metadata->getIsMandatory())?[new NotBlank()]:[],
					]);
					break;
					
				case MetadataTypeEnum::LINK:
					
					$builder->add($metadata->getCodeName(), TextType::class, [
						'label'			=> $metadata->getName(),
						'mapped'		=> false,
						'data'			=> $data,
						'required'		=> $metadata->getIsMandatory(),
						'contraints'	=> ($metadata->getIsMandatory())?[new NotBlank()]:[],
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					
					$builder->add($metadata->getCodeName(), EntityType::class, [
						'class'			=> MetadataItem::class,
						'choices'		=> $metadata->getMetadataItems(),
						'label'			=> $metadata->getName(),
						'mapped'		=> false,
						'data'			=> $data,
						'required'		=> $metadata->getIsMandatory(),
						'contraints'	=> ($metadata->getIsMandatory())?[new NotBlank()]:[],
					]);
					break;
				
			}
		}
		
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Serie::class,
		]);
	}
}
