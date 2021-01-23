import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kitap } from '../models/Kitap';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class KitapService {
  constructor(private firebaseService: FirebaseService) {}

  Kitaplar = this.firebaseService.db().ref('Kitaplar');

  /*kitapGetir() : Observable<Kitap[]>{
    this.Kitaplar.on("value", (snapshot) => {
      return <Kitap[]>snapshot.val();
    });
  }*/
}
