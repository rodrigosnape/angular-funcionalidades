import { IUser } from './../../interfaces/user/user.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent implements OnChanges {

    currentTabIndex: number = 1;

    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Input({ required: true } ) isInEditMode: boolean = false;
    //Argumento existe, mas no momento não é utilizado. Então ele fica como _  (?)
    ngOnChanges(_: SimpleChanges): void {
      this.currentTabIndex = 1; // Reseta o índice da aba para a primeira aba quando o usuário selecionado mudar
    }
}
