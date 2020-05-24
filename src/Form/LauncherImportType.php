<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

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
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}

?>