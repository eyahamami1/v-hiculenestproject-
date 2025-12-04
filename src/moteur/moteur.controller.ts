import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
  constructor(private moteurService: MoteurService) {}

  @Get('start')
  demarrer() {
    return this.moteurService.demarrerMoteur();
  }

  @Get('status')
  statut() {
    return this.moteurService.statutMoteur();
  }
}
