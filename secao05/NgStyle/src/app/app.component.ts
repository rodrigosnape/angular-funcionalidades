import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 24;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';

  stylesString: string = 'font-size: 24px; color: white;';
  stylesObj = {
  'font-size': this.fontSize + 'px',
  'color': this.textColor,
  }

  increaseFontSize() {
    this.fontSize += 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  toggleFontColor(){
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }

     this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }
}
