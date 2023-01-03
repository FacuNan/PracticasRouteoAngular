import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }


  obtenerUsuarioAleatorio(): Observable<any> {
    return this.http.get('https://randomuser.me/api');
  }

  obtenerRandomContacts(n: number): void {

  }

}