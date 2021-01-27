import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TalepSatis } from '../models/TalepSatis';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SatisTalepService {
  talepUrl: string = 'http://localhost:3545/satistalep';

  constructor(private http: HttpClient) {}

  //talep listele
  talepListele(): Observable<TalepSatis[]> {
    return this.http.get<TalepSatis[]>(this.talepUrl);
  }
}
