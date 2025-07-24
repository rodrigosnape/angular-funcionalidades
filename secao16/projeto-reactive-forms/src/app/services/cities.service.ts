import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CitiesService {
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    getCities(countryName: string, stateName: string) {
        return this._httpClient
            .post<any>(
                'https://countriesnow.space/api/v0.1/countries/state/cities',
                {
                    country: countryName,
                    state: stateName,
                }
            ).pipe(
                map((citiesResponse) => {
                    return citiesResponse.data;
                }),
            );
    }
}