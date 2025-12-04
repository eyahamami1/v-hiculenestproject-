import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
import { MoteurRepository } from './moteur.repository/moteur.repository';
import { MoteurController } from './moteur.controller';

@Module({
  providers: [MoteurService, MoteurRepository],
  exports: [MoteurService],
  controllers: [MoteurController],
})
export class MoteurModule {}
