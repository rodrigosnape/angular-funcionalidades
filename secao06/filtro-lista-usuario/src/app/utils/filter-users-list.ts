import isWithinInterval from "date-fns/isWithinInterval";
import { IFilterOptions } from "../interfaces/filter-options.interface";
import { IUser } from "../interfaces/user/user.interface";

  const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser [] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED) {
      return usersList;
    }

    /* Opção mais elegante (?!)
    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: new Date(startDate),
      end: new Date(endDate)
    });
    const filteredList = usersList.filter(checkDateInterval);
    */

    //Feijão com arroz
    const filteredList = usersList.filter((user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: new Date(startDate),
      end: new Date(endDate)
    })); 
    
    return filteredList;
  }

  const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;
    if(NAME_NOT_TYPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }

  const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPED = status === undefined;
    if(STATUS_NOT_TYPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.ativo === status);
    return filteredList;
  }

  export { filterUsersList };