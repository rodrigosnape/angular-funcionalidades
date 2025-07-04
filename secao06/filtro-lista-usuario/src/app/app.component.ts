import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

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

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
 }
}
