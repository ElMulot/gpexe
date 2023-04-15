<?php
namespace App\Form;

use App\Entity\CodificationChoice;
use App\Entity\Document;
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\MetadataChoice;
use App\Entity\Project;
use App\Entity\Serie;
use App\Exception\InternalErrorException;
use App\Form\DataMapper\DocumentMapper;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\DateVariousType;
use App\Form\Type\EntityVariousType;
use App\Form\Type\TextareaVariousType;
use App\Form\Type\TextVariousType;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;
use App\Service\PropertyService;
use App\Validator\IsValid;
use App\Validator\NotContainsSplitter;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GroupSequence;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class DocumentType extends AbstractType
{

	public function __construct(private readonly PropertyService $propertyService,
								private readonly CodificationRepository $codificationRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly SerieRepository $serieRepository,
								private readonly ValidatorInterface $validatorInterface)
	{
		
	}

	//As fields are not mapped to entity, new constraints has been attached to each field with group validation "Form" to have
	//an error attached to each field.
	//If a constraint is forgotten, the constraint in the entity will provide the ultimate security.
	//As a consequence, if the validation don't fail, each field will be validated twice (once with "From" group, once with "Default" group).
	//A solution could be to mapped each violation on the correct field.
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Document[] $documents */
		$documents = $builder->getData();

		if (count($documents) === 0) {
			throw new InternalErrorException();
		}

		/**@var Document $document */
		$document = reset($documents);

		/** @var Project $project */
		$project = $options['project'];
		$codifications = $this->codificationRepository->getCodifications($project);
		$metadatas = $this->metadataRepository->getMetadatasForDocument($project);
		$series = $options['series'];
		
		if (count($series) === 0) {
			throw new InternalErrorException();
		} elseif (count($series) === 1) {
			$builder->add('serie', EntityType::class, [
				'class' => Serie::class,
				'choices' => $series,
				'data' => reset($series),
				'disabled' => true,
			]);
		} elseif (count($series) > 1) {
			$builder->add('serie', EntityVariousType::class, [
				'class' => Serie::class,
				'choices' => $series,
			]);
		}
		
		if (count($documents) === 1) {
			$builder->add('name', TextType::class, [
				'constraints' => new Regex('/^[^$"]+$/'),
			]);
		}

		foreach ($codifications as $codification) {

			$defaultOptions = [
				'label'			=> $codification->getName(),
				'required'		=> true,
				// 'empty_data'	=> $codification->getDefaultValue(),
			];

			switch ($codification->getType()) {

				case CodificationTypeEnum::TEXT:
				case CodificationTypeEnum::REGEX:

					$builder->add($codification->getFullId(), TextVariousType::class, $defaultOptions + [
						'constraints' => [
							new NotContainsSplitter(
								payload: ['splitter' => $project->getSplitter()],
								groups: ['Form']
							),
							new IsValid(
								payload: ['pattern' => $codification->getPattern()],
								groups: ['Form']
							),
						]
					]);

					break;

				case CodificationTypeEnum::LIST:
					$defaultValue = $codification->getCodificationChoices()->filter(fn(CodificationChoice $ci) => $ci->getValue() === $codification->getDefaultValue())->toArray();
					$builder->add($codification->getFullId(), EntityVariousType::class, $defaultOptions + [
						'class'			=> CodificationChoice::class,
						'choices' 		=> $codification->getCodificationChoices(),
						'choice_label'	=> fn(CodificationChoice $codificationChoice) => $codificationChoice->getValue() . ' - ' . $codificationChoice->getName(),
						'choice_value'	=> 'value',
					]);
					break;
			}
		}
		
		foreach ($metadatas as $metadata) {

			//mandatory add a required attribut, so the constraint isMandatory is not necessary

			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				// 'empty_data'	=> $metadata->getDefaultValue(),
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
					$builder->add($metadata->getFullId(), TextVariousType::class, $defaultOptions + [
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
								payload: ['isUrl' => true],
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
					break;
			}
		}

		$builder->setDataMapper(new DocumentMapper($project, $document, $codifications, $metadatas));
	}
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'		=> null,
			'project'			=> null,
			'series'			=> [],
			'validation_groups'	=> new GroupSequence(['Form', 'Default']),
		]);
		
		$resolver->setRequired(['project', 'series']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('series', Serie::class . '[]');
	}
}
