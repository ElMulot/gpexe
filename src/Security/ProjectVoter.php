<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Project;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

// MAIN_CONTRACTOR_USER:
// - any main contractor user on the project to which it is attached

// CHECKER_USER:
// - any checker user on the project to which it is attached
// - inherit MAIN_CONTRACTOR_USER

// USER:
// - any user on the project to which it is attached
// - inherit CHECKER_USER


class ProjectVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, [
                'SHOW_PROJECT',
                'EDIT_PROJECT',
                'DELETE_PROJECT',
                'SHOW_MDR',
                'SHOW_SDR',
                'SHOW_PROGRAM',
                'SHOW_PROGRESS_PROGRAM',
                'NEW_PROGRAM',
                'EDIT_PROGRAM',
                'DELETE_PROGRAM',
                'SHOW_SERIE',
                'ROUTE_SERIE',
                'NEW_SERIE',
                'SHOW_VISA',
                'NEW_VISA',
                'EDIT_VISA',
                'DELETE_VISA',
                'SHOW_STATUS',
                'NEW_STATUS',
                'EDIT_STATUS',
                'DELETE_STATUS',
                'SHOW_VIEW',
                'NEW_VIEW'
            ])) {
            return false;
        }

        if (!$subject instanceof Project) {
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

        /** @var Project $project */
        $project = $subject;

        return $project->hasUser($user) === true && match($attribute) {
            'SHOW_PROJECT', 'ROUTE_SERIE', 'SHOW_VIEW', 'NEW_VIEW' => $this->security->isGranted('ROLE_USER'),
            'SHOW_MDR' => $this->security->isGranted('ROLE_USER') && ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()),
            'SHOW_SDR' => $this->security->isGranted('ROLE_USER'),
            'SHOW_PROGRAM', 'NEW_PROGRAM', 'EDIT_PROGRAM', 'DELETE_PROGRAM' => $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'SHOW_PROGRESS_PROGRAM' => $this->security->isGranted('ROLE_USER') && $user->getCompany()->isMainContractor(),
            'EDIT_PROJECT', 'SHOW_SERIE', 'NEW_SERIE', 'SHOW_VISA', 'NEW_VISA', 'EDIT_VISA', 'DELETE_VISA', 'SHOW_STATUS', 'NEW_STATUS', 'EDIT_STATUS', 'DELETE_STATUS' => $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'DELETE_PROJECT' => $this->security->isGranted('ROLE_ADMIN'),
            default => false,
        };
    }
}

?>