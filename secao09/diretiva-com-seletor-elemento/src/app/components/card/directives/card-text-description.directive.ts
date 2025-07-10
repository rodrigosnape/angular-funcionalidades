import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-description, [appCardTextDescription]',
  host: {'class': 'ca-u-card-text-description'}
})
export class CardTextDescriptionDirective {

}
