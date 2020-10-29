<?php

namespace App\Form;

use App\Entity\Automation;
use App\Service\AutomationService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class LauncherExportType extends AbstractType
{
	
	private $automationService;
	
	public function __construct(AutomationService $automationService)
	{
		$this->automationService = $automationService;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	
    	if ($parsedCode = $builder->getData()->getParsedCode()) {
    		
    		$scheme = $this->automationService->getExportScheme();
    		
    		if (array_key_exists('option', $scheme) && array_key_exists('option', $parsedCode)) {
    			
    			foreach ($parsedCode['option'] as $key => $value) {
    					
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
    	
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}

?>