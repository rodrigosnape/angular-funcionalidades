import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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

}
