import { IUser } from './../../interfaces/user/user.interface';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {

    currentTabIndex: number = 1;
    countriesList: CountriesList = [];

    private readonly _contriesService = inject(CountriesService);

    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Input({ required: true } ) isInEditMode: boolean = false;
    
    ngOnInit(){      
      this.getCountriesList();
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      this.currentTabIndex = 0; // Reseta o índice da aba para a primeira aba quando o usuário selecionado mudar
      
      const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;
      
      
      if(HAS_USER_SELECTED) {
        this.fulfillUserForm(this.userSelected);
      }
    }

    getCountriesList() {     
      this._contriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
        this.countriesList = countriesList;
      })
    }
}
