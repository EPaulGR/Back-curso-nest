import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Ford',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Tesla',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'BMW',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Audi',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new Error(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    if (!brandDB) throw new Error(`Brand with id ${id} not found`);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brand.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    if (!brand) throw new Error(`Brand with id ${id} not found`);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return id;
  }

  public fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
