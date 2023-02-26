<?php

namespace App\Tests\EventListener;

use App\Entity\User;
use PHPUnit\Framework\TestCase;
use App\EventListener\UserListener;
use Doctrine\Persistence\ObjectManager;
use PHPUnit\Framework\MockObject\MockObject;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;

class UserListenerTest extends TestCase
{
	
	public $event;

	public function setUp(): void
	{
		$objectManager = $this->createMock(ObjectManager::class);

		/**@var LifecycleEventArgs&MockObject */
		$this->event = $this->createMock(LifecycleEventArgs::class);
		$this->event
			->method('getObjectManager')
			->willReturn($objectManager);
	}

	/**
	 * @covers UserListener::hashPassword
	 * @testWith	["abcde", "$2y$13$IDHYE7OSRRe5IXmbFZL3rOAW/60j5bPXMMwg8yl1OiGSOzKPozlJ6"]
	 * 				["fghij", "$2y$13$cFPh.g9wFS6/rN4k9jv9r.UJZvRNIeSggx5IqxwJsPjJiSbEhPtYG"]
	 */
	function testHashPassword(string $input, string $expected): void
	{
		/**@var User&MockObject */
		$user = $this->createMock(User::class);
		$user
			->method('getPlainPassword')
			->willReturn($input);
		$user
			->expects($this->once())
			->method('setPassword')
			->with($expected);
		
		/**@var UserPasswordHasher&MockObject */
		$userPasswordHasher = $this->createMock(UserPasswordHasher::class);
		$userPasswordHasher
			->method('hashPassword')
			->with($user, $input)
			->willReturn($expected);

		$userListener = new UserListener($userPasswordHasher);

		$userListener->hashPassword($user);
	}

	/**
	 * @covers UserListener::hashPassword
	 */
	function testHashPasswordWithEmptyString(): void
	{
		/**@var User&MockObject */
		$user = $this->createMock(User::class);
		$user
			->method('getPlainPassword')
			->willReturn('');
		$user
			->expects($this->never())
			->method('setPassword');
		
		/**@var UserPasswordHasher&MockObject */
		$userPasswordHasher = $this->createMock(UserPasswordHasher::class);

		$userListener = new UserListener($userPasswordHasher);

		$userListener->hashPassword($user);
	}
}

?>