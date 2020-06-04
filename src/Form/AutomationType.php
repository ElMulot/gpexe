<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Automation;
use App\Form\DataTransformer\AutomationTransformer;

class AutomationType extends AbstractType implements DataMapperInterface
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
	    			'class' => 'col-sm-5',
	    		],
	    	])
	    	->add('enabled', CheckboxType::class, [
	    		'label_attr' => [
	    			'class' => 'col-sm-2',
	    		],
	    		'attr' => [
	    			'class' => 'col-sm-1 mt-2',
	    		],
	    	])
	    	->add('code', TextareaType::class, [
	    		'attr' => [
	    			'class' => 'mt-4',
	    			'rows' => '',
	    			'cols' => '',
	    			'data-toggle' => 'code_mirror',
	    		],
	    	])
    	;
		
	    $builder->setDataMapper($this);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Automation::class,
        ]);
    }
    
    private function getStructureImport(): array
    {
    	return [
    		'type' => 'import',
    		'first_line' => '\d+',
    		'exclude' => ['(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*'],
    		'get_serie' => [
    			'if' => '(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*',
    		],
    		'get_document' => [
    			'if' => '(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*',
    			'else' => 'create|skip',
    		],
    		'get_version' => [
    			'if' => '(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*',
    			'else' => 'create|skip',
    		],
    		'write' => [
    			'condition' => '(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*',
    			'to' => '\w+\.\w+',
    			'value' => '\S+',
    		],
    	];
    }
    
    private function getStructureExport(): array
    {
    	return [
    		'type' => 'export',
    		'first_line' => '\d+',
    		'exclude' => ['(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*'],
    		'write' => [
    			'condition' => '(\w+\.\w+)\s*(==|!=)\s*(\w+\.\w+|".+"|\d+)\s*(AND|OR)*\s*',
    			'to' => '\w+',
    			'value' => '\S+',
    		],
    	];
    }
    
    private function validateStructure($structure, $parsedCode):? array
    {
    	foreach ($structure as $key => $value) {
    		
    		if ($key === 0) {
    			
    			array_walk($parsedCode, function(&$item, $key, $value) {
    				if (is_array($item)) {
    					$item = '';
    				} elseif (preg_match('/' . $value . '/', $item) == false) {
    					$item = '';
    				}
    			}, $value);
    				
    		} elseif (is_array($parsedCode) == false) {
    			$parsedCode = [$key => ''];
    		} elseif (array_key_exists($key, $parsedCode)) {
    			if (is_array($value)) {
    				$parsedCode[$key] = $this->validateStructure($value, $parsedCode[$key]);
    			} elseif (preg_match('/' . $value . '/', $parsedCode[$key]) == false) {
    				$parsedCode[$key] = '';
    			}
    		} else {
    			$parsedCode[$key] = '';
    		}
    	}
    	
    	foreach ($parsedCode as $key => $value) {
    		if (array_key_exists($key, $structure) == false && $key !== 0) {
    			unset($parsedCode[$key]);
    		}
    	}
    	
    	return $parsedCode;
    }
    
    private function validate($value): string
    {
    	$parsedCode = Yaml::parse($value ?? '') ?? [];
    	
    	if (($parsedCode['type'] ?? '') == 'import') {
    		$structure = $this->getStructureImport();
    	} elseif (($parsedCode['type'] ?? '') == 'export') {
    		$structure = $this->getStructureExport();
    	} else {
    		dump('aie');
    		return '';
    	}
    	
    	dump($parsedCode);
    	$parsedCode = $this->validateStructure($structure, $parsedCode);
    	dump($parsedCode);
    	return Yaml::dump($parsedCode);
    }
    
    public function mapDataToForms($viewData, $forms)
    {
    	if (null === $viewData) {
    		return;
    	}
    	
    	$forms = iterator_to_array($forms);
    	
    	$forms['name']->setData($viewData->getName());
    	$forms['enabled']->setData($viewData->getEnabled());
    	$forms['code']->setData($this->validate($viewData->getCode()));
    	dump($forms);
    }
    
    public function mapFormsToData($forms, &$viewData)
    {
    	$forms = iterator_to_array($forms);
    	
    	$viewData->setName($forms['name']->getData());
    	$viewData->setEnabled($forms['enabled']->getData());
    	
    	$viewData->setCode($this->validate($forms['code']->getData()));
    	
    	dump($viewData);
    }
    
}
