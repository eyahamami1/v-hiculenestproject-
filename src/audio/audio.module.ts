import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioRepository } from './audio.repository/audio.repository';
import { GenerateurModule } from 'src/generateur/generateur.module';
import { AudioController } from './audio.controller';

@Module({
  imports: [GenerateurModule],
  providers: [AudioService, AudioRepository],
  exports: [AudioService],
  controllers: [AudioController],
})
export class AudioModule {}
