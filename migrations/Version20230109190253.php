<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230109190253 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification CHANGE type type ENUM(\'fixed\', \'text\', \'regex\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\', CHANGE is_mandatory mandatory TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE profil ADD super_admin TINYINT(1) NOT NULL, ADD admin TINYINT(1) NOT NULL, ADD controller TINYINT(1) NOT NULL, ADD editor TINYINT(1) NOT NULL, DROP is_admin, DROP edit_documents, DROP is_controller, DROP is_super_admin');
        $this->addSql('ALTER TABLE project_user DROP FOREIGN KEY FK_B4021E51166D1F9C');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\', CHANGE is_default `default` TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE version CHANGE is_required required TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE view ADD shared TINYINT(1) NOT NULL, ADD `default` TINYINT(1) NOT NULL, DROP is_shared, DROP is_default');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification CHANGE type type ENUM(\'fixed\', \'text\', \'regex\', \'list\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\', CHANGE mandatory is_mandatory TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE profil ADD is_admin TINYINT(1) NOT NULL, ADD edit_documents TINYINT(1) NOT NULL, ADD is_controller TINYINT(1) NOT NULL, ADD is_super_admin TINYINT(1) NOT NULL, DROP super_admin, DROP admin, DROP controller, DROP editor');
        $this->addSql('ALTER TABLE project_user DROP FOREIGN KEY FK_B4021E51166D1F9C');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\', CHANGE `default` is_default TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE version CHANGE required is_required TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE view ADD is_shared TINYINT(1) NOT NULL, ADD is_default TINYINT(1) NOT NULL, DROP shared, DROP `default`');
    }
}
