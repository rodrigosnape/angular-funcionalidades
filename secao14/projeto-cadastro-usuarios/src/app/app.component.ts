import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: any = [];

  constructor(
    private readonly _usersService: UsersService
  ){}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log(this.usersList);
    });
  }
}
