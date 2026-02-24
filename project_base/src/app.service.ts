import { Injectable } from '@nestjs/common';
import { PersonModel } from './person.model';

@Injectable()
export class AppService {
  database: PersonModel[] = [
    {id: 1, name: 'Pedro', age: 20},
    {id: 2, name: 'Maria', age: 25},
    {id: 3, name: 'Juan', age: 30}
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getAll() {
    return this.database;
  }
}
