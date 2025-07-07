import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  //Não é recomendado
  //@HostBinding('attr.style') attrStyle = 'background-color: orange; color:white;';


  //Recomendado!!! Faz a mesma coisa só que melhor
  //@HostBinding('style') propStyle = 'background-color: orange; color:white;';

  //@HostBinding('style') propStyle = {backgroundColor: 'orange', color:'white'};

  //Indo no mano a mano... muito trabalhoso
  @HostBinding('style.backgroundColor') bgColor = 'orange';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.fontSize.px') size = 40;
}
