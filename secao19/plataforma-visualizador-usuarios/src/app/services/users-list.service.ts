import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersListResponse } from "../types/users-list-response";

@Injectable({
    providedIn: 'root'
})
export class UserListService {
    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users');
    }
}