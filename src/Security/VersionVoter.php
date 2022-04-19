<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Version;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class VersionVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, ['SHOW_REVIEW', 'NEW_REVIEW'])) {
            return false;
        }

        if (!$subject instanceof Version) {
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

        /** @var Version $version */
        $version = $subject;

        /** @var Project $project */
        $project = $version->getDocument()->getSerie()->getProject();

        return $this->security->isGranted('ROLE_USER') && $project->hasUser($user) && match($attribute) {
            'SHOW_REVIEW' => true,
            'NEW_REVIEW' => $user->getCompany()->isMainContractor() || $user->getCompany()->isChecker(),
            default => false,
        };
    }
}
?>