import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicou(input: HTMLInputElement){
    console.log(input.value);

    input.value = 'Valor atualizado!';
  }
}

const funcaoPai = () => {
  let pai = 'Pai';

  const funcaoFilha = () => {
    let filha = 'Filha';

    pai = 'Pai atualizado!';
    console.log(pai, filha);

    const funcaoNeto = () =>{
      filha = 'Filha atualizada!';
      pai = 'Pai atualizado novamente!';
    }
  }
}
