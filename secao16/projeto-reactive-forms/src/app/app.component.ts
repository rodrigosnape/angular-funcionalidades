import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list.response';
import { take } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  usersList: UsersListResponse = [];
  currentTabIndex: number = 0;

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

  onTabChange(value: MatTabChangeEvent) {
    console.log(value);
  }
}
