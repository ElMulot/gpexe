<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use App\Form\NewUserType;
use App\Form\EditUserType;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    
    private $translator;
    
    private $passwordEncoder;
    
    public function __construct(TranslatorInterface $translator, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->translator = $translator;
        $this->passwordEncoder = $passwordEncoder;
    }
    
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('generic/list.html.twig', [
            'header' => $this->translator->trans('User'),
        	'route_back' =>  $this->generateUrl('project'),
            'class' => User::class,
            'entities' => $userRepository->findAll(),
        ]);
    }
    
    public function new(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(NewUserType::class, $user);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
        	$user->setPassword($this->passwordEncoder->encodePassword($user, $user->getPassword()));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            
            $this->addFlash('success', 'New entry created');
            return $this->redirectToRoute('user');
        } else {
            $view = $form->createView();
            return $this->render('generic/form.html.twig', [
            	'route_back' =>  $this->generateUrl('user'),
                'form' => $view,
            ]);
        }
    }
    
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(EditUserType::class, $user);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            if (!empty($form->get('new_password')->getData())) {
            	$user->setPassword($this->passwordEncoder->encodePassword($user, $form->get('new_password')->getData()));
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();
            
            $this->addFlash('success', 'Datas updated');
            return $this->redirectToRoute('user');
        } else {
            $view = $form->createView();
            return $this->render('generic/form.html.twig', [
            	'route_back' =>  $this->generateUrl('user'),
                'form' => $view,
            ]);
        }
    }
    
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
            
            $this->addFlash('success', 'Entry deleted');
            return $this->redirectToRoute('user');
        } else {
            return $this->render('generic/delete.html.twig', [
            	'route_back' =>  $this->generateUrl('user'),
                'entities' => [$user],
            ]);
        }
        
        
    }
    
}
?>