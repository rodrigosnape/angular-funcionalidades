import { Component, inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { UserListService } from '../../services/users-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss'
})
export class UserContainerComponent {
  user$: Observable<IUser> = of ({} as IUser);

  private readonly _usersListService = inject(UserListService);

  @Input() set userId(value: string){
    console.log('value', value);

    this.user$ = this._usersListService.getUser(value);
  }
}
