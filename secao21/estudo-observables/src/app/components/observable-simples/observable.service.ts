import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  obsSimples(){

    //Igual ao de baixo
    //return of('Obs Simples');

    return new Observable<string>((observer) => {
      console.log('Obs Simples');
      observer.next('Obs Simples 1');
      observer.next('Obs Simples 2');
      observer.next('Obs Simples 3');
    });
  }
}
