import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {
      name: 'Felipe',
      status: 1,
    },
    {
      name: 'Laura',
      status: 2,
    },
    {
      name: 'João',
      status: 1,
    },
    {
      name: 'Maria',
      status: 2,
    }
  ];

  inactivateUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  addUser() {
    this.users.push({
      name: 'Marcos',
      status: 1,
    });
  }

  //Pior do que um Pipe impuro

  getUserStatus(userStatus: number): string {
    console.log('getUserStatus');
      const status: { [key:string]: string } = {
        1: 'Ativo',
        2: 'Inativo',
      };
  
      return status[userStatus];
    }
}
