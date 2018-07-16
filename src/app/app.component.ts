import { Component } from '@angular/core';
import {CarService} from './service/car.service';
import {HttpResponse} from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nestedCarJSON = '';
  accountJSON = '';
  drugJSON = '';
  filteredCar = '';

  constructor(private carService: CarService) { }


  /*onFetchAccounts() {
     this.carService.getCarData().subscribe(
       (data) => {
         this.accountJSON = data;
         console.log(this.accountJSON);
       }
     );
  }



   onFetchNestedCars() {
      this.carService.getNestedCars().subscribe(
      (data) => {
          this.nestedCarJSON = data.body;
          console.log(this.nestedCarJSON);
        }, () => {

        }, () => {

        }

     (response: HttpResponse<any>) => {
          console.log('HTTP response', response);
          console.log('HTTP response : Headers', response.headers);
          console.log('HTTP response : status', response.status);
          console.log('HTTP response : url', response.url);
          // Note that we don't need parse the response, we can access
          // it directly through 'body' property
          console.log('HTTP response : body', response.body);
        }

     );
  }

  onFetchDrugPrice() {
    this.carService.getDrugPrice().subscribe(
      (data) => {
        this.drugJSON = data.response.detail.costDetailsList.costDetails;
        console.log(this.drugJSON);
      }
    );
  }*/
}
