<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Review;
use App\Entity\Visa;
use App\Repository\VisaRepository;

class ReviewType extends AbstractType
{
	
	public function __construct(private readonly VisaRepository $visaRepository)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder->add('visa', EntityType::class, [
			'class' => Visa::class,
			'choices' => $this->visaRepository->getVisasByCompany($options['project'], $options['company']),
			'small' => true,
		]);

		// $builder->setDataMapper($this);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Review::class,
			'project' => null,
			'company' => null,
		]);
	}

	// public function mapDataToForms($viewData, \Traversable $forms): void
    // {
		
	// 	if ($viewData === null) {
	// 		return;
	// 	}

	// 	/** @var FormInterface[] $forms */
    //     $forms = array(...$forms);
		
	// 	if (is_array($viewData) === true) {
	// 		$forms['visa']->setData(array_map(fn(Review $review) => $review->getVisa(), $viewData));
	// 	} else {
			
	// 		if ($viewData instanceof Review === false) {
	// 			throw new UnexpectedTypeException($viewData, Review::class);
	// 		}

	// 		$forms['visa']->setData($viewData->getVisa());
			
	// 	}
	// }

	// public function mapFormsToData(\Traversable $forms, &$viewData): void
    // {
	// 	/** @var Review[] $viewData */
	// 	/** @var FormInterface[] $forms */
	// 	$forms = array(...$forms);
		
	// 	if (is_array($forms['visa']->getData()) === false) {
	// 		foreach ($viewData as $review) {
	// 			$review->setVisa($forms['visa']->getData());
	// 		}
	// 	}
	// }
}

?>
