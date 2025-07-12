import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserResponse } from "../Interfaces/user-response.interface";
import { Observable, of } from "rxjs";
import { UsersListResponse } from "../types/users-list-response.type";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private readonly _http: HttpClient){

    }
    // Escolha óbvia e simples
/*  getUsers(): Observable<IUserResponse[]>{
           return this._http.get<IUserResponse[]>(`https://jsonplaceholder.typicode.com/users`);
    } */

    //Escolha sofisticada e com um tipo customziado (frescura?!)
    getUsers(): Observable<UsersListResponse>{
           return this._http.get<UsersListResponse>(`https://jsonplaceholder.typicode.com/users`);

           //Cria um observable. Feito para provar que não precisa SEMPRE vir de uma chamada http
/*            return of([{
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
                }]); */
    }

    getUserById(userId: number): Observable<IUserResponse>{
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}