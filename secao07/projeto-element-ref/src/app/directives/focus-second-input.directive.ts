import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit{

  //HostBinding para casos mais 'simples'
  //@HostBinding('style.backgroundColor') bgColor = 'blue';
  //@HostBinding('textContent') text = 'Sou uma DIV!';

  //ElementRef é para casos mais completos
  constructor(private _elRef: ElementRef){}

  ngAfterViewInit(){
    //console.log(this._elRef);

    //vai retornar um array com todos os elementos sendo HTMLInputElement
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    //console.log(inputList);

    if(inputList.length > 1){
      //inputList[1].value = 'é essa';
      //tem que clicar no navegador para ver o focus :)
      inputList[1].focus();
    }
  }
}
