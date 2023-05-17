<?php

namespace App\EventListener;

use App\Entity\Project;
use Doctrine\ORM\Events;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;

#[AsEntityListener(entity:Project::class, event: Events::preUpdate, lazy:true)]
#[AsEntityListener(entity:Project::class, event: Events::postRemove, lazy:true)]
class ProjectListener
{
	public function __construct(private readonly string $publicDir,
								#[Autowire('%app.uploads_directory%')]
								private readonly string $uploadsDirectory,
								private readonly FileSystem $fileSystem)
	{
	}

	public function preUpdate(Project $project, PreUpdateEventArgs $event)
	{
		if ($event->getOldValue('image') !== '' && $event->getOldValue('image') !== $event->getNewValue('image')) {
			$this->deleteImage($event->getOldValue('image'));
		}
	}

	public function postRemove(Project $project)
	{
		if ($project->getImage() !== '') {
			$this->deleteImage($project->getImage());
		}
	}

	private function deleteImage(string $imageName)
	{
		$this->fileSystem->remove($this->publicDir . $this->uploadsDirectory . $imageName);
	}
}
?>