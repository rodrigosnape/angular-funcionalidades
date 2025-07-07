import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  @HostListener('click') onClick(){
    console.log('clicou');
  }

  //Tem que estar dentro das aspas
  //Segundo parâmetro '"Meu Argumento"' quase nunca é necessário. 
  // Só está aqui para demonstração
  @HostListener('keyup',['$event','"Meu Argumento"']) 
  onKeyUp(event: KeyboardEvent, param2:string){
    //console.log('digitou',event);
    //console.log('param2',param2);

    const fullText = (event.target as HTMLInputElement).value;

    console.log(fullText);
  }
}
