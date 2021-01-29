import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bayi } from 'src/app/models/Bayi';
import { BayiService } from 'src/app/services/bayi.service';

@Component({
  selector: 'app-bayiler',
  templateUrl: './bayiler.component.html',
  styleUrls: ['./bayiler.component.css'],
})
export class BayilerComponent implements OnInit {
  bayiler: Bayi[] = [];
  constructor(private bayiService: BayiService,private router:Router) {}

  ngOnInit(): void {

    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }
    this.bayiService.bayiListele().subscribe((bayis) => {
      this.bayiler = bayis;
    });
  }
}
