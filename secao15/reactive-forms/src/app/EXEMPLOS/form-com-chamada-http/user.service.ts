import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    getUser(): Observable<any> {
        return of ({
            nome: "Rodrigo Veiga",
            idade: 44,
            ativo: true,
            endereco: {
                rua: 'Casa Verde',
                numero: '00'
            } ,
            telefones: [
                {
                    numero: 21999995555,
                    ddd: 21,
                } ,
                {
                    numero: 21444447777,
                    ddd: 11,
                } ,
            ]
        });
    }
}