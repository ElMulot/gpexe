<?php

namespace App\Form\Type;

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\Mime\MimeTypes;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DropzoneType extends AbstractType
{
	public function __construct(private $publicDirectory)
	{
	}
    
    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['mime_type'] = $options['mime_type'];
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'mime_type' => '',
            'multiple' => false,
            'attr' => [
                'placeholder' => 'Drop image here or click to browse',
            ],
            'invalid_message' => function (Options $options, $previousValue) {
                return ($options['legacy_error_messages'] ?? true)
                    ? $previousValue
                    : 'Please select a valid file.';
            },
        ]);

        $resolver->setAllowedTypes('mime_type', 'string');
        $resolver->setAllowedTypes('multiple', 'bool');   
    }

    public function getParent(): ?string
    {
        return FileType::class;
    }

    public function getBlockPrefix(): ?string
    {
        return 'dropzone';
    }
}
