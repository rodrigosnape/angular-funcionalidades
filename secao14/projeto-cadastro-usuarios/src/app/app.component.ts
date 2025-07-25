import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _matDialog: MatDialog
  ){}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number){
    const userFound = this.usersList[userIndex];
    if(userFound){
      this.userSelectedIndex = userIndex;
      //metodo para clonar do javascript
      this.userSelected = structuredClone(userFound);
    }
  }

  showRealUser(){
    console.log(this.usersList);
  }

  onFormSubmit() {
    if(this.userSelectedIndex === undefined) return;
    const originalUser = this.usersList[this.userSelectedIndex];
    this.openBeforeAndAfterDialog(originalUser, this.userSelected, this.userSelectedIndex );
  }

  openBeforeAndAfterDialog(originalUser: IUser, updatedUser:IUser, userSelectedIndex: number) {
    /*ou, como eles têm o mesmo nome, poderia passar data:{
      originalUser,
      updatedUser
    }*/
    const dialogRef = this._matDialog.open(UserBeforeAndAfterDialogComponent, {
      data: {
        originalUser: originalUser,
        updatedUser: updatedUser
      },
      minWidth: '70%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result',result);
      if(result){
         this.confirmUserUpdate(updatedUser, userSelectedIndex);
      }
    });
  }

  confirmUserUpdate(updatedUser: IUser, userSelectedIndex: number) {
    console.log('confirmUserUpdate');
    //passa o clone para nao passar a mesma referência...
    this.usersList[userSelectedIndex] = structuredClone(updatedUser);

    console.group('Alteração finalizada - Lista de usuário atualizada: ');

    console.log('Lista de usuários atual', this.usersList);

    console.groupEnd();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      //console.log(this.usersList);
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      //console.log(this.genresList);
    });
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
      //console.log(this.statesList);
    });
  }
}
