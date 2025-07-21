import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Rodrigo Veiga';

  onChange(text: string) {
    console.log(text);
  }

  onClick() {
    console.log(this.nome);
  }
}
