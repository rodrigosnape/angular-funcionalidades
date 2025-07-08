import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement> 

  //A Injeção de dependência do ElementRef permite que "APENAS" o conteúdo do app component seja acessado
  constructor(
    private readonly _elRef: ElementRef, 
    private readonly _testeService: TesteService){}

  ngOnInit(){
    console.log(this._elRef);
    // não é possível usar getElementById
    //_elRef.nativeElement.getElementById('#minha-outra-div')
    const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    divEl.textContent = "Sou a outra div!!!!!!!!!!";
    divEl.style.backgroundColor = "green";
    divEl.style.color = "white";
    divEl.style.padding = "10px";
    divEl.style.cursor = 'pointer';

    divEl.addEventListener('click', () => console.log("clicado"));
    console.log(divEl);
  }

  ngAfterViewInit(){
   this.divEl.nativeElement.style.backgroundColor = 'orange'; 
   this.divEl.nativeElement.textContent = 'Sou uma div!';
   this.divEl.nativeElement.classList.add('minha-classe');
  }

  createElement(){
    //o document é global e não específico do app component
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div!';
    novaDiv.classList.add('bg-red');

    this._elRef.nativeElement.appendChild(novaDiv);
  }

  createElementUsingService(){
    this._testeService.create(this._elRef);
  }
}
