import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bayi } from '../models/Bayi';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BayiService {
  bayiUrl: string = 'http://localhost:3545/bayiler';
  constructor(private http: HttpClient) {}

  bayiEkle(bayi: Bayi): Observable<any> {
    return this.http.post<any>(this.bayiUrl, bayi, httpOptions);
  }
}
