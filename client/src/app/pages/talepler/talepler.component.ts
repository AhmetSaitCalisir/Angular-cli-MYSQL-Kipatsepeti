import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TalepSatis } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-talepler',
  templateUrl: './talepler.component.html',
  styleUrls: ['./talepler.component.css'],
})
export class TaleplerComponent implements OnInit {
  taleps: TalepSatis[] = [];

  constructor(
    private talepService: SatisTalepService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }

    this.talepService.talepListele().subscribe((talepler) => {
      this.taleps = talepler;
    });
  }
}
