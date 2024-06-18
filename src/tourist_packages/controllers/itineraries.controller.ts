import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ItinerariesService } from '../services/itineraries.service';
import {
  CreateItinerariesDto,
  UpdateItinerariesDto,
} from '../dtos/tineraries.dto';

@Controller('itineraries')
export class ItinerariesController {
  constructor(private itineraryService: ItinerariesService) {}

  @Get()
  getItineraries() {
    return this.itineraryService.getAllItineraries();
  }

  @Get(':itinerary_id')
  findItinerary(@Param('itinerary_id', ParseIntPipe) itinerary_id: number) {
    return this.itineraryService.getOneItinerary(itinerary_id);
  }

  // @Post()
  // createItinerary(@Body() payload: CreateItinerariesDto) {
  //   return this.itineraryService.createItinerary(payload);
  // }

  // @Put(':itineraryId')
  // updateItinerary(
  //   @Body() payload: UpdateItinerariesDto,
  //   @Param('itineraryId') itineraryId: string,
  // ) {
  //   return this.itineraryService.updateItinerary(payload, itineraryId);
  // }

  // @Delete(':itineraryId')
  // deleteItinerary(@Param('itineraryId') itineraryId: string) {
  //   return this.itineraryService.deleteItinerary(itineraryId);
  // }
}
