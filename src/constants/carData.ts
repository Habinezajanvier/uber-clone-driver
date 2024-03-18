export enum CarType {
  BUS = 'bus',
  MINIBUS = 'minibus',
}

export class CarData {
  plateNumber: string;
  driver: string;
  time: string;
  location: string;
  id: string | number;
  type: CarType;

  constructor(
    plateNumber: string,
    driver: string,
    time: string,
    location: string,
    id: string | number,
    type: CarType,
  ) {
    this.driver = driver;
    this.location = location;
    this.plateNumber = plateNumber;
    this.time = time;
    this.id = id;
    this.type = type;
  }
}

const carData: CarData[] = [
  new CarData('RAC 123 V', 'John Doe', '11:00', 'Kinamba', 1, CarType.BUS),
  new CarData('RAC 124 V', 'Jane Doe', '12:00', 'Kacyiru', 2, CarType.MINIBUS),
  new CarData(
    'RAC 125 V',
    'John Kanani',
    '13:00',
    'Nyamirambo',
    3,
    CarType.MINIBUS,
  ),
  new CarData(
    'RAC 126 V',
    'Damas Kan',
    '14:00',
    'Kimisigara',
    4,
    CarType.MINIBUS,
  ),
  new CarData('RAC 127 V', 'Willy kelly', '12:00', 'Kimironko', 5, CarType.BUS),
  new CarData('RAC 127 V', 'Kevin Jade', '17:00', 'Remera', 6, CarType.MINIBUS),
];

export default carData;
