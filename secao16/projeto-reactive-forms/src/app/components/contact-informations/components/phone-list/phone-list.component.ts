import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/phone.interface';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnChanges{
  
  phoneListToDisplay: any[] = [];

  @Input( { required: true }) userPhoneList: PhoneList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);
    if(PHONE_LIST_LOADED){
      this.preperePhoneListToDisplay();
    }
  }

  preperePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const phoneTypeDescriptionsMap: { [key in PhoneTypeEnum]: string } = {
      [PhoneTypeEnum.RESIDENTIAL]: 'Residencial',
      [PhoneTypeEnum.MOBILE]: 'Celular',
      [PhoneTypeEnum.EMERGENCY]: 'Emergencial',
    }

    //console.log(Object.keys(phoneTypeDescriptionsMap));

    Object.keys(phoneTypeDescriptionsMap).map(Number).forEach((phoneType: number) => {
      //console.log(phoneType);
      const phoneFound = this.userPhoneList?.find((userPhone: IPhone) => userPhone.type === phoneType);
      //console.log(phoneFound);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionsMap[phoneType as PhoneTypeEnum],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      });
    });

    //console.log(this.phoneListToDisplay);
  }

  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }

}
