<?php

namespace App\Form\Extension;

use App\Form\Type\AbstractVariousType;
use App\Form\Type\VariousTextType;
use App\Form\Type\VariousEntityType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


/**
 * Configure Date form field.
 */

class DateTypeExtension extends AbstractTypeExtension
{
    public function __construct(#[Autowire('%app.config.date_format%')]
								private readonly string $dateFormat)
	{
		
	}
	
	public static function getExtendedTypes(): iterable
    {
        return [DateType::class];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
		$resolver->setDefaults([
			'widget' => 'single_text',
			'html5' => false,
			'today_button' => true,
			'disable_weekend' => true,
			'required' => false,
		]);
	}

	public function buildView(FormView $view, FormInterface $form, array $options): void
    {
		$view->vars['attr']['data-controller'] = 'flatpickr';
		$view->vars['attr']['data-flatpickr-today-button-value'] = $options['today_button'];
		$view->vars['attr']['data-flatpickr-disable-weekend-value'] = $options['disable_weekend'];
		$view->vars['attr']['data-flatpickr-mandatory-value'] = $options['required'];
		$view->vars['attr']['data-flatpickr-date-format-value'] = $this->dateFormat;
    }
}