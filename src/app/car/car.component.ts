import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {CarService} from '../service/car.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarComponent implements OnInit {
  carData: Car[] = [];
  carData$: Observable<Car[]> = new Observable<Car[]>();
  @Input() filterCar;
  @Input() filterField;

  constructor(private carService: CarService) { }

  ngOnInit() {
  /*  this.carService.getCarData().subscribe((cars) => {
      this.carData = cars;
    }); */
    this.carData$ = this.carService.getCarData();
  }

 /* onFetchCarData() {
    this.carService.getCarData().subscribe((cars) => {
      this.carData = cars;
    });
  }*/
}
