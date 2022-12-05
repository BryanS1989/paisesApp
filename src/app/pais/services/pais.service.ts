import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    get httpParams() {
        return new HttpParams().set('fields', 'flags,name,population,capital,cca2');
    }

    constructor(private http: HttpClient) { }


    buscarPais(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${termino}`;

        console.log("[PaisService] [buscarPais()] url: ", url);

        return this.http.get<Country[]>(url, { params: this.httpParams });
        /*
        .pipe(
            // También podríamos retornar un Observable, p.e. un observable de array vacío
            catchError((err) => of([]))
        );
        */
    }

    buscarCapital(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${termino}`;

        console.log("[PaisService] [buscarCapital()] url: ", url);

        return this.http.get<Country[]>(url, { params: this.httpParams });

    }

    getPaisPorAlpha(id: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha/${id}`;

        console.log("[PaisService] [getPaisPorAlpha()] url: ", url);

        return this.http.get<Country[]>(url);

    }

    getPaisesPorRegion(region: string): Observable<Country[]> {
        // const url = `${this.apiUrl}/region/${region}?fields=flags,name,population,capital,cca2`;
        // const httpParams: HttpParams = new HttpParams().set('fields', 'flags, name, population, capital, cca2');
        const url = `${this.apiUrl}/region/${region}?`;

        console.log("[PaisService] [getPaisesPorRegion()] url: ", url);

        return this.http.get<Country[]>(url, { params: this.httpParams })
            .pipe(
                tap(console.log)
            );

    }
}
