import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filter } from 'rxjs';

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

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined

    if(NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }
}
