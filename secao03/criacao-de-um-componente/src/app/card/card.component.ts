import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano{
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //Emulated é o default do angular
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
  // @ts-ignore
  plano: IPlano = {
    infos:{
     tipo: "Simples",
     preco: 100
    }
  }
}
