import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly _httpClient: HttpClient) { }

  //Array de objetos com a proprietade name do tipo string
  getUsers():Observable<{ name:string }[]>{
    return this._httpClient.get<{ name:string }[]>('https://jsonplaceholder.typicode.users')
  }
}
