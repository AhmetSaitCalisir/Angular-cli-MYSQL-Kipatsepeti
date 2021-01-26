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

  //bayiListele
  bayiListele(): Observable<Bayi[]> {
    return this.http.get<Bayi[]>(this.bayiUrl);
  }

  //delete bayi
  bayiSil(bayi: Bayi): Observable<Bayi> {
    const url = `${this.bayiUrl}/${bayi.id}`;
    return this.http.delete<Bayi>(url, httpOptions);
  }

  bayiGuncelle(bayi: Bayi): Observable<any> {
    const url = `${this.bayiUrl}/${bayi.id}`;
    return this.http.put<any>(url, bayi, httpOptions);
  }
}
