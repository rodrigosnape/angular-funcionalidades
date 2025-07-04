import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filter } from 'rxjs';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  
  ngOnInit() {
    //simulação de chamada a API
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
        }, 1);
  }
  
  onUserSelected(user: IUser): void {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  onFilter(filterOptions: IFilterOptions): void {
    console.log('Filter options:', filterOptions);

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
 }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser [] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }


  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
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


  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;
    if(NAME_NOT_TYPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }

    filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_TYPED = status === undefined;
    if(STATUS_NOT_TYPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.ativo === status);
    return filteredList;
  }
}
