import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { ImagesService } from './services/images.service';
import { ItinerariesService } from './services/itineraries.service';
import { TouristPackagesService } from './services/tourist_packages.service';
import { PricesService } from './services/prices.service';
import { SegmentsService } from './services/segments.service';
import { TransportationService } from './services/transportation.service';
import { CommentsController } from './controllers/comments.controller';
import { ImagesController } from './controllers/images.controller';

@Module({
  controllers: [CommentsController, ImagesController],
  providers: [
    CommentsService,
    ImagesService,
    ItinerariesService,
    TouristPackagesService,
    PricesService,
    SegmentsService,
    TransportationService,
  ],
})
export class TouristPackagesModule {}
