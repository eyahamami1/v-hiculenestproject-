import { Injectable } from '@nestjs/common';

@Injectable()
export class MoteurRepository {
  private running = false;

  start() {
    this.running = true;
    return 'Moteur démarré';
  }

  getStatus() {
    return this.running ? 'Moteur en marche' : 'Moteur arrêté';
  }
}
