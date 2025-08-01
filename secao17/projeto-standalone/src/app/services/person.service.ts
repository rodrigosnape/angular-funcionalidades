import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    subscribe(log: { (...data: any[]): void; (message?: any, ...optionalParams: any[]): void; }) {
      throw new Error('Method not implemented.');
    }
    getPerson(){
        return of ({
            nome: 'Rodrigo Veiga',
            email: 'contato@rodrigoveiga.com.br'
        })
    }
}