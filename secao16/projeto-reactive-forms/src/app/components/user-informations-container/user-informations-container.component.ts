import { IUser } from './../../interfaces/user/user.interface';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { distinctUntilChanged, take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {

    currentTabIndex: number = 1;
    countriesList: CountriesList = [];
    statesList: StatesList = [];

    private readonly _contriesService = inject(CountriesService);
    private readonly _statesService = inject(StatesService);


    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Input({ required: true } ) isInEditMode: boolean = false;

    @Output('onFormStatusChangeEmitt') onFormStatusChangeEmitt = new EventEmitter<boolean>();
    
    ngOnInit(){
      this.onUserFormStatusChange();      
      this.getCountriesList();
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      this.currentTabIndex = 0; // Reseta o índice da aba para a primeira aba quando o usuário selecionado mudar
      
      const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;
      
      
      if(HAS_USER_SELECTED) {
        this.fulfillUserForm(this.userSelected);

        this.getStatesList(this.userSelected.country);
      }
    }

    onCountrySelected(countryName: string) {
      this.getStatesList(countryName);
    }

    mostrarForm() {
      console.log('--------------------------->',this.userForm);
    }

    onUserFormStatusChange() {
      this.userForm.statusChanges
        .pipe(distinctUntilChanged())
        .subscribe(() => this.onFormStatusChangeEmitt.emit(this.userForm.valid));
    }
    
    getStatesList(country: string) {
      this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
        this.statesList = statesList;
      })
    }

    getCountriesList() {     
      this._contriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
        this.countriesList = countriesList;
      })
    }
}
