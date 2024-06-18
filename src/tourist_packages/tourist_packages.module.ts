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
import { ItinerariesController } from './controllers/itineraries.controller';
import { PricesController } from './controllers/prices.controller';
import { SegmentsController } from './controllers/segments.controller';
import { TouristPackagesController } from './controllers/tourist_packages.controller';
import { TransportationController } from './controllers/transportation.controller';
import { Itinerary } from './entities/itinerary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Itinerary])],
  controllers: [
    CommentsController,
    ImagesController,
    ItinerariesController,
    PricesController,
    SegmentsController,
    TouristPackagesController,
    TransportationController,
  ],
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
