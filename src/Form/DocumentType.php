<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Regex;
use App\Entity\Document;
use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Repository\CodificationRepository;

class DocumentType extends AbstractType
{

	private $codificationRepository;

	public function __construct(CodificationRepository $codificationRepository)
	{
		$this->codificationRepository = $codificationRepository;
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$document = $builder->getData();
		$codifications = $this->codificationRepository->getCodifications($options['project']);
		
		foreach ($codifications as $codification) {
			
			switch ($codification->getType()) {
				
				case Codification::FIXED:
					$builder->add('c_'.$codification->getId(), TextType::class, [
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
					
					$builder->add('c_'.$codification->getId(), EntityType::class, [
						'class' => CodificationItem::class,
						'choices' => $codification->getCodificationItems(),
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
					
					$builder->add('c_'.$codification->getId(), TextType::class, [
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
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Document::class,
			'project' => null,
		]);
	}
}
