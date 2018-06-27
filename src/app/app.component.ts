import { Component, ViewEncapsulation } from '@angular/core';
import {CarService} from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nestedCarJSON = '';
  accountJSON = '';
  drugJSON = '';

  constructor(private carService: CarService) { }


  onFetchAccounts() {
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
         this.nestedCarJSON = data;
         console.log(this.nestedCarJSON);
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
  }
}
