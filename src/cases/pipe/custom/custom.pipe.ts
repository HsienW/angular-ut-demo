import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value.length === 10) {
      return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
    }
    return 'Error';
  }

}
