import { AppService } from './app.service';
import { forwardRef } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { AutoRentEntity } from './cars/entities/cars.entity';

const data: AutoRentEntity[] = [
    {
        carId: 1,
        name: 'audi',
        autoNumber: '1111a',
        isBlock: false,
        toDate: '2022-01', 
        fromDate: '2022-02'
    },
    {
        carId: 2,
        name: 'mercedes',
        autoNumber: '2222b',
        isBlock: false,
        toDate: '2022-01', 
        fromDate: '2022-02'
    },
    {
        carId: 3,
        name: 'honda',
        autoNumber: '3333c',
        isBlock: false,
        toDate: '2022-01', 
        fromDate: '2022-02'
    },
    {
        carId: 4,
        name: 'lexus',
        autoNumber: '4444e',
        isBlock: false,
        toDate: '2022-01', 
        fromDate: '2022-02'
    },
    {
        carId: 5,
        name: 'toyota',
        autoNumber: '5555r',
        isBlock: false,
        toDate: '2022-01', 
        fromDate: '2022-02'
    }
]

async function boot() {
    const app = await NestFactory.createApplicationContext(AppModule)
    const command = process.argv[2]

    if(command === 'migration:run') {
        const appService = app.get(AppService);
        const migration = appService.createMigration()
        return console.log('result');
        
    }
    console.log('command not found');
    app.close()
    process.exit(0)
}
boot()