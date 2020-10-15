<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Version;

class QuickVersionType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$builder
    		->add('name', TextType::class, [
    			'row_attr' => ['class' => 'row'],
    			'label_attr' => ['class' => 'col-form-label col-5 py-2'],
    			'attr' => ['class' => 'col-7 my-0 py-0'],
    		])
    		->add('scheduledDate', DateType::class, [
    			'widget' => 'single_text',
    			'format' => 'dd-MM-yyyy',
    			'html5' => false,
    			'row_attr' => ['class' => 'row'],
    			'label_attr' => ['class' => 'col-form-label col-5 py-2'],
    			'attr' => ['class' => 'col-7'],
			])
    	;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Version::class,
        ]);
    }
}

?>
