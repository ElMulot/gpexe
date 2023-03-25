<?php
namespace App\Form;

use App\Entity\Project;
use App\Entity\Version;
use App\Exception\InternalErrorException;
use App\Form\Type\BooleanVariousType;
use App\Repository\DocumentRepository;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use App\Service\PropertyService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VersionType extends AbstractType
{
	
	private string $mode;

	public final const NEW	= 'new';
	public final const EDIT	= 'edit';
		
	public function __construct(private readonly PropertyService $propertyService,
								private readonly DocumentRepository $documentRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly UserRepository $userRepository)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Version[] $versions */
		$versions = $builder->getData();

		/** @var Project $project */
		$project = $options['project'];
		$metadatas = $this->metadataRepository->getMetadatasForVersion($project);
		$documents = $this->documentRepository->getDocumentsByVersionsId($options['ids']);
		
		//define if new or edit
		if (count($versions) === 0) {
			throw new InternalErrorException();
		}
		$version = reset($versions);
		$this->mode = ($version->getId() === null)?self::NEW:self::EDIT;

		// if (count($documents) === 0) {
		// 	throw new InternalErrorException();
		// } elseif (count($documents) === 1) {
		// 	$builder->add('document', TextType::class, [
		// 		'data' => reset($documents)->getName(),
		// 		'disabled' => true,
		// 	]);
		// } elseif (count($documents) > 1) {
		// 	$builder->add('document', EntityVariousType::class, [
		// 		'class' => Document::class,
		// 		'choices' => $documents,
		// 	]);
		// }

		// if (count($versions) === 1) {
		// 	$builder->add('name', TextType::class, [
		// 		'label' 		=> 'Version',
		// 		'data' 			=> $version->getName(),
		// 	]);
		// }

		$builder->add('required', BooleanVariousType::class, [
			'data' => [true],
		]);

		// $builder->add('date', DateVariousType::class);

		// $builder->add('status', EntityVariousType::class, [
		// 	'class' 		=> Status::class,
		// 	'choices' 		=> $project->getStatuses(),
		// ]);
		
		// $builder->add('writer', EntityVariousType::class, [
		// 	'required'		=> false,
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $this->userRepository->getWriters($project, $options['ids']),
		// ]);

		// $checkers = $this->userRepository->getCheckers($project);
		// $builder->add('checker', EntityVariousType::class, [
		// 	'required'		=> false,
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $checkers,
		// ]);

		// $builder->add('approver', EntityVariousType::class, [
		// 	'required'		=> false,
		// 	'class' 		=> User::class,
		// 	'choices' 		=> $checkers,
		// ]);

		// foreach ($metadatas as $metadata) {
		// 	$defaultOptions = [
		// 		'label'			=> $metadata->getName(),
		// 		'required'		=> $metadata->isMandatory(),
		// 		'constraints'	=> ($metadata->isMandatory() === true)?[new NotBlank()]:[],
		// 		'empty_data'	=> $metadata->getDefaultValue(),
		// 	];

		// 	switch ($metadata->getType()) {
				
		// 		case MetadataTypeEnum::BOOL:
		// 			$builder->add($metadata->getCodeName(), BooleanVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefaultValue():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::DATE:
		// 			$builder->add($metadata->getCodeName(), DateVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefaultValue():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::TEXT:
		// 			$builder->add($metadata->getCodeName(), TextareaVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefaultValue():null,
		// 			]);
		// 			break;
				
		// 		case MetadataTypeEnum::REGEX:
		// 			$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [new Regex('/' . $metadata->getPattern() . '/')],
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefaultValue():null,
		// 			]);
		// 			break;
		// 		case MetadataTypeEnum::LINK:
		// 			$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [new Url()],
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefaultValue():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::LIST:
		// 			$defaultValue = $metadata->getMetadataChoices()->filter(fn(MetadataChoice $mi) => $mi->getValue() === $metadata->getDefaultValue())->toArray();
		// 			$builder->add($metadata->getCodeName(), EntityVariousType::class, $defaultOptions + [
		// 				'class'			=> MetadataChoice::class,
		// 				'choices'		=> $metadata->getMetadataChoices(),
		// 				'data'			=> ($this->mode === self::NEW && empty($defaultValue) === false)?$defaultValue:null,
		// 			]);
		// 			break;
		// 	}
		// }
	}
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => null,
			'project' => null,
			'ids' => [],
		]);
		
		$resolver->setRequired(['project']);

		$resolver->setAllowedTypes('project', Project::class);
		$resolver->setAllowedTypes('ids', ['null', 'string[]']);
	}
}
