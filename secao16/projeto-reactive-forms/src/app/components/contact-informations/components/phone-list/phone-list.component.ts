import { IPhoneToDisplay } from './../../../../interfaces/phone-to-display.interface';
import { IPhone } from './../../../../interfaces/user/phone.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { phoneTypeDescriptionsMap } from '../../../../utils/phone-type-description-map';
import { preparePhoneList } from '../../../../utils/prepare-phone-list';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnChanges{
  
  phoneListToDisplay: IPhoneToDisplay[] = [];

  @Input( { required: true }) userPhoneList: PhoneList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);
    if(PHONE_LIST_LOADED){
      this.preperePhoneListToDisplay();
    }
  }

  preperePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const originalUserPhoneList = this.userPhoneList && this.userPhoneList.length > 0 ? this.userPhoneList : [];

    //insanidade que substituiu o resto comentado...
    preparePhoneList(originalUserPhoneList, true, (phone) => {
      this.phoneListToDisplay.push(phone);
      console.log('callback', phone);
    });

    //console.log(Object.keys(phoneTypeDescriptionsMap));

/*     Object.keys(phoneTypeDescriptionsMap).map(Number).forEach((phoneType: number) => {
      //console.log(phoneType);
      const phoneFound = this.userPhoneList?.find((userPhone: IPhone) => userPhone.type === phoneType);
      //console.log(phoneFound);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionsMap[phoneType as PhoneTypeEnum],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      });
    }); */

    //console.log(this.phoneListToDisplay);
  }

  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }

}
