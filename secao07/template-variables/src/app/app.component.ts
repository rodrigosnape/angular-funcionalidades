import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  buttonList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ]

  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>

  ngAfterViewInit(){
    console.log(this.buttonsEl);

    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro);

    primeiro.nativeElement.style.backgroundColor = 'blue';

    //changes é quando a estrutura muda e NÃO a propriedade do botão
    //se mudar a cor, por exemplo, o changes não é chamado.
    this.buttonsEl.changes.subscribe((result) => {
      console.log('result',result);
    })
  }

  changeColor(event:Event){
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';

  }

  resetButtons(){
    this.buttonsEl.forEach((btnEl) => {
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    })
  }

  first(){
    //const primeiro = this.buttonsEl.get(0);

    //const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

    const primeiro = this.buttonsEl.toArray()[0];

     console.log(primeiro);
  }

  remove(){
    this.buttonList.shift();
  }
}
