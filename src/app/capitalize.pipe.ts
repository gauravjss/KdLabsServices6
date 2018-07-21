import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(inputString: any, args?: boolean): any {
    let strArray: string[] = [];
    const resultArray: string[] = [];
    if (args) {
      strArray = inputString.toString().toLowerCase().split(' ');
    } else {
      strArray = inputString.toString().split(' ');
    }
    strArray.forEach((word) => {
      resultArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return resultArray.join(' ');
  }
}
