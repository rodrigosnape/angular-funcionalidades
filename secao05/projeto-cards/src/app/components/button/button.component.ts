import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true, alias: 'text'}) buttonText: string = 'Clique aqui!';
  @Input({required: true, alias: 'style'}) buttonStyle: 'white' | 'purple' = 'white';

  @Input({alias:'disabled'}) isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmmit = new EventEmitter<void>();

  onButtonClicked() {
    console.log('Botão clicado!');
    this.buttonClickedEmmit.emit();
  }

}
