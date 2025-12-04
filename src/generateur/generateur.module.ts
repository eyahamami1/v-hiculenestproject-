import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './generateur.repository/generateur.repository';
import { GenerateurController } from './generateur.controller';

@Module({
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurService],
  controllers: [GenerateurController],
})
export class GenerateurModule {}
