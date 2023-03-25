<?php

namespace App\Form;

use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Project;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Form\Type\BooleanType;
use App\Entity\Enum\MetadataTypeEnum;
use App\Repository\CompanyRepository;
use App\Repository\MetadataRepository;
use Symfony\Component\Form\AbstractType;
use App\Exception\InternalErrorException;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Url;

class SerieType extends AbstractType
{
	
	public function __construct(private readonly CompanyRepository $companyRepository,
								private readonly MetadataRepository $metadataRepository,
								#[Autowire('%app.config.icu_date_pattern%')]
								private readonly string $ICUDatePattern)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Serie $serie */
		$serie = $builder->getData();

		/** @var Project $project */
		$project = $options['project'];
		$metadatas = $this->metadataRepository->getMetadatasForSerie($project);

		if ($options['company'] !== null) {
			$companies = [$options['company']];
		} else {
			$companies = $this->companyRepository->getCompaniesBySerieIds($options['ids']);
		}
		if (count($companies) === 0) {
			throw new InternalErrorException();
		} elseif (count($companies) === 1) {
			$builder->add('company', TextType::class, [
				'data' => reset($companies)->getName(),
				'disabled' => true,
			]);
		} elseif (count($companies) > 1) {
			$builder->add('company', EntityType::class, [
				'class' => Company::class,
				'choices' => $companies,
			]);
		}

		$builder->add('name', TextType::class);
		
		/** @var Metadata $metadata */
		foreach ($metadatas as $metadata) {

			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				// 'default'		=> ($serie->getId() === null)?$metadata->getDefaultValue():'',
				// 'constraints'	=> ($metadata->isMandatory() === true)?[new NotBlank()]:[],
				'getter'		=> function(Serie $serie, FormInterface $form) use ($metadata): mixed
									{
										if ($serie->getId() === null) {
											return $metadata->getTypedDefaultValue();
										} else {
											return $serie->getTypedMetadataElement($metadata);
										}
									},
				'setter'		=> function (Serie &$serie, $viewData, FormInterface $form) use ($metadata): void
									{
										$serie->setPropertyValue($metadata->getFullCodename(), $viewData);
									},
			];

			switch ($metadata->getType()) {
				
				case MetadataTypeEnum::BOOL:
					$builder->add($metadata->getCodeName(), BooleanType::class, $defaultOptions);
					break;
					
				case MetadataTypeEnum::DATE:
					$builder->add($metadata->getCodeName(), DateType::class, $defaultOptions);
					break;
					
				case MetadataTypeEnum::TEXT:
					$builder->add($metadata->getCodeName(), TextareaType::class, $defaultOptions);
					break;
				
				case MetadataTypeEnum::REGEX:
					$builder->add($metadata->getCodeName(), TextareaType::class, $defaultOptions + [
						'constraints'	=> [new Regex('/' . $metadata->getPattern() . '/')],
					]);
					break;
					
				case MetadataTypeEnum::LINK:
					$builder->add($metadata->getCodeName(), TextType::class, $defaultOptions + [
						'constraints'	=> [new Url()],
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					$builder->add($metadata->getCodeName(), EntityType::class, $defaultOptions + [
						'choices'		=> $metadata->getMetadataChoices(),
						'class'			=> MetadataChoice::class,
						// 'choice_value'	=> 'id',
						// 'choice_label'	=> 'value',
					]);
					break;
			}
		}

	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'	=> Serie::class,
			'project'		=> null,
			'ids'			=> [],
			'company'		=> null,
		]);

		$resolver->setRequired(['project']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('ids', ['null', 'string[]']);
		$resolver->setAllowedTypes('company', ['null', Company::class]);
	}

	//pas utile pour serie car les modifications groupées ne sont pas autorisées.
	//En revanche, il faudra regarder ce qu'il conviendra de faire pour Document et Version: soit un dataMapper, soit getter/setter.

	// public function mapDataToForms($viewData, \Traversable $forms): void
    // {
    //     if ($viewData === null) {
    //         return;
    //     }

	// 	if ($viewData instanceof Serie === false) {
	// 		throw new UnexpectedTypeException($viewData, Serie::class);
	// 	}

    //     /** @var FormInterface[] $forms */
    //     $forms = array(...$forms);

	// 	foreach ($this->metadataRepository->getMetadatasForSerie($forms[0]->getConfig()->getOption('project')) as $metadata) {
	// 		$data = $viewData->getTypedMetadataElement($metadata);
	// 		$forms[$metadata->getCodeName()]->setData($data);
	// 	}
    // }

    // public function mapFormsToData(\Traversable $forms, &$viewData): void
    // {
        
	// }

}
