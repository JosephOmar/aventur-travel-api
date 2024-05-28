import { Controller, Get, Param } from '@nestjs/common';

@Controller('itineraries')
export class ItinerariesController {
  @Get()
  getItineraries() {
    return `Todos los itineraries`;
  }

  @Get(':itineraryId')
  findItinerary(@Param('itineraryId') itineraryId: string) {
    return `Itinerarie con Id => ${itineraryId}`;
  }
}
