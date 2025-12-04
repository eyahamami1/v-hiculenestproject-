import { Injectable } from '@nestjs/common';

import { GenerateurService } from 'src/generateur/generateur.service';
import { PhareRepository } from './phare.repository/phare.repository';

@Injectable()
export class PhareService {
  constructor(
    private repo: PhareRepository,
    private generateur: GenerateurService,
  ) {}

  allumerPhare() {
    const energie = this.generateur.produireEnergie();
    return energie + ' → ' + this.repo.turnOn();
  }
}
