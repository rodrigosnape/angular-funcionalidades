import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required : true}) planType: string = '';
  @Input({required : true}) planPrice: number = 0;

  @Input({required : true}) cardStyle: 'orange' | 'purple' = 'orange';
  
  @Output('buttonClicked') buttonClickedEmmit = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmmit.emit();
    console.log('Card - Botão clicado!');
  }
}
