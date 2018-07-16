import { Pipe, PipeTransform } from '@angular/core';
import * as _str from 'string-fn';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return _str.titleCase(value);
  }
}
