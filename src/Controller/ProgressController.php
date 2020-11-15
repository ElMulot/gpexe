<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProgressController extends AbstractController
{
    /**
     * @Route("/progress", name="progress")
     */
    public function index(): Response
    {
        return $this->render('progress/index.html.twig', [
            'controller_name' => 'ProgressController',
        ]);
    }
}
