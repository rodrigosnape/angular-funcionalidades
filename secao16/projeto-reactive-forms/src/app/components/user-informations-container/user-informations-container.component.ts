import { IUser } from './../../interfaces/user/user.interface';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { distinctUntilChanged, Subscription, take } from 'rxjs';
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
    userFormValueChangesSubs!: Subscription;

    private readonly _contriesService = inject(CountriesService);
    private readonly _statesService = inject(StatesService);


    @Input({ required: true }) userFormRawValueTrigger: number = 0;

    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Input({ required: true } ) isInEditMode: boolean = false;

    @Output('userFormRawValue') userFormRawValueEmitt = new EventEmitter<Object>();

    @Output('onFormStatusChangeEmitt') onFormStatusChangeEmitt = new EventEmitter<boolean>();
    @Output('onUserFormFirstChange') onUserFormFirstChangeEmitt = new EventEmitter<void>();
    
    ngOnInit(){
      this.onUserFormStatusChange();      
      this.getCountriesList();
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      this.currentTabIndex = 0; // Reseta o índice da aba para a primeira aba quando o usuário selecionado mudar
      
      const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;
      
      
      if(HAS_USER_SELECTED) {
        if(this.userFormValueChangesSubs){
          this.userFormValueChangesSubs.unsubscribe();
        } 
        this.fulfillUserForm(this.userSelected);

        this.onUserFormFirstChange();

        this.getStatesList(this.userSelected.country);
      }

      const SEND_USER_FORM_RAW_VALUE = changes['userFormRawValueTrigger'];

      if(SEND_USER_FORM_RAW_VALUE){
        this.userFormRawValueEmitt.emit(this.userForm.getRawValue());
      }
    }

    onCountrySelected(countryName: string) {
      this.getStatesList(countryName);
    }

    mostrarForm() {
      console.log('--------------------------->',this.userForm);
    }

    private onUserFormFirstChange() {
      this.userFormValueChangesSubs = this.userForm.valueChanges
        .pipe(take(1))
        .subscribe(() => this.onUserFormFirstChangeEmitt.emit());
    }

    private onUserFormStatusChange() {
      this.userForm.statusChanges
        .pipe(distinctUntilChanged())
        .subscribe(() => this.onFormStatusChangeEmitt.emit(this.userForm.valid));
    }
    
    private getStatesList(country: string) {
      this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
        this.statesList = statesList;
      })
    }

    private getCountriesList() {     
      this._contriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
        this.countriesList = countriesList;
      })
    }
}
