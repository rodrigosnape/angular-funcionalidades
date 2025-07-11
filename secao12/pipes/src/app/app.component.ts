import { Component, OnInit } from '@angular/core';

export enum UserStatusEnum {
    ATIVO = 1,
    INATIVO = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  pessoa = {
    nome: 'Rodrigo Veiga',
    idade: 44,
    status: UserStatusEnum.ATIVO,
  }

  //horário do UTC 0 (Z)
  minhaData:string = '2023-10-21T21:00:00.000Z';

  //horário da "minha" regição (sem o Z)
  //minhaData:string = '2023-10-21T21:00:00.000';

  minhaDataObj: Date = new Date(this.minhaData);

  ngOnInit() {
    console.log('Data convertida para região', new Date(this.minhaData));
    console.log('Data UTC-0', new Date(this.minhaData).toUTCString());
    
    console.log('Timestamp', new Date(this.minhaData).getTime());

    console.log('Obj',this.minhaDataObj);
  }
}