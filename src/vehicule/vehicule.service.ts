import { Injectable } from '@nestjs/common';
import { MoteurService } from 'src/moteur/moteur.service';
import { GenerateurService } from 'src/generateur/generateur.service';
import { PhareService } from 'src/phare/phare.service';
import { AudioService } from 'src/audio/audio.service';
import { VehiculeRepository } from './vehicule.repository/vehicule.repository';

@Injectable()
export class VehiculeService {
  constructor(
    private moteur: MoteurService,
    private generateur: GenerateurService,
    private phare: PhareService,
    private audio: AudioService,
    private repo: VehiculeRepository,
  ) {}

  demarrerVehicule() {
    return [
      this.moteur.demarrerMoteur(),
      this.generateur.produireEnergie(),
      this.phare.allumerPhare(),
      this.audio.jouerMusique(),
      this.repo.operate(),
    ];
  }
}
