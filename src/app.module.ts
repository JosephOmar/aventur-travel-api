import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TouristPackagesModule } from './tourist_packages/tourist_packages.module';
import { UsersModule } from './users/users.module';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [TouristPackagesModule, UsersModule, AgentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
