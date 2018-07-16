import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from '../Models/car';
import {CarService} from '../service/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carData: Car[];
  filterCar = '';
  filterField = 'Name';

  constructor() { }

  ngOnInit() {

  }

  onFilterChanged(event) {
    this.filterCar = event;
  }

  onFilterFieldChanged(event) {
    this.filterField = event;
    console.log(this.filterField);
  }

}
