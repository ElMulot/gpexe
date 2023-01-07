<?php

namespace App\Form;

use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Project;
use App\Exception\InternalErrorException;
use App\Form\Type\BooleanType;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\DateVariousType;
use App\Form\Type\EntityVariousType;
use App\Form\Type\TextareaVariousType;
use App\Form\Type\TextVariousType;
use App\Repository\CompanyRepository;
use App\Repository\MetadataRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Url;

class SerieType extends AbstractType
{
	
	public function __construct(private readonly CompanyRepository $companyRepository,
								private readonly MetadataRepository $metadataRepository,
								#[Autowire('%app.config.date_format%')]
								private readonly string $dateFormat)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Serie $serie */
		$serie = $builder->getData();

		/** @var Project $project */
		$project = $options['project'];
		$metadatas = $this->metadataRepository->getMetadatasForSerie($project);
		$companies = $this->companyRepository->getCompaniesBySerieIds($options['ids']);
		
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
				// 'constraints'	=> ($metadata->isMandatory() === true)?[new NotBlank()]:[],
				'empty_data'	=> $metadata->getDefault(),
				'getter'		=> function(Serie $serie, FormInterface $form) use ($metadata): mixed
									{
										return $serie->getPropertyValue($metadata->getFullCodename());
									},
				'setter'		=> function (Serie &$serie, bool $viewData, FormInterface $form) use ($metadata): void
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
						'class'			=> MetadataItem::class,
						'choices'		=> $metadata->getMetadataItems(),
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
		]);

		$resolver->setRequired(['project']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('ids', ['null', 'string[]']);
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
	// 		$data = $viewData->getMetadataValue($metadata);
	// 		$forms[$metadata->getCodeName()]->setData($data);
	// 	}
    // }

    // public function mapFormsToData(\Traversable $forms, &$viewData): void
    // {
        
	// }

}
