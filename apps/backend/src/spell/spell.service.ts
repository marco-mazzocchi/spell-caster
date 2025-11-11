import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spell } from './spell.entity';

@Injectable()
export class SpellsService {
    constructor(
        @InjectRepository(Spell)
        private spellsRepository: Repository<Spell>,
    ) {}

    findAll(): Promise<Spell[]> {
        return this.spellsRepository.find();
    }

    findOne(id: number): Promise<Spell | null> {
        return this.spellsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.spellsRepository.delete(id);
    }
}