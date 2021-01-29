import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TalepSatis } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-satislar',
  templateUrl: './satislar.component.html',
  styleUrls: ['./satislar.component.css'],
})
export class SatislarComponent implements OnInit {
  taleps: TalepSatis[] = [];

  constructor(private talepService: SatisTalepService, private router:Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }

    this.talepService.satisListele().subscribe((talepler) => {
      this.taleps = talepler;
    });
  }
}
