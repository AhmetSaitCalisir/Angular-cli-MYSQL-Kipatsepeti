import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Kullanici } from '../models/Kullanici';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  authUrl:string='http://localhost:3545/auth';
  constructor(private http:HttpClient) { }

  //kaydol-add kullanıcı
addUser(user:Kullanici):Observable<Kullanici>{
  const url=`${this.authUrl}/signin`
  return this.http.post<Kullanici>(url,user,httpOptions)
}
}
