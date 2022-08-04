import { PG_CONNECTION } from '../../estimates/estimates';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CarsRepository {
  constructor(@Inject(PG_CONNECTION) private readonly conn: any) { }
  async createTable() {
    const query = `
    CREATE TABLE Auto (
      car_id int PRIMARY KEY,
      car_number varchar(255),
      name varchar(255)
      )`
      const res = await this.conn.query(query)
      return res.rows[0]
    }

    async insertDataToTable() {
      const query =  `INSERT INTO Auto(car_id, car_number,name)  VALUES  
      (1, 'audi', '1111a'),
      (2, 'mercedes', '2222b'),
      (3, 'honda', '3333c'),
      (4, 'lexus', '4444e'),
      (5, 'toyota', '5555r')
      `;
      const res = await this.conn.query(query)
      return res.rows[0]
    }

  async findById(carId: number) {
    const query = `SELECT * FROM Auto WHERE car_id = ${carId}`;
    const res = await this.conn.query(query);
    return res.rows[0];
  }

  async findAllAutos() {
    const query = `Select * FROM Auto`
    const res = await this.conn.query(query)
    return res.rows
  }
}
