import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

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

}
