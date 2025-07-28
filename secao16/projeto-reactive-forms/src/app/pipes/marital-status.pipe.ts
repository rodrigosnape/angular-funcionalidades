import { MaritalStatusEnum } from './../enums/marital-status.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number | undefined): string {
    const maritalStatusMap: { [key in MaritalStatusEnum]: string} = {
      [MaritalStatusEnum.SINGLE]: 'Solteiro',
      [MaritalStatusEnum.MARRIED]: 'Casado',
      [MaritalStatusEnum.DIVORCED]: 'Divorciado',
    };

    return maritalStatus ? maritalStatusMap[maritalStatus as MaritalStatusEnum] : '';
  }

}
