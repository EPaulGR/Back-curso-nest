import { Car } from 'src/cars/interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
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
    brand: 'Mercedes',
    model: 'C63',
    year: 2021,
  },
  {
    id: uuid(),
    brand: 'Porsche',
    model: '911',
    year: 2022,
  },
  {
    id: uuid(),
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2023,
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024,
  },
];
