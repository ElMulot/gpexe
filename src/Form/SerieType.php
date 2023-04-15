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
use App\Validator\IsValid;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Validator\Constraints\GroupSequence;
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
	
	//pour le moment, les champs company et name ne sont pas rattachés à l'entité.
	//pour les autres, ce sont des getters/setters mais je pense qu'il faudra passer par un SerieMapper. A réfléchir.
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Serie $serie */
		$serie = $builder->getData();

		/** @var Project $project */
		$project = $options['project'];
		$metadatas = $this->metadataRepository->getMetadatasForSerie($project);
		$companies = $options['company'];

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
				'getter'		=> function(Serie $serie, FormInterface $form) use ($metadata): mixed
									{
										if ($serie->getId() === null) {
											return $metadata->getDefaultValue();
										} else {
											return $serie->getMetadataValue($metadata);
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
					$builder->add($metadata->getCodeName(), DateType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::TEXT:
					$builder->add($metadata->getCodeName(), TextareaType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								groups: ['Form']
							),
						]
					]);
					break;
				
				case MetadataTypeEnum::REGEX:
					$builder->add($metadata->getCodeName(), TextareaType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								payload: ['pattern' => $metadata->getPattern()],
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::LINK:
					$builder->add($metadata->getCodeName(), TextType::class, $defaultOptions + [
						'constraints' => [
							new IsValid(
								payload: ['isUrl' => true],
								groups: ['Form']
							),
						]
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					$builder->add($metadata->getCodeName(), EntityType::class, $defaultOptions + [
						'class'			=> MetadataChoice::class,
						'choices'		=> $metadata->getMetadataChoices(),
						'choice_label'	=> 'value',
						'choice_value'	=> 'value',
					]);
					break;
			}
		}

	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'		=> null,
			'project'			=> null,
			'companies'			=> [],
			'validation_groups'	=> new GroupSequence(['Form', 'Default']),

		]);

		$resolver->setRequired(['project', 'companies']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('companies', Company::class . '[]');
	}
}
