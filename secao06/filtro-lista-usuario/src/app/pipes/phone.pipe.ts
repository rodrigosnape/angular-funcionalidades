import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11
    
    if(INVALID_PHONE) {
      return 'Telefone indisponível ou inválido';
    }

    const CELLPHONE = phone.length === 11;

    if (CELLPHONE) {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
    } else {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    }

  }

}
