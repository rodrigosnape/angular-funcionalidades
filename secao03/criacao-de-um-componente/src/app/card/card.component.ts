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
  //Separa o componente do resto. Como se fosse um iframe
  //o Componente não pega mais css global
  //Mas esse componente passa a afetar os filhos sem o ::ng-deep
  //É como se esse componemte fosse GLOBAL para os filhos
  encapsulation: ViewEncapsulation.ShadowDom
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
