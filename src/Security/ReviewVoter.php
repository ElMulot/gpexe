<?php

namespace App\Security;

use App\Entity\Company;
use App\Entity\User;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Review;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

// MAIN_CONTRACTOR_USER:
// - any main contractor user on the serie to which it is attached

// CHECKER_USER:
// - any checker user on the serie to which it is attached
// - inherit MAIN_CONTRACTOR_USER

// USER:
// - any user on the serie to which it is attached
// - inherit CHECKER_USER

// SUB_CONTRACTOR_USER:
// - any sub-contractor user on the serie to which it is attached
// - inherit CHECKER_USER

// SUPPLIER_USER:
// - any supplier user on the serie to which it is attached
// - inherit SUB_CONTRACTOR_USER


class ReviewVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, ['EDIT_REVIEW', 'DELETE_REVIEW'])) {
            return false;
        }

        if (!$subject instanceof Review) {
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

        /** @var Review $review */
        $review = $subject;

        /** @var Project $project */
        $project = $review->getVisa()->getProject();

        return ($this->security->isGranted('ROLE_USER') && $project->hasUser($user) && ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker()) && $review->getUser() === $user) ||
            ($this->security->isGranted('ROLE_CONTROLLER') && $project->hasUser($user));
    }
}
?>