<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Company;
use App\Entity\User;
use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\Visa;
use App\Repository\CompanyRepository;
use App\Repository\UserRepository;
use App\Repository\CodificationRepository;
use App\Repository\MetadataRepository;
use App\Repository\StatusRepository;

class SelectType extends AbstractType
{	
	private $translator;
	
	private $companyRepository;
	
	private $userRepository;
	
	private $codificationRepository;
	
	private $metadataRepository;
	
	private $statusRepository;
	
	public function __construct(TranslatorInterface $translator, CompanyRepository $companyRepository, UserRepository $userRepository, CodificationRepository $codificationRepository, MetadataRepository $metadataRepository, StatusRepository $statusRepository)
	{
		$this->translator = $translator;
		$this->companyRepository = $companyRepository;
		$this->userRepository = $userRepository;
		$this->codificationRepository = $codificationRepository;
		$this->metadataRepository = $metadataRepository;
		$this->statusRepository = $statusRepository;
	}
	
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	foreach ($options['controls'] as $control) {
    		
    		if (is_array($control['choices']) && is_scalar(current($control['choices']))) {
    			
    			$builder->add($control['full_id'], ChoiceType::class, [
    				'choices' => $control['choices'],
    				'mapped' => false,
    				'required' => false,
    				'multiple' => $control['multiple'],
    				'attr' => [
    					'id' => $control['full_id'],
    					'data-title' => $control['title'],
    				],
    			]);
    			
    		} elseif (is_object($control['choices'])) {
    			
    			$builder->add($control['full_id'], EntityType::class, [
    				'class' => get_class($control['choices']->first()),
    				'choices' => $control['choices'],
    				'mapped' => false,
    				'required' => false,
    				'multiple' => $control['multiple'],
    				'choice_label' => $control['choice_label'],
    				'attr' => [
    					'id' => $control['full_id'],
    					'data-title' => $control['title'],
    				],
    			]);
    			
    		} else {
    			
    			$builder->add($control['full_id'], EntityType::class, [
    				'class' => get_class(current($control['choices'])),
    				'choices' => $control['choices'],
    				'mapped' => false,
    				'required' => false,
    				'multiple' => $control['multiple'],
    				'choice_label' => $control['choice_label'],
    				'attr' => [
    					'id' => $control['full_id'],
    					'data-title' => $control['title'],
    				],
    			]);
    			
    		}
    	}
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
        	'csrf_protection' => false,
        ]);
        $resolver->setRequired(['controls']);
    }
}

?>