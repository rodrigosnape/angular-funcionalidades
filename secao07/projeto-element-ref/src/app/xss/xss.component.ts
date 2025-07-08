import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss']
})
export class XssComponent {

  constructor(
    private readonly _elRef:ElementRef,
    private readonly _renderer2: Renderer2
  
  ){}

  createElement(inputText:string){
    console.log(inputText);

    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;

    //Tem a referência global
    this._elRef.nativeElement.appendChild(divEl);
  }

  createElementCorrect(inputText:string){
    const divEl = this._renderer2.createElement('div');

    const text = this._renderer2.createText(inputText);

    this._renderer2.appendChild(divEl, text);
    this._renderer2.setStyle(divEl, 'color', 'orange');
    this._renderer2.addClass(divEl, 'bg-red');
    //Tem a referência do contexto do conponente
    this._renderer2.appendChild(this._elRef.nativeElement, divEl);
  }
}
