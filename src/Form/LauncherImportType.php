<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\File;
use App\Service\AutomationService;

class LauncherImportType extends AbstractType
{
	
	private $automationService;
	
	public function __construct(AutomationService $automationService)
	{
		$this->automationService = $automationService;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder->add('file', FileType::class, [
			'mapped' => false,
			'constraints' => [
				new File([
					'maxSize' => '20M',
					'mimeTypes' => [
						'application/vnd.ms-excel',
						'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
						'text/html',
					],
					'mimeTypesMessage' => 'Le fichier sélectionné n\'est pas un fichier excel valide',
				])
			],
		]);
	
		if ($parsedCode = $builder->getData()->getParsedCode()) {
			
			$scheme = $this->automationService->getImportScheme();
			
			if (array_key_exists('option', $scheme) && array_key_exists('option', $parsedCode)) {
				
				foreach ($parsedCode['option'] as $key => $value) {
					
					switch ($scheme['option'][$key]['type'] ?? null) {
						case 'checkbox':
							$builder->add($key, CheckboxType::class, [
								'mapped' => false,
								'required' => false,
								'data' => ($value == 'true'),
							]);
							break;
						case 'list':
							$builder->add($key, ChoiceType::class, [
								'mapped' => false,
								'choices' => explode('|', $scheme['option'][$key]['regex'] ?? ''),
								'choice_label' => function ($choice, $key, $value) {
									return $value;
								},
								'data' => $value,
							]);
							break;
						case 'text':
							$builder->add($key, TextType::class, [
								'mapped' => false,
								'data' => $value,
							]);
							break;
					}
				}
			}
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => null,
		]);
	}
}

?>