import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = 'Rodrigo';

  pessoa = {
    name: 'Rodrigo',
    age: '44',
    status: 1
  }

    pessoa2 = {
    name: 'Renato',
    age: '9',
    status: 2
  }

    pessoa3 = {
    name: 'Fabíola',
    age: '41',
    status: 3
  }

  getStyle(status:number){
    console.log('getStyle', status);
    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3
    }
  }

}
