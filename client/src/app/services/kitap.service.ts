import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kitap } from '../models/Kitap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class KitapService {
  kitapUrl: string = 'http://localhost:3545/kitaplar';
  constructor(private http: HttpClient) {}

  kitapEkle(kitap: Kitap): Observable<any> {
    kitap.fiyat = Number(kitap.fiyat);
    kitap.yil = Number(kitap.yil);
    return this.http.post<any>(this.kitapUrl, kitap, httpOptions);
  }
}
