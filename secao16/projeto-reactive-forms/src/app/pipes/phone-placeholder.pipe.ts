import { Pipe, PipeTransform } from '@angular/core';
import { PhoneTypeEnum } from '../enums/phone-type.enum';

@Pipe({
  name: 'phonePlaceholder'
})
export class PhonePlaceholderPipe implements PipeTransform {

  transform(phoneType: number): string {
      console.log('PhoneMaskPipe');
      const phoneMaskmap: { [key in PhoneTypeEnum]: string} = {
        [PhoneTypeEnum.RESIDENTIAL]: '+55 21 1234-5678',
        [PhoneTypeEnum.MOBILE]: '+55 21 91234-5678',
        [PhoneTypeEnum.EMERGENCY]: '+55 21 1234-5678 ou +55 21 91234-5678',
      }
  
      return phoneMaskmap[phoneType as PhoneTypeEnum];
  }

}
