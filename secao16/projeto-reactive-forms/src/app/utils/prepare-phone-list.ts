import { PhoneTypeEnum } from './../enums/phone-type.enum';
import { IPhone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionsMap } from "./phone-type-description-map";

//Função mais insana até este ponto do curso...
export const preparePhoneList =  (originalUserPhoneList: PhoneList, callback: (phone: { type: number; typeDescription:string; phoneNumber: string}) => void) => {
    Object.keys(phoneTypeDescriptionsMap).map(Number).forEach((phoneType: number) => {
        //console.log(phoneType);
        const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType);
        //console.log(phoneFound);

        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionsMap[phoneType as PhoneTypeEnum],
            phoneNumber: phoneFound ? formatPhoneNumber(phoneFound) : '-',
        });
    });
};

const formatPhoneNumber = (phone: IPhone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}