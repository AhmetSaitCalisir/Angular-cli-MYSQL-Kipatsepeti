import { Bayi } from 'src/app/models/Bayi';
import { BayiService } from './../../services/bayi.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bayi-guncelle',
  templateUrl: './bayi-guncelle.component.html',
  styleUrls: ['./bayi-guncelle.component.css'],
})
export class BayiGuncelleComponent implements OnInit {
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
  constructor(
    private bayiService: BayiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bayi.id = params['id'];
    });
    this.bayiService.bayiListele().subscribe((bayiler) => {
      bayiler.forEach((bayi) => {
        if (bayi.id == this.bayi.id) {
          this.bayi = bayi;
        }
      });
    });
  }
  bayiGuncelle() {
    this.bayiService.bayiGuncelle(this.bayi).subscribe((res) => {
      alert('Bayi Güncellendi');
      this.router.navigate(['/bayiler']);
    });
  }
}
