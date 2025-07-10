import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
    host: {'class': 'ca-c-card__app-card-content'}
})
export class CardContentDirective {}
