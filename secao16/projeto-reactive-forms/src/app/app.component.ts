import { UpdateUserService } from './services/update-user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list.response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';
import { UserInformationsContainerComponent } from './components/user-informations-container/user-informations-container.component';

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

  @ViewChild(UserInformationsContainerComponent) userInfoContainerComp!: UserInformationsContainerComponent;

  
  constructor(
    private readonly _usersService: UsersService,
    private readonly _matDialog: MatDialog,
    private readonly _updateUserService: UpdateUserService
  ){}
  
  ngOnInit(){
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
    if(this.userFormUpdated){

      this.openConfirmationDialog({
          title: 'O Formulári foi alterado',
          message: 'Deseja realmente cancelar as alterações feitas no formulário?',
        },
        (value:boolean) => {
          if(!value) return;

          this.isInEditMode = false;
          this.userFormUpdated = false;
      });

    } else {
      this.isInEditMode = false;
    }
  }

  onSaveButton() {
    this.openConfirmationDialog({
        title: 'Confirmar alteração de dados',
        message: 'Deseja realmente salvar os valores alterados?',
      },
      (value:boolean) => {
        if (!value) return;

        this.saveUserInfos();
        
        this.isInEditMode = false;
        this.userFormUpdated = false;
      }
    )
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
    this.userFormUpdated = true;
  }

  private openConfirmationDialog(data: IDialogConfirmationData, callback: (value: boolean) => void) {
      const dialogRef = this._matDialog.open(ConfirmationDialogComponent, {
        data,
      });

      dialogRef.afterClosed().subscribe(callback);
  }

  private saveUserInfos(){
    const newUser: IUser = this.convertUserFormToUser();

    this._updateUserService.updateUser(newUser).subscribe((newUserResponse: IUser) => {
      if(this.userSelectedIndex === undefined) return;

      this.usersList[this.userSelectedIndex] = newUserResponse
    });
  }

  private convertUserFormToUser(): IUser {
    console.log('this.userInfoContainerComp',this.userInfoContainerComp);
    console.log('this.userInfoContainerComp getRawValue()',this.userInfoContainerComp.userForm.getRawValue());
    return {} as IUser;
  }
}
