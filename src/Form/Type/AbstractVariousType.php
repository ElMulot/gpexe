<?php

namespace App\Form\Type;

use App\Form\DataMapper\VariousMapper;
use Symfony\Component\Form\AbstractType;
use App\Form\DataTransformer\VariousTransformer;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


/**
 * Abstract type for various types.
 * @abstract
 */
abstract class AbstractVariousType extends AbstractType
{
	
	public function __construct(private readonly VariousFieldSubscriber $subscriber,
								private readonly VariousTransformer $modelTransformer,
								private readonly VariousMapper $dataMappper)
	{
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'compound' => true,
			'data' => [],
		]);

		$resolver->setAllowedTypes('data', 'array');
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		// dump('AbstractVariousType->buildForm');
		// $builder->resetModelTransformers();
		$builder->resetViewTransformers();

		$builder->add('input', $this->getParent(), ['compound' => false] + $options);
		
		//add a new field 'switch' if the datas are not all identical
		$builder->addEventSubscriber($this->subscriber);
		
		//map datas to the 'input' field
		$builder->setDataMapper($this->dataMappper);

		//ModelFormat => NormalizedFormat : array to single value conversion
		//NormalizedFormat => ModelFormat : return value is multiple is not enabled, otherwize null
		$builder->get('input')->addModelTransformer($this->modelTransformer);
	}

	public function getBlockPrefix(): ?string
	{
		return 'various';
	}
}
