import { CarsEntity } from './entities/cars.entity';
import { DaysService } from '../days/days.service';
import { CarsRepository } from './repositories/cars.repository';
import { PG_CONNECTION } from '../estimates/estimates';
import {
  Injectable,
} from '@nestjs/common';

@Injectable()
export class CarsService {
  constructor(private readonly autoRentRepository: CarsRepository) { }

  async createAutoTable() {
    await this.autoRentRepository.createTable()
    await this.autoRentRepository.insertDataToTable()
  }

  async insertDataToTable() {
    await this.autoRentRepository.insertDataToTable()
  }

  async findById(carId: number) {
    return await this.autoRentRepository.findById(carId)
  }

  async findAllAutos() {
    return await this.autoRentRepository.findAllAutos()
  }
}
