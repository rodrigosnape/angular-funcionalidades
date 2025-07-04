import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['name','date','status'];
  @Input({required: true}) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmmitt = new EventEmitter<IUser>;

  onUserSelected(user: IUser): void {
    console.log('User selected:', user);
    this.userSelectedEmmitt.emit(user);
  }
}


