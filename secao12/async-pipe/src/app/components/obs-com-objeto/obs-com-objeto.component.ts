import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../Interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy{

  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  //Padrão ($) quando se cria um observable
  user$!: Observable<IUserResponse>;

  constructor(private readonly _usersService: UsersService){

  }

  ngOnInit(){
    //Será usado pelo async pipe
    this.user$ = this._usersService.getUserById(2);

    //===========
    this.userSubs = this._usersService.getUserById(1).subscribe((userResponse) => {
      this.user = userResponse;
    });
  }

  ngOnDestroy(){
      //O async pipe já faz o unsubscribe automaticamente
      this.userSubs && this.userSubs.unsubscribe();
  }

  onBtnClick(userId: number){
    this.user$ = this._usersService.getUserById(userId);
  }
}
