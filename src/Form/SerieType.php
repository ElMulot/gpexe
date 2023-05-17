<?php

namespace App\Form;

use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Project;
use App\Validator\IsValid;
use App\Entity\MetadataChoice;
use App\Form\Type\DateVariousType;
use App\Form\Type\TextVariousType;
use App\Form\Type\EntityVariousType;
use App\Entity\Enum\MetadataTypeEnum;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\TextareaVariousType;
use App\Repository\MetadataRepository;
use Symfony\Component\Form\AbstractType;
use App\Exception\InternalErrorException;
use App\Form\Type\ChoiceVariousType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\ChoiceList\ChoiceList;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\GroupSequence;

class SerieType extends AbstractType
{
	
	public function __construct(private readonly MetadataRepository $metadataRepository)
	{
	}
	
	//As fields are not mapped to entity, new constraints has been attached to each field with group validation "Form" to have
	//an error attached to each field.
	//If a constraint is forgotten, the constraint in the entity will provide the ultimate security.
	//As a consequence, if the validation don't fail, each field will be validated twice (once with "From" group, once with "Default" group).
	//A solution could be to mapped each violation on the correct field.
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Serie[] */
		$series = $builder->getData();

		if (count($series) === 0) {
			throw new InternalErrorException();
		}

		$serie = reset($series);

		$isNew = $serie->getId() === null;

		/** @var Project */
		$project = $options['project'];
		
		/** @var Company[] */
		$companies = $options['companies'];
		
		$metadatas = $this->metadataRepository->getMetadatasForSerie($project);

		if (count($companies) === 0) {
			throw new InternalErrorException();
		} elseif (count($companies) === 1 || $isNew === false) {
			$builder->add('company', EntityVariousType::class, [
				'class'			=> Company::class,
				'choices'		=> $companies,
				'choice_label'	=> 'name',
				'data'			=> $companies,
				'disabled'		=> true,
			]);
		} else {
			$builder->add('company', EntityType::class, [
				'class'			=> Company::class,
				'choices'		=> $companies,
				'choice_label'	=> 'name',
				'setter'		=> function(array &$series, mixed $modelData, FormInterface $form): void
									{
										array_walk($series, fn(Serie $serie) => $serie->setCompany($modelData));
									},
			]);
		}

		if (count($series) === 1) {
			$builder->add('name', TextType::class, [
				'constraints'	=> new Regex('/^[^$"]+$/'),
				'setter'		=> function(array &$series, $modelData, FormInterface $form): void
									{
										array_walk($series, fn(Serie $serie) => $serie->setName($modelData));
									},
			]);
		}
		
		foreach ($metadatas as $metadata) {

			//mandatory add a required attribut, so the constraint isMandatory is not necessary
			
			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				'getter'		=> function(array $series, FormInterface $form) use ($metadata, $isNew): mixed
									{
										if ($isNew === true) {
											return [$metadata->getTypedDefaultValue()];
										} else {
											return array_map(fn(Serie $serie) => $serie->getMetadataValue($metadata), $series);
										}
									},
				'setter'		=> function(array &$series, mixed $modelData, FormInterface $form) use ($metadata): void
									{
										if (is_array($modelData) === false) {
											array_walk($series, fn(Serie $serie) => $serie->setMetadataValue($metadata, $modelData));
										}
									},
				'empty_data' 	=> $metadata->getDefaultValue(),
			];

			switch ($metadata->getType()) {
				
				case MetadataTypeEnum::BOOL:
					$builder->add($metadata->getFullId(), BooleanVariousType::class, $defaultOptions);
					break;
					
				case MetadataTypeEnum::DATE:
					$builder->add($metadata->getFullId(), DateVariousType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::TEXT:
					$builder->add($metadata->getFullId(), TextareaVariousType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								groups: ['Form']
							),
						]
					]);
					break;
				
				case MetadataTypeEnum::REGEX:
					$builder->add($metadata->getFullId(), TextareaVariousType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								payload: ['pattern' => $metadata->getPattern()],
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::LINK:
					$builder->add($metadata->getFullId(), TextVariousType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								payload: ['isLink' => true],
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					$builder->add($metadata->getFullId(), EntityVariousType::class, $defaultOptions + [
						'class'			=> MetadataChoice::class,
						'choices'		=> $metadata->getMetadataChoices(),
						'choice_label'	=> 'value',
						'choice_value'	=> 'value',
					]);
					$builder->get($metadata->getFullId())->resetViewTransformers();
					break;
			}
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'		=> null,
			'validation_groups'	=> new GroupSequence(['Form', 'Default']),
		]);

		$resolver->setRequired(['project', 'companies']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('companies', Company::class . '[]');
	}
}
