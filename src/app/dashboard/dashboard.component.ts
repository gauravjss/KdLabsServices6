import { Component, OnInit } from '@angular/core';
import {Car} from '../Models/car';
import {CarService} from '../service/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carData: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarData().subscribe((cars) => {
      this.carData = cars.cars;
      console.log(this.carData);
    });
  }

}
