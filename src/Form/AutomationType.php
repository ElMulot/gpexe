<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Entity\Automation;
use App\Form\DataTransformer\AutomationTransformer;

class AutomationType extends AbstractType
{
    
	private $transformer;
	
	public function __construct(AutomationTransformer $transformer)
	{
		$this->transformer = $transformer;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$builder
	    	->add('name', TextType::class, [
	    		'attr' => [
	    			'class' => 'col-5 mt-2',
	    		],
	    	])
	    	->add('enabled', CheckboxType::class, [
	    		'required' => false,
	    		'label_attr' => [
	    			'class' => 'col-form-label col-2',
	    		],
	    		'attr' => [
	    			'class' => 'col-1 mt-2',
	    		],
	    	])
	    	->add('code', TextareaType::class, [
	    		'required' => false,
	    		'attr' => [
	    			'class' => 'mt-4',
	    			'rows' => '',
	    			'cols' => '',
	    			'data-toggle' => 'code_mirror',
	    		],
	    	])
    	;
		
	    $builder->get('code')->addViewTransformer($this->transformer);
	}

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Automation::class,
        ]);
    }
}
