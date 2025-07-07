import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  //Inútil, pois vai gerar o atributo disabled que vai desabilitar o botão independentemente de true ou false
  //@HostBinding('attr.disabled')  attrDisabled = 'false';

  //Jeito certo
  @HostBinding('disabled')  propDisabled = false;


  

}
