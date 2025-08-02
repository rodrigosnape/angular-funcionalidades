import { Observable, of } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { UsersService, IUser } from '../../services/users.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

    private readonly _usersService = inject(UsersService);
    
    usersList$: Observable<IUser[]> = of([]);

    ngOnInit(): void {
        this.usersList$ = this._usersService.getUsers();
    }
}
