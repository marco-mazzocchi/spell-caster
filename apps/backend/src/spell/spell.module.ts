import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpellsService } from './spell.service';
import { SpellController } from './spell.controller';
import { Spell } from './spell.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Spell])],
    providers: [SpellsService],
    controllers: [SpellController],
})
export class SpellModule {}