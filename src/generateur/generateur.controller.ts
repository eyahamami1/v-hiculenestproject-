import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
  constructor(private generateurService: GenerateurService) {}

  @Get('power')
  produireEnergie() {
    return this.generateurService.produireEnergie();
  }
}
