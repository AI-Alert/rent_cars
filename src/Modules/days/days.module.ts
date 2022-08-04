import { CarsRepository } from '../cars/repositories/cars.repository';
import { CarsService } from '../cars/cars.service';
import { DaysRepository } from './repository/days.repository';
import { DaysService } from './days.service';
import { DaysController } from './days.controller';
import { DbModule } from './../database/db.module';
import { Module } from "@nestjs/common";

@Module({
    imports: [DbModule],
    controllers: [DaysController],
    providers: [DaysService, DaysRepository, CarsService, CarsRepository]
})

export class DaysModule {}