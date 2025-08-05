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

  obsInterval(){
    return new Observable((observer) => {
      console.log('obsInterval');

      const interval = setInterval(() => {
        console.log('setInterval');
        observer.next('obsInterval');
      }, 2000);

      return () => {
        console.log('Limpeza');
        observer.complete();
        clearInterval(interval);
      }
    })
  }
}
