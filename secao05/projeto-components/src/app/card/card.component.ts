import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //Alias, opcional, para o nome da propriedade
  @Input('planTypeAlias') planType: string = '';
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

  buttonClicked(event: boolean) {
    console.log('Botão clicado no card!', event);
  }
}
