import { Injectable } from '@nestjs/common';
import { AudioRepository } from './audio.repository/audio.repository';
import { GenerateurService } from 'src/generateur/generateur.service';

@Injectable()
export class AudioService {
  constructor(
    private repo: AudioRepository,
    private generateur: GenerateurService,
  ) {}

  jouerMusique() {
    const energie = this.generateur.produireEnergie();
    return energie + ' → ' + this.repo.playMusic();
  }
}
