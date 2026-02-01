<?php

namespace App\Controller;

use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Serie;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Spatie\Regex\Regex;
use App\Service\Code\Node;
use App\Helpers\Date;
use Symfony\Component\Validator\Constraints\Count;

class TestController extends AbstractController
{
		
	private $doctrine;

	private $translator;
	
	public function __construct(ManagerRegistry $doctrine, TranslatorInterface $translator)
	{
		$this->doctrine = $doctrine;
		$this->translator = $translator;
	}
	
	public function index(): Response
	{
		// return $this->render('test/index.html.twig');
		return new Response();
	}
	
}
