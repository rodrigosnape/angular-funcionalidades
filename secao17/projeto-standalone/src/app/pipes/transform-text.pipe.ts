console.log('TransformTextPipe');
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText',
  standalone: true
})
export class TransformTextPipe implements PipeTransform {

  transform(value:string): string {
    return value.toUpperCase();;
  }

}
