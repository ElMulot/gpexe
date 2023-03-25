<?php
namespace App\Form;

use App\Entity\Codification;
use App\Entity\CodificationChoice;
use App\Entity\CodificationElement;
use App\Entity\Document;
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Entity\MetadataElement;
use App\Entity\Project;
use App\Entity\Serie;
use App\Exception\InternalErrorException;
use App\Form\DataMapper\DocumentMapper;
use App\Form\EventSubscriber\DefaultValueSubscriber;
use App\Form\Type\BooleanType;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\DateVariousType;
use App\Form\Type\EntityVariousType;
use App\Form\Type\TextareaVariousType;
use App\Form\Type\TextVariousType;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\SerieRepository;
use App\Service\PropertyService;
use App\Validator\CodificationElementValidator;
use PhpParser\Node\Expr\Instanceof_;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Callback;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Mapping\PropertyMetadata;

class DocumentType extends AbstractType
{

	public function __construct(private readonly PropertyService $propertyService,
								private readonly CodificationRepository $codificationRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly SerieRepository $serieRepository,
								private readonly ValidatorInterface $validatorInterface)
	{
		
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Document[] $documents */
		$documents = $builder->getData();

		if (count($documents) === 0) {
			throw new InternalErrorException();
		}

		/**@var Document $document */
		$document = reset($documents);
		
		$isNew = $document->getId() === null;

		/** @var Project $project */
		$project = $options['project'];
		$codifications = [$this->codificationRepository->getCodifications($project)[2]];
		$metadatas = $this->metadataRepository->getMetadatasForDocument($project);
		$series = $this->serieRepository->getSeriesByVersionIds($options['ids']);

		if (count($series) === 0) {
			throw new InternalErrorException();
		} elseif (count($series) === 1) {
			$builder->add('serie', TextType::class, [
				'data' => reset($series)->getName(),
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
				// 'constraints'	=> $propertyMetadatas[0]->getConstraints(),
				// 'empty_data'	=> $codification->getDefaultValue(),
			];

			switch ($codification->getType()) {

				case CodificationTypeEnum::TEXT:
				case CodificationTypeEnum::REGEX:

					$builder->add($codification->getFullId(), TextVariousType::class, $defaultOptions + [
						'constraints' => new Callback(
							callback: [CodificationElementValidator::class, 'validateAsForm'],
							payload: ['splitter' => $project->getSplitter(), 'pattern' => $codification->getPattern()]
						)
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
		
		// foreach ($metadatas as $metadata) {
		// 	$defaultOptions = [
		// 		'label'			=> $metadata->getName(),
		// 		'required'		=> $metadata->isMandatory(),
		// 		'constraints'	=> ($metadata->isMandatory() === true)?[new NotBlank()]:[],
		// 		'empty_data'	=> $metadata->getDefaultValue(),
		// 	];

		// 	switch ($metadata->getType()) {
				
		// 		case MetadataTypeEnum::BOOL:
		// 			$builder->add($metadata->getFullId(), BooleanVariousType::class, $defaultOptions + [
		// 				'constraints'			=> [],
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::DATE:
		// 			$builder->add($metadata->getFullId(), DateVariousType::class, $defaultOptions + [
		// 				'constraints'			=> [],
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::TEXT:
		// 			$builder->add($metadata->getFullId(), TextareaVariousType::class, $defaultOptions + [
		// 				'constraints'			=> [],
		// 			]);
		// 			break;
				
		// 		case MetadataTypeEnum::REGEX:
		// 			$builder->add($metadata->getFullId(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [],
		// 			]);
		// 			break;
		// 		case MetadataTypeEnum::LINK:
		// 			$builder->add($metadata->getFullId(), TextVariousType::class, $defaultOptions + [
		// 				'constraints'	=> [],
		// 			]);
		// 			break;
					
		// 		case MetadataTypeEnum::LIST:
		// 			$builder->add($metadata->getFullId(), EntityVariousType::class, $defaultOptions + [
		// 				'class'			=> MetadataChoice::class,
		// 				'choices'		=> $metadata->getMetadataChoices(),
		// 				'choice_label'	=> 'value',
		// 				'choice_value'	=> 'value',

		// 			]);
		// 			break;
		// 	}
		// }

		$builder->setDataMapper(new DocumentMapper($project, $document, $isNew, $codifications, $metadatas));
	}

    public function finishView(FormView $view, FormInterface $form, array $options)
    {
		
		foreach ($view->children as $name => $child) {
			if ($form->has($name) === true) {				
				// if ($form->get($name)->getConfig()->getType()->getInnerType() instanceof TextVariousType === true) {
				// 	$child->children['input']->vars['attr']['placeholder'] = $form->get($name)->getConfig()->getEmptyData();
				// } elseif ($form->get($name)->getConfig()->getType()->getInnerType() instanceof EntityVariousType === true) {
					// if ($form->get($name)->getData() === null) {
					// 	foreach ($form->get($name)->getConfig()->getOption('choices') as $value) {
					// 		if ($value->getValue() === $form->get($name)->getConfig()->getEmptyData()) {
					// 			$form->get($name)->setData([$value]);
					// 			break;
					// 		}
					// 	}
					// }
				// }

			}


			// switch ($codification->getType()) {

			// 	case CodificationTypeEnum::TEXT:
			// 	case CodificationTypeEnum::REGEX:
			// 		$view->children['input']->vars['attr']['placeholder'] = $form->getConfig()->getEmptyData();
			// 		break;

			// 	case CodificationTypeEnum::LIST:
			// 		$view->children['input']->vars['attr']['placeholder'] = $form->getConfig()->getEmptyData();
			// 		break;
			// }
		}
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
