import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component {
  nome = 'Felipe';

  onChange(text: string) {
    console.log(text);
  }

  onClick() {
    console.log(this.nome);
  }
}
