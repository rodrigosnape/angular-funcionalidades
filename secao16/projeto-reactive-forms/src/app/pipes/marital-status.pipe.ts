import { maritalStatusDescriptionMap } from '../utils/marital-status-description-map';
import { MaritalStatusEnum } from './../enums/marital-status.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number | undefined): string {


    return maritalStatus ? maritalStatusDescriptionMap[maritalStatus as MaritalStatusEnum] : '';
  }

}
