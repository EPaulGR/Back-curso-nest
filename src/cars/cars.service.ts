import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Tesla',
      model: 'Model S',
      year: 2021,
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'A3',
      year: 2019,
    },
    {
      id: 4,
      brand: 'BMW',
      model: 'M3',
      year: 2020,
    },
    {
      id: 5,
      brand: 'Ford',
      model: 'Mustang',
      year: 2018,
    },
    {
      id: 6,
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2017,
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car: any) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  public createCar(body: any) {
    // this.car0s.push(body);
    return body;
  }

  public updateCar(id: number, body: any) {
    // this.cars.push(body);
    return body;
  }

  public deleteCar(id: number) {
    return id;
  }
}
