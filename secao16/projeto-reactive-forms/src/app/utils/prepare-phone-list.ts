import { PhoneTypeEnum } from './../enums/phone-type.enum';
import { IPhone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionsMap } from "./phone-type-description-map";
import { IPhoneToDisplay } from '../interfaces/phone-to-display.interface';

//Função mais insana até este ponto do curso...
export const preparePhoneList =  (originalUserPhoneList: PhoneList, isDisplayPhone: boolean, callback: (phone: IPhoneToDisplay) => void) => {
    Object.keys(phoneTypeDescriptionsMap).map(Number).forEach((phoneType: number) => {
        //console.log(phoneType);
        const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType);
        //console.log(phoneFound);

        let phoneNumber = '';

        if(isDisplayPhone){
            phoneNumber = phoneFound ? formatPhoneNumberToDisplay(phoneFound) : '-';
        } else {
            phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : '';
        }

        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionsMap[phoneType as PhoneTypeEnum],
            phoneNumber: phoneNumber,
        });
    });
};


const formatPhoneNumberToEdit = (phone: IPhone) => {
    return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(/[+\-]/g, '');
};

const formatPhoneNumberToDisplay = (phone: IPhone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
};