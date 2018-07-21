import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {CarService} from '../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarComponent implements OnInit {
  carData: Car[] = [];
  @Input() filterCar;
  @Input() filterField;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarData().subscribe((cars) => {
      this.carData = cars;
    });
  }

  onFetchCarData() {
    this.carService.getCarData().subscribe((cars) => {
      this.carData = cars;
    });
  }
}
