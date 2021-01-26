import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Talep } from '../models/Talep';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})


export class SatisTalepService {

talepUrl: string='http://localhost:3545/satistalep'

  constructor(private http:HttpClient) {}
  

  //talep listele
  talepListele():Observable<Talep[]>{
    return this.http.get<Talep[]>(this.talepUrl);
  }
}
