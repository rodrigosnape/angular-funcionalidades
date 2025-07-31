import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list.response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isInEditMode: boolean = false;
  enableSaveButton: boolean = false;
  userFormUpdated: boolean = false;

  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  usersList: UsersListResponse = [];

  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ){}
  
  ngOnInit(){
/*      this._countriesService.getCountries().subscribe((countriesResponse) => { 
      console.log('countriesResponse',countriesResponse) 
    } );

    this._statesService.getStates('Brazil').subscribe((statesResponse) => { 
      console.log('countriesResponse',statesResponse) 
    } );

    this._citiesService.getCities('Brazil', 'Rio de Janeiro').subscribe((citiesResponse) => {
      console.log('citiesResponse', citiesResponse)
    }) */

    //take(1) é a quantidade de vezes que meu subscribe ficará ouvindo. Depois de 1, ele se desinscreve.
    this._usersService.getUsers().pipe(take(1)).subscribe((usersListResponse) => {
      //console.log('usersResponse', usersListResponse);
      this.usersList = usersListResponse;
    })
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];

    if(userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onCancelButton() {
    this.isInEditMode = false;
  }
  onEditButton() {
    this.isInEditMode = true;
  }
  onFormStatusChange(formStatus: boolean) {

    //Dá erro: ExpressionChangedAfterItHasBeenCheckedError
    //this.enableSaveButton = formStatus;

    //Solução gambiarresca oficial do time do ANGULAR
    //https://www.youtube.com/watch?v=O47uUnJjbJc&t=229s&ab_channel=Angular
    setTimeout(() => this.enableSaveButton = formStatus, 0);
  }

  onUserFormFirstChange() {
    console.log('onUserFormFirstChange');
    this.userFormUpdated = true;
  }
}
