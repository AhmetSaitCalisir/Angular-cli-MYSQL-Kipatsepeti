import { KitapService } from './../../services/kitap.service';
import { Component, OnInit } from '@angular/core';
import { Kitap } from 'src/app/models/Kitap';

@Component({
  selector: 'app-kitap-guncelle',
  templateUrl: './kitap-guncelle.component.html',
  styleUrls: ['./kitap-guncelle.component.css'],
})
export class KitapGuncelleComponent implements OnInit {
  kitap: Kitap = new Kitap(
    0,
    'Güncellenecek',
    'Güncellenecek',
    'Güncellenecek',
    0,
    0,
    'Güncellenecek',
    'Güncellenecek'
  );

  constructor(private kitapService: KitapService) {}

  ngOnInit(): void {}
  kitapGuncelle() {
    alert('GÜNCELLEDİN');
  }
}
