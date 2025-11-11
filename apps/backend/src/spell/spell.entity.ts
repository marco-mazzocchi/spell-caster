import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spell {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    name: string;

    @Column({ default: false })
    concentration: boolean;

    @Column({ nullable: true})
    duration: string;

    @Column({ nullable: true})
    level: number;

    @Column({ nullable: true})
    description: string;
}