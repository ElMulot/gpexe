<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class LauncherImportType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', FileType::class, [
        	'mapped' => false,
        	'constraints' => [
				new File([
        			'mimeTypes' => [
        				'application/vnd.ms-excel',
        				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        			],
        			'mimeTypesMessage' => 'Please upload a valid Excel workbook',
        		])
        	],
        ]);
        
        if ($parsedCode = $builder->getData()->getParsedCode()) {
        	
        	if (array_key_exists('option', $parsedCode)) {
        		
        		foreach ($parsedCode['option'] as $key => $value) {
        			switch ($value) {
        				case 'true':
        					$builder->add($key, CheckboxType::class, [
	        					'mapped' => false,
	        					'data' => true,
	        					'disabled' => true,
        					]);
        					break;
        				case 'false':
        					$builder->add($key, CheckboxType::class, [
	        					'mapped' => false,
	        					'data' => false,
	        					'disabled' => true,
        					]);
        					break;
        				default:
        					$builder->add($key, CheckboxType::class, [
        						'mapped' => false,
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