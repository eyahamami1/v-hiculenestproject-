import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
  constructor(private vehicule: VehiculeService) {}

  @Get('start')
  startVehicule() {
    return this.vehicule.demarrerVehicule();
  }
}
