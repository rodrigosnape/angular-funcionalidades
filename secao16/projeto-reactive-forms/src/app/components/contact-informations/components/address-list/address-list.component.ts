import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { IAddressToDisplay } from '../../../../interfaces/address-to-display.interfaces';
import { prepareAddressList } from '../../../../utils/prepare-address-list';


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

    const originalAddressList = this.userAddressList && this.userAddressList.length > 0 ? this.userAddressList : [];

    prepareAddressList(originalAddressList, true, (address) => {
       this.addresListToDisplay.push(address);
    });
    
  }

}
