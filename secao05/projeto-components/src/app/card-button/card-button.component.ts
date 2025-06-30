import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  // Também pode ter Alias
  //@Output('buttonClick') = new EventEmitter<boolean>();
  @Output() buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('Botão clicado!');
    this.buttonClickEmitter.emit(true);
  }
}