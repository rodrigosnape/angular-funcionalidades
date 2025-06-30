import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //Alias, opcional, para o nome da propriedade
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;
  
  private _planType: string = '';
  
  @Input('planTypeAlias') set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  buttonClicked(event: boolean) {
    console.log('Botão clicado no card!', event);
    console.log('planType:', this.planType);
  }
}
