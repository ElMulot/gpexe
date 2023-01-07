<?php
namespace App\Form;

use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Entity\Document;
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Project;
use App\Entity\Serie;
use App\Exception\InternalErrorException;
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
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Constraints\NotBlank;

class DocumentType extends AbstractType
{

	private string $mode;

	public final const NEW	= 'new';
	public final const EDIT	= 'edit';

	public function __construct(private readonly PropertyService $propertyService,
								private readonly CodificationRepository $codificationRepository,
								private readonly MetadataRepository $metadataRepository,
								private readonly SerieRepository $serieRepository)
	{
		
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		/** @var Document[] $documents */
		$documents = $builder->getData();

		/** @var Project $project */
		$project = $options['project'];
		$codifications = $this->codificationRepository->getCodifications($project);
		$metadatas = $this->metadataRepository->getMetadatasForDocument($project);
		$series = $this->serieRepository->getSeriesByVersionIds($options['ids']);

		//define if new or edit
		if (count($documents) === 0) {
			throw new InternalErrorException();
		}
		$document = reset($documents);
		$this->mode = ($document->getId() === null)?self::NEW:self::EDIT;

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
				'data' => $document->getName(),
			]);
		}

		foreach ($codifications as $codification) {

			$defaultOptions = [
				'label'			=> $codification->getName(),
				'required'		=> true,
				// 'constraints'	=> ($codification->isMandatory() === true)?[new NotBlank()]:[],
				'empty_data'	=> $codification->getValue(),
			];

			switch ($codification->getType()) {

				case CodificationTypeEnum::TEXT:
					$builder->add($codification->getCodename(), TextVariousType::class, $defaultOptions + [
						'data'			=> ($this->mode === self::NEW)?$codification->getValue():null,
					]);
					break;

				case CodificationTypeEnum::REGEX:
					$builder->add($codification->getCodename(), TextVariousType::class, $defaultOptions + [
						'constraints'	=> [new Regex(['pattern' => '/' . $codification->getValue() . '/'])],
						'data'			=> ($this->mode === self::NEW)?$codification->getValue():null,
					]);
					break;

				case CodificationTypeEnum::LIST:
					$defaultValue = $codification->getCodificationItems()->filter(fn(CodificationItem $ci) => $ci->getValue() === $codification->getValue())->toArray();
					$builder->add($codification->getCodename(), EntityVariousType::class, $defaultOptions + [
						'class'			=> CodificationItem::class,
						'choices' 		=> $codification->getCodificationItems(),
						'choice_label'	=> fn(CodificationItem $codificationItem) => $codificationItem->getValue() . ' - ' . $codificationItem->getName(),
						'data'			=> ($this->mode === self::NEW && empty($defaultValue) === false)?$defaultValue:null,
					]);
					break;
			}
		}
		
		
		foreach ($metadatas as $metadata) {
			$defaultOptions = [
				'label'			=> $metadata->getName(),
				'required'		=> $metadata->isMandatory(),
				'constraints'	=> ($metadata->isMandatory() === true)?[new NotBlank()]:[],
				'empty_data'	=> $metadata->getDefault(),
			];

			switch ($metadata->getType()) {
				
				case MetadataTypeEnum::BOOL:
					$builder->add($metadata->getCodeName(), BooleanVariousType::class, $defaultOptions + [
						'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
					]);
					break;
					
				case MetadataTypeEnum::DATE:
					$builder->add($metadata->getCodeName(), DateVariousType::class, $defaultOptions + [
						'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
					]);
					break;
					
				case MetadataTypeEnum::TEXT:
					$builder->add($metadata->getCodeName(), TextareaVariousType::class, $defaultOptions + [
						'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
					]);
					break;
				
				case MetadataTypeEnum::REGEX:
					$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
						'constraints'	=> [new Regex('/' . $metadata->getPattern() . '/')],
						'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
					]);
					break;
				case MetadataTypeEnum::LINK:
					$builder->add($metadata->getCodeName(), TextVariousType::class, $defaultOptions + [
						'constraints'	=> [new Url()],
						'data'			=> ($this->mode === self::NEW)?$metadata->getDefault():null,
					]);
					break;
					
				case MetadataTypeEnum::LIST:
					$defaultValue = $metadata->getMetadataItems()->filter(fn(MetadataItem $mi) => $mi->getValue() === $metadata->getDefault())->toArray();
					$builder->add($metadata->getCodeName(), EntityVariousType::class, $defaultOptions + [
						'class'			=> MetadataItem::class,
						'choices'		=> $metadata->getMetadataItems(),
						'data'			=> ($this->mode === self::NEW && empty($defaultValue) === false)?$defaultValue:null,
					]);
					break;
			}
		}
	}

    public function finishView(FormView $view, FormInterface $form, array $options)
    {
		
		foreach ($view->children as $name => $child) {
			if ($form->has($name) === true) {				
				if ($form->get($name)->getConfig()->getType()->getInnerType() instanceof TextVariousType === true) {
					$child->children['input']->vars['attr']['placeholder'] = $form->get($name)->getConfig()->getEmptyData();
				} elseif ($form->get($name)->getConfig()->getType()->getInnerType() instanceof EntityVariousType === true) {
					// if ($form->get($name)->getData() === null) {
					// 	foreach ($form->get($name)->getConfig()->getOption('choices') as $value) {
					// 		if ($value->getValue() === $form->get($name)->getConfig()->getEmptyData()) {
					// 			$form->get($name)->setData([$value]);
					// 			break;
					// 		}
					// 	}
					// }
				}

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
