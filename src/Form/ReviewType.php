<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Exception\UnexpectedTypeException;
use App\Entity\Review;
use App\Entity\Visa;
use App\Form\Type\VariousEntityType;
use App\Repository\VisaRepository;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormInterface;

class ReviewType extends AbstractType implements DataMapperInterface
{
	
	public function __construct(private readonly VisaRepository $visaRepository)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder->add('visa', VariousEntityType::class, [
			'class' => Visa::class,
			'choices' => $this->visaRepository->getVisasByCompany($options['project'], $options['company']),
			'required' => false,
			'small' => true,
		]);

		$builder->setDataMapper($this);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			// 'data_class' => Review::class,
			'project' => null,
			'company' => null,
		]);
	}

	public function mapDataToForms($viewData, \Traversable $forms): void
    {
		
		if ($viewData === null) {
			return;
		}

		/** @var FormInterface[] $forms */
        $forms = array(...$forms);
		
		if (is_array($viewData) === true) {
			$forms['visa']->setData(array_map(fn(Review $review) => $review->getVisa(), $viewData));
		} else {
			
			if ($viewData instanceof Review === false) {
				throw new UnexpectedTypeException($viewData, Review::class);
			}

			$forms['visa']->setData($viewData->getVisa());
			
		}
	}

	public function mapFormsToData(\Traversable $forms, &$viewData): void
    {
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		dump($forms['visa']->getData());

		if (is_array($forms['visa']->getData()) === false) {
			$viewData = $forms['visa']->getData();
		}
	}
}

?>
