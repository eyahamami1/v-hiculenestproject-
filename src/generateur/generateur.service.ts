import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './generateur.repository/generateur.repository';

@Injectable()
export class GenerateurService {
  constructor(private repo: GenerateurRepository) {}

  produireEnergie() {
    return this.repo.generatePower();
  }
}
