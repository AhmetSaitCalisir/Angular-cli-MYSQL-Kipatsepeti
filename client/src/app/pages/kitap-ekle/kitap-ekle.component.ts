import { KitapService } from './../../services/kitap.service';
import { Component, OnInit } from '@angular/core';
import { Kitap } from 'src/app/models/Kitap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitap-ekle',
  templateUrl: './kitap-ekle.component.html',
  styleUrls: ['./kitap-ekle.component.css'],
})
export class KitapEkleComponent implements OnInit {
  kitap: Kitap = new Kitap(0, '', '', '', 0, 0, '', '');

  constructor(private kitapService: KitapService, private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }
  }
  kitapEkle() {
    this.kitapService.kitapEkle(this.kitap).subscribe((res) => {
      console.log(res);
      alert('Kitap Eklendi');
    });
  }
}
