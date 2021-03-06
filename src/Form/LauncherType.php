<?php

namespace App\Form;

use App\Entity\Program;
use App\Service\ParseService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class LauncherType extends AbstractType
{
	
	private $parseService;
	
	public function __construct(ParseService $parseService)
	{
		$this->parseService = $parseService;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		$program = $builder->getData();
		if ($program->isValid() === false) {
			return;
		}
		
		switch ($program->getType()) {
			case Program::EXPORT:
				$scheme = $this->parseService->getExportScheme();
				break;
				
			case Program::IMPORT:
				$scheme = $this->parseService->getImportScheme();
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
				break;
			
			case Program::TASK:
				$scheme = $this->parseService->getTaskScheme();
				break;
				
			default:
				return;
		}
		
		if (array_key_exists('option', $scheme)) {
			
			foreach ($program->getParsedCode('option') as $key => $value) {
					
				switch ($scheme['option'][$key]['type'] ?? null) {
					case 'checkbox':
						$builder->add($key, CheckboxType::class, [
							'mapped' => false,
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

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => null,
		]);
	}
}

?>