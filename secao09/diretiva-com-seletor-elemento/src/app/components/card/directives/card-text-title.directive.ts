import { Directive } from '@angular/core';

//Sem os [] o seletor vira de Elemento e não de atributo
@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]',
  host: {'class': 'ca-u-card-text-title'}
})
export class CardTextTitleDirective {


}
