import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return this.carsService.createCar(body);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.carsService.updateCar(id, body);
  }

  @Patch(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.deleteCar(id);
  }
}
