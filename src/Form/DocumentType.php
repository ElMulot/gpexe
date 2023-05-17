<?php
namespace App\Form;

use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Document;
use App\Validator\IsValid;
use App\Entity\MetadataChoice;
use App\Entity\CodificationChoice;
use App\Form\Type\DateVariousType;
use App\Form\Type\TextVariousType;
use App\Form\Type\EntityVariousType;
use App\Entity\Enum\MetadataTypeEnum;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\TextareaVariousType;
use App\Repository\MetadataRepository;
use App\Validator\NotContainsSplitter;
use Symfony\Component\Form\AbstractType;
use App\Entity\Enum\CodificationTypeEnum;
use App\Exception\InternalErrorException;
use Symfony\Component\Form\FormInterface;
use App\Repository\CodificationRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\GroupSequence;

class DocumentType extends AbstractType
{

	public function __construct(private readonly CodificationRepository $codificationRepository,
								private readonly MetadataRepository $metadataRepository)
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

		$document = reset($documents);

		$isNew = $document->getId() === null;

		/** @var Project */
		$project = $options['project'];
		
		/** @var Serie[] */
		$series = $options['series'];
		
		$codifications = $this->codificationRepository->getCodifications($project);
		$metadatas = $this->metadataRepository->getMetadatasForDocument($project);
		
		if (count($series) === 0) {
			throw new InternalErrorException();
		} elseif (count($series) === 1 || $isNew === false) {
			$builder->add('serie', EntityVariousType::class, [
				'class'			=> Serie::class,
				'choices'		=> $series,
				'choice_label'	=> 'name',
				'data'			=> $series,
				'disabled'		=> true,
			]);
		} else {
			$builder->add('serie', EntityType::class, [
				'class'			=> Serie::class,
				'choices'		=> $series,
				'choice_label'	=> 'name',
				'setter'		=> function(array &$documents, mixed $modelData, FormInterface $form): void
									{
										array_walk($documents, fn(Document $document) => $document->setSerie($modelData));
									},
			]);
		}
		
		if (count($documents) === 1) {
			$builder->add('name', TextType::class, [
				'constraints'	=> new Regex('/^[^$"]+$/'),
				'setter'		=> function(array &$documents, $viewData, FormInterface $form): void
									{
										array_walk($documents, fn(Document $document) => $document->setName($viewData));
									},
			]);
		}

		foreach ($codifications as $codification) {

			$defaultOptions = [
				'label'			=> $codification->getName(),
				'required'		=> true,
				'getter'		=> function(array $documents, FormInterface $form) use ($codification, $isNew): mixed
									{
										if ($isNew === true) {
											return [$codification->getTypedDefaultValue()];
										} else {
											return array_map(fn(Document $document) => $document->getCodificationValue($codification), $documents);
										}
									},
				'setter'		=> function(array &$documents, mixed $modelData, FormInterface $form) use ($codification): void
									{
										if (is_array($modelData) === false) {
											array_walk($documents, fn(Document $document) => $document->setCodificationValue($codification, $modelData));
										}
									},
				'empty_data' 	=> $codification->getDefaultValue(),
			];

			switch ($codification->getType()) {

				case CodificationTypeEnum::TEXT:
					$builder->add($codification->getFullId(), TextareaVariousType::class, $defaultOptions + [
						'constraints' => [
							new NotContainsSplitter(
								payload: ['splitter' => $project->getSplitter()],
								groups: ['Form']
							),
							new IsValid(
								groups: ['Form']
							),
						]
					]);
					break;


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
					$builder->add($codification->getFullId(), EntityVariousType::class, $defaultOptions + [
						'class'			=> CodificationChoice::class,
						'choices' 		=> $codification->getCodificationChoices(),
						'choice_label'	=> fn(CodificationChoice $codificationChoice) => $codificationChoice->getValue() . ' - ' . $codificationChoice->getName(),
						'choice_value'	=> 'value',
					]);
					$builder->get($codification->getFullId())->resetViewTransformers();
					break;
			}
		}
		
		foreach ($metadatas as $metadata) {

			//mandatory add a required attribut, so the constraint isMandatory is not necessary

			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				'getter'		=> function(array $documents, FormInterface $form) use ($metadata, $isNew): mixed
									{
										if ($isNew === true) {
											return [$metadata->getTypedDefaultValue()];
										} else {
											return array_map(fn(Document $document) => $document->getMetadataValue($metadata), $documents);
										}
									},
				'setter'		=> function(array &$documents, mixed $modelData, FormInterface $form) use ($metadata): void
									{
										if (is_array($modelData) === false) {
											array_walk($documents, fn(Document $document) => $document->setMetadataValue($metadata, $modelData));
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
		
		$resolver->setRequired(['project', 'series']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('series', Serie::class . '[]');
	}
}
