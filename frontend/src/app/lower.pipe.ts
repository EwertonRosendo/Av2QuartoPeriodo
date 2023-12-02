import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let values = value.split('');
    let result = '';

    for (let v of values){
      result += this.capitalize(v);
    }

    return result;
  }
  capitalize(value:string){
    return value.substr(0,1).toLowerCase()
  }
}
