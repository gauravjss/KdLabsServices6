import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArray: any, filterString: string, propName: string): any {
    console.log(propName);

    if (inputArray.length === 0 || filterString === '' ||  filterString === 'undefined') {
      return inputArray;
    }
    return _.filter(inputArray, (car) => {
          console.log(typeof car[propName]);
          if (car[propName] === null) {
            return true;
          } if (typeof(car[propName]) === 'number') {
            return (car[propName]).toString().toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
          } else {
            return car[propName].toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
          }
    });
  }
}
