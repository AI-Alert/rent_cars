import { RentDayService } from './days/days.service';
import { AutoRentService } from './cars/cars.service';
import { Inject, Injectable, forwardRef } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => AutoRentService)) private readonly autoRentService: AutoRentService,
    @Inject(forwardRef(() => RentDayService)) private readonly  rentDayService:RentDayService

    ) { }
  async createMigration() {
    await this.autoRentService.createAutoTable()
    await this.rentDayService.createRentTable()
  }
}