import { Component, Input, numberAttribute } from '@angular/core';

function handlePlanType(value: string): string {
  console.log('handlePlanType:', value);
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //numberAttribute é usado para converter o valor de entrada em um número
  @Input({required: true, alias: 'planPriceAlias', transform: numberAttribute}) planPrice: number = 0;
  @Input({alias: 'planType', transform: (value:string) => handlePlanType(value) }) planType: string = '';

  buttonClicked(event: boolean) {
    console.log('Botão clicado no card!', event);
    console.log('planType:', this.planType);
  }
}
