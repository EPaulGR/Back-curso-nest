import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model S',
      year: 2021,
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A3',
      year: 2019,
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'M3',
      year: 2020,
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
      year: 2018,
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car: any) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  public createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (!carDB) throw new NotFoundException(`Car with id ${id} not found`);
    this.cars = this.cars.map((car: any) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  public deleteCar(id: string) {
    const car = this.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    this.cars = this.cars.filter((car: any) => car.id !== id);
    return id;
  }
}
