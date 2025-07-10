import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: {'class': 'ca-c-card__app-card-header'}
})
export class CardHeaderDirective {}
