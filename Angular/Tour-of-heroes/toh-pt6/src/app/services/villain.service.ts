import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Villain } from '../interfaces/villain';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class VillainService {

  private villainsUrl = 'api/villains';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getVillains(): Observable<Villain[]> {
    return this.http.get<Villain[]>(this.villainsUrl)
      .pipe(
        tap(_ => this.log('fetched villains')),
        catchError(this.handleError<Villain[]>('getVillains', []))
      );
  }

  getVillainNo404<Data>(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/?id=${id}`;
    return this.http.get<Villain[]>(url)
      .pipe(
        map(villains => villains[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} villain id=${id}`);
        }),
        catchError(this.handleError<Villain>(`getVillain id=${id}`))
      );
  }

  getVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get<Villain>(url).pipe(
      tap(_ => this.log(`fetched villain id=${id}`)),
      catchError(this.handleError<Villain>(`getVillain id=${id}`))
    );
  }

  searchVillains(term: string): Observable<Villain[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Villain[]>(`${this.villainsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found matching "${term}"`) :
         this.log(`no matching "${term}"`)),
      catchError(this.handleError<Villain[]>('searchVillains', []))
    );
  }

  ///////////////////////////////////////

  addVillain(villain: Villain): Observable<Villain> {
    villain.color = "#E0E0E0";
    return this.http.post<Villain>(this.villainsUrl, villain, this.httpOptions).pipe(
      tap((newVillain: Villain) => this.log(`added villain w/ id=${newVillain.id}`)),
      catchError(this.handleError<Villain>('addVillain'))
    );
  }

  deleteVillain(villain: Villain | number): Observable<Villain> {
    const id = typeof villain === 'number' ? villain : villain.id;
    const url = `${this.villainsUrl}/${id}`;

    return this.http.delete<Villain>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted villain id=${id}`)),
      catchError(this.handleError<Villain>('deleteVillain'))
    );
  }

  updateVillain(villain: Villain): Observable<any> {
    return this.http.put(this.villainsUrl, villain, this.httpOptions).pipe(
      tap(_ => this.log(`updated villain id=${villain.id}`)),
      catchError(this.handleError<any>('updateVillain'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`VillainService: ${message}`);
  }

}
