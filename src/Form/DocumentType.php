<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Regex;
use App\Entity\Document;
use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;

class DocumentType extends AbstractType
{

	private $codificationRepository;

	public function __construct(CodificationRepository $codificationRepository, MetadataRepository $metadataRepository)
	{
		$this->codificationRepository = $codificationRepository;
		
		$this->metadataRepository = $metadataRepository;
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$document = $builder->getData();
		$codifications = $this->codificationRepository->getCodifications($options['project']);
		
		foreach ($codifications as $codification) {
			
			switch ($codification->getType()) {
				
				case Codification::FIXED:
					$builder->add($codification->getCodeName(), TextType::class, [
						'data' => $codification->getValue(),
						'disabled' => true,
						'label' => $codification->getName(),
						'mapped' => false,
					]);
					break;
				
				case Codification::LIST:
					
					if ($document) {
						$data = $document->getCodificationItemByCodification($codification);
					}
					
					$builder->add($codification->getCodeName(), EntityType::class, [
						'class' => CodificationItem::class,
						'choices' => $codification->getCodificationItems(),
						'choice_label' => function($codification) {
							return $codification->getValue() . ' - ' . $codification->getName();
						},
						'label' => $codification->getName(),
						'mapped' => false,
						'required' => $codification->getIsMandatory(),
						'data' => $data,
					]);
					break;
				
				case Codification::REGEX:
					
					if ($document) {
						$data = $document->getCodificationValueByCodification($codification);
					}
					
					$builder->add($codification->getCodeName(), TextType::class, [
					'label' => $codification->getName(),
					'mapped' => false,
					'required' => $codification->getIsMandatory(),
					'constraints' => [new Regex(['pattern' => '/' . $codification->getValue() . '/'])],
					'data' => $data,
					]);
					break;
			}
		}
		
		$builder->add('name');
		
		$project = $builder->getData()->getSerie()->getProject();
		foreach ($this->metadataRepository->getMetadatasForDocument($project) as $metadata) {
			
			$data = $builder->getData()->getMetadataValue($metadata);
			
			switch ($metadata->getType()) {
				
				case Metadata::BOOLEAN:
					
					$builder->add($metadata->getCodeName(), ChoiceType::class, [
					'label' => $metadata->getName(),
					'choices' => [
					'Yes' => true,
					'No' => false,
					],
					'mapped' => false,
					'data' => $data,
					]);
					break;
					
				case Metadata::DATE:
					
					if ($data instanceof MetadataValue) {
						$data = new \DateTime($data->getValue());
					} elseif ($metadata->getIsMandatory()) {
						$data = new \DateTime('now');
					}
					
					$builder->add($metadata->getCodeName(), DateType::class, [
						'label' => $metadata->getName(),
						'mapped' => false,
						'widget' => 'single_text',
						'format' => 'dd-MM-yyyy',
						'html5' => false,
						'data' => $data,
						'required' => $metadata->getIsMandatory(),
					]);
					
					break;
					
				case Metadata::TEXT:
					
					$builder->add($metadata->getCodeName(), TextareaType::class, [
					'label' => $metadata->getName(),
					'mapped' => false,
					'data' => $data,
					'required' => $metadata->getIsMandatory(),
					]);
					break;
					
				case Metadata::LINK:
					
					$builder->add($metadata->getCodeName(), TextType::class, [
					'label' => $metadata->getName(),
					'mapped' => false,
					'data' => $data,
					'required' => $metadata->getIsMandatory(),
					]);
					break;
					
				case Metadata::LIST:
					
					$builder->add($metadata->getCodeName(), EntityType::class, [
					'class' => MetadataItem::class,
					'choices' => $metadata->getMetadataItems(),
					'label' => $metadata->getName(),
					'mapped' => false,
					'data' => $data,
					'required' => $metadata->getIsMandatory(),
					]);
					break;
					
			}
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Document::class,
			'project' => null,
		]);
	}
}
