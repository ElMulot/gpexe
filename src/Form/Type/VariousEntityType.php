<?php

namespace App\Form\Type;

use App\Entity\Visa;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\DataTransformer\VariousTransformer2;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormConfigInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\Mime\MimeTypes;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;


final class VariousEntityType extends AbstractType implements DataMapperInterface
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder->resetModelTransformers();
		$builder->resetViewTransformers();

		$builder->add('input', EntityType::class, $options);
		$builder->get('input')->addModelTransformer(new VariousTransformer());
		$builder->addEventSubscriber(new VariousFieldSubscriber());
		$builder->setDataMapper($this);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'compound' => true,
			'validation_groups' => false,
		]);
	}

	public function getBlockPrefix(): ?string
	{
		return 'various_entity';
	}
	
	public function getParent(): string
    {
        return EntityType::class;
    }
	
	public function mapDataToForms($viewData, \Traversable $forms): void
	{
		if ($viewData === null) {
			return;
		}

		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		$forms['input']->setData($viewData);
	}

	public function mapFormsToData(\Traversable $forms, &$viewData): void
	{		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		if ($forms['switch']->getData() === false) {
			$viewData = $forms['input']->getData();
		}

		dump($viewData);
	}
}
