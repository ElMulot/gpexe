<?php
namespace App\Form;

use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Entity\Document;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Entity\Serie;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Constraints\NotBlank;

class DocumentType extends AbstractType
{

	private $builder;
	
	private $codificationRepository;

	private $metadataRepository;

	public function __construct(CodificationRepository $codificationRepository, MetadataRepository $metadataRepository) {
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$this->builder = $builder;
		$documents = is_array($builder->getData())?$builder->getData():[$builder->getData()];
		$serie = $options['serie'];
		$project = $serie->getProject();
		
		foreach ($this->codificationRepository->getCodifications($project) as $codification) {
			switch ($codification->getType()) {
				case Codification::LIST:
					$options = [
						'required'	=> $codification->getIsMandatory(),
						'class' 	=> CodificationItem::class,
						'choices' 	=> $codification->getCodificationItems(),
						'choice_label' => function($codification) {
							return $codification->getValue() . ' - ' . $codification->getName();
						},
						'label' => $codification->getName(),
					];
					$this->buildField($codification->getName(), $codification->getFullId(), $codification->getFullCodename(), Codification::LIST, $documents, $options);
					break;
				case Codification::REGEX:
					$options = [
						'required'	=> $codification->getIsMandatory(),
						'constraints' 	=> [new Regex(['pattern' => '/' . $codification->getValue() . '/'])],
					];
					$this->buildField($codification->getName(), $codification->getFullId(), $codification->getFullCodename(), Codification::REGEX, $documents, $options);
					break;
			}
		}
		
		if (count($documents) == 1) {
			$this->builder->add('name', TextType::class, [
				'data' => reset($documents)->getName(),
			]);
		}
		
		foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
			switch ($metadata->getType()) {
				case Metadata::LIST:
					$options = [
						'required'	=> $metadata->getIsMandatory(),
						'class' 	=> MetadataItem::class,
						'choices' 	=> $metadata->getMetadataItems(),
					];
					$this->buildField($metadata->getName(), $metadata->getFullId(), $metadata->getFullCodename(), $metadata->getType(), $documents, $options);
					break;
				default:
					$options = [
						'required'	=> $metadata->getIsMandatory(),
					];
					$this->buildField($metadata->getName(), $metadata->getFullId(), $metadata->getFullCodename(), $metadata->getType(), $documents, $options);
					break;
			}
		}
		
	}
	
	
	private function checkMultiple(array $documents, string $codename): bool
	{
		
		if ($documents) {
			foreach ($documents as $document) {
				if (isset($value)) {
					if ($value != $document->getPropertyValueToString($codename)) {
						return true;
					}
				} else {
					$value = $document->getPropertyValueToString($codename);
				}
			}
		}
		
		return false;
	}
	
	private function buildField(string $label, string $id, string $codename, int $type, $documents=[], $options=[])
	{
		$field = null;
		$multiple = false;
		
		if (count($documents) > 1) {
			$multiple = $this->checkMultiple($documents, $codename);
		}
		
		$document = reset($documents) ?? null;
		
		switch ($type) {
			
			case Metadata::BOOLEAN:
				
				$data = false;
				if ($document && $multiple === false) {
					if ($document->getPropertyValue($codename)) {
						$data = true;
					}
				}
				
				$this->builder->add($id, ChoiceType::class, $options + [
					'label' => $label,
					'choices' => [
						'Yes' => true,
						'No' => false,
					],
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple
					],
				]);
				break;
			
			case Codification::REGEX:
				
				$data = null;
				if ($document && $multiple === false) {
					$data = $document->getPropertyValue($codename);
				}
				
				$this->builder->add($id, TextType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				break;
				
			case Metadata::TEXT:
				
				$data = null;
				if ($document && $multiple === false) {
					$data = $document->getPropertyValue($codename);
				}
				
				$this->builder->add($id, TextareaType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				break;
				
			case Metadata::DATE:
				
				$data = null;
				
				if ($document && $multiple === false) {
					if ($data = $document->getPropertyValue($codename)) {
						if ($data instanceof MetadataValue) $data = new \DateTime($data->getValue());
					}
					
					if ($data === null && ($options['required'] ?? true)) {
						$data = new \DateTime('now');
					}
				}
				
				$this->builder->add($id, DateType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'widget' => 'single_text',
					'format' => 'dd-MM-yyyy',
					'html5' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
				]);
				
				break;
				
			case Metadata::LINK:
				
				$data = null;
				if ($document && $multiple === false) {
					$data = $document->getPropertyValue($codename);
				}
				
				$this->builder->add($id, TextType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
					],
					'constraints' 	=> [new Url(
						[
							'relativeProtocol' => true,
						]
					)],
				]);
				break;
			
			case Codification::LIST:
			case Metadata::LIST:
				$data = null;
				if ($document && $multiple === false) {
					$data = $document->getPropertyValue($codename);
				}
				
				$this->builder->add($id, EntityType::class, $options + [
					'label' => $label,
					'mapped' => false,
					'data' => $data,
					'attr' => [
						'data-multiple' => $multiple,
						'data-required' => $options['required'] ?? true,
					],
				]);
				break;
				
			default:
				return;
		}
		
		$this->builder->add($id.'_multiple', HiddenType::class, [
			'required' => false,
			'mapped' => false,
			'data' => $multiple,
		]);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'serie' => null,
		]);
		
		$resolver->setAllowedTypes('serie', Serie::class);
	}
}
