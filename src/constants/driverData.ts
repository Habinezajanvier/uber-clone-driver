export class DriverData {
  plateNumber: string;
  driver: string;
  phoneNumber: string;
  rating: number;
  id: string | number;
  price?: number;

  constructor(
    plateNumber: string,
    driver: string,
    phoneNumber: string,
    rating: number,
    id: string | number,
    price?: number,
  ) {
    this.driver = driver;
    this.rating = rating;
    this.plateNumber = plateNumber;
    this.phoneNumber = phoneNumber;
    this.id = id;
    this.price = price;
  }
}

const driverData: DriverData[] = [
  new DriverData('RAC 123 V', 'John Doe', '0780000000', 2, 1, 3000),
  new DriverData('RAC 124 V', 'Jane Doe', '0780000001', 3, 2, 1200),
  new DriverData('RAC 125 V', 'John Kanani', '0780000003', 4, 3, 5000),
  new DriverData('RAC 126 V', 'Damas Kan', '0780000004', 3, 4, 12000),
  new DriverData('RAC 127 V', 'Willy kelly', '0780000005', 5, 5, 12390),
  new DriverData('RAC 127 V', 'Kevin Jade', '0780000006', 5, 6, 12000),
];

export default driverData;
