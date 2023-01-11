<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Company;
use Symfony\UX\Turbo\TurboBundle;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Abstract class that integrate some turbo features.
 * @abstract
 */
class AbstractTurboController extends AbstractController
{
	
	/**
     * Get a company user from the Security Token Storage.
     *
     * @throws \LogicException If SecurityBundle is not available
     */
	public function getUserCompany(): ?Company
	{
		/** @var User $user */
		$user = $this->getUser();
		if ($user === null) {
			return null;
		} else {
			return $user->getCompany();
		}
	}

    /**
     * Renders a turbo stream with a success message and a turbo stream with a redirection
     */
	public function renderSuccess(Request $request, string $route, array $parameters = [], int $referenceType = UrlGeneratorInterface::ABSOLUTE_PATH): Response
	{
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->render('generic/success.stream.html.twig', [
			'redirect' => $this->generateUrl($route, $parameters, $referenceType),
		]);
	}

	/**
     * Renders a turbo stream with an error message and a turbo stream with a redirection
     */
	public function renderError(Request $request, string $route, array $parameters = [], int $referenceType = UrlGeneratorInterface::ABSOLUTE_PATH): Response
	{
		$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->render('generic/error.stream.html.twig', [
			'redirect' => $this->generateUrl($route, $parameters, $referenceType),
		]);
	}
}

?>