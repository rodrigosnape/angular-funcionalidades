import { AddressTypeEnum } from './../../../../enums/address-type.enum';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { IAddress } from '../../../../interfaces/user/address.interface';
import { addressTypeDescriptionMap } from '../../../../utils/address-type-description-map';
import { IAddressToDisplay } from '../../../../interfaces/address-to-display.interfaces';


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss'
})
export class AddressListComponent implements OnChanges {

  addresListToDisplay: IAddressToDisplay[] = [];

  @Input({ required: true }) userAddressList: AddressList | undefined = [];

    ngOnChanges(changes: SimpleChanges): void {
      const ADDRESS_LIST_LOADED = Array.isArray(changes['userAddressList'].currentValue);

      if(ADDRESS_LIST_LOADED){
        this.prepareAddressListToDisplay();
      }
  }
  prepareAddressListToDisplay() {
    this.addresListToDisplay = [];



    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => {
      const addressFound = this.userAddressList?.find((userAdress) => userAdress.type === addressType);

      this.addresListToDisplay.push(this.returnAddressToDisplay(addressFound, addressType));
    });
    
  }
  returnAddressToDisplay(address: IAddress | undefined, addressType: number): IAddressToDisplay {
    if(!address){
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-'
      }
    }

    //destructoring do address (...address). 
    // Ele vai pegar todas as propriedades do address e colocar dentro do objeto retornado
    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
      ...address
    }
  }

}
