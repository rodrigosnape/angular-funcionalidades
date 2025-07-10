import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: {'class': 'ca-c-card__header'}
})
export class CardHeaderDirective {
  @Input()
    @HostBinding('class') color: string = '';
}
