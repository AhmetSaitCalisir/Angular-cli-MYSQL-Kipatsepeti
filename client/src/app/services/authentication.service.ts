import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Kullanici } from '../models/Kullanici';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authUrl: string = 'http://localhost:3545/auth';
  constructor(private http: HttpClient) {}

  // kaydol-add kullanıcı
  addUser(user: Kullanici): Observable<boolean> {
    const url = `${this.authUrl}/signin`;
    return this.http.post<boolean>(url, user, httpOptions);
  }

  // login
  login(user: Kullanici): Observable<boolean> {
    const url = `${this.authUrl}/login`;
    console.log(user);
    return this.http.post<boolean>(url, user, httpOptions);
  }
}
