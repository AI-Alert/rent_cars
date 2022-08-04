import { ResponseReportRentDaysDto } from './dto/responseReportRentDays.dto';
import { ResponseMessage } from './dto/responseMessageDto.dto';
import { CreateRentDto } from './dto/createRentDto.dto';
import { RequestDateDto } from './dto/requestDateDto.dto';
import { DaysService } from './days.service';
import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiParam } from '@nestjs/swagger';

@Controller('rent')
export class DaysController {
    constructor(private readonly rentDayService: DaysService) { }

    @ApiParam({ name: 'car_id' })
    @Post(':car_id/info')
    async getInfoPossibleToRent(@Param('car_id') carId: number, @Body() date: RequestDateDto):
    Promise<ResponseMessage | BadRequestException> {
        return await this.rentDayService.getInfoPossibleToRent(carId, date)
    }

    @ApiParam({ name: 'car_id' })
    @Post(':car_id/calc')
    async rentAutoCalculation(@Param('car_id') carId: number, @Body() date: RequestDateDto):
    Promise<ResponseMessage | BadRequestException> {
        return await this.rentDayService.rentAutoCalculation(carId, date)
    }

    @Post('/create_session')
    async rentAutoSession(@Body() createRentDto: CreateRentDto): Promise<ResponseMessage | BadRequestException>  {
        return await this.rentDayService.rentAutoSession(createRentDto)
    }

    @ApiParam({ name: 'rent_month' })
    @Get('/:rent_month/report')
    async findRentByMonth(@Param('rent_month') date: string): Promise<ResponseReportRentDaysDto | BadRequestException>  {
        return await this.rentDayService.getRentReportByMonth(date)
    }
}

