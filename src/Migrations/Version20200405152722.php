<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200405152722 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE codification (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, name VARCHAR(100) NOT NULL, value VARCHAR(10) NOT NULL, is_list TINYINT(1) NOT NULL, is_mandatory TINYINT(1) NOT NULL, INDEX IDX_655F6CC166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE codification_list (id INT AUTO_INCREMENT NOT NULL, codification_id INT NOT NULL, name VARCHAR(255) NOT NULL, value VARCHAR(10) NOT NULL, INDEX IDX_AA288F7FA7134952 (codification_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE metadata (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, name VARCHAR(100) NOT NULL, type SMALLINT NOT NULL, is_mandatory TINYINT(1) NOT NULL, INDEX IDX_4F143414166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE metadata_list (id INT AUTO_INCREMENT NOT NULL, metadata_id INT NOT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_9F0A8ED1DC9EE959 (metadata_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, ref_separator VARCHAR(4) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_user (project_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_B4021E51166D1F9C (project_id), INDEX IDX_B4021E51A76ED395 (user_id), PRIMARY KEY(project_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE visa (id INT AUTO_INCREMENT NOT NULL, company_id INT NOT NULL, project_id INT NOT NULL, name VARCHAR(100) NOT NULL, revision_required TINYINT(1) NOT NULL, INDEX IDX_16B1AB08979B1AD6 (company_id), INDEX IDX_16B1AB08166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE codification ADD CONSTRAINT FK_655F6CC166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE codification_list ADD CONSTRAINT FK_AA288F7FA7134952 FOREIGN KEY (codification_id) REFERENCES codification (id)');
        $this->addSql('ALTER TABLE metadata ADD CONSTRAINT FK_4F143414166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE metadata_list ADD CONSTRAINT FK_9F0A8ED1DC9EE959 FOREIGN KEY (metadata_id) REFERENCES metadata (id)');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE visa ADD CONSTRAINT FK_16B1AB08979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE visa ADD CONSTRAINT FK_16B1AB08166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(
             *          1,
             *          2,
             *          3,
             *          4)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4FBF094F5E237E06 ON company (name)');
        $this->addSql('ALTER TABLE profil CHANGE edit_references edit_codifications TINYINT(1) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E6D6B2975E237E06 ON profil (name)');
        $this->addSql('ALTER TABLE user CHANGE locale locale ENUM(\'en_GB\', \'fr_FR\')');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649275ED078 FOREIGN KEY (profil_id) REFERENCES profil (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649275ED078 ON user (profil_id)');
        $this->addSql('CREATE INDEX IDX_8D93D649979B1AD6 ON user (company_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE codification_list DROP FOREIGN KEY FK_AA288F7FA7134952');
        $this->addSql('ALTER TABLE metadata_list DROP FOREIGN KEY FK_9F0A8ED1DC9EE959');
        $this->addSql('ALTER TABLE codification DROP FOREIGN KEY FK_655F6CC166D1F9C');
        $this->addSql('ALTER TABLE metadata DROP FOREIGN KEY FK_4F143414166D1F9C');
        $this->addSql('ALTER TABLE project_user DROP FOREIGN KEY FK_B4021E51166D1F9C');
        $this->addSql('ALTER TABLE visa DROP FOREIGN KEY FK_16B1AB08166D1F9C');
        $this->addSql('DROP TABLE codification');
        $this->addSql('DROP TABLE codification_list');
        $this->addSql('DROP TABLE metadata');
        $this->addSql('DROP TABLE metadata_list');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE project_user');
        $this->addSql('DROP TABLE visa');
        $this->addSql('DROP INDEX UNIQ_4FBF094F5E237E06 ON company');
        $this->addSql('ALTER TABLE company CHANGE type type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'3\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_E6D6B2975E237E06 ON profil');
        $this->addSql('ALTER TABLE profil CHANGE edit_codifications edit_references TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649275ED078');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649979B1AD6');
        $this->addSql('DROP INDEX IDX_8D93D649275ED078 ON user');
        $this->addSql('DROP INDEX IDX_8D93D649979B1AD6 ON user');
        $this->addSql('ALTER TABLE user CHANGE locale locale VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
