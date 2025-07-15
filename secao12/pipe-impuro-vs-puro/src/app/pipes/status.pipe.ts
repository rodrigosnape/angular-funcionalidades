import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true,
})
export class StatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    console.log('status pipe');

    const status: { [key:string]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    };

    return status[userStatus];
  }
}
