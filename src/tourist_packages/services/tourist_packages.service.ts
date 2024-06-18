import { Injectable, NotFoundException } from '@nestjs/common';
import { TouristPackage } from '../entities/tourist_package.entity';
import { randomUUID } from 'crypto';
import {
  CreatePackagesDto,
  UpdatePackagesDto,
} from '../dtos/tourist_packages.dto';
@Injectable()
export class TouristPackagesService {
  private packages: TouristPackage[] = [
    {
      package_id: randomUUID(),
      slug: 'ica',
      title: 'Ica',
      descripcion_title: 'Aventura en el desierto',
      destination: 'Ica Mágico',
      description_destination: 'Una descripción larga de Ica',
      itinery_description: [
        'Itinerario de Día 1',
        'Itinerario de Día 2',
        'Itinerario de Día 3',
        'Itinerario de Día 4',
      ],
      details: [
        'Detalles del Día 1',
        'Detalles del Día 2',
        'Detalles del Día 3',
        'Detalles del Día 4',
      ],
      considerations: [
        'Consideración del viaje 1',
        'Consideración del viaje 2',
        'Consideración del viaje 3',
      ],
      aditional_services: [
        'Servicio adicional 1',
        'Servicio adicional 2',
        'Servicio adicional 3',
      ],
    },
  ];

  getAllPackages() {
    return this.packages;
  }

  getOnePackage(packageId: string) {
    const packageTourist = this.packages.find(
      (packageTourist) => packageTourist.package_id === packageId,
    );
    if (!packageTourist) {
      throw new NotFoundException(`package ${packageId} not found`);
    }
    return packageTourist;
  }

  getIndexPackage(packageId: string) {
    const index = this.packages.findIndex(
      (packageTourist) => packageTourist.package_id === packageId,
    );
    if (index === -1) {
      throw new NotFoundException(`package ${packageId} not found`);
    }
    return index;
  }

  createPackage(payload: CreatePackagesDto) {
    const packageTourist = {
      package_id: randomUUID(),
      ...payload,
    };
    this.packages.push(packageTourist);
    return packageTourist;
  }

  updatePackage(payload: UpdatePackagesDto, packageId: string) {
    const packageTourist = this.getOnePackage(packageId);
    const index = this.getIndexPackage(packageId);
    this.packages[index] = {
      ...packageTourist,
      ...payload,
    };
    return this.packages[index];
  }

  deletePackage(packageId: string) {
    const index = this.getIndexPackage(packageId);
    this.packages.splice(index, 1);
    return { message: `package ${packageId} deleted` };
  }
}
