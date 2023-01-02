<?php
namespace App\Form;

use App\Entity\Document;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Exception\InternalErrorException;
use App\Form\Type\BooleanType;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\DateVariousType;
use App\Form\Type\EntityVariousType;
use App\Form\Type\TextVariousType;
use App\Repository\CompanyRepository;
use App\Repository\DocumentRepository;
use App\Repository\MetadataRepository;
use App\Repository\UserRepository;
use App\Service\PropertyService;
use Spatie\Regex\Regex;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;

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

		$builder->add('isRequired', BooleanVariousType::class, [
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
		// 		'required'		=> $metadata->getIsMandatory(),
		// 		'constraints'	=> ($metadata->getIsMandatory() === true)?[new NotBlank()]:[],
		// 		'empty_data'	=> $metadata->getDefault(),
		// 	];

		// 	switch ($metadata->getType()) {
				
		// 		case MetadataTypeEnum::BOOL:
		// 			$builder->add($metadata->getCodeName(), BooleanVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::DATE:
		// 			$builder->add($metadata->getCodeName(), DateVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::TEXT:
		// 			$builder->add($metadata->getCodeName(), TextareaVariousType::class, $defaultOptions + [
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
		// 			]);
		// 			break;
				
		// 		case MetadataTypeEnum::REGEX:
		// 			$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [new Regex('/' . $metadata->getPattern() . '/')],
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
		// 			]);
		// 			break;
		// 		case MetadataTypeEnum::LINK:
		// 			$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [new Url()],
		// 				'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::LIST:
		// 			$defaultValue = $metadata->getMetadataItems()->filter(fn(MetadataItem $mi) => $mi->getValue() === $metadata->getDefault())->toArray();
		// 			$builder->add($metadata->getCodeName(), EntityVariousType::class, $defaultOptions + [
		// 				'class'			=> MetadataItem::class,
		// 				'choices'		=> $metadata->getMetadataItems(),
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
