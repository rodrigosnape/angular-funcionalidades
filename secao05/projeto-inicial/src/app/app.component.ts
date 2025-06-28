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

  widthButton1 = '110px';
  widthButton2 = '130';
  backgroundColorButton1 = 'blue';
  stylesObj = {width:'160px', backgroundColor: 'gray'}

  

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

  updateStyleObj(){
    //Não alerta o Angular pra atualizar o html
    this.stylesObj.width = '170px';
  }

  updateStyleObjCorrect() {
    //Alerta o Angular pra atualizar o html
    //Ele tem que receber um novo objeto !!!
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    };
  }

  updateWidth(){
    this.widthButton2 = '200';
  }
}
