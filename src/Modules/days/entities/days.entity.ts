export class DaysEntity {
    constructor({ carId, fromDate, toDate }) {
      this.carId = carId;
      this.fromDate = fromDate;
      this.toDate = toDate;
    }
    carId: number;
    fromDate: string;
    toDate: string;
  }
