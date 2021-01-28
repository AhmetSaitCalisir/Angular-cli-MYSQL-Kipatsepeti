import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TalepOlustur,
  TalepSatis,
  TalepSatisKitap,
} from '../models/TalepSatis';

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
    return this.http.get<TalepSatis[]>(`${this.talepUrl}/talepler`);
  }

  satisListele(): Observable<TalepSatis[]> {
    return this.http.get<TalepSatis[]>(`${this.talepUrl}/satislar`);
  }

  talepKitapListele(id: number): Observable<TalepSatisKitap[]> {
    return this.http.get<TalepSatisKitap[]>(`${this.talepUrl}/kitaplar/${id}`);
  }

  talepOnayla(id: number): Observable<any> {
    return this.http.put<any>(
      `${this.talepUrl}/onayla/${id}`,
      { id: id },
      httpOptions
    );
  }

  talepOlustur(talep: TalepOlustur): Observable<any> {
    return this.http.post<any>(`${this.talepUrl}/talepler`, talep, httpOptions);
  }
}
