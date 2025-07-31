import { IUserForm, IUserFormGeneralInformations } from "../interfaces/user-form.interface";
import { IUser } from "../interfaces/user/user.interface";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br-date";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = {...convertGeneralInformations(userForm.generalInformations)};

    return newUser as IUser;
};

const convertGeneralInformations = (generalInformations: IUserFormGeneralInformations): Partial<IUser> => {
    return {
        name: generalInformations.name,
        email: generalInformations.email,
        country: generalInformations.country,
        state: generalInformations.state,
        maritalStatus: generalInformations.maritalStatus,
        monthlyIncome: generalInformations.monthlyIncome,
        birthDate: convertDateObjToPtBrDate(generalInformations.birthDate),
    }
}