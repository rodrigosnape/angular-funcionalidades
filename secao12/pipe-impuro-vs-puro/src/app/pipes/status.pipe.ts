import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: false,
})
export class StatusPipe implements PipeTransform {
  counter = 0;
  transform(userStatus: number): string {
    //Pipe impuro compartilha o estado
    this.counter ++;

    console.log('status pipe',this.counter);
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
