import { Injectable, NotFoundException } from '@nestjs/common';
import { Itinerary } from '../entities/itinerary.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateItinerariesDto,
  UpdateItinerariesDto,
} from '../dtos/tineraries.dto';
@Injectable()
export class ItinerariesService {
  constructor(
    @InjectRepository(Itinerary) private itineraryRepo: Repository<Itinerary>,
  ) {}

  getAllItineraries() {
    return this.itineraryRepo.find();
  }

  getOneItinerary(itinerary_id: number) {
    const itinerary = this.itineraryRepo.findOneBy({
      itinerary_id: itinerary_id,
    });
    if (!itinerary) {
      throw new NotFoundException(`itinerary ${itinerary_id} not found`);
    }
    return itinerary;
  }

  // getIndexItinerary(itineraryId: string) {
  //   const index = this.itineraries.findIndex(
  //     (itinerary) => itinerary.itinerary_id === itineraryId,
  //   );
  //   if (index === -1) {
  //     throw new NotFoundException(`itinerary ${itineraryId} not found`);
  //   }
  //   return index;
  // }

  // createItinerary(payload: CreateItinerariesDto) {
  //   const itinerary = {
  //     itinerary_id: randomUUID(),
  //     ...payload,
  //   };
  //   this.itineraries.push(itinerary);
  //   return itinerary;
  // }

  // updateItinerary(payload: UpdateItinerariesDto, itineraryId: string) {
  //   const itinerary = this.getOneItinerary(itineraryId);
  //   const index = this.getIndexItinerary(itineraryId);
  //   this.itineraries[index] = {
  //     ...itinerary,
  //     ...payload,
  //   };
  //   return this.itineraries[index];
  // }

  // deleteItinerary(itineraryId: string) {
  //   const index = this.getIndexItinerary(itineraryId);
  //   this.itineraries.splice(index, 1);
  //   return { message: `itinerary ${itineraryId} deleted` };
  // }
}
