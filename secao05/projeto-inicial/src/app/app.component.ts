import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text"
  isDisabled = false;

  buttonTitle = 'Título do Botão';
  buttonDisable = true;

  

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log('Texto:', currentText);
  }

  //Tem que ser o Event e não o InputEvent
  // Peculiaridades do Angular...
  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log('Input:', currentText);
  }

  onButtonClick() {
    this.buttonTitle = 'Título Alteradooooooooo';
    this.buttonDisable = !this.buttonDisable;
  }
}
