<?php

namespace App\Form\Type;

use App\Form\DataMapper\VariousMapper;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use Symfony\Component\OptionsResolver\OptionsResolver;


/**
 * Abstract type for various types.
 * @abstract
 */
abstract class AbstractVariousType extends AbstractType
{
	
	public function __construct(private readonly VariousFieldSubscriber $subscriber,
								private readonly VariousMapper $dataMappper)
	{
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setAllowedTypes('data', ['null', 'array']);
	}

	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		// dump('AbstractVariousType->buildForm');
		$builder->resetViewTransformers();
		$builder->setCompound(true);

		//remove constraints on input field as there's no need to validate each value twice
		unset($options['constraints']);
		unset($options['data']);

		$builder->add('input', $this->getParent(), $options);
		
		//copy the transformers on the input field and remove transformer on the parent form
		$builder->get('input')->resetModelTransformers();
		foreach ($builder->getModelTransformers() as $transformer) {
			$builder->get('input')->addModelTransformer($transformer);
		}
		$builder->resetModelTransformers();

		$builder->get('input')->resetViewTransformers();
		foreach ($builder->getViewTransformers() as $transformer) {
			$builder->get('input')->addViewTransformer($transformer);
		}
		$builder->resetViewTransformers();
		
		//add a new field 'switch' if the datas are not all identical
		$builder->addEventSubscriber($this->subscriber);
		
		//map datas to the 'input' field
		$builder->setDataMapper($this->dataMappper);
	}

	public function getBlockPrefix(): ?string
	{
		return 'various';
	}
}
