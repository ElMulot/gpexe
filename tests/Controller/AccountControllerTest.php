<?php

namespace App\Tests\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Panther\PantherTestCase;

class AccountControllerTest extends PantherTestCase
{
    // public function testSomething(): void
    // {
    //     $client = static::createPantherClient();

    //     /** @var UserRepository $userRepository */
    //     $userRepository = static::getContainer()->get(UserRepository::class);
    //     $testUser = $userRepository->findOneBy(['email' => 'test@test.com']);
    //     $client->loginUser($testUser);

    //     $crawler = $client->request('GET', '/account');

    //     $this->assertResponseIsSuccessful();
    //     // $this->assertSelectorTextContains('h1', 'Hello World');
    // }
}
