<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Review;
use App\Entity\Visa;
use App\Repository\VisaRepository;

class ReviewType extends AbstractType
{
	
	private $visaRepository;
	
	public function __construct(VisaRepository $visaRepository)
	{
		$this->visaRepository = $visaRepository;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('visa', EntityType::class, [
        	'class' => Visa::class,
        	'choices' => $this->visaRepository->getVisasByCompany($options['project'], $options['company']),
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Review::class,
        	'project' => null,
        	'company' => null,
        ]);
    }
}

?>
