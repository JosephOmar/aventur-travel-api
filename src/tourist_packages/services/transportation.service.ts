import { Injectable, NotFoundException } from '@nestjs/common';
import { Transportation } from '../entities/transportation.entity';
import { randomUUID } from 'crypto';
import {
  CreateTransportationDto,
  UpdateTransportationDto,
} from '../dtos/transportation.dto';
@Injectable()
export class TransportationService {
  private transportation: Transportation[] = [
    {
      transportation_id: randomUUID(),
      supplier: 'Cuzco Libre',
      payment_type: 'Previo',
    },
  ];

  getAllTransportation() {
    return this.transportation;
  }

  getOneTransportation(transportationId: string) {
    const transportation = this.transportation.find(
      (transportation) => transportation.transportation_id === transportationId,
    );
    if (!transportation) {
      throw new NotFoundException(
        `transportation ${transportationId} not found`,
      );
    }
    return transportation;
  }

  getIndexTransportation(transportationId: string) {
    const index = this.transportation.findIndex(
      (transportation) => transportation.transportation_id === transportationId,
    );
    if (index === -1) {
      throw new NotFoundException(
        `transportation ${transportationId} not found`,
      );
    }
    return index;
  }

  createTransportation(payload: CreateTransportationDto) {
    const transportation = {
      transportation_id: randomUUID(),
      ...payload,
    };
    this.transportation.push(transportation);
    return transportation;
  }

  updateTransportation(
    payload: UpdateTransportationDto,
    transportationId: string,
  ) {
    const transportation = this.getOneTransportation(transportationId);
    const index = this.getIndexTransportation(transportationId);
    this.transportation[index] = {
      ...transportation,
      ...payload,
    };
    return this.transportation[index];
  }

  deleteTransportation(transportationId: string) {
    const index = this.getIndexTransportation(transportationId);
    this.transportation.splice(index, 1);
    return { message: `transportation ${transportationId} deleted` };
  }
}
