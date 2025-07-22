import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-before-and-after-dialog',
  templateUrl: './user-before-and-after-dialog.component.html',
  styleUrl: './user-before-and-after-dialog.component.scss'
})
export class UserBeforeAndAfterDialogComponent {
  //Ele recebe isso pelo data do _matDialog.open
  //Assim que ele pega o valor dentro do Diaglog... [Doidera]
  //E tem que ser público para ser pego no html
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { originalUser: IUser, updatedUser: IUser }
  ){}
}
