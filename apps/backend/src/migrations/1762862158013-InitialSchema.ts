import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1762862158013 implements MigrationInterface {
    name = 'InitialSchema1762862158013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "spell" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "concentration" boolean NOT NULL DEFAULT (0), "duration" varchar, "level" integer, "description" varchar)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "spell"`);
    }

}
