<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\View;
use App\Entity\Project;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class ViewVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, ['EDIT_VIEW', 'DELETE_VIEW'])) {
            return false;
        }

        if (!$subject instanceof View) {
            return false;
        }

        return true;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        if ($this->security->isGranted('ROLE_ADMIN')) {
            return true;
        }

        $user = $token->getUser();

		// the user must be logged in; if not, deny access
        if (!$user instanceof User) {
            return false;
        }

        /** @var View $view */
        $view = $subject;

        /** @var Project $project */
        $project = $view->getProject();

        if ($this->security->isGranted('CONTROLLER', $project)) {
            return true;
        }

        return $view->getUser() === $user;
    }
}

?>