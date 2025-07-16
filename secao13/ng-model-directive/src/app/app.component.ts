import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  nome: string = 'Rodrigo Veiga';
  nome2: string = 'Rodrigo Veiga';

  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('FormControl =>',this.inputElFormControl);
    console.log('Original =>',this.inputEl);
  }
  onChange(text:string){
    console.warn(text);
    this.nome = text;
  }

  show(){
    console.log(this.nome2);
  }

  send(){
    if(this.inputElFormControl.valid && this.inputElFormControl.touched){
      console.warn('Enviado com sucesso')
    }
  }
}
