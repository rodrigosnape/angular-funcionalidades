import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Pega o elemento pela # (não é o id) que é o template variable
  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>

  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>

  updateInputText(){
    console.log(this.meuInputEl);
    //nativeElemento é o elemento propriamente dito
    this.meuInputEl.nativeElement.value = 'Texto Atualizado!';
  }

  focus(){
    this.meuInputEl.nativeElement.focus();
  }

  updateDivContent(){
    this.minhaDivEl.nativeElement.textContent = 'Conteúdo atualizado';
  }
}
