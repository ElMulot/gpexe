<?php
namespace App\Form;

use App\Entity\User;
use App\Entity\Project;
use App\Entity\Version;
use App\Entity\Document;
use App\Validator\IsValid;
use App\Form\Type\DateVariousType;
use App\Repository\UserRepository;
use App\Form\Type\EntityVariousType;
use App\Repository\StatusRepository;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\MetadataChoice;
use App\Entity\Status;
use App\Form\Type\BooleanVariousType;
use App\Repository\MetadataRepository;
use Symfony\Component\Form\AbstractType;
use App\Exception\InternalErrorException;
use App\Form\Type\TextareaVariousType;
use App\Form\Type\TextVariousType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GroupSequence;

class VersionType extends AbstractType
{		
	public function __construct(private readonly MetadataRepository $metadataRepository,
								private readonly StatusRepository $statusRepository,
								private readonly UserRepository $userRepository)
	{
	}
	
	//As fields are not mapped to entity, new constraints has been attached to each field with group validation "Form" to have
	//an error attached to each field.
	//If a constraint is forgotten, the constraint in the entity will provide the ultimate security.
	//As a consequence, if the validation don't fail, each field will be validated twice (once with "From" group, once with "Default" group).
	//A solution could be to mapped each violation on the correct field.
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Version[] */
		$versions = $builder->getData();

		if (count($versions) === 0) {
			throw new InternalErrorException();
		}
		
		$version = reset($versions);

		$isNew = $version->getId() === null;

		/** @var Project $project */
		$project = $options['project'];

		/** @var Document[] */
		$documents = $options['documents'];

		$metadatas = $this->metadataRepository->getMetadatasForVersion($project);

		if (count($documents) === 0) {
			throw new InternalErrorException();
		} elseif (count($documents) === 1 || $isNew === false) {
			$builder->add('document', EntityVariousType::class, [
				'class'			=> Document::class,
				'choices'		=> $documents,
				'choice_label'	=> 'name',
				'data'			=> $documents,
				'disabled'		=> true,
			]);
		} else {
			$builder->add('document', EntityType::class, [
				'class'			=> Document::class,
				'choices'		=> $documents,
				'choice_label'	=> 'name',
				'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
									{
										array_walk($versions, fn(Version $version) => $version->setDocument($modelData));
									},
			]);
		}

		// if (count($versions) === 1) {
		// 	$builder->add('name', TextType::class, [
		// 		'constraints'	=> new Regex('/^[^$"]+$/'),
		// 		'setter'		=> function(array &$versions, $modelData, FormInterface $form): void
		// 							{
		// 								array_walk($versions, fn(Version $version) => $version->setName($modelData));
		// 							},
		// 	]);
		// }

		// $builder->add('required', BooleanVariousType::class, [
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [true];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->isRequired(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setRequired($modelData));
		// 					}
		// 				},
		// ]);

		// $builder->add('date', DateVariousType::class, [
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [new \DateTime()];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->getDate(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setDate($modelData));
		// 					}
		// 				},
		// ]);

		// $builder->add('status', EntityVariousType::class, [
		// 	'class' 		=> Status::class,
		// 	'choices' 		=> $project->getStatuses(),
		// 	'choice_label'	=> 'name',
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew, $project): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [$this->statusRepository->getDefaultStatus($project)];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->getStatus(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setStatus($modelData));
		// 					}
		// 				},
		// ]);

		// $builder->add('writer', EntityVariousType::class, [
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $this->userRepository->getWriters($project, $versions),
		// 	'choice_label'	=> 'name',
		// 	'required'		=> false,
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->getWriter(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setWriter($modelData));
		// 					}
		// 				},
		// ]);

		// $builder->add('checker', EntityVariousType::class, [
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $this->userRepository->getCheckers($project),
		// 	'choice_label'	=> 'name',
		// 	'required'		=> false,
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->getChecker(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setChecker($modelData));
		// 					}
		// 				},
		// ]);

		// $builder->add('approver', EntityVariousType::class, [
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $this->userRepository->getCheckers($project),
		// 	'choice_label'	=> 'name',
		// 	'required'		=> false,
		// 	'getter'		=> function(array $versions, FormInterface $form) use ($isNew): mixed
		// 				{
		// 					if ($isNew === true) {
		// 						return [];
		// 					} else {
		// 						return array_map(fn(Version $version) => $version->getApprover(), $versions);
		// 					}
		// 				},
		// 	'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form): void
		// 				{
		// 					if (is_array($modelData) === false) {
		// 						array_walk($versions, fn(Version $version) => $version->setApprover($modelData));
		// 					}
		// 				},
		// ]);

		foreach ($metadatas as $metadata) {

			//mandatory add a required attribut, so the constraint isMandatory is not necessary
			
			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				'getter'		=> function(array $versions, FormInterface $form) use ($metadata, $isNew): mixed
									{
										if ($isNew === true) {
											return [$metadata->getTypedDefaultValue()];
										} else {
											return array_map(fn(Version $version) => $version->getMetadataValue($metadata), $versions);
										}
									},
				'setter'		=> function(array &$versions, mixed $modelData, FormInterface $form) use ($metadata): void
									{
										if (is_array($modelData) === false) {
											array_walk($versions, fn(Version $version) => $version->setMetadataValue($metadata, $modelData));
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
			'data_class' => null,
			'validation_groups'	=> new GroupSequence(['Form', 'Default']),
		]);
		
		$resolver->setRequired(['project', 'documents']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('documents', Document::class . '[]');
	}
}
