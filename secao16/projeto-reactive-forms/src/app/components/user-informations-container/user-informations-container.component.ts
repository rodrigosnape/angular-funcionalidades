import { IUser } from './../../interfaces/user/user.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserFormController } from './user-form-controller';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnChanges {

    currentTabIndex: number = 1;

    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Input({ required: true } ) isInEditMode: boolean = false;
    
    ngOnChanges(changes: SimpleChanges): void {
      this.currentTabIndex = 0; // Reseta o índice da aba para a primeira aba quando o usuário selecionado mudar

      const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;


      if(HAS_USER_SELECTED) {
        this.fulfillUserForm(this.userSelected);
      }
    }
}
