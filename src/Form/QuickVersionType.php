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
    	$builder->add('name', TextType::class, [
			'label' => 'New version',
    		'label_attr' => ['class' => 'col-form-label col-5'],
    		'row_attr' => ['class' => 'row'],
    	]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Version::class,
        ]);
    }
}

?>
