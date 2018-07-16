import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Car} from '../Models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
