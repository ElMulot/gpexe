<?php

namespace App\Security;

use App\Entity\Enum\SerieBelongingEnum;
use App\Entity\User;
use App\Entity\Project;
use App\Repository\SerieRepository;
use Symfony\Bundle\SecurityBundle\Security;
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
    public function __construct(private readonly Security $security,
                                private readonly SerieRepository $serieRepository)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, [
                'PROJECT_SHOW',
                'PROJECT_EDIT',
                'PROJECT_DELETE',
                'SHOW_ALL',
                'SHOW_MDR',
                'SHOW_SDR',
                'PROGRAM_SHOW',
                'PROGRAM_PROGRESS_SHOW',
                'PROGRAM_NEW',
                'PROGRAM_EDIT',
                'PROGRAM_DELETE',
                'SERIE_SHOW',
                'SERIE_NEW',
                'VISA_SHOW',
                'VISA_NEW',
                'VISA_EDIT',
                'VISA_DELETE',
                'STATUS_SHOW',
                'STATUS_NEW',
                'STATUS_EDIT',
                'STATUS_DELETE',
                'VIEW_SHOW',
                'VIEW_NEW',
                'DOCUMENT_EDIT',
                'DOCUMENT_MOVE',
                'DOCUMENT_DELETE',
                'REVIEW_NEW',
                'REVIEW_EDIT',
                'REVIEW_DELETE',
                'SERIE_EDIT',
                'SERIE_DELETE',
                'DOCUMENT_NEW',
                'VERSION_NEW'
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
            'PROJECT_SHOW', 'VIEW_SHOW', 'VIEW_NEW' => $this->security->isGranted('ROLE_USER'),
            'SHOW_ALL' => $this->security->isGranted('ROLE_USER') && $user->getCompany()->isChecker() && $this->hasNoSerie($project) === false,
            'SHOW_MDR' => $this->security->isGranted('ROLE_USER') && $user->getCompany()->isChecker() && $this->hasNoMdrSerie($project) === false,
            'SHOW_SDR' => $this->security->isGranted('ROLE_USER') && $this->hasNoSdrSerie($project) === false,
            'PROGRAM_SHOW', 'PROGRAM_NEW', 'PROGRAM_EDIT', 'PROGRAM_DELETE' => $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'PROGRAM_PROGRESS_SHOW' => $this->security->isGranted('ROLE_USER') && $user->getCompany()->isMainContractor(),
            'PROJECT_EDIT', 'SERIE_SHOW', 'SERIE_NEW', 'VISA_SHOW', 'VISA_NEW', 'VISA_EDIT', 'VISA_DELETE', 'STATUS_SHOW', 'STATUS_NEW', 'STATUS_EDIT', 'STATUS_DELETE' => $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'PROJECT_DELETE' => $this->security->isGranted('ROLE_ADMIN'),
            'DOCUMENT_EDIT', 'DOCUMENT_MOVE', 'DOCUMENT_DELETE' => $this->security->isGranted('CONTROLLER') || $this->security->isGranted('EDITOR'),
            'REVIEW_NEW', 'REVIEW_EDIT', 'REVIEW_DELETE' => $this->security->isGranted('ROLE_USER') && ($user->getCompany()->isChecker() || $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor()),
            'SERIE_EDIT', 'SERIE_DELETE' => $project->hasUser($user) && $this->security->isGranted('ROLE_CONTROLLER') && $user->getCompany()->isMainContractor(),
            'DOCUMENT_NEW', 'VERSION_NEW' => $project->hasUser($user) && $this->security->isGranted('ROLE_EDITOR') && $user->getCompany()->isMainContractor(),
            default => throw new \LogicException('logic.codeNotReached'),
        };
    }

    private function hasNoSerie(Project $project): bool
    {
        return empty($this->serieRepository->getSeriesByProject($project));
    }

    private function hasNoMdrSerie(Project $project): bool
    {
        return empty($this->serieRepository->getMdrSeriesByProject($project));
    }

    private function hasNoSdrSerie(Project $project): bool
    {
        return empty($this->serieRepository->getSdrSeriesByProject($project));
    }
}

?>