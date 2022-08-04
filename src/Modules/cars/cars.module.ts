import { CarsRepository } from './repositories/cars.repository';
import { DbModule } from './../database/db.module';
import { CarsService } from './cars.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [DbModule],
    providers: [CarsService, CarsRepository],
})
export class CarsModule {}