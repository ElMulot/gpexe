<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Serie;
use App\Entity\Project;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class SerieVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, ['ROUTE_SERIE', 'EDIT_SERIE', 'DELETE_SERIE', 'NEW_DOCUMENT'])) {
            return false;
        }

        if (!$subject instanceof Serie) {
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

        /** @var Serie $serie */
        $serie = $subject;

        /** @var Project $project */
        $project = $serie->getProject();

        return match($attribute) {
            'ROUTE_SERIE' => $this->security->isGranted('ROUTE_SERIE', $project) && ($user->getCompany()->isMainContractor() || $user->getCompany()->isChecker() || $serie->getCompany() === $user->getCompany()),
            'EDIT_SERIE', 'DELETE_SERIE' => $project->hasUser($user) && $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'NEW_DOCUMENT' => $project->hasUser($user) && $this->security->isGranted('ROLE_EDITOR') && $user->getCompany()->isMainContractor(),
            default => false,
        };
    }
}


// return $this->security->isGranted('ROLE_USER') && $project->hasUser($user) === true && match($attribute) {
//     'MAIN_CONTRACTOR_USER' => $user->getCompany()->isMainContractor() ,
//     'CHECKER_USER' => $user->getCompany()->isMainContractor() || $user->getCompany()->isChecker(),
//     'USER' => true,
//     default => $user->getCompany() === $serie->getCompany() && match ($attribute) {
//         'SUB_CONTRACTOR_USER' =>  $user->getCompany()->isMainContractor() || $user->getCompany()->isChecker() || $user->getCompany()->isSubContractor(),
//         'SUPPLIER_USER' => true,
//         default => false,
//     }
// };
?>