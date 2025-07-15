import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nome: string = 'Rodrigo Veiga';
  nome2: string = 'Rodrigo Veiga';

  onChange(text:string){
    console.warn(text);
    this.nome = text;
  }

  show(){
    console.log(this.nome2);
  }
}
