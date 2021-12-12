<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Project;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class ProjectType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('image', FileType::class, [
				'label' => 'Project Image',
				'mapped' => false,
				'required' => false,
				'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/bmp',
							'image/gif',
                            'image/jpeg',
							'image/png',
							'image/tiff'
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image',
                    ])
				]
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
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Project::class,
		]);
	}
}
