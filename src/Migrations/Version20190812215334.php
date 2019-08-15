<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190812215334 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs

        $this->addSql('CREATE SEQUENCE IF NOT EXISTS crawled_id_seq;');


        $this->addSql(' 
             CREATE TABLE crawled
            (
                id int NOT NULL,
                user_id int NULL,
                url text NULL,
                email JSONB NOT NULL, 
                created timestamp without time zone NULL DEFAULT now(),
                modified timestamp without time zone NULL
            );
             ');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('
            DROP TABLE IF EXISTS crawled CASCADE;
        ');
    }
}
