<?php

namespace App\DataFixtures;

use App\Entity\Status;
use App\Entity\View;
use App\Entity\Visa;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ViewFixtures extends Fixture implements DependentFixtureInterface
{
	public const PROJECT_0_ADMIN_USER_SHARED			= 'PROJECT_0_ADMIN_USER_SHARED';
	public const PROJECT_0_ADMIN_USER_SHARED_DEFAULT	= 'PROJECT_0_ADMIN_USER_SHARED_DEFAULT';
	public const PROJECT_0_ADMIN_USER_NOT_SHARED		= 'PROJECT_0_ADMIN_USER_NOT_SHARED';
	public const PROJECT_0_READ_ONLY_USER				= 'PROJECT_0_READ_ONLY_USER';
	public const PROJECT_0_READ_ONLY_USER_DEFAULT		= 'PROJECT_0_READ_ONLY_USER_DEFAULT';

	public const PROJECT_1_ADMIN_USER_SHARED			= 'PROJECT_1_ADMIN_USER_SHARED';
	public const PROJECT_1_ADMIN_USER_SHARED_DEFAULT	= 'PROJECT_1_ADMIN_USER_SHARED_DEFAULT';
	public const PROJECT_1_ADMIN_USER_NOT_SHARED		= 'PROJECT_1_ADMIN_USER_NOT_SHARED';
	public const PROJECT_1_READ_ONLY_USER				= 'PROJECT_1_READ_ONLY_USER';
	public const PROJECT_1_READ_ONLY_USER_DEFAULT		= 'PROJECT_1_READ_ONLY_USER_DEFAULT';

	public function load(ObjectManager $manager): void
	{

		for ($i=0; $i<2; $i++) {

			$value = [
				"display" => [
					"document_reference" => 12,
					"version_name" => 3,
					"document_name" => 27,
					"status_value" => 6,
					"version_checker" => 10,
					"version_date" => 10,
				],
				"filter" => [
					"version_last" => 1
				],
				"results_per_page" => 50,
				"sortDesc" => "version_date"
			];

			$metadataFixturesClass = new \ReflectionClass(MetadataFixtures::class);
			foreach ($metadataFixturesClass->getConstants() as $name => $constant) {
				if (str_starts_with($name, "PROJECT_{$i}") === true) {
					$value['display'] += [('metadata_' . $this->getReference(constant(MetadataFixtures::class . "::{$name}"))->getId()) => 6];
				}
			}
			

			$visaFixturesClass = new \ReflectionClass(VisaFixtures::class);
			foreach ($visaFixturesClass->getConstants() as $name => $constant) {
				if (str_starts_with($name, "PROJECT_{$i}") === true) {
					$value['display'] += [('visa_' . $this->getReference(constant(VisaFixtures::class . "::{$name}"))->getId()) => 5];
				}
			}

			$statusFixturesClass = new \ReflectionClass(StatusFixtures::class);
			foreach ($statusFixturesClass->getConstants() as $name => $constant) {
				if (str_starts_with($name, "PROJECT_{$i}") === true) {
					$value['filter']['status_value'][] = $this->getReference(constant(StatusFixtures::class . "::{$name}"))->getId();
				}
			}



			$view = new View();
			$view
				->setName('Admin shared')
				->setValue($value)
				->setShared(true)
				->setDefault(false)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")))
				->setUser($this->getReference(UserFixtures::ADMIN_USER));
			
			$manager->persist($view);
			$this->addReference("PROJECT_{$i}_ADMIN_USER_SHARED", $view);


			$value = [
				"display" => [
					"document_reference" => 12,
					"version_name" => 3,
					"document_name" => 27,
					"status_value" => 6,
					"version_checker" => 10,
					"version_date" => 10,
				],
				"filter" => [
					"version_last" => 1
				],
				"results_per_page" => 50,
				"sortDesc" => "version_date"
			];

			$visaFixturesClass = new \ReflectionClass(VisaFixtures::class);
			foreach ($visaFixturesClass->getConstants() as $name => $constant) {

				/**@var Visa $visa */
				$visa = $this->getReference(constant(VisaFixtures::class . "::{$name}"));

				if (str_starts_with($name, "PROJECT_{$i}") === true && $visa->getRevisionRequired() === true) {
					$value['display'] += [('visa_' . $visa->getId()) => 5];
				}
			}
			
			$statusFixturesClass = new \ReflectionClass(StatusFixtures::class);
			foreach ($statusFixturesClass->getConstants() as $name => $constant) {
				
				/**@var Status $status */
				$status = $this->getReference(constant(StatusFixtures::class . "::{$name}"));
				
				if (str_starts_with($name, "PROJECT_{$i}") === true && $status->isCancel() === false) {
					$value['filter']['status_value'][] = $status->getId();
				}
			}



			$view = new View();
			$view
				->setName('Admin shared default')
				->setValue($value)
				->setShared(true)
				->setDefault(true)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")))
				->setUser($this->getReference(UserFixtures::ADMIN_USER));
			
			$manager->persist($view);
			$this->addReference("PROJECT_{$i}_ADMIN_USER_SHARED_DEFAULT", $view);


			$value = [
				"display" => [
					"document_reference" => 12,
					"version_name" => 3,
					"document_name" => 27,
					"status_value" => 6,
					"version_checker" => 10,
					"version_date" => 10,
				],
				"filter" => [
					"version_last" => 1
				],
				"results_per_page" => 50,
				"sortDesc" => "version_date"
			];

			$view = new View();
			$view
				->setName('Admin not shared')
				->setValue($value)
				->setShared(false)
				->setDefault(false)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")))
				->setUser($this->getReference(UserFixtures::ADMIN_USER));
			
			$manager->persist($view);
			$this->addReference("PROJECT_{$i}_ADMIN_USER_NOT_SHARED", $view);

			$value = [
				"display" => [
					"document_reference" => 12,
					"version_name" => 3,
					"document_name" => 27,
					"status_value" => 6,
					"version_date" => 10,
				],
				"results_per_page" => 50,
				"sortDesc" => "version_date"
			];

			$view = new View();
			$view
				->setName('Read only')
				->setValue($value)
				->setShared(false)
				->setDefault(false)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")))
				->setUser($this->getReference(UserFixtures::READ_ONLY_USER));
			
			$manager->persist($view);
			$this->addReference("PROJECT_{$i}_READ_ONLY_USER", $view);
			
			$value = [
				"display" => [
					"document_reference" => 12,
					"version_name" => 3,
					"document_name" => 27,
				],
				"results_per_page" => 50,
			];

			$view = new View();
			$view
				->setName('Read only default')
				->setValue($value)
				->setShared(false)
				->setDefault(false)
				->setProject($this->getReference(constant(ProjectFixtures::class . "::PROJECT_{$i}")))
				->setUser($this->getReference(UserFixtures::READ_ONLY_USER));
			
			$manager->persist($view);
			$this->addReference("PROJECT_{$i}_READ_ONLY_USER_DEFAULT", $view);

		}

		$manager->flush();
	}

	public function getDependencies()
	{
		return [
			ProjectFixtures::class,
			UserFixtures::class,
			MetadataFixtures::class,
			VisaFixtures::class,
			StatusFixtures::class,
		];
	}
}
