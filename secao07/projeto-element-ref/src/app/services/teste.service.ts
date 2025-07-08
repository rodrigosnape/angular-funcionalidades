import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  //Não é possível fazer injeção de dependência no serviço
  //Pois ele não tem um template html (host) como referência (como ocorre na diretiva)
  //constructor(private readonly _elRef:ElementRef) { }

  create(elRef: ElementRef){
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div!';
    novaDiv.classList.add('bg-red');

    elRef.nativeElement.appendChild(novaDiv);
  }
}
