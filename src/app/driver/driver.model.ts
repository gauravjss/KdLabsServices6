import {CarModel} from '../car/car.model';


export class  DriverModel {

  constructor(public id: number,
              public name: string,
              public age: number,
              public car: CarModel){}
}
