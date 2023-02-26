<?php

namespace App\Tests\Form\EventSubscriber;

use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\DataTransformer\ProgramTransformer;
use App\Form\DataTransformer\ViewTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use App\Service\ParseService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;

class VariousFieldSubscriberTest extends TestCase
{

	/**@var JsonEncoder&MockObject */
	private $jsonEncoder;

	public function setUp(): void
	{
		$this->jsonEncoder = $this->createMock(JsonEncoder::class);
	}
	
	/**
	 * @covers VariousFieldSubscriber::preSetData
	 * @testWith	[[false, true]]
	 * 				[[0, 1]]
	 * 				[["a", "b"]]
	 */
	public function testPreSetDataSuccess(mixed $data): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->once())
			->method('add')
			->with('switch', CheckboxType::class);
		
		/**@var FormEvent&MockObject */
		$event = $this->createMock(FormEvent::class);
		$event->method('getData')
			->willReturn($data);

		$event->method('getForm')
			->willReturn($form);
		
		$subscriber = new VariousFieldSubscriber();
		$subscriber->preSetData($event);
	}

	/**
	 * @covers VariousFieldSubscriber::preSetData
	 * @testWith	[false]
	 * 				[1]
	 * 				["a"]
	 * 				[[false, false]]
	 * 				[[0, 0]]
	 * 				[["a", "a"]]
	 */
	public function testPreSetDataFail(mixed $data): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->never())
			->method('add');
		
		/**@var FormEvent&MockObject */
		$event = $this->createMock(FormEvent::class);
		$event->method('getData')
			->willReturn($data);

		$event->method('getForm')
			->willReturn($form);
		
		$subscriber = new VariousFieldSubscriber();
		$subscriber->preSetData($event);
	}
}