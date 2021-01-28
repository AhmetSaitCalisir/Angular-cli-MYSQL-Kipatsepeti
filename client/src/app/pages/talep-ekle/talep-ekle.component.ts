import { TalepKitaplar } from './../../models/TalepSatis';
import { KitapService } from './../../services/kitap.service';
import { BayiService } from './../../services/bayi.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Bayi } from 'src/app/models/Bayi';
import { Kitap } from 'src/app/models/Kitap';
import { TalepOlustur } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-talep-ekle',
  templateUrl: './talep-ekle.component.html',
  styleUrls: ['./talep-ekle.component.css'],
})
export class TalepEkleComponent implements OnInit {
  bayi: Bayi = new Bayi(
    0,
    'Bayi Bulunamadı',
    'Bayi Bulunamadı',
    'Bayi Bulunamadı',
    'Bayi Bulunamadı',
    'Bayi Bulunamadı',
    'Bayi Bulunamadı',
    'Bayi Bulunamadı'
  );

  eklenecekKitap: Kitap = new Kitap(0, '', '', '', 0, 0, '', '');
  eklenecekKitapAdet: number = 0;
  toplamFiyat: number = 0;
  talep: TalepOlustur = new TalepOlustur(0, '0', []);
  eklenenKitaplar: Kitap[] = [];

  kitaplar: Kitap[] = [];

  constructor(
    private bayiService: BayiService,
    private route: ActivatedRoute,
    private router: Router,
    private kitapService: KitapService,
    private talepService: SatisTalepService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bayi.id = params['id'];
    });
    this.bayiService.bayiListele().subscribe((bayiler) => {
      bayiler.forEach((bayi) => {
        if (bayi.id == this.bayi.id) {
          this.bayi = bayi;
          this.talep.bayi_id = bayi.id;
        }
      });
    });
    this.kitapService.kitapGetir().subscribe((kitaplar) => {
      this.kitaplar = kitaplar;
    });
  }

  ekle() {
    this.toplamFiyat += this.eklenecekKitap.fiyat * this.eklenecekKitapAdet;
    this.talep.fiyat = this.toplamFiyat.toString();
    let kitap = new TalepKitaplar(
      this.eklenecekKitapAdet,
      this.eklenecekKitap.id
    );
    this.talep.kitaplar.push(kitap);
    this.eklenenKitaplar.push(this.eklenecekKitap);
    this.eklenecekKitapAdet = 0;
  }

  olustur() {
    this.talepService.talepOlustur(this.talep).subscribe((res) => {
      alert('Talep oluşturuldu');
      this.router.navigate(['/talepler']);
    });
  }
}
