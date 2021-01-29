import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  kisi: string | null = '';
  soyad: string | null = '';
  ngOnInit(): void {
    this.kisi = localStorage.getItem('isLogged');
    this.soyad = localStorage.getItem('soyAd');
  }
  git() {
    this.router.navigate(['/']);
  }

  logOut() {
    localStorage.removeItem('isLogged');
    alert('Cikis yaptiniz.');
    window.location.reload();
  }
}
