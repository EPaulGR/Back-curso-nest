import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private brandsService: BrandsService,
    private carsSerivce: CarsService,
  ) {}
  populate() {
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carsSerivce.fillCarsWithSeedData(CARS_SEED);
    return 'This action adds seed data';
  }
}
