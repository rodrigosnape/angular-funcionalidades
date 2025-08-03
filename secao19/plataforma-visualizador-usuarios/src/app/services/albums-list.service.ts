import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsListServices {
    private readonly _http = inject(HttpClient);

    getUserAlbums(userId: string):Observable<AlbumsListServices> {
        return this._http.get<AlbumsListServices>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    }   
}
