import { Injectable } from '@nestjs/common';
import { MoteurRepository } from './moteur.repository/moteur.repository';


@Injectable()
export class MoteurService {
  constructor(private moteurRepo: MoteurRepository) {}

  demarrerMoteur() {
    return this.moteurRepo.start();
  }

  statutMoteur() {
    return this.moteurRepo.getStatus();
  }
}
