import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true,
})
export class StatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    console.log('status pipe');
      try {
        if(userStatus === 3){
        throw new Error('Ocorreu um erro.');
      }
        const status: { [key:string]: string } = {
          1: 'Ativo',
          2: 'Inativo',
        };
        return status[userStatus];
    } catch (error) {
      return 'Status Inválido';
    }
    

    
  }
}
