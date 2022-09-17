<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220917213255 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE migration_versions');
        $this->addSql('ALTER TABLE automation CHANGE project_id project_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE codification CHANGE project_id project_id INT DEFAULT NULL, CHANGE type type ENUM(\'fixed\', \'list\', \'regex\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE codification_item CHANGE codification_id codification_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE codification_value CHANGE codification_id codification_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE document CHANGE serie_id serie_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE log CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE metadata CHANGE project_id project_id INT DEFAULT NULL, CHANGE type type ENUM(\'bool\', \'text\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\'');
        $this->addSql('ALTER TABLE metadata_item CHANGE metadata_id metadata_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE metadata_value CHANGE metadata_id metadata_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE program CHANGE project_id project_id INT DEFAULT NULL, CHANGE created_by_id created_by_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE progress CHANGE serie_id serie_id INT DEFAULT NULL, CHANGE program_id program_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE review CHANGE user_id user_id INT DEFAULT NULL, CHANGE visa_id visa_id INT DEFAULT NULL, CHANGE version_id version_id INT DEFAULT NULL, CHANGE date date DATETIME NOT NULL');
        $this->addSql('ALTER TABLE serie CHANGE company_id company_id INT DEFAULT NULL, CHANGE project_id project_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE status CHANGE project_id project_id INT DEFAULT NULL, CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
        $this->addSql('ALTER TABLE user CHANGE profil_id profil_id INT DEFAULT NULL, CHANGE company_id company_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C31BC7E6B6');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C3BB23766C');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C377637F8F');
        $this->addSql('ALTER TABLE version CHANGE document_id document_id INT DEFAULT NULL, CHANGE status_id status_id INT DEFAULT NULL, CHANGE initial_scheduled_date initial_scheduled_date DATETIME DEFAULT NULL, CHANGE scheduled_date scheduled_date DATETIME DEFAULT NULL, CHANGE delivery_date delivery_date DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C31BC7E6B6 FOREIGN KEY (writer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C3BB23766C FOREIGN KEY (approver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C377637F8F FOREIGN KEY (checker_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE view CHANGE project_id project_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE visa CHANGE company_id company_id INT DEFAULT NULL, CHANGE project_id project_id INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE migration_versions (version VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_unicode_ci`, executed_at DATETIME DEFAULT NULL, execution_time INT DEFAULT NULL, PRIMARY KEY(version)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE automation CHANGE project_id project_id INT NOT NULL');
        $this->addSql('ALTER TABLE codification CHANGE project_id project_id INT NOT NULL, CHANGE type type ENUM(\'fixed\', \'list\', \'regex\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE codification_item CHANGE codification_id codification_id INT NOT NULL');
        $this->addSql('ALTER TABLE codification_value CHANGE codification_id codification_id INT NOT NULL');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE document CHANGE serie_id serie_id INT NOT NULL');
        $this->addSql('ALTER TABLE log CHANGE user_id user_id INT NOT NULL');
        $this->addSql('ALTER TABLE metadata CHANGE project_id project_id INT NOT NULL, CHANGE type type ENUM(\'bool\', \'text\', \'date\', \'link\', \'list\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\'');
        $this->addSql('ALTER TABLE metadata_item CHANGE metadata_id metadata_id INT NOT NULL');
        $this->addSql('ALTER TABLE metadata_value CHANGE metadata_id metadata_id INT NOT NULL');
        $this->addSql('ALTER TABLE program CHANGE created_by_id created_by_id INT NOT NULL, CHANGE project_id project_id INT NOT NULL');
        $this->addSql('ALTER TABLE progress CHANGE serie_id serie_id INT NOT NULL, CHANGE program_id program_id INT NOT NULL');
        $this->addSql('ALTER TABLE review CHANGE user_id user_id INT NOT NULL, CHANGE visa_id visa_id INT NOT NULL, CHANGE version_id version_id INT NOT NULL, CHANGE date date DATE NOT NULL');
        $this->addSql('ALTER TABLE serie CHANGE company_id company_id INT NOT NULL, CHANGE project_id project_id INT NOT NULL');
        $this->addSql('ALTER TABLE status CHANGE project_id project_id INT NOT NULL, CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
        $this->addSql('ALTER TABLE user CHANGE profil_id profil_id INT NOT NULL, CHANGE company_id company_id INT NOT NULL');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C31BC7E6B6');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C377637F8F');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C3BB23766C');
        $this->addSql('ALTER TABLE version CHANGE status_id status_id INT NOT NULL, CHANGE document_id document_id INT NOT NULL, CHANGE initial_scheduled_date initial_scheduled_date DATE DEFAULT NULL, CHANGE scheduled_date scheduled_date DATE DEFAULT NULL, CHANGE delivery_date delivery_date DATE DEFAULT NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C31BC7E6B6 FOREIGN KEY (writer_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C377637F8F FOREIGN KEY (checker_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C3BB23766C FOREIGN KEY (approver_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE view CHANGE project_id project_id INT NOT NULL, CHANGE user_id user_id INT NOT NULL');
        $this->addSql('ALTER TABLE visa CHANGE company_id company_id INT NOT NULL, CHANGE project_id project_id INT NOT NULL');
    }
}
