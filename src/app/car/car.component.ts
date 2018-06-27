import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CarModel} from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CarComponent implements OnInit {

  @Input() car: CarModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
