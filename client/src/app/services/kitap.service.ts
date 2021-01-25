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

  //kitap listele
  kitapGetir(): Observable<Kitap[]> {
    return this.http.get<Kitap[]>(this.kitapUrl);
  }

  kitapEkle(kitap: Kitap): Observable<any> {
    kitap.fiyat = Number(kitap.fiyat);
    kitap.yil = Number(kitap.yil);
    return this.http.post<any>(this.kitapUrl, kitap, httpOptions);
  }

  //delete book
  bookDelete(book: Kitap): Observable<Kitap> {
    const url = `${this.kitapUrl}/${book.id}`;
    return this.http.delete<Kitap>(url, httpOptions);
  }
}
