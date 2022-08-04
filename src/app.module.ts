import { RentDayRepository } from './days/repository/days.repository';
import { AutoRentRepository } from './cars/repositories/cars.repository';
import { AutoRentService } from './cars/cars.service';
import { RentDayService } from './days/days.service';
import { RentDayModule } from './days/days.module';
import { AutoRentModule } from './cars/cars.module';
import { DbModule } from './database/db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.local' , 'env']
  }),
  DbModule,
  AutoRentModule,
  RentDayModule
],
  controllers: [AppController],
  providers: [AppService, RentDayService, RentDayRepository, AutoRentService, AutoRentRepository],
})
export class AppModule {}
