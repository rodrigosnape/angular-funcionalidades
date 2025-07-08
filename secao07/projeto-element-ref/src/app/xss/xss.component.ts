import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss']
})
export class XssComponent {

  constructor(private readonly _elRef:ElementRef){}

  createElement(inputText:string){
    console.log(inputText);

    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divEl);
  }
}
