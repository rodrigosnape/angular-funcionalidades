import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  message:string = 'Sou o Componente filho';

  dizerOi(){
    alert('Oi!!!!');
  }
}
