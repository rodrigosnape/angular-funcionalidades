import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly _httpCLient = inject(HttpClient);

    login(username: string, password: string): Observable<{token: string}>{
        return this._httpCLient.post<{token: string}>('https://localhost:3000/login', {username, password}).pipe(
            map(resp => {
                localStorage.setItem('access-token', resp.token)

                return resp;
            })
        );
    }

    verifyToken(): Observable<{ valid: boolean, user: string }>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return this._httpCLient.get<{ valid: boolean, user: string }>('https://localhost:3000/verify-token', { headers });
    }

    getUserScopes(): string[]{
        const token = localStorage.getItem('acess-token');

        if(!token){
            return [];
        }

        const decoded: any = jwtDecode(token);

        return decoded.scopes;
    }
}