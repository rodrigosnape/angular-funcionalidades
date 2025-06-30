import { Component, Output, EventEmitter, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  // booleanAttribute é usado para converter o valor de entrada em um booleano
  // Se o valor for uma string, ele será convertido para booleano
  @Input({ transform: booleanAttribute}) buttonDisabled: boolean = false;

  // Também pode ter Alias
  //@Output('buttonClick') = new EventEmitter<boolean>();
  @Output() buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('Botão clicado!');
    this.buttonClickEmitter.emit(true);
  }
}