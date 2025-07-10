import { Directive, HostBinding, Input } from '@angular/core';
//Sem os [] o seletor vira de Elemento e não de atributo

@Directive({
  selector: 'app-card-text-subtitle, [appCardTextSubtitle]',
  host: {'class': 'ca-u-card-text-subtitle'}
})
export class CardTextSubtitleDirective {
  //@HostBinding dentro de @Input? Eita...
  @Input() 
    @HostBinding('style.color') color: string = '';
}
