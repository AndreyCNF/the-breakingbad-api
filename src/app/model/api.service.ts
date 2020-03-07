
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Personagens } from './Personagens';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
const API_URL = 'https://www.breakingbadapi.com/api/characters'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPersonagens() : Observable<Personagens[]> {
    return this.http.get<Personagens[]>(API_URL)
              .pipe(tap(personagens => console.log(personagens)),
              catchError(this.handleError('getPersonagens', []))
              );
  }

  getPersonagensById(id: number): Observable<Personagens[]> {
    const url = `${API_URL}/${id}`
    return this.http.get<Personagens[]>(url).
    pipe(tap(personagensId => console.log(personagensId)),
    catchError(this.handleError<Personagens[]>(`getPersonagensById id=${id}`))
    );
  }
      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
          console.log(error);
  
          return of(result as T);
        }
      }
}
