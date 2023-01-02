<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploaderService
{
    public function __construct(private readonly SluggerInterface $slugger,
                                private readonly string $publicDirectory,
                                #[Autowire('%app.uploads_directory%/')]
                                private readonly string $targetPath)
    {
    }

    public function upload(?UploadedFile $file): string
    {
        // $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // $safeFilename = $this->slugger->slug($originalFilename);
        if ($file === null) {
            return '';
        }
        
        $fileName = uniqid().'.'.$file->guessExtension();

        try {
            $file->move($this->publicDirectory . $this->targetPath, $fileName);
        } catch (FileException) {
            throw new \Exception('Erreur : impossible d\'écrire sur le serveur');
        }

        return $fileName;
    }
}