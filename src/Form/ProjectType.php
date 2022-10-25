<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Project;
use App\Form\DataTransformer\ImageTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Form\Type\DropzoneType;
use App\Form\Type\VariousEntityType;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ProjectType extends AbstractType
{
	public function __construct(private readonly ImageTransformer $transformer, private readonly UrlGeneratorInterface $router)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('image', DropzoneType::class, [
				'label' => 'Project Image',
				'required' => false,
			])
			->add('splitter', TextType::class, [
				'help' => 'Character used as separation between each item of the document codification.'
			])
			->add('newVersionTime', IntegerType::class, [
				'help' => 'Number of working days allowed to produce a new revision of a document.'
			])
			->add('prodWarningLimit', IntegerType::class, [
				'help' => 'Number of working days delay before showing the line in orange in the dashboard and in the documents list for documents to be produced.'
			])
			->add('prodDangerLimit', IntegerType::class, [
				'help' => 'Number of working days delay before showing the line in red in the dashboard and in the documents list for documents to be produced.'
			])
			->add('checkWarningLimit', IntegerType::class, [
				'help' => 'Number of working days delay before showing the line in orange in the dashboard and in the documents list for documents to be checked.'
			])
			->add('checkDangerLimit', IntegerType::class, [
				'help' => 'Number of working days delay before showing the line in red in the dashboard and in the documents list for documents to be checked.'
			])
			->add('users', EntityType::class, [
				'class' => User::class,
				'choice_label' => 'name',
				'multiple' => true,
				'expanded' => false,
				'required' => false,
			])
		;
		$builder->get('image')->addModelTransformer($this->transformer);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Project::class,
		]);
	}
}
