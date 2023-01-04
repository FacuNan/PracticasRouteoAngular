import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Results } from '../models/randomUser.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }


  obtenerUsuarioAleatorio(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2),
      catchError(this.handldeError));
  }

  handldeError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`${error.error}`)
    } else {
      console.error(`${error.status} ${error.error}`)
    }
    return throwError(() => new Error('Algo salio mal'))
  }



  obtenerRandomContacts(n: number, sexo?:string) :Observable<Results>{
   let params: HttpParams = new HttpParams().set('results', n);
    if(sexo){
      console.log('filtrado por mujer y hombre')
      
      params = params.append('gender', sexo)
    }
    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2),
      catchError(this.handldeError));

    
  }
  obtenerContactoGenero(n: number, sexo: string):Observable<Results> {
    const params: HttpParams = new HttpParams().set('gender',sexo)
    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2),
      catchError(this.handldeError));
  }
}