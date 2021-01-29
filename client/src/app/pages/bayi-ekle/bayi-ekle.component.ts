import { BayiService } from './../../services/bayi.service';
import { Component, OnInit } from '@angular/core';
import { Bayi } from 'src/app/models/Bayi';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bayi-ekle',
  templateUrl: './bayi-ekle.component.html',
  styleUrls: ['./bayi-ekle.component.css'],
})
export class BayiEkleComponent implements OnInit {
  bayi: Bayi = new Bayi(0, '', '', '', ' ', '', '', '');
  constructor(private bayiService: BayiService,private router:Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }
  }

  bayiEkle() {
    this.bayiService.bayiEkle(this.bayi).subscribe((res) => {
      alert(res);
    });
  }
}
