import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map, retry, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Car} from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _httpClient: HttpClient) { }

  getCarData(): Observable<Car[]> {
    return this._httpClient.get('https://kd-cars-api.herokuapp.com/kdCars').pipe(
      map( data => {
          return Object.values(data)[0];
      }),
      retry(2),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
