<?php

namespace App\Security;

use App\Entity\User;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Document;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class DocumentVoter extends Voter
{
    public function __construct(private readonly Security $security)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, ['SHOW_DOCUMENT_DETAIL', 'EDIT_DOCUMENT', 'MOVE_DOCUMENT', 'DELETE_DOCUMENT'])) {
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
            'SHOW_DOCUMENT_DETAIL' => $user->getCompany() === $serie->getCompany(),
            'EDIT_DOCUMENT' => $this->security->isGranted('EDITOR'),
            'MOVE_DOCUMENT' => $this->security->isGranted('EDITOR'),
            'DELETE_DOCUMENT' => $this->security->isGranted('EDITOR'),
        };
    }
}



?>