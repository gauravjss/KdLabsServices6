import {Car} from '../Models/car';


export class  DriverModel {

  constructor(public id: number,
              public name: string,
              public age: number,
              public car: Car) { }
}
