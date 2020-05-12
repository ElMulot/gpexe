<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200512214610 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE version ADD initial_scheduled_date DATE NOT NULL, ADD scheduled_date DATE NOT NULL, ADD delivery_date DATE NOT NULL, DROP initial_date, DROP date');
        $this->addSql('ALTER TABLE vue CHANGE value value VARCHAR(2047) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE version ADD initial_date DATE NOT NULL, ADD date DATE NOT NULL, DROP initial_scheduled_date, DROP scheduled_date, DROP delivery_date');
        $this->addSql('ALTER TABLE vue CHANGE value value VARCHAR(2048) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
