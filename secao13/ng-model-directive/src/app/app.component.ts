import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  nome: string = 'Rodrigo Veiga';
  nome2: string = 'Rodrigo Veiga';

  @ViewChild('meuInputFormControl') inputEl!: NgModel;

  ngAfterViewInit() {
    console.log(this.inputEl);
  }
  onChange(text:string){
    console.warn(text);
    this.nome = text;
  }

  show(){
    console.log(this.nome2);
  }

  send(){
    if(this.inputEl.valid && this.inputEl.touched){
      console.warn('Enviado com sucesso')
    }
  }
}
