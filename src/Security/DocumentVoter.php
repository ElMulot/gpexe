<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Document;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class DocumentVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, [
                'DOCUMENT_SHOW_DETAIL',
                'DOCUMENT_EDIT',
                'DOCUMENT_MOVE',
                'DOCUMENT_DELETE',
                'VERSION_EDIT',
                'VERSION_DELETE',
            ])) {
            return false;
        }

        if (!$subject instanceof Document) {
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

        /** @var Document $document */
        $document = $subject;
        /** @var Serie $serie */
        $serie = $document->getSerie();
        /** @var Project $project */
        $project = $serie->getProject();

        if ($this->security->isGranted('CONTROLLER', $serie)) {
            return true;
        }

        return $this->security->isGranted('ROLE_USER') && $project->hasUser($user) && match($attribute) {
            'DOCUMENT_SHOW_DETAIL' => $user->getCompany() === $serie->getCompany(),
            'DOCUMENT_EDIT', 'VERSION_EDIT' => $this->security->isGranted('EDITOR'),
            'DOCUMENT_MOVE' => $this->security->isGranted('EDITOR'),
            'DOCUMENT_DELETE', 'VERSION_DELETE' => $this->security->isGranted('EDITOR'),
            default => throw new \LogicException('logic.codeNotReached'),
        };
    }
}



?>