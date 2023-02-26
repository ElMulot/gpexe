<?php

namespace App\Form\Extension;

use App\Form\Type\DateVariousType;
use App\Service\DateService;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

/**
 * Configure Date form field.
 */

class DateTypeExtension extends AbstractTypeExtension
{
    public function __construct(private readonly DateService $dateService,
								#[Autowire('%app.config.icu_date_pattern%')]
								private readonly string $ICUDatePattern)
	{
		
	}
	
	public static function getExtendedTypes(): iterable
    {
        return [DateType::class, DateVariousType::class];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
		$resolver->setDefaults([
			'widget'			=> 'single_text',
			'html5'				=> false,
			'today_button'		=> true,
			'disable_weekend'	=> true,
			'required'			=> false,
			'input_format'		=> DateService::PHP_DEFAULT_DATE_FORMAT,
			'format'			=> $this->ICUDatePattern,
		]);
	}

	public function buildView(FormView $view, FormInterface $form, array $options): void
    {
		$view->vars['attr']['data-controller'] = 'flatpickr';
		$view->vars['attr']['data-flatpickr-today-button-value'] = $options['today_button'];
		$view->vars['attr']['data-flatpickr-disable-weekend-value'] = $options['disable_weekend'];
		$view->vars['attr']['data-flatpickr-mandatory-value'] = $options['required'];
		$view->vars['attr']['data-flatpickr-date-format-value'] = $this->dateService->getFlatpickrDateFormat();
    }
}