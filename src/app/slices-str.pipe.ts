import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicesStr'
})
export class SlicesStrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.slice(0, 60);
  }
}
