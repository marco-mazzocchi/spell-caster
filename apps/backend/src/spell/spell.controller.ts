import { Controller, Get } from '@nestjs/common';
import { SpellsService } from './spell.service';
import { Spell } from '@sc-app/common';

@Controller('spells')
export class SpellController {
    constructor(private readonly spellService: SpellsService) {}

    @Get()
    async getSpells(): Promise<Spell[]> {
        const spells: Spell[] = [];
        const dbSpell = await this.spellService.findAll();
        dbSpell.forEach(s => {
            spells.push({
                id: s.id,
                name: s.name,
                concentration: s.concentration,
            })
        })
        return spells;
    }
}
