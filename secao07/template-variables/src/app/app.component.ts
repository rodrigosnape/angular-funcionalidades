import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Pega a instância do Componente. Diferentemente de um HTML comum
  //Melhor é usar o @ViewChild é usar @Input e @Output
  @ViewChild('filhoComp') filhoCompRef!:FilhoComponent;

  hello(){
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse OI!!!';
  }

}
