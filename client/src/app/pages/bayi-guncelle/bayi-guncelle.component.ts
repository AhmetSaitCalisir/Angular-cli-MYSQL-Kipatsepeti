import { BayiService } from './../../services/bayi.service';
import { Bayi } from './../../models/Bayi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bayi-guncelle',
  templateUrl: './bayi-guncelle.component.html',
  styleUrls: ['./bayi-guncelle.component.css'],
})
export class BayiGuncelleComponent implements OnInit {
  bayi: Bayi = new Bayi(
    0,
    'Güncellencek Değer',
    'Güncellenecek Değer',
    'Güncellenecek Değer',
    'Güncellenecek Değer',
    'Güncellenecek Değer',
    'Güncellenecek Değer',
    'Güncellenecek Değer'
  );
  constructor(private bayiService: BayiService) {}
  ngOnInit(): void {}
  bayiGuncelle() {
    alert('Güncellendi');
  }
}
