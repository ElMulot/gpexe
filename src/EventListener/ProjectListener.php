<?php

namespace App\EventListener;

use App\Entity\Project;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Symfony\Component\Filesystem\Filesystem;

class ProjectListener
{
	public function __construct(private $publicDirectory, private $uploadsDirectory)
	{
	}

	public function preUpdate(Project $project, PreUpdateEventArgs $event)
	{
		foreach ($event->getEntityChangeSet() as $field => $values) {
			if ($field === 'image' && $values[0] !== '' && $values[0] !== $values[1]) {
				$this->deleteImage($values[0]);
			}
		}
	}

	public function postRemove(Project $project, LifecycleEventArgs $event)
	{
		if ($project->getImage() !== '') {
			$this->deleteImage($project->getImage());
		}
	}

	private function deleteImage(string $imageName)
	{
		$fileSystem = new Filesystem();
		$fileSystem->remove($this->publicDirectory . $this->uploadsDirectory . $imageName);
	}
}
?>