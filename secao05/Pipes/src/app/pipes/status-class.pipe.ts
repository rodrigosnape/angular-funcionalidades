import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'statusClass'
})
export class StatusClassPipe implements PipeTransform {

  transform(status: number): string {
    console.log('StatusClassPipe', status);
    /* 
    switch (status) {
      case 1:
        return 'active';
      case 2:
        return 'partial';
      case 3:
        return 'blocked';
      default:
        return '';
    } */

    //OU
    // Solução Elegante 1
/*     const obj: { [key:number]: string} = {
        1: 'active',
        2: 'partial',
        3: 'blocked',
    };   */  


    //OU
    // Solução Elegante 2
        const obj: Record<number, string> = {
        1: 'active',
        2: 'partial',
        3: 'blocked',
    }

    return obj[status];

  }

}