import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  private readonly _httpClient = inject(HttpClient);

  promiseSimples(){
    return new Promise( (resolve, reject) => {{
      console.log('Promise Simples');
      //resolve('Promise Resolved');

      const interval = setInterval(() =>{
        console.log('setInterval');
        resolve('Promise Resolved');
        clearInterval(interval);
      }, 1000);
      console.log('Final Promise')
    }})
  }

  promiseRejected(){
    return new Promise((resolve, reject) => {
      console.log('Promise Reject');

      reject('Ocorreu um erro');

      console.log('Final da Promisse');
    })
  }

  getUsers(){
    return firstValueFrom(this._httpClient.get('https://jsonplaceholder.typicode.com/users'));
  }
  getTodos(){
    return firstValueFrom(this._httpClient.get('https://jsonplaceholder.typicode.com/todos'));
  }
  getUserTodos(userId: number){
    return firstValueFrom(this._httpClient.get('https://jsonplaceholder.typicode.com/todos?userId=' + userId));
  }

  getUsersFirstValueFrom(){
    //recebe o primeiro valor e já faz o unsubscribe
    return firstValueFrom(this._httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((usersListResponse: any) => {
        return usersListResponse[0];
      })
    ));
  }

  getPromiseInterval(){
    return firstValueFrom(
      new Observable((observer) => {
        const interval = setInterval(() => {
          console.log('Interval');
          observer.next('valor emitido');
        }, 1000);
        //é chamado quando é finalizado
        return () => {
          clearInterval(interval);
          console.log('finalizado');
        }
    }))
  }

}
